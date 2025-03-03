
import { ReportColumns } from "../../columns/columnData";
import { Datatable } from "../../components/datatable/Datatable";
import "./List.scss";

const List = () => {
  return (
    <div className="records">
      <div className="topbar">
        <div className="recordstext">
          <span>Reports</span>
        </div>
      </div>
      <hr />
      <div className="recordsbody">
        <Datatable
          db="participants"
          columns={ReportColumns}
          className="datatable"
        />
      </div>
    </div>
  );
};

export default List;
