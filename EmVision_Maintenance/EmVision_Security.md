---
title: EmVision 보안
---

## EmVision 보안 관리

### SSH 접속에 사용되는 비밀번호 변경

EmVision의 초기 비밀번호는 `hanul`입니다.
외부네트워크 접속을 허용하거나 공용 네트워크에 연결된 경우에는 비밀번호를 변경하는 것이 좋습니다.
다음 명령을 사용하여 EmVision의 비밀번호를 변경할 수 있습니다.

```bash
sudo passwd hanul
# 기존 비밀번호 입력
# 새 비밀번호 입력
# 새 비밀번호 재입력
# 출력:
#   passwd: password updated successfully
```
