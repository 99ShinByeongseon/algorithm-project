function solution(s) {
    const mid = Math.floor(s.length/2); // 문자열 길이의 절반 계산, 문자열 길이를 2로 나누고 소수점 아래 버리기, 가운데 인덱스 계산
    return s.length % 2 ? s[mid] : s[mid-1] + s[mid];
// s.length % 2 홀수 짝수 계산 s[mid] 홀수면 반환(강운데 글자 1개) s[mid-1] + s[mid] 짝수면 (가운데 글자 2개)
}