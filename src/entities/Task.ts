export default class Task {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly status: "done" | "pending"
  ) {}
}
