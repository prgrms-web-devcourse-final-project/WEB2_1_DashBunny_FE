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
          center={{ lat: latitude, lng: longitude }}
          style={{ width: "45vw", height: "40vh" }}
          level={3}
        >
          <MapMarker position={{ lat: latitude, lng: longitude }}></MapMarker>
        </Map>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ReactKakaoMap;
