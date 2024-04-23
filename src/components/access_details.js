import React, { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AppContext from "../contexts/app_context"

export default () => {
  const appContext = useContext(AppContext)
  const { langKey } = appContext.pageContext

  return (
    <div>
      <div className="flex mb-6">
        <FontAwesomeIcon icon="map-marker" className="text-primary mt-1 mr-2" />
        <div>
          {langKey === "ja" ? (
            <>
              〒104-0032
              <br />
              東京 中央区
              <br />
              八丁堀4-1-3
              <br />
              安和宝町ピル303号室
              <br />
              Japan
            </>
          ) : (
            <>
              Tokyo, Chuo-ku, Hatchobori 4-1-3,
              <br />
              Anwa Takaracho Building 3F 303,
              <br />
              Japan
              <br />
              〒104-0032
            </>
          )}
        </div>
      </div>
      <div className="flex mb-6">
        <FontAwesomeIcon icon="envelope" className="text-primary mt-1 mr-2" />
        info@beyondbleu.com
      </div>
      <div className="flex mb-6">
        <FontAwesomeIcon icon="phone" className="text-primary mt-1 mr-2" />
        03-5962-3883
      </div>
    </div>
  )
}
