import sortUsers from '../app';

test('check function sortUsers', () => {
  const users = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ];
  const received = sortUsers(users);
  expect(received).toEqual(expected);
});
