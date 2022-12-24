import { renderHook, act } from "../test-utils";
import useCounter from "./useCounter";

describe("useCounter", () => {
  test("default initial count is equal to 0", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
  test("accepts custom initial count", () => {
    const { result } = renderHook(() => useCounter(5));

    expect(result.current.count).toBe(5);
  });
  test("increment by defalut increments count by 1", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
  });
  test("increment accepts custom value to add to the count", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment(5);
      result.current.increment(5);
    });
    expect(result.current.count).toBe(10);
  });
  test("decrement accepts custom value to subtract from the count", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.decrement(5);
      result.current.decrement(5);
    });
    expect(result.current.count).toBe(-10);
  });
});
