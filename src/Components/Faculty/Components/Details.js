import { memo } from "react";
import AppTag from "../../essential/AppTag";

const Detail = ({ data }) => {
    return (
        <>
            <h5 className="mb-3">Profile</h5>
            <div className="row g-0">
                <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div className="p-2">VH ID</div>
                </div>
                <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div className="p-2">{data.staffId}</div>
                </div>
                <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div className="p-2">First Name</div>
                </div>
                <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div className="p-2">{data.name}</div>
                </div>
                <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div className="p-2">Education</div>
                </div>
                <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div className="p-2">{data.education?.map((data, idx) => {
                            return <AppTag className="mr-2" key={idx}>{data}</AppTag>
                    })}
                    </div>
                </div>
                <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div className="p-2">Address</div>
                </div>
                <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div className="p-2">{data.address}</div>
                </div>
                <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div className="p-2">Skills</div>
                </div>
                <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div className="p-2">{data.skills
                        ?.map((data, idx) => {
                            return <AppTag className="mr-2" key={idx}>{data}</AppTag>
                        })}</div>
                </div>
                <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div className="p-2">Position</div>
                </div>
                <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div className="p-2">{data.position}</div>
                </div>
                <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div className="p-2">Phone</div>
                </div>
                <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div className="p-2">{data.phone}</div>
                </div>
                <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div className="p-2">Email</div>
                </div>
                <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div className="p-2">{data.email}</div>
                </div>
            </div>
        </>
    )
}

export default memo(Detail);