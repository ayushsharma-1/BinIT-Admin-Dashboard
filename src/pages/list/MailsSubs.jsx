import { MailSubs } from "../../columns/columnData";
import { Datatable } from "../../components/datatable/Datatable";
import "./List.scss";

const List = () => {
  return (
    <div className="records">
      <div className="topbar">
        <div className="recordstext">
          <span>Subscription Records</span>
        </div>
      </div>
      <hr />
      <div className="recordsbody">
        <Datatable
          db="employees"
          columns={MailSubs}
          className="datatable"
        />
      </div>
    </div>
  );
};

export default List;
