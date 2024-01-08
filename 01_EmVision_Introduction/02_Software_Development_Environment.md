---
title: SW 개발환경
---

## 소프트웨어 개발 환경

### 운영체제

EmVision은 L4T(Linux for Tegra) 운영체제를 사용합니다. L4T는 NVIDIA Jetson 시리즈의 모듈에 탑재되어 있는 운영체제로, 기본 탑재되어있는 L4T 35.4.1은 Ubuntu 20.04 LTS를 기반으로 하고 있습니다.

> EmVision은 NVIDIA Jetson 시리즈의 모듈을 사용합니다. 따라서, ROS등 NVIDIA Jetson 시리즈의 모듈이 지원하는 운영체제를 사용하는 것이 가능하지만 현재 하늘소프트는 L4T에 대한 기술지원만 제공하고 있습니다.

### JetPack

NVIDIA JetPack SDK는 NVIDIA Jetson 플랫폼을 위한 포괄적인 소프트웨어 번들로, 이를 통해 AI 및 컴퓨터 비전 애플리케이션을 더 빠르고 쉽게 구축할 수 있습니다. JetPack은 Linux 운영 체제, NVIDIA CUDA, cuDNN, TensorRT와 같은 핵심 라이브러리 및 API, 그리고 Jetson 보드를 위한 드라이버 및 툴을 포함하고 있습니다.

> EmVision은 출고시 JetPack 5.1.2을 기반으로 하고 있습니다. 다음 항목의 버전은 JetPack 5.1.2 기준으로 작성되었습니다.

- **CUDA 11.4**: CUDA는 NVIDIA의 병렬 컴퓨팅 플랫폼 및 프로그래밍 모델입니다. 이를 통해 NVIDIA GPU를 사용하여 복잡한 계산 작업을 가속화할 수 있습니다. CUDA 11.4 버전은 성능 개선, 새로운 기능, 그리고 하드웨어 지원을 포함합니다.

- **cuDNN 8.6.0**: NVIDIA CUDA Deep Neural Network 라이브러리(cuDNN)는 딥러닝 프레임워크를 위한 GPU 가속화 기능을 제공합니다. cuDNN은 고성능의 GPU 가속화를 제공하며, 딥러닝 알고리즘을 위한 맞춤형 라이브러리를 포함하고 있습니다.

- **TensorRT 8.5.2**: TensorRT는 딥러닝 모델을 위한 추론(inference) 엔진입니다. 이는 모델의 성능을 최적화하고, 낮은 지연 시간과 높은 처리량을 달성하기 위해 딥러닝 모델을 최적화합니다.

- **DLA 3.12.1**: DLA(Deep Learning Accelerator)는 NVIDIA의 AI 가속기입니다. 이는 딥러닝 연산을 위해 특별히 설계되었으며, 효율적인 처리를 위해 사용됩니다.

- **VPI 2.3**: NVIDIA Vision Programming Interface(VPI)는 컴퓨터 비전 및 이미지 처리를 위한 라이브러리입니다. VPI는 다양한 하드웨어 가속기에서 작동하며, 효율적인 이미지 처리 및 컴퓨터 비전 알고리즘을 구현하는 데 사용됩니다.

- **OpenCV 4.5.4**: OpenCV는 오픈 소스 컴퓨터 비전 라이브러리로, 이미지 및 비디오 처리, 객체 감지, 얼굴 인식 등 다양한 기능을 제공합니다. 이 버전은 여러 최신 기능과 개선 사항을 포함합니다.

- **DeepStream 6.2**: DeepStream SDK는 스트리밍 분석, 비디오 처리 및 AI 기반의 인사이트 추출을 위한 도구입니다. 이는 주로 감시, 주차, 소매 등의 분야에서 실시간 비디오 분석에 사용됩니다.

- **Nvidia-Docker 24.0.5**: Nvidia-Docker는 Docker 컨테이너 내에서 NVIDIA GPU를 사용할 수 있게 해주는 도구입니다. 이를 통해 개발자는 도커 컨테이너를 통해 쉽게 GPU 가속 애플리케이션을 배포하고 실행할 수 있습니다.
