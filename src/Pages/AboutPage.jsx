import Header from "../components/Header";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "Truong Gia Huy",
    position: "Frontend Developer",
    class: "22JIT",
    image:
      "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/457600306_1589624518629498_3716232999925147012_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEXSPYnxd5xcx0a2HfGaYRMQl_OmpLqeP5CX86akup4_mlyCDE96RTLpmxo6UlevUdRJfOuPnS1fkI3uNUTWwA6&_nc_ohc=lLQwgbHCf_IQ7kNvgHGIgBp&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AsZC_9gT6g8ELniM4TZQNsG&oh=03_Q7cD1QGbkwGMqJ6F3jDjeqY4XwSgSlHuZ25vr7zR0ro6Q6RO-g&oe=66FFDBD9", // Thay bằng link ảnh của bạn
  },
  {
    name: "Dao Khanh Duy",
    position: "Backend Developer",
    class: "22GIT1",
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/454285823_494732726495016_8334481077376062759_n.png?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEVx-rSD0Or6WRYTsRsNb2TJ10ZhiNojcEnXRmGI2iNwci8JvnBIdryP7KITmGRi52SOp3NRIf1d08OvblWYpro&_nc_ohc=Vo-C1zANs-0Q7kNvgHhu3-l&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHF7PlAy4v0tvE0Tk7uDKeWFfGeKCCa3i65nWZm9wg4ZA&oe=66F9FCAF",
  },
  {
    name: "Ho Sy Bao Nhan",
    position: "Fontend Developer",
    class: "22GIT1",
    image:
      "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/456254564_314163885116839_5192033840004393553_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGhpQdcjGAaHiVjgaTM8Xg8Eb2HKWnqlFYRvYcpaeqUVuTPYQylvqNFhyfWkdanUGYcsmObcmNjoj-IObOKEv0E&_nc_ohc=vdf-4stCBsEQ7kNvgEmgq6v&_nc_ht=scontent.fdad1-2.fna&_nc_gid=AkXE55VNyMV4fYjUiVnvNT-&oh=03_Q7cD1QGkAZB_rPnvMYcU5McyfEm7tLg7xj4KjgNnpIz-JeCh8g&oe=66FFFBE5",
  },
  {
    name: "Nguyen Thanh Truong",
    position: "Frontend Developer",
    class: "22GIT1",
    image:
      "https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/457498526_1591197361474160_1575630135988822900_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeH0GW-ZvckSRq9rjS9Lrk3Hf9mlUt56BU1_2aVS3noFTctxC-xv1k9ZXikZJzaHAqx4Z8gA3wXTozD-C_ga4Qr8&_nc_ohc=Bd6rnj3UHsYQ7kNvgF6edUe&_nc_ht=scontent.fdad1-3.fna&oh=03_Q7cD1QFoiB7Q4wzZq2B-GO2XLGoEh4yCOxGRjAaWWLX1cvoJUw&oe=66FFE28D",
  },
];

function AboutPage() {
  return (
    <div>
      <Header />
      <div className="py-6 px-4 sm:px-6 lg:px-36 text-main-text">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mt-14 mb-4 bg-gradient-to-b from-[#4FACFE] to-[#00F2FE] bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="text-center text-main-text mb-6 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          To empower language learners, especially those studying English, to
          communicate confidently without hesitation, our team has been
          dedicated to developing this application and presenting it at Super -
          BWD 2024. Finally, we are{" "}
          <span className="font-semibold">KhiCon</span>, we greatly appreciate
          your support!
        </p>
        <a
          href="https://forms.gle/xXULSycpkMgUasjK8"
          className="bg-gradient-to-b from-main-blue to-second-blue px-6 py-2 rounded-full text-white font-semibold inline-block mx-auto"
        >
          We need your support, vote for us
        </a>
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md p-4 py-10 text-center"
              >
                <div className="w-28 h-28 overflow-hidden rounded-full mx-auto mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h2>
                <p className="text-gray-600">{member.position}</p>
                <p className="text-gray-500">{member.class}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
