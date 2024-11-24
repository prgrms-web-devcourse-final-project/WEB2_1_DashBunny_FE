// 주소 정보 인터페이스
interface JusoAddress {
  detBdNmList: string
  engAddr: string
  rn: string
  emdNm: string
  zipNo: string
  roadAddrPart2: string
  emdNo: string
  sggNm: string
  jibunAddr: string
  siNm: string
  roadAddrPart1: string
  bdNm: string
  admCd: string
  udrtYn: string
  lnbrMnnm: string
  roadAddr: string
  lnbrSlno: string
  buldMnnm: string
  bdKdcd: string
  liNm: string
  rnMgtSn: string
  mtYn: string
  bdMgtSn: string
  buldSlno: string
}

// 공통 정보 인터페이스
interface CommonResponse {
  errorMessage: string
  countPerPage: string
  totalCount: string
  errorCode: string
  currentPage: string
}

// 결과 정보를 포함하는 인터페이스
interface JusoResults {
  common: CommonResponse
  juso: JusoAddress[]
}

// 최상위 응답 인터페이스
export interface JusoApiResponse {
  results: JusoResults
}
