# DNS Configuration Guide for enai.ai
## Email Security & SEO Enhancement

This guide provides step-by-step instructions for configuring DNS records to improve email security, deliverability, and SEO.

---

## 🔐 DMARC Record Configuration (HIGH PRIORITY)

### What is DMARC?
DMARC (Domain-based Message Authentication, Reporting, and Conformance) prevents email spoofing and improves deliverability. Gmail, Outlook, and other major providers now require DMARC for bulk senders.

### Current Status
❌ **Not Configured** - SEOptimer audit shows no DMARC record

### Implementation Steps

#### Step 1: Access Your DNS Provider
Your domain `enai.ai` is hosted with DNS servers:
- `dns1.registrar-servers.com`
- `dns2.registrar-servers.com`

Log into your domain registrar (likely Namecheap, GoDaddy, or similar).

#### Step 2: Add DMARC Record

**Record Type:** TXT  
**Host/Name:** `_dmarc`  
**Value:** Choose one of the options below:

##### Option 1: Relaxed Policy (RECOMMENDED FOR START)
```
v=DMARC1; p=none; rua=mailto:dmarc-reports@enai.ai; ruf=mailto:dmarc-failures@enai.ai; fo=1; pct=100
```

**Explanation:**
- `v=DMARC1` - DMARC version
- `p=none` - Monitor only, don't reject (safe for testing)
- `rua` - Aggregate reports email
- `ruf` - Forensic/failure reports email
- `fo=1` - Generate report if any auth mechanism fails
- `pct=100` - Apply policy to 100% of emails

##### Option 2: Quarantine Policy (After 30 Days of Monitoring)
```
v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@enai.ai; ruf=mailto:dmarc-failures@enai.ai; fo=1; pct=100; adkim=r; aspf=r
```

**Explanation:**
- `p=quarantine` - Suspicious emails go to spam
- `adkim=r` - Relaxed DKIM alignment
- `aspf=r` - Relaxed SPF alignment

##### Option 3: Strict Policy (After 90 Days - MAXIMUM PROTECTION)
```
v=DMARC1; p=reject; rua=mailto:dmarc-reports@enai.ai; ruf=mailto:dmarc-failures@enai.ai; fo=1; pct=100; adkim=s; aspf=s
```

**Explanation:**
- `p=reject` - Reject all emails that fail authentication
- `adkim=s` - Strict DKIM alignment
- `aspf=s` - Strict SPF alignment

#### Step 3: Set Up Report Email Addresses

Before adding the DMARC record, create these email addresses:
- `dmarc-reports@enai.ai` - For aggregate reports
- `dmarc-failures@enai.ai` - For failure reports

Alternatively, use a DMARC monitoring service:
- **Postmark** (Free): https://dmarc.postmarkapp.com
- **DMARC Analyzer**: https://www.dmarcanalyzer.com
- **Valimail**: https://www.valimail.com

#### Step 4: Verification

After adding the record (wait 24-48 hours for DNS propagation):

**Using Command Line:**
```bash
dig TXT _dmarc.enai.ai
```

**Using Online Tools:**
- MXToolbox: https://mxtoolbox.com/dmarc.aspx
- DMARC Inspector: https://dmarcian.com/dmarc-inspector/

---

## 📧 SPF Record Review

### Current SPF Record
✅ **Already Configured:**
```
v=spf1 include:spf.privateemail.com ~all
```

### Recommended Enhancement

If you use additional email services, update your SPF record:

```
v=spf1 include:spf.privateemail.com include:_spf.google.com include:spf.sendgrid.net include:mail.zendesk.com ~all
```

**Common Includes:**
- Google Workspace: `include:_spf.google.com`
- SendGrid: `include:spf.sendgrid.net`
- Mailgun: `include:mailgun.org`
- Mailchimp: `include:servers.mcsv.net`
- Zendesk: `include:mail.zendesk.com`
- Intercom: `include:_spf.intercom.com`
- HubSpot: `include:_spf.hubspot.com`

**⚠️ Important:**
- Maximum 10 DNS lookups allowed
- Use `~all` (soft fail) or `-all` (hard fail)
- Don't exceed the lookup limit

---

## 🔑 DKIM Record Setup

### What is DKIM?
DKIM (DomainKeys Identified Mail) adds a digital signature to your emails.

### Current Status
Check with your email provider (PrivateEmail) for DKIM setup instructions.

### General Steps

1. **Generate DKIM Keys**
   - Log into your email provider
   - Navigate to DKIM settings
   - Generate key pair

2. **Add DNS Record**
   - **Type:** TXT
   - **Host:** `[selector]._domainkey.enai.ai`
   - **Value:** Public key provided by email provider
   - **TTL:** 3600

3. **Verify**
   ```bash
   dig TXT default._domainkey.enai.ai
   ```

---

## 🌐 Additional DNS Records for SEO

### CAA Record (Certificate Authority Authorization)

**Purpose:** Specifies which CAs can issue SSL certificates for your domain.

**Record Type:** CAA  
**Host:** `@` or `enai.ai`  
**Value:**
```
0 issue "letsencrypt.org"
0 issuewild "letsencrypt.org"
0 iodef "mailto:security@enai.ai"
```

### BIMI Record (Brand Indicators for Message Identification)

**⚠️ Requires:**
- DMARC policy of `p=quarantine` or `p=reject`
- Verified Mark Certificate (VMC)

**Record Type:** TXT  
**Host:** `default._bimi.enai.ai`  
**Value:**
```
v=BIMI1; l=https://www.enai.ai/enai-logo.svg; a=https://www.enai.ai/vmc-cert.pem
```

**Note:** BIMI is advanced. Implement after DMARC is stable.

---

## 📊 DNS Record Summary

Here's a complete list of DNS records you should have:

### A Record
```
Host: @
Type: A
Value: [Your server IP - Currently using Netlify]
TTL: 3600
```

### CNAME Records
```
Host: www
Type: CNAME
Value: [Your Netlify domain].netlify.app
TTL: 3600
```

### MX Records
```
Host: @
Type: MX
Priority: 10
Value: [Your mail server from PrivateEmail]
TTL: 3600
```

### TXT Records
```
1. SPF Record:
   Host: @
   Type: TXT
   Value: v=spf1 include:spf.privateemail.com ~all
   TTL: 3600

2. DMARC Record (ADD THIS):
   Host: _dmarc
   Type: TXT
   Value: v=DMARC1; p=none; rua=mailto:dmarc-reports@enai.ai; ruf=mailto:dmarc-failures@enai.ai; fo=1; pct=100
   TTL: 3600

3. Domain Verification (Google):
   Host: @
   Type: TXT
   Value: google-site-verification=[YOUR_CODE]
   TTL: 3600

4. Domain Verification (Bing):
   Host: @
   Type: TXT
   Value: [YOUR_BING_CODE]
   TTL: 3600
```

### DKIM Record (Check with PrivateEmail)
```
Host: default._domainkey
Type: TXT
Value: [Provided by PrivateEmail]
TTL: 3600
```

---

## 🧪 Testing & Verification

### Email Authentication Tests

1. **Mail-Tester**
   - Send email to the address provided at https://www.mail-tester.com
   - Check score (should be 10/10 after all configurations)

2. **Google's CheckMX**
   - https://toolbox.googleapps.com/apps/checkmx/
   - Enter: enai.ai
   - Review all checks

3. **MXToolbox Suite**
   - https://mxtoolbox.com/SuperTool.aspx
   - Check SPF, DMARC, DKIM, blacklist status

### DNS Propagation Check

After making changes, verify propagation:
- https://www.whatsmydns.net
- Enter your domain and record type
- Check multiple locations worldwide

---

## 📅 Implementation Timeline

### Week 1: Initial Setup
- [ ] Day 1: Create report email addresses
- [ ] Day 1: Add DMARC record with `p=none`
- [ ] Day 2: Verify DMARC propagation
- [ ] Day 3: Configure DKIM with PrivateEmail
- [ ] Day 4: Review SPF record
- [ ] Day 5: Test email authentication (Mail-Tester)
- [ ] Day 7: Monitor initial DMARC reports

### Week 2-4: Monitoring
- [ ] Review DMARC reports daily
- [ ] Identify any authentication failures
- [ ] Fix issues with legitimate emails
- [ ] Verify all sending sources are authorized

### Month 2: Strengthen Policy
- [ ] Change DMARC to `p=quarantine`
- [ ] Monitor for 30 days
- [ ] Ensure no legitimate emails affected

### Month 3: Maximum Protection
- [ ] Change DMARC to `p=reject`
- [ ] Set strict alignment (adkim=s, aspf=s)
- [ ] Continue monitoring

---

## 🚨 Troubleshooting

### Common Issues

**1. DMARC Reports Not Arriving**
- Check email addresses are correct
- Verify DNS record propagation
- Consider using DMARC monitoring service

**2. Legitimate Emails Failing**
- Review DMARC reports
- Check SPF includes all sending sources
- Verify DKIM signing for all sources
- Start with `p=none` policy

**3. Too Many DNS Lookups in SPF**
- Consolidate includes
- Use IP addresses instead of includes where possible
- Remove unused services

**4. DKIM Not Working**
- Verify selector is correct
- Check public key is properly formatted
- Contact email provider support

---

## 📖 Additional Resources

### Official Documentation
- **DMARC.org:** https://dmarc.org
- **SPF Record Syntax:** https://www.rfc-editor.org/rfc/rfc7208.html
- **DKIM:** https://www.dkim.org

### Tools & Services
- **DMARC Analyzer:** https://www.dmarcanalyzer.com
- **Postmark DMARC:** https://dmarc.postmarkapp.com
- **MXToolbox:** https://mxtoolbox.com
- **Mail-Tester:** https://www.mail-tester.com
- **Google CheckMX:** https://toolbox.googleapps.com/apps/checkmx/

### Email Provider Documentation
- **PrivateEmail Support:** Contact for DKIM setup
- **Google Workspace:** https://support.google.com/a/answer/174124
- **SendGrid:** https://docs.sendgrid.com/ui/account-and-settings/dmarc

---

## ✅ Checklist

### Pre-Implementation
- [ ] Backup current DNS records
- [ ] Create report email addresses
- [ ] Identify all email sending services
- [ ] Review current SPF record

### Implementation
- [ ] Add DMARC record with `p=none`
- [ ] Verify SPF record includes all senders
- [ ] Set up DKIM with email provider
- [ ] Add Google/Bing verification records

### Post-Implementation
- [ ] Wait 24-48 hours for propagation
- [ ] Verify records using online tools
- [ ] Send test emails
- [ ] Check Mail-Tester score
- [ ] Monitor DMARC reports
- [ ] Document all changes

### Ongoing
- [ ] Review DMARC reports weekly
- [ ] Update SPF when adding services
- [ ] Rotate DKIM keys annually
- [ ] Monitor email deliverability
- [ ] Keep documentation updated

---

## 📞 Support Contacts

**Domain Registrar:** [Your registrar - update this]
**Email Provider:** PrivateEmail
**DNS Provider:** Same as registrar
**Technical Support:** enai.ai technical team

---

**Last Updated:** October 2, 2025  
**Next Review:** After DMARC implementation (1 week)  
**Status:** Ready for Implementation

