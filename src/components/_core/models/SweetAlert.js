class SweetAlert {
  constructor(props) {}
  position = "center";
  icon = "success";
  title = "Successful";
  text = "";
  showConfirmButton = false;
  showCancelButton = false;
  timer = 1500;
}
export class SweetAlertFailure extends SweetAlert {
  constructor(props) {
    super(props);
  }
  icon = "error";
  title = "Failure";
}
export class SweetAlertSuccessful extends SweetAlert {
  constructor(props) {
    super(props);
  }
  icon = "success";
  title = "Successful";
}
export class SweetAlertInfo extends SweetAlert {
  constructor(props) {
    super(props);
  }
  icon = "info";
}

export class SweetAlertQuestion extends SweetAlert {
  constructor(props) {
    super(props);
  }
  icon = "question";
}
