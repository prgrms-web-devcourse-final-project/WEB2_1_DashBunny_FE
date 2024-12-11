"use client";

import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const ReactKakaoMap = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const apiKey: string | undefined = process.env.NEXT_PUBLIC_KAKAO_KEY;
  const [scriptLoad, setScriptLoad] = useState<boolean>(false);

  useEffect(() => {
    const script: HTMLScriptElement = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      setScriptLoad(true);
    });
  }, [apiKey]);

  return (
    <div>
      {scriptLoad ? (
        <Map
          center={{ lat: 37.55, lng: 126.97 }}
          style={{ width: "45vw", height: "40vh" }}
          level={3}
        >
          <MapMarker position={{ lat: 37.55, lng: 126.97 }}></MapMarker>
        </Map>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ReactKakaoMap;
