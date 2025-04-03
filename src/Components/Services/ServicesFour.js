import img1 from "../../assets/img/chairman.jpg";
import img2 from "../../assets/img/person (copy).jpg";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
const ServicesFour = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <section className="our-service-wrapper bg-black section-padding">
      <div id="ceos" className="container">
        <div className="row mtm-30">
          <h2 className="text-white">
            {" "}
            {currentLanguage === "mn" ? <>УДИРДЛАГА</> : <>MANAGEMENT</>}
          </h2>
          <div className="col-md-6 col-12 col-lg-6 mt-30">
            <div className="service-item-card">
              <div className="flex flex-col xl:gap-20 xl:flex-row">
                <div className="">
                  <div className="icon">
                    <img
                      src={img1}
                      alt=""
                      className="w-[200px] h-[200px] sm:w-[200px] mx-auto"
                      loading="lazy"
                    />
                    <div className="contents"></div>
                  </div>
                </div>

                <div className="flex flex-col justify-center align-items-center">
                  <div className="contents">
                    <h4>
                      <p className="row text-nowrap " to="/">
                        {currentLanguage === "mn" ? (
                          <>ЦОГТБААТАРЫН ЭНХЖАВХЛАН</>
                        ) : (
                          <>TS. ENHJAVHLAN TSOGTBAATAR</>
                        )}
                      </p>
                    </h4>
                    <p className="row text-white font-bold">
                      {currentLanguage === "mn" ? (
                        <>Удирдах зөвлөлийн дарга</>
                      ) : (
                        <>Chairman</>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="contents">
                <p>
                  <br />
                  {currentLanguage === "mn" ? (
                    <>
                      Ц.Энхжавхлан нь АНУ-ын University of Wisconsin-Eau
                      Claire-ыг бакалавр, The Wharton School-ийн магистрын зэрэг
                      эзэмшиж төгссөн, CFA Level III Candidate юм.
                    </>
                  ) : (
                    <>
                      Ts. Enhjavhlan holds a bachelor's degree from the
                      University of Wisconsin-Eau Claire and a master's degree
                      from The Wharton School, USA. He is also a CFA Level III
                      Candidate.
                    </>
                  )}
                </p>
                <p>
                  <br />
                  {currentLanguage === "mn" ? (
                    <>
                      2013 оноос АНУ-ын CUNA Mutual Group-ээс ажлын гараагаа
                      эхэлж, менежментийн зөвлөх үйлчилгээгээр дэлхийд
                      тэргүүлэгч McKinsey & Company-ийн төв оффист 2016-2020
                      онуудад Associate, Engagement Manager-ээр ажиллаж байгаад
                      эх орондоо эргэн ирээд ALTEX Digital Exchange-ийг хамтран
                      үүсгэн байгуулж, одоо гүйцэтгэх захирлаар нь ажилладаг юм.
                    </>
                  ) : (
                    <>
                      Beginning his career in 2013 as a Financial Analyst at
                      CUNA Mutual Group in the United States, Enkhjavkhlan
                      advanced to McKinsey & Company, where he served as an
                      Associate and Engagement Manager from 2016 to 2020. During
                      his tenure at McKinsey, he provided strategic advice to
                      Fortune 500 companies across the banking, investment, and
                      payment sectors, focusing on product development and
                      technology solutions.
                    </>
                  )}
                </p>
              </div>
              <div className="contents">
                <p>
                  <br />
                  {currentLanguage === "mn" ? (
                    <>
                      Олон улсын байгууллагууд, тэр дундаа McKinsey & Co-д
                      ажиллаж байх хугацаандаа АНУ-ын Fortune 500 жагсаалтын
                      банк, хөрөнгө оруулалт, төлбөр тооцооны компаниудад
                      стратеги, бүтээгдэхүүн хөгжүүлэлт, tech шийдлүүд дээр
                      зөвлөгөө өгч ажилладаг байсан төдийгүй сүүлийн жилүүдэд
                      крипто салбарт өөрийн мэдлэг, чадвараа зориулан ажиллаж
                      буй салбарын онцлох экспертүүдийн нэг юм.
                    </>
                  ) : (
                    <>
                      Upon returning to Mongolia, he co-founded ALTEX Digital
                      Exchange, where he currently serves as CEO. In recent
                      years, Enkhjavkhlan has emerged as a leading expert in the
                      crypto industry, applying his extensive knowledge and
                      skills to drive innovation and growth in this dynamic
                      field.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 col-lg-6 mt-30">
            <div className="service-item-card">
              <div className="flex flex-col xl:flex-row">
                <div className="col">
                  <div className="icon">
                    <img
                      src={img2}
                      alt=""
                      className="w-[200px] h-[200px] sm:w-[200px] mx-auto"
                      loading="lazy"
                    />
                    <div className="contents"></div>
                  </div>
                </div>

                <div className="col flex flex-col justify-center align-items-center">
                  <div className="contents">
                    <h4>
                      <p className="row text-nowrap " to="/">
                        {currentLanguage === "mn" ? (
                          <>ЭРДЭНЭБААТАРЫН ТӨРТОГТОХ</>
                        ) : (
                          <>TURTOGTOH ERDENEBAATAR</>
                        )}
                      </p>
                    </h4>
                    <p className="row text-white font-bold">
                      {currentLanguage === "mn" ? (
                        <>Гүйцэтгэх захирал</>
                      ) : (
                        <>CEO</>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="contents">
                <p>
                  <br />
                  {currentLanguage === "mn" ? (
                    <>
                      {" "}
                      Э.Төртогтох нь Монгол Улсын Их Сургуулийг Хэрэглээний
                      математикийн мэргэжлээр бакалавр, Япон улсын Иватэ Их
                      Сургуулийг Хэрэглээний математик, загварчлалын мэргэжлээр
                      магистрын зэрэгтэй тус тус төгссөн. Ажлын гараагаа банк,
                      санхүүгийн салбараас эхлүүлсэн бөгөөд эрсдэлийн удирдлага,
                      тогтвортой санхүүжилт, бүтээгдэхүүн хөгжүүлэлт, өгөгдлийн
                      шинжилгээ-кредит скорингийн чиглэлээр 8 гаруй жил
                      ажилласан туршлагатай.
                    </>
                  ) : (
                    <>
                      {" "}
                      Turtogtoh E., graduated with a bachelor's degree in
                      Applied mathematics from National University of Mongolia
                      and a master's degree in Applied mathematics and modeling
                      from Iwate University, Japan. He started his career in the
                      banking and financial sector and has 8+ years of
                      experience in risk management, sustainable financing,
                      product development, data analysis and credit scoring.
                    </>
                  )}
                </p>
                <p>
                  <br />

                  {currentLanguage === "mn" ? (
                    <>
                      {" "}
                      2012-2017 онд Капитал банк, Богд банк, 2020-2021 онд Бүрэн
                      Скор ЗМС, 2022-2023 онд Монголын Финтекийн Холбоо, 2022
                      оноос Ард Санхүүгийн Нэгдэл ХК-ийн Эрсдэл эрхэлсэн
                      захирлаар, 2023 оны 3 сараас эхлэн Монголын Биржүүдийн
                      Нэгдсэн Холбооны Гүйцэтгэх захирлаар тус тус ажиллаж
                      байна.
                    </>
                  ) : (
                    <>
                      From 2012-2017, Capital bank and Bogd bank, from 2020-2021
                      Buren Score CIB, from 2022-2023, Mongolian Fintech
                      Association, from 2023 as the CEO of the Mongolian Joint
                      Association of Exchanges, from 2022 as the Chief Risk
                      Officer of Ard Financial Group JSC.
                    </>
                  )}

                  <br />
                  <br />

                  {currentLanguage === "en" ? <br /> : null}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFour;