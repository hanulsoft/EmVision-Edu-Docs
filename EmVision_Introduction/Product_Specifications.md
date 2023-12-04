---
title: 사양
---

## EmVision 사양

### 공통사양

EmVision은 NVIDIA 기반의 강력한 비전 AI 개발 플랫폼으로, 고급 기능과 뛰어난 사양을 갖추고 있습니다. 이 장치는 512GB의 M.2 MVMe SSD를 탑재하여 빠른 데이터 액세스와 넉넉한 저장 공간을 제공합니다. 1Gbps Ethernet 연결로 빠른 네트워크 속도를 지원하며, 여러 해상도와 프레임 속도를 지원하는 고성능 카메라를 포함하여 다양한 비디오 처리 요구 사항을 충족합니다.

장치에는 또한 12V DC 전원 공급 포트와 2개의 USB 3.0 포트가 포함되어 있어, 안정적인 전력 공급과 빠른 주변기기 연결이 가능합니다. HDMI 2.0a 출력을 통해 고화질 비디오 출력이 가능하며, 내장된 0.96인치 OLED 디스플레이는 기본 정보 표시에 유용합니다. EmVision의 이러한 고급 기능들은 교육, 연구 및 프로토타이핑 작업에 이상적이며, AI 및 컴퓨터 비전 분야의 혁신을 추진하는 데 크게 기여할 것입니다.

|             항목 | 성능 및 규격                                                                                     |
| ---------------: | :----------------------------------------------------------------------------------------------- |
|         스토리지 | M.2 MVMe SSD 512GB​                                                                              |
|         네트워크 | 1Gbps Ethernet​                                                                                  |
|    전원공급 포트 | 12V DC (외경: 5.5 mm 내경: 2.1)                                                                  |
|              USB | 2x USB 3.0 Type-A​                                                                               |
|             HDMI | 1x HDMI 2.0a                                                                                     |
|  내장 디스플레이 | 0.96" I2C OLED 128x64                                                                            |
| 카메라 출력 포맷 | Raw 10bit Bayer                                                                                  |
|      카메라 모드 | 3280x2464(21fps)<br>3280x1848(28fps)<br>1920x1080(30fps)<br>1640x1232(30fps)<br>1280x720(60fps)​ |

### 각 모델의 연산 성능 및 전력 소모

- **AI 성능:** 다양한 모델에서 AI 처리 능력이 다릅니다. ON<sup>4</sup>는 20 TOPs, ON<sup>8</sup>은 40 TOPs, OX<sup>8</sup>은 70 TOPs, OX<sup>16</sup>은 100 TOPs로, AI 학습 및 응용 프로그램 개발에 따라 적합한 모델을 선택할 수 있습니다.

- **CPU와 GPU:** 모든 모델은 고성능 Arm Cortex-A78AE CPU를 사용하며, GPU의 성능도 모델에 따라 다릅니다. 이는 컴퓨터 비전과 딥러닝 알고리즘의 효율적인 처리에 중요한 요소입니다.

- **공유 메모리:** ON<sup>4</sup>는 4GB, ON<sup>8</sup>과 OX<sup>8</sup>은 8GB, OX<sup>16</sup>은 16GB의 메모리를 제공합니다. 이는 복잡한 데이터 세트와 알고리즘의 처리에 필요한 메모리 용량을 결정하는 데 중요합니다.

- **비디오 처리 능력:** 모델에 따라 다양한 해상도의 비디오 인코딩 및 디코딩을 지원합니다. 이는 머신 비전, 비디오 분석 등의 응용 프로그램에 중요합니다.

이러한 요소들을 고려하여 AI 및 컴퓨터 비전 프로젝트를 위한 EmVision 모델을 선택하세요.

<style>#emVision-spec {display: inline-block; margin: .5em .2em;} #emVision-spec td {font-size: 1em;}</style>
<table id="emVision-spec">
  <thead>
    <tr>
      <th style="text-align: center">&nbsp;</th>
      <th style="text-align: center">EmVision ON<sup>4</sup></th>
      <th style="text-align: center">EmVision ON<sup>8</sup></th>
      <th style="text-align: center">EmVision OX<sup>8</sup></th>
      <th style="text-align: center">EmVision OX<sup>16</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th style="text-align: center">AI 성능*</th>
      <td style="text-align: center">20 Tops</td>
      <td style="text-align: center">40 TOPs</td>
      <td style="text-align: center">70 TOPs</td>
      <td style="text-align: center">100 TOPs</td>
    </tr>
    <tr>
      <th style="text-align: center">CPU</th>
      <td style="text-align: center" colspan="3"> 6-core​<br>Arm® Cortex®-A78AE v8.2<br>64-bit CPU​ 1.5MB L2 + 4MB L3</td>
      <td style="text-align: center">8-core​<br>Arm® Cortex®-A78AE v8.2<br>64-bit CPU​ 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <th style="text-align: center">GPU</th>
      <td style="text-align: center">512-core​<br>NVIDIA Ampere architecture GPU​<br>with 16 Tensor Cores​</td>
      <td style="text-align: center" colspan="3">1024-core​<br>NVIDIA Ampere architecture GPU​<br>with 32 Tensor Cores</td>
    </tr>
    <tr>
      <th style="text-align: center">공유 메모리</th>
      <td style="text-align: center">4 GB 64-bit LPDDR5<br>​34 GB/s</td>
      <td style="text-align: center">8 GB 128-bit LPDDR5​<br>​68 GB/s</td>
      <td style="text-align: center">8 GB 128-bit LPDDR5​<br>​102.4GB/s</td>
      <td style="text-align: center">16 GB 128-bit LPDDR5​<br>​102.4GB/s</td>
    </tr>
    <tr>
      <th style="text-align: center">비디오 인코딩</th>
      <td style="text-align: center" colspan="2">1080p30 supported by 1-2 CPU cores​</td>
      <td style="text-align: center" colspan="2">1x 4K60 (H.265)​<br>3x 4K30 (H.265)​<br>6x 1080p60 (H.265)​<br>12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <th style="text-align: center">비디오 디코딩</th>
      <td style="text-align: center" colspan="2">1x 4K60 (H.265)<br>2x 4K30 (H.265)​<br>5x 1080p60 (H.265)<br>11x 1080p30 (H.265)​​</td>
      <td style="text-align: center" colspan="2">1x 8K30 (H.265)​<br>2x 4K60 (H.265)<br>4x 4K30 (H.265)​<br>9x 1080p60 (H.265)<br>18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <th style="text-align: center">전력</th>
      <td style="text-align: center">7W - 10W</td>
      <td style="text-align: center">7W - 15W</td>
      <td style="text-align: center">10W - 20W</td>
      <td style="text-align: center">10W - 25W</td>
    </tr>
  </tbody>
</table>

> **AI 성능**: TOPs(Tera Operations Per Second)는 초당 테라 연산 수를 나타내는 지표로, 주로 AI 및 딥러닝 하드웨어의 성능을 측정하는 데 사용됩니다. 이는 하드웨어가 초당 처리할 수 있는 연산의 총량을 의미하며, 높은 TOPs 값은 더 많은 연산을 빠르게 처리할 수 있음을 나타냅니다. AI 프로세서나 그래픽 카드에서 TOPs는 특히 중요한 지표로, 복잡한 딥러닝 모델과 알고리즘의 효율적인 처리 능력을 반영합니다. 따라서 AI 응용 프로그램과 태스크에 대한 하드웨어의 적합성을 평가하는 데 TOPs는 핵심적인 역할을 합니다.
