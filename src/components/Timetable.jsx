import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
// import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";
import "../styles/Table.css";

export const Timetable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1"
      id="course">

      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full"
      >
        <div className="w-full max-w-[1150px] flex justify-center bg-customDarkBg1 pt-12 lg:pt-12 pb-4 lg:pb-10 mx-auto flex-col">
          <div className="w-full flex flex-col items-center">
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              專業知識密集課程
            </h2>
          </div>
          <div className="w-full overflow-x-auto"> {/* 添加 overflow-x-auto */}
            <MyTable />
          </div>
        </div>
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};


const MyTable = () => {
  return (
    <table className="GeneratedTable">
      <thead>
        <tr>
          <th> </th>
          <th colSpan="1" align="center">Day1.  7/21 (一)</th>
          <th colSpan="2" align="center">Day2.  7/22 (二)</th>
          <th colSpan="1" align="center">Day3.  7/23 (三)</th>
          <th colSpan="1" align="center">Day4.  7/24 (四)</th>
          <th colSpan="1" align="center">Day5.  7/25 (五)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td align="center">活動地點</td>
            <td align="center">綜四224</td>
            <td align="center">綜四223</td>
            <td align="center">綜四224</td>
            <td align="center">綜四224</td>
            <td align="center">綜四224</td>
            <td align="center">台達館、國網中心 </td>
        </tr>
        <tr>
            <td align="center">9:00~9:30</td>
            <td align="center">報到</td>
            <td colSpan="2" rowSpan="2" align="center">業界專家專題演講 I</td>
            <td rowSpan="2" align="center">業界專家專題演講 II</td>
            <td colSpan="1" rowSpan="2" align="center">科學計算應用簡介</td>
            <td colSpan="1" rowSpan="3" align="center">競賽成果發表</td>
        </tr>
        <tr>
            <td align="center">9:30~10:30</td>
            <td align="center">開幕、活動說明</td>
        </tr>
        <tr>
            <td align="center">10:30~12:00</td>
            <td align="center">基礎高效能計算簡介</td>
            <td colSpan="2" align="center">MPI 程式教學</td>
            <td align="center">程式與系統效能分析</td>
            <td align="center">人工智慧應用簡介</td>
        </tr>
        <tr>
            <td align="center">12:00~13:30</td>
            <td colSpan="6" align="center">午餐 (自理)</td>
        </tr>
        <tr>
            <td align="center">13:30~15:30</td>
            <td align="center">平行計算與AI應用簡介</td>
            <td colSpan="2" align="center">上機練習 (MPI 實操)</td>
            <td align="center">效能競賽</td>
            <td rowSpan="1" rowSpan="3" align="center">AI & 科學應用競賽</td>
            <td rowSpan="1" align="center">國網中心參訪</td>
        </tr>
        <tr>
            <td align="center">15:30~17:00</td>
            <td align="center">Thread 程式教學</td>
            <td colSpan="2" rowSpan="2" align="center">基礎 GPU 平行程式教學、openACC、ROCm 簡介</td>
            <td rowSpan="2" align="center">程式競賽</td>
            <td align="center">作業分享、頒獎合影 (預計5:30pm結束)</td>
        </tr>
        <tr>
            <td align="center">17:00~18:00</td>
            <td align="center">超級電腦簡介與實操</td>
            <td rowSpan="3"> </td>
        </tr>
        <tr>
            <td align="center">18:00~19:30</td>
            <td align="center">Pizza 相見歡、學生叢集競賽經驗談</td>
            <td colSpan="1" align="center">系所介紹 (限高中生)</td>
            <td colSpan="3" align="center">晚餐 (自理)</td>
            
        </tr>
        <tr>
            <td align="center">19:30~21:30</td>
            <td align="center">上機練習 (openMP 實操)</td>
            <td align="center">上機練習 (GPU 實操)</td>
            <td align="center">進階 GPU 教學</td>
            <td align="center">程式競賽</td>
            <td align="center">AI & 科學應用競賽</td>
        </tr>
      </tbody>
    </table>




  );
};

export default MyTable;
