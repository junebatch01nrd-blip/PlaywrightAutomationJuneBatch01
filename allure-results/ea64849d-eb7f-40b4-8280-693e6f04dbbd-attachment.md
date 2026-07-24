# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandleAlerts.spec.ts >> handle multiple alerts in one test
- Location: tests\HandleAlerts.spec.ts:97:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#3333myName')
Expected substring: "Playwright Combined Test"
SyntaxError: Failed to execute 'querySelectorAll' on 'Document': '#3333myName' is not a valid selector.
    at query (<anonymous>:5334:41)
    at <anonymous>:5344:7
    at SelectorEvaluatorImpl._cached (<anonymous>:5121:20)
    at SelectorEvaluatorImpl._queryCSS (<anonymous>:5331:17)
    at SelectorEvaluatorImpl._querySimple (<anonymous>:5211:19)
    at <anonymous>:5159:29
    at SelectorEvaluatorImpl._cached (<anonymous>:5121:20)
    at SelectorEvaluatorImpl.query (<anonymous>:5152:19)
    at Object.query (<anonymous>:5366:44)
    at <anonymous>:5324:21

Call log:
  - Expect "toContainText" with timeout 15000ms
  - waiting for locator('#3333myName')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - navigation "main navigation" [ref=e4]:
      - generic [ref=e5]:
        - link "LetCode Home" [ref=e6] [cursor=pointer]:
          - /url: /
          - img "LetCode" [ref=e7]
        - generic [ref=e8]:
          - link "Work-Space" [ref=e9] [cursor=pointer]:
            - /url: /test
          - generic [ref=e10]:
            - button "Products" [ref=e11] [cursor=pointer]:
              - text: Products
              - img [ref=e12]
            - generic:
              - link "Ortoni Report":
                - /url: /product/ortoni-report
              - link "LetXPath":
                - /url: /product/letxpath
              - link "Playwright Runner":
                - /url: /product/playwright-runner
          - generic [ref=e15]:
            - button "Grooming" [ref=e16] [cursor=pointer]:
              - text: Grooming
              - img [ref=e17]
            - generic:
              - link "Test Practice":
                - /url: /test-practice
              - link "Interview Q & A":
                - /url: /interview
              - link "Playwright Quiz":
                - /url: /pw-quiz
          - link "Courses" [ref=e20] [cursor=pointer]:
            - /url: /courses
          - link "Contact" [ref=e21] [cursor=pointer]:
            - /url: /contact
        - button "Switch to dark mode" [ref=e23] [cursor=pointer]:
          - img [ref=e24]
    - main [ref=e26]:
      - generic [ref=e28]:
        - generic [ref=e30]:
          - navigation "Breadcrumb" [ref=e31]:
            - link "Workspace" [ref=e32] [cursor=pointer]:
              - /url: /test
              - img [ref=e33]
              - generic [ref=e38]: Workspace
            - img [ref=e39]
            - generic [ref=e41]: Alert
          - heading "Alert" [level=1] [ref=e44]
        - generic [ref=e46]:
          - generic [ref=e48]:
            - generic [ref=e49]:
              - generic [ref=e50]: Accept the Alert
              - button "Simple Alert" [ref=e52] [cursor=pointer]
            - generic [ref=e53]:
              - generic [ref=e54]: Dismiss the Alert & print the alert text
              - button "Confirm Alert" [ref=e56] [cursor=pointer]
              - generic [ref=e57]: "User selected: OK (True)"
            - generic [ref=e58]:
              - generic [ref=e59]: Type your name & accept
              - generic [ref=e60]:
                - button "Prompt Alert" [active] [ref=e61] [cursor=pointer]
                - paragraph [ref=e63]: "Your name is: Playwright Combined Test"
            - generic [ref=e64]:
              - generic [ref=e65]: Sweet alert
              - button "Modern Alert" [ref=e67] [cursor=pointer]
          - generic [ref=e69]:
            - generic [ref=e70]:
              - img [ref=e71]
              - heading "Learning Points" [level=3] [ref=e74]
            - list [ref=e75]:
              - listitem [ref=e76]:
                - img [ref=e77]
                - generic [ref=e80]:
                  - text: switchTo()
                  - link "Machine Learning & Artificial Intelligence" [ref=e81] [cursor=pointer]:
                    - img [ref=e83]
                    - text: Machine Learning & Artificial Intelligence
              - listitem [ref=e85]:
                - img [ref=e86]
                - generic [ref=e89]: accept()
              - listitem [ref=e90]:
                - img [ref=e91]
                - generic [ref=e94]: dismiss()
              - listitem [ref=e95]:
                - img [ref=e96]
                - generic [ref=e99]: getText()
              - listitem [ref=e100]:
                - img [ref=e101]
                - generic [ref=e104]: sendKeys()
              - listitem [ref=e105]:
                - img [ref=e106]
                - generic [ref=e109]: Sweet Alert
            - generic [ref=e110]:
              - link "Watch Tutorial" [ref=e111] [cursor=pointer]:
                - /url: /video/alert
                - img [ref=e112]
                - generic [ref=e114]: Watch Tutorial
              - generic [ref=e115]:
                - text: "Practice ID:"
                - code [ref=e116]: alert
          - generic [ref=e117]:
            - generic:
              - generic:
                - insertion
        - generic:
          - generic:
            - generic:
              - insertion
    - contentinfo [ref=e118]:
      - generic [ref=e119]:
        - paragraph [ref=e120]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e121] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e122] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e123]:
          - link "GitHub" [ref=e124] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
            - img [ref=e125]
          - link "YouTube" [ref=e128] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e129]
          - link "LinkedIn" [ref=e132] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e133]
          - link "Contact" [ref=e138] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e139] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e141]:
    - generic [ref=e144]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e146]: Discover more
      - link "Technical support services" [ref=e147] [cursor=pointer]:
        - generic "Technical support services" [ref=e148]
        - img [ref=e150]
      - link "Linux & Unix" [ref=e152] [cursor=pointer]:
        - generic "Linux & Unix" [ref=e153]
        - img [ref=e155]
      - link "Distance Learning" [ref=e157] [cursor=pointer]:
        - generic "Distance Learning" [ref=e158]
        - img [ref=e160]
```