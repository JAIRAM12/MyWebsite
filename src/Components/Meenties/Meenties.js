import AppNav from "../design/AppNav";
import { useState } from "react";
import MeentiesTable from "./MeentiesTable";
import AppButton from "../design/AppButton";
import AppInput from "../design/AppInput";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function Meenties() {
    const [data, setData] = useState([
        {
            key: "1",
            sno: 1,
            image: "/images/logo.jpg",
            name: "ABINAV",
            cse: "A",
            gender: "M",
            internship: null,
            // workshop: null,
            paper: null,
            sports: null,
        },
        {
            key: "2",
            sno: 2,
            image: "/images/logo.jpg",
            name: "ARAVINDHAN",
            cse: "A",
            gender: "M",
            internship: null,
            // workshop: null,
            paper: null,
            sports: null,
        },
    ]);

    // Convert file to Base64
    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    // Handle file selection
    const handleFileChange = (key, field, file) => {
        setData((prev) =>
            prev.map((row) =>
                row.key === key ? { ...row, [field]: file } : row
            )
        );
    };

    // Handle Upload button click
     const handleUpload = (record) => {
        console.log("Uploading row:", record);

        alert(`Uploaded for ${record.name}`);
        // Later: Add API call or Base64 conversion here
    };
    // const handleUpload = async (record) => {
    //     try {
    //         const uploadedData = {};
    //         for (const field of ["internship", "workshop", "paper", "sports"]) {
    //             if (record[field]) {
    //                 uploadedData[field] = await toBase64(record[field]);
    //             }
    //         }
    //         console.log("Uploading row with Base64:", {
    //             ...record,
    //             ...uploadedData,
    //         });
    //         alert(`Uploaded for ${record.name}`);
    //         // Here you can send uploadedData to your backend API
    //     } catch (err) {
    //         console.error("Base64 conversion failed", err);
    //     }
    // };

    const columns = [
        {
            title: "S.No",
            dataIndex: "sno",
            key: "sno",
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (url) => (
                <img
                    src={url}
                    alt="student"
                    style={{ borderRadius: "50%", width: 40, height: 40 }}
                />
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text) => (
                <span style={{ color: "blue", cursor: "pointer" }}>{text}</span>
            ),
        },
        {
            title: "CSE",
            dataIndex: "cse",
            key: "cse",
        },
        {
            title: "Internship",
            dataIndex: "internship",
            key: "internship",
            render: (_, record) => (
                <Upload
                    beforeUpload={() => false} // prevents auto upload
                    // onChange={({ file }) => handleFileChange(record.key, "internship", file)}
                    maxCount={1}
                >
                    <AppButton icon={<UploadOutlined />}>Select File</AppButton>
                </Upload>
            ),
        },
        // {
        //     title: "Workshop",
        //     dataIndex: "workshop",
        //     key: "workshop",
        //     render: (_, record) => (
        //         <Upload
        //             beforeUpload={() => false} // prevents auto upload
        //             onChange={({ file }) => handleFileChange(record.key, "internship", file)}
        //             maxCount={1}
        //         >
        //             <AppButton icon={<UploadOutlined />}>Select File</AppButton>
        //         </Upload>
        //     ),
        // },
        {
            title: "PaperPresentation",
            dataIndex: "paper",
            key: "paper",
            render: (_, record) => (
                <Upload
                    beforeUpload={() => false} // prevents auto upload
                    // onChange={({ file }) => handleFileChange(record.key, "paper", file)}
                    maxCount={1}
                >
                    <AppButton icon={<UploadOutlined />}>Select File</AppButton>
                </Upload>
            ),
        },
        {
            title: "Sports",
            dataIndex: "sports",
            key: "sports",
            render: (_, record) => (
                <Upload
                    beforeUpload={() => false} // prevents auto upload
                    // onChange={({ file }) => handleFileChange(record.key, "sports", file)}
                    maxCount={1}
                >
                    <AppButton icon={<UploadOutlined />}>Select File</AppButton>
                </Upload>
            ),
        },
        {
            title: "Upload",
            key: "upload",
            render: (_, record) => (
                <AppButton type="primary" onClick={() => handleUpload(record)}>
                    Upload
                </AppButton>
            ),
        },
    ];

    return (
        <div className="home-container">
            {/* <AppNav /> */}
            <div style={{ padding: 20 }}>
                <div
                    className="content"
                    style={{
                        maxWidth: "80%",
                        margin: "0 auto",
                    }}
                >
                    <MeentiesTable data={data} columns={columns} />
                </div>
            </div>
        </div>
    );
}
