---
title: 성능
---

# 모델 별 성능

## 연산 성능 및 전력 소모

<style>#emVision-spec {display: inline-block; margin: 0.5em 1em;} #emVision-spec td {font-size: 1em;}</style>
<div style="white-space: nowrap; overflow-x: auto; overflow-y: hidden;">
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
      <th style="text-align: center">AI 성능</th>
      <td style="text-align: center">20 Tops</td>
      <td style="text-align: center">40 TOPs</td>
      <td style="text-align: center">70 TOPs</td>
      <td style="text-align: center">100 TOPs</td>
    </tr>
    <tr>
      <th style="text-align: center">CPU</th>
      <td style="text-align: center" colspan="3"> 6-core​<br>Arm® Cortex®-A78AE v8.2<br>64-bit CPU​ 1.5MB L2 + 4MB L3</td>
      <td style="text-align: center">1024-core​<br>NVIDIA Ampere architecture GPU​<br>with 32 Tensor Cores​</td>
    </tr>
    <tr>
      <th style="text-align: center">GPU</th>
      <td style="text-align: center">512-core​<br>NVIDIA Ampere architecture GPU​<br>with 16 Tensor Cores​</td>
      <td style="text-align: center" colspan="3"> 6-core​<br>Arm® Cortex®-A78AE v8.2<br>64-bit CPU​ 1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <th style="text-align: center">공유 메모리</th>
      <td style="text-align: center">4 GB 64-bit LPDDR5​ 34 GB/s</td>
      <td style="text-align: center">8 GB 128-bit LPDDR5​ 68 GB/s</td>
      <td style="text-align: center">8 GB 128-bit LPDDR5​ 102.4GB/s</td>
      <td style="text-align: center">16 GB 128-bit LPDDR5​ 102.4GB/s</td>
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
</div>
