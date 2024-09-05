import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getUser } from "../api/userAPI"; // Đảm bảo bạn nhập đúng đường dẫn tới hàm này

const userImage =
  "https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/456681963_527391563105988_5779884790602890748_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=gbnpLui0-HwQ7kNvgFb5BLz&_nc_ht=scontent.fdad1-3.fna&oh=03_Q7cD1QFn66Q5Z4AhXEecjxWRFHbenGGy1VQulJKSNMypLAxEZw&oe=67013A35"; // Ảnh cho my-cards
const globalImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&s";

export default function CardSet({ data, type }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (type === "user") {
      const fetchUser = async () => {
        try {
          const userData = await getUser();
          setUserName(userData.fullname); // Hoặc tên thuộc tính bạn cần từ dữ liệu trả về
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUser();
    }
  }, [type]);

  return (
    <Link to={`${data.id}`}>
      <div
        className="w-full min-h-56 h-56 bg-white rounded-2xl
      shadow-xl shadow-[#9b9b9b17]
      px-6 pt-5 pb-2
      border-[1px]
      border-[#6c75801a]
      hover:translate-y-[-0.5rem]
      transition-all
      duration-300
      ease-in-out
      "
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col items-start">
            <h1 className="text-base text-left">{data.title}</h1>
            <div className="flex text-sm text-[#6C7580] mt-2">
              <p>{data.vocabularies.length} words</p>
              <p className="ml-4">
                <FontAwesomeIcon icon={faUsers} /> {data.members}
              </p>
            </div>
          </div>
          <div
            className="flex justify-between items-center
          text-[#6C7580] mb-2"
          >
            <p className="text-sm flex items-center">
              <img
                src={type === "user" ? userImage : globalImage}
                alt="avt"
                className="h-8 w-8 rounded-full object-cover mr-3"
              />
              {type === "user" ? userName : "Anonymous"}
            </p>
            <FontAwesomeIcon icon={faEarthAmericas} />
          </div>
        </div>
      </div>
    </Link>
  );
}
