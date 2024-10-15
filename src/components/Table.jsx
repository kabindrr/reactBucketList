export const Table = ({ bucketList, handleOnSwitch, handleOnDelete }) => {
  const entryList = (bucketList || []).filter((item) => item.type === "entry");

  const badList = (bucketList || []).filter((item) => item.type === "bad");

  return (
    <>
      <div className="row mt-5" style={{ color: "red" }}>
        <div className="col-sm">
          <h3>Entry List</h3>
          <hr />
          {/* <input
            className="form-check-input"
            type="checkbox"
            value="allEntry"
            id="allEntry"
            onChange="handleSelectAll(this, 'entry')"
          />
          <label className="" htmlFor="allEntry">
            SelectAll
          </label> */}

          {/* <button className="btn btn-danger" onClick="handleSelectedDelete()">
            Delete All
          </button> */}
          {/* <!-- entrylist Table --> */}
          <table className="table table-striped table-dark table-hover border mt-2">
            <tbody id="bucketListEntry">
              {entryList.map((item, i) => {
                return (
                  <tr
                    key={item._id}
                    className=""
                    style={{ border: "2px solid red" }}
                  >
                    <td>{1 + i}</td>
                    <td>{item.bucketList}</td>
                    <td>{item.money}</td>
                    <td className="text-end">
                      <button
                        onClick={() => handleOnDelete(item._id)}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
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
          <hr />
          {/* <input
            className="form-check-input"
            type="checkbox"
            value="badEntry"
            id="allBad"
            onChange="handleSelectAll(this,'bad')"
          />
          <label htmlFor="allBad">SelectAll</label>
          <button className="btn btn-danger" onClick="handleSelectedDelete()">
            Delete All
          </button> */}
          {/* <!-- entrylist Table --> */}
          <table className="table table-striped table-dark table-hover border text-light mt-2">
            <tbody id="badList">
              {badList.map((item, i) => (
                <tr
                  key={item._id}
                  className=""
                  style={{ border: "2px solid red" }}
                >
                  <td>{1 + i}</td>
                  <td>{item.bucketList}</td>
                  <td>{item.money}</td>
                  <td className="text-end">
                    <button
                      onClick={() => {
                        handleOnDelete(item._id);
                      }}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
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
    </>
  );
};
