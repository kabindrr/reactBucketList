import { Button } from "bootstrap";
import { useState } from "react";

export const Table = ({ bucketList, handleOnSwitch, handleOnDelete }) => {
  const [toDelete, setToDelete] = useState([]);
  const entryList = (bucketList || []).filter((item) => item.type === "entry");

  const badList = (bucketList || []).filter((item) => item.type === "bad");

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;

    let tempArg = [];
    if (value === "allEntry") {
      tempArg = entryList;
    }
    if (value === "allBad") {
      tempArg = badList;
    }

    if (checked) {
      if (value === "allEntry" || value === "allBad") {
        //get all ids from entry list
        const _ids = tempArg.map((item) => item._id);
        const uniqueIds = [...new Set([...toDelete, ..._ids])];
        setToDelete(uniqueIds);
        return;
      }
      setToDelete([...toDelete, value]);
    } else {
      if (value === "allEntry" || value === "allBad") {
        const _ids = tempArg.map((item) => item._id);

        setToDelete(toDelete.filter((_id) => !_ids.includes(_id)));
        return;
      }

      setToDelete(toDelete.filter((_id) => _id !== value));
    }
  };
  console.log(toDelete);
  return (
    <>
      <div className="row mt-5" style={{ color: "red" }}>
        <div className="col-sm">
          <h3>Entry List</h3>
          <hr />{" "}
          <input
            className="form-check-input"
            type="checkbox"
            value="allEntry"
            id="all-entry"
            onChange={handleOnSelect}
          />{" "}
          <label htmlFor="all-entry">Select All</label>
          <table className="table table-striped table-dark table-hover border mt-2">
            <tbody id="bucketListEntry">
              {entryList.map((item, i) => {
                return (
                  <tr
                    key={item._id}
                    className=""
                    style={{ border: "2px solid red" }}
                  >
                    <td>
                      {1 + i}{" "}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={item?._id}
                        onChange={handleOnSelect}
                        checked={toDelete.includes(item?._id)}
                      />{" "}
                    </td>
                    <td>{item.bucketList}</td>
                    <td>{item.money}</td>
                    <td className="text-end">
                      <button
                        onClick={() => handleOnSwitch(item._id, "bad")}
                        className="btn btn-success"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="col-sm">
          <h3>Bad List</h3>
          <hr />{" "}
          <input
            className="form-check-input"
            type="checkbox"
            value="allBad"
            id="all-bad"
            onChange={handleOnSelect}
          />{" "}
          <label htmlFor="all-bad">Select All</label>
          <table className="table table-striped table-dark table-hover border text-light mt-2">
            <tbody id="badList">
              {badList.map((item, i) => (
                <tr
                  key={item._id}
                  className=""
                  style={{ border: "2px solid red" }}
                >
                  <td>
                    {1 + i}{" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={item?._id}
                      onChange={handleOnSelect}
                      checked={toDelete.includes(item?._id)}
                    />{" "}
                  </td>
                  <td>{item.bucketList}</td>
                  <td>{item.money}</td>
                  <td className="text-end">
                    <button
                      onClick={() => handleOnSwitch(item._id, "entry")}
                      className="btn btn-warning"
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="alert alert-danger">
            You could have invested{" "}
            <span id="moneyWasted">
              {badList.reduce((acc, i) => acc + Number(i.money), 0)}
            </span>
          </div>
        </div>
      </div>
      {toDelete.length > 0 && (
        <div className="row my-5 d-grid">
          <button
            onClick={() => handleOnDelete(toDelete)}
            className="btn btn-danger"
          >
            Delete {toDelete.length} task(s)
          </button>
        </div>
      )}
    </>
  );
};
