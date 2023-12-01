---
title: EmVision 시작하기
---

# EmVision 시작하기

## EmVision에서 개발 시작하기

![EmVision 포트 인터페이스](./images/EmVision_Interface.png)

### 필요한 장치

- HDMI 포트를 지원하는 모니터와 HDMI 케이블
- USB 포트를 지원하는 키보드와 마우스
- (옵션 1) 네트워크 케이블(UTP 케이블)
- (옵션 2) USB to Ethernet 어댑터: 안드로이드 스마트폰을 사용하는 경우 USB 테더링을 이용해서 네트워크 접속이 가능합니다.

## 개발용 PC와 연결해서 개발 시작하기

![EmVision LCD 디스플레이](./images/EmVision_LCD.png)

### 필요한 장치

- (추천) [비주얼 스튜디오 코드](https://code.visualstudio.com/)를 설치합니다.
- (옵션 1) 개발용 호스트 PC가 동일한 네트워크에 연결되어 있도록 네트워크 구성
- (옵션 2) Micro USB 케이블을 사용하여 EmVision과 개발용 호스트 PC를 연결

### 개발용 PC에서 SSH 접속하기

- EmVision을 내부 네트워크에 연결한 경우(옵션 1) 상단 LCD에 표시되는 IP 주소를 이용해서 개발용 PC에서 SSH 접속을 합니다.
- EmVision을 Micro USB 케이블을 이용해서 연결하는 경우(옵션 2) 개발용 PC와 연결한 후 외장디스크를 인식하면 개발용 PC에서 `192.168.55.1`로 SSH 접속을 합니다.

### VNC 사용하기

- **디스플레이 `:0`이 존재하는 경우**: HDMI에 모니터를 연결한 경우

```bash
gsettings set org.gnome.Vino prompt-enabled false
gsettings set org.gnome.Vino require-encryption false
DISPLAY=:0 /usr/lib/vino/vino-server
```
