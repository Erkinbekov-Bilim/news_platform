export const getLoadingStateItem = <T extends {id: string | number}>(
  loadingState: boolean,
  idLoadingItem: string | number | null,
  obj: T,
): boolean => {
  if (loadingState && idLoadingItem) {
    if (idLoadingItem === obj.id) {
      return loadingState;
    }
  }

  return false;
};
