export const useBettingUtils = () => {
  const modify = (data: any) => {
    return data.map((item: any) => item.id);
  }

  return {
    modify
  }
}
