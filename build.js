const fs = require("fs");
const path = require("path");

const srcDir = "src";
const distDir = "dist";
const layoutFile = path.join(srcDir, "layout", "layout.html");
const pagesDir = path.join(srcDir, "pages");

// Копируем CSS и JS
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const file of fs.readdirSync(src)) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (!file.endsWith(".html")) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Собираем страницу через layout
function buildPage(pageFile) {
  const pagePath = path.join(pagesDir, pageFile);
  let layout = fs.readFileSync(layoutFile, "utf8");
  const pageContent = fs.readFileSync(pagePath, "utf8");

  // Универсальный обработчик <include name="..."/>
  const includeRegex = /<include\s+name=["']([^"']+)["']\s*\/>/g;
  layout = layout.replace(includeRegex, (match, name) => {
    if (name === "page-content") {
      return pageContent;
    } else {
      // другие инклюды ищем в layout папке
      const includeFile = path.join(srcDir, "layout", `${name}.html`);
      if (fs.existsSync(includeFile)) {
        return fs.readFileSync(includeFile, "utf8");
      } else {
        console.warn(`⚠️ Не найден include: ${name}`);
        return "";
      }
    }
  });

  fs.writeFileSync(path.join(distDir, pageFile), layout, "utf8");
  console.log(`✅ Собран ${pageFile}`);
}

// Очистка dist
fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

// Копируем CSS и JS
copyDir(path.join(srcDir, "css"), path.join(distDir, "css"));
copyDir(path.join(srcDir, "js"), path.join(distDir, "js"));

// Собираем страницы
for (const file of fs.readdirSync(pagesDir)) {
  if (file.endsWith(".html")) {
    buildPage(file);
  }
}
