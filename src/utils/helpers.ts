export function generateId<Type extends { id: number }>(arr: Type[]): number {
  if (!arr.length) {
    return 1;
  }

  return arr[arr.length - 1].id + 1;
}
