---
title: 재설치 및 업그레이드
---

## 재설치 및 업그레이드

> EmVision의 초기 유저명은 `hanul`이며 비밀번호는 `hanul`입니다.

### Jetson Inference 업그레이드

사전 컴파일을 완료한 Jetson Inference의 깃허브 로컬 저장소는 `~/Jetson-Inference`(`/home/hanul/Jetson-Inference`)에 위치합니다. 이 저장소를 업데이트 하기 위해서는 다음 명령을 사용합니다.

```bash
# Jetson Inference 저장소로 이동
cd ~/Jetson-Inference
rm -rf build
# 저장소의 수정내역을 모두 되돌리고 서버로부터 최신 내용을 받아옴
git reset --hard HEAD
git pull
git submodule update --init --recursive

# 패키지 목록 최신화 및 빌드 디렉토리 생성
sudo apt-get update
mkdir build
cd build

# 빌드 시작
cmake ../
make -j$(nproc)
sudo make install
sudo ldconfig
```

> 빌드 중에는 CLI를 통해 사용자 선택사항이 발생할 수 있습니다. 작업 중인 터미널의 너비와 높이를 충분히 크게(120자x80자 이상) 설정한 뒤 빌드를 수행하는 것을 추천합니다.

### Jetson Inference 재설치

`~/Jetson-Inference`(`/home/hanul/Jetson-Inference`)을 삭제한 경우나 완전 초기화를 수행한 경우에는 다음 명령을 사용하여 처음부터 설치를 수행합니다.

```bash
sudo apt-get update
sudo apt-get install git cmake libpython3-dev python3-numpy
git clone --recursive --depth=1 https://github.com/dusty-nv/jetson-inference
cd jetson-inference
mkdir build
cd build
cmake ../
make -j$(nproc)
sudo make install
sudo ldconfig
```

> 빌드 중에는 CLI를 통해 사용자 선택사항이 발생할 수 있습니다. 작업 중인 터미널의 너비와 높이를 충분히 크게(120자x80자 이상) 설정한 뒤 빌드를 수행하는 것을 추천합니다.
