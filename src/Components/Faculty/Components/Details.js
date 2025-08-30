
const Detail = ({ data }) => {
    return (
        <>
            <h5 class="mb-3">Profile</h5>
            <div class="row g-0">
                <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div class="p-2">VH ID</div>
                </div>
                <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div class="p-2">{data.staffId}</div>
                </div>
                <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div class="p-2">First Name</div>
                </div>
                <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div class="p-2">{data.name}</div>
                </div>
                <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div class="p-2">Education</div>
                </div>
                <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div class="p-2">{data.education?.map((data, idx) => {
                        return <span key={idx} class="badge text-bg-primary mr-2">{data}</span>;
                    })}</div>
                </div>
                <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div class="p-2">Address</div>
                </div>
                <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div class="p-2">{data.address}</div>
                </div>
                <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div class="p-2">Skills</div>
                </div>
                <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div class="p-2">{data.skills
                        ?.map((data, idx) => {
                            return <span class="badge text-bg-primary mr-2" key={idx}>{data}</span>
                        })}</div>
                </div>
                <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div class="p-2">Position</div>
                </div>
                <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div class="p-2">{data.position}</div>
                </div>
                <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div class="p-2">Phone</div>
                </div>
                <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div class="p-2">{data.phone}</div>
                </div>
                <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div class="p-2">Email</div>
                </div>
                <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div class="p-2">{data.email}</div>
                </div>
            </div>
        </>
    )
}

export default Detail;