export const checkCheckboxes = (checkboxes, checkboxID) => {
  checkboxes[checkboxID].checked = !checkboxes[checkboxID].checked
  return checkboxes
};

export const uncheckCheckboxes = (checkboxes, checkboxID) => {
  checkboxes[checkboxID].checked = !checkboxes[checkboxID].checked
  return checkboxes
};
