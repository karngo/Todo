import store from '@/store/store.js'

test('store getter should return a list of tasks that user have added', () => {
  expect(store.getters.getTodos).toHaveLength(5)
});