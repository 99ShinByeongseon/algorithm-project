// 문제 1번
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
// (제한사항) s는 길이가 1 이상, 100이하인 스트링입니다.


function solution(s) {
    // 문자열의 길이를 변수에 저장
    const length = s.length;
    // 가운데 인덱스 계산
    const mid = Math.floor(length / 2);

    // 문자열 길이가 홀수인지 짝수인지 조건 분기
    if (length % 2 === 1) {
        // 홀수일 경우, 가운데 글자 반환
        return s[mid];
    } else {
        // 짝수일 경우, 가운데 두 글자 반환
        return s[mid - 1] + s[mid];
    }
}