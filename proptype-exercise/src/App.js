import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import UserProfile2 from "./components/UserProfile2";
import MyForm from "./components/MyForm";
import UserForm from "./components/UserForm";

const App = () => {
    const handleFormSubmit = (formData) => {
        console.log("Dữ liệu đã gửi:", formData);
    };

    return (
        <div className="App">
            <h1>Ứng Dụng React</h1>
            
            <UserProfile2 
                name="Nguyễn Văn A" 
                age={25} 
                onSubmit={handleFormSubmit} 
            />

            <UserProfile2 
                name="Nguyễn Văn B" 
                age="twenty five" 
                onSubmit={handleFormSubmit} 
            />

            <UserProfile2 
                name="" 
                age={30} 
                onSubmit={handleFormSubmit} 
            />
            
            <br></br>

            <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />

            <br></br>

            <UserForm title="Đăng Ký" onSubmit={handleFormSubmit} />

        </div>
    );
};

export default App;
