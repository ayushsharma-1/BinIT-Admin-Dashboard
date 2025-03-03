import { ContactUsColumns } from "../../columns/columnData";
import { Datatable } from "../../components/datatable/Datatable";
import "./List.scss";

const CarePlanList = () => {
  return (
    <div className="records">
      <div className="topbar">
        <div className="recordstext">
          <span>Contact Us Reports</span>
        </div>
      </div>
      <hr />
      <div className="recordsbody">
        <Datatable
          db="careplans"
          columns={ContactUsColumns}
          className="datatable"
        />
      </div>
    </div>
  );
};

export default CarePlanList;
