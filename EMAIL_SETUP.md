# 表单提交功能说明

## 🎯 当前实现方案

### 方案1: 使用 mailto 链接 (已实现)
- **优点**: 无需任何第三方服务，直接使用用户的邮件客户端
- **工作原理**: 用户提交表单后，自动打开默认邮件客户端，预填充所有信息
- **接收邮箱**: `info@tennerama.com`

### 工作流程
1. 用户填写联系表单
2. 点击"发送消息"按钮
3. 系统自动打开用户的默认邮件客户端（Gmail、Outlook、Apple Mail等）
4. 邮件内容已预填充，包含所有表单信息
5. 用户确认并发送邮件

### 邮件格式示例
```
收件人: info@tennerama.com
主题: Tennerama Franchise Inquiry

姓名: John Doe
邮箱: john@example.com
电话: +1-555-123-4567
位置: Toronto, ON

消息:
我对Tennerama加盟很感兴趣，想了解更多信息。

---
此咨询来自Tennerama加盟网站联系表单
```

## 🔧 其他可选方案

### 方案2: 使用 Formspree (推荐)
- 免费服务，无需注册复杂账户
- 直接发送到你的邮箱
- 设置简单，只需几行代码

### 方案3: 使用 Netlify Forms
- 如果部署在Netlify上，内置表单处理
- 完全免费
- 自动发送到指定邮箱

### 方案4: 自建后端API
- 完全控制数据流向
- 可以存储到数据库
- 需要服务器和域名

## 📧 如何查看提交的信息

### 当前方案 (mailto)
- 查看 `info@tennerama.com` 邮箱
- 邮件会直接发送到你的收件箱

### 如果使用其他方案
- Formspree: 在Formspree Dashboard查看
- Netlify Forms: 在Netlify Dashboard查看
- 自建API: 查看服务器日志或数据库

## 🚀 升级建议

如果你想要更专业的表单处理，建议：

1. **Formspree** - 最简单，免费版每月100次提交
2. **Netlify Forms** - 如果使用Netlify部署
3. **自建API** - 如果需要完全控制

## 📝 当前状态
✅ 表单功能已实现
✅ 使用mailto链接发送邮件
✅ 无需任何第三方服务
✅ 用户友好，直接使用熟悉的邮件客户端 