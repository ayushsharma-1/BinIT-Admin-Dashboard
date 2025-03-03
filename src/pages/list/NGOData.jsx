import { NGOColumns } from "../../columns/columnData";
import { Datatable } from "../../components/datatable/Datatable";
import "./List.scss";

const CarePlanList = () => {
  return (
    <div className="records">
      <div className="topbar">
        <div className="recordstext">
          <span>NGO Data</span>
        </div>
      </div>
      <hr />
      <div className="recordsbody">
        <Datatable
          db="incidents"
          columns={NGOColumns}
          className="datatable"
        />
      </div>
    </div>
  );
};

export default CarePlanList;
