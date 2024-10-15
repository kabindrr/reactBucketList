import { useState } from "react";

export const Form = ({ addBucketList }) => {
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addBucketList(form);
    resetForm();
  };
  const resetForm = () => {
    setForm({ bucketList: "", money: "" });
  };

  return (
    <div>
      <form
        className="shadow"
        onSubmit={handleOnSubmit}
        action="javascript:void(0)"
      >
        <div className="row g-2 p-3">
          <div className="col-md-6">
            <input
              type="text"
              name="bucketList"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Bucket List"
              value={form.bucketList ?? ""}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              name="money"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Money Reqired"
              min="100"
              max="5000"
              value={form.money ?? ""}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-secondary">Bucket Me</button>
          </div>
        </div>
      </form>
    </div>
  );
};
