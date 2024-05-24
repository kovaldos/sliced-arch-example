export const useBettingModals = () => {
  const showBetsLoadingFailedErrorModal = (err: any) => {
    console.log(err)
  }

  return {
    showBetsLoadingFailedErrorModal
  }
}
