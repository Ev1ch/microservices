export default class State {
  private state = false;

  public isBroken() {
    return this.state;
  }

  public break() {
    this.state = true;
  }
}

export const cuisinesState = new State();
