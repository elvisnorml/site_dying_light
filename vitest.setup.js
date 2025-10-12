import { config } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { vi } from 'vitest'

const vuetify = createVuetify({ components, directives })
config.global.plugins = [vuetify]

config.global.stubs = {
  VImg: { template: '<img class="v-img" />' },
  VDialog: { template: '<div><slot /></div>' },
  Transition: { template: '<div><slot /></div>' }
}

beforeAll(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => {})
})
afterAll(() => {
  vi.restoreAllMocks()
})
