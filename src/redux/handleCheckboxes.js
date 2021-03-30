export const checkCheckboxes = (checkboxes, checkboxID) => {
  switch (checkboxID) {
    case 4:
      checkboxes[0].checked = true;
      return checkboxes;
    case 0:
      checkboxes[1].checked = true;
      return checkboxes;
    case 1:
      checkboxes[2].checked = true;
      return checkboxes;
    case 2:
      checkboxes[3].checked = true;
      return checkboxes;
    case 3:
      checkboxes[4].checked = true;
      return checkboxes;
    default:
      return checkboxes;
  }
};

export const uncheckCheckboxes = (checkboxes, checkboxID) => {
  switch (checkboxID) {
    case 4:
      checkboxes[0].checked = false;
      return checkboxes;
    case 0:
      checkboxes[1].checked = false;
      return checkboxes;
    case 1:
      checkboxes[2].checked = false;
      return checkboxes;
    case 2:
      checkboxes[3].checked = false;
      return checkboxes;
    case 3:
      checkboxes[4].checked = false;
      return checkboxes;
    default:
      return checkboxes;
  }
};
