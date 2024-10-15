import { Button } from "bootstrap";
import { useState } from "react";

export const Table = ({
  bucketList,
  handleOnSwitch,
  handleOnDelete,
  handleOnSelect,
  toDelete,
  entryList,
  badList,
}) => {
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
