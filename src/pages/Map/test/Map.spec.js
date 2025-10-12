import { mount } from '@vue/test-utils'
import Maps from '@/pages/Map/Map.vue'

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('Maps.vue', () => {
  let wrapper

  const maps = [
    {
      title: 'Старый город',
      description: 'Карта Старого города Харрана, включая безопасные зоны, задания и тайники.',
      src: 'https://mapgenie.io/dying-light/maps/old-town?embed=light',
      id: 'map2'
    },
    {
      title: 'Слумы',
      description: 'Карта Слумов с отмеченными локациями для сбора ресурсов и выполнения заданий.',
      src: 'https://mapgenie.io/dying-light/maps/slums?embed=light',
      id: 'map3'
    },
    {
      title: 'Антенна',
      description: 'Карта района Антенна с ключевыми точками и опасными зонами.',
      src: 'https://mapgenie.io/dying-light/maps/antenna?embed=light',
      id: 'map4'
    },
    {
      title: 'Пригород',
      description: 'Карта Пригорода, включая новые районы и дополнительные ресурсы.',
      src: 'https://mapgenie.io/dying-light/maps/countryside?embed=light',
      id: 'map5'
    }
  ]

  beforeEach(() => {
    wrapper = mount(Maps, {
      global: {
        stubs: {}
      }
    })
  })

  it('рендерит заголовок страницы', () => {
    const firstCard = wrapper.findComponent({ name: 'VCard' })
    expect(firstCard.text()).toContain('Интерактивные карты Харрана')
    expect(firstCard.text()).toContain('Изучите ключевые районы города Харран с помощью интерактивных карт')
  })

  it('рендерит все карты из массива', () => {
    const cards = wrapper.findAllComponents({ name: 'VCard' })
    expect(cards.length).toBe(maps.length + 1)
  })

  it('отображает текст и iframe каждой карты', () => {
    const cards = wrapper.findAllComponents({ name: 'VCard' })
    maps.forEach((map, i) => {
      const card = cards[i + 1]
      expect(card.text()).toContain(map.title)
      expect(card.text()).toContain(map.description)
      const iframe = card.find('iframe')
      expect(iframe.exists()).toBe(true)
      expect(iframe.attributes('src')).toBe(map.src)
    })
  })
})
