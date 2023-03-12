export default function sortUsers(arr) {
  const sortedUsers = arr.sort((a, b) => (a.health > b.health ? 1 : -1));
  return sortedUsers;
}
