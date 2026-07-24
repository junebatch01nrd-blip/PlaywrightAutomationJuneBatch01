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
                - generic [ref=e80]: switchTo()
              - listitem [ref=e81]:
                - img [ref=e82]
                - generic [ref=e85]: accept()
              - listitem [ref=e86]:
                - img [ref=e87]
                - generic [ref=e90]: dismiss()
              - listitem [ref=e91]:
                - img [ref=e92]
                - generic [ref=e95]:
                  - text: getText()
                  - link "Linux & Unix" [ref=e96] [cursor=pointer]:
                    - img [ref=e98]
                    - text: Linux & Unix
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
                - insertion:
                  - iframe [ref=e119]:
                    
        - insertion [ref=e123]:
          - generic [ref=e125]:
            - generic "These are topics related to the article that might interest you" [ref=e126]: Discover more
            - link "Educational Resources" [ref=e127] [cursor=pointer]:
              - img [ref=e129]
              - text: Educational Resources
            - link "Ortoni Report tool" [ref=e131] [cursor=pointer]:
              - img [ref=e133]
              - text: Ortoni Report tool
            - link "Playwright Runner tool" [ref=e135] [cursor=pointer]:
              - img [ref=e137]
              - text: Playwright Runner tool
            - link "Training & Certification" [ref=e139] [cursor=pointer]:
              - img [ref=e141]
              - text: Training & Certification
            - link "LetCode tutorials" [ref=e143] [cursor=pointer]:
              - img [ref=e145]
              - text: LetCode tutorials
            - link "Distance Learning" [ref=e147] [cursor=pointer]:
              - img [ref=e149]
              - text: Distance Learning
            - link "Ancestry & Genealogy" [ref=e151] [cursor=pointer]:
              - img [ref=e153]
              - text: Ancestry & Genealogy
            - link "Linux & Unix" [ref=e155] [cursor=pointer]:
              - img [ref=e157]
              - text: Linux & Unix
            - link "Machine Learning & Artificial Intelligence" [ref=e159] [cursor=pointer]:
              - img [ref=e161]
              - text: Machine Learning & Artificial Intelligence
            - link "Technical support services" [ref=e163] [cursor=pointer]:
              - img [ref=e165]
              - text: Technical support services
    - contentinfo [ref=e167]:
      - generic [ref=e168]:
        - paragraph [ref=e169]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e170] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e171] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e172]:
          - link "GitHub" [ref=e173] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
            - img [ref=e174]
          - link "YouTube" [ref=e177] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e178]
          - link "LinkedIn" [ref=e181] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e182]
          - link "Contact" [ref=e187] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e188] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - generic:
    - insertion:
      - iframe [ref=e190]:
        
  - insertion [ref=e191]:
    - iframe [ref=e194]:
      - generic [active] [ref=f6e1]:
        - generic [ref=f6e6]:
          - generic [ref=f6e7]:
            - generic "OPScloudio" [ref=f6e8]:
              - link "OPScloudio" [ref=f6e9] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CWGEq75hCapfCI9zTmsMPzuLIkAi57LzbhwHotOuk2xXAjbcBEAEg05GWImDl6uaDvA6gAYiN3uhDyAEBqAMByAPDBKoE9QFP0Ec-LsW6YZ10SFmT_Ottj0UOzaaID3t62S9uB4WMBVA4jZCnIGGHbxyQT1e__mekUhUEhVTArMgwAK71AI7c8SakIyXxs2FW8gFjVFMiGxeRoJ2fzHnG35d3sLPPVld8FDwk4QkfkKNDlsO3NELfcFmYBJbkZKQpi8wvevC_GNeM7icHoaFzEgXYA6Dtt5JfZIhGi630HReDoTcf-IyGJ1x5L06hyYIIW8_Unjc5RPps393QP3Kkpzo8Ij6UBrdbDoL-I1J_NpB8MvyUFoa288xbp93P-0e0cAvBOwTSBaazHyBd4WbcsrStSUTJfZcVGcQAEMAE1_eZnOoFiAXG3ZWSWaAGZoAHiMWuyB6oB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJ_N9pDrrJUDYAGxCZJynuY7JvDIgAoBmAsByAsBogwMKgoKCI7fsQKV4rECqg0CSU7IDQHqDRMIg_z2kOuslQMV3KlmAh1OMRKC8A0CiA4J2BMK0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAUYZiIBANAYAcIZAggB&ae=1&gclid=EAIaIQobChMI1_X2kOuslQMV3KlmAh1OMRKCEAEYASAAEgJvv_D_BwE&num=1&cid=CAQSngIAEQoqgW525OSkTaY8yOkVTvzj5KGvuULMZl5KePx04zIfCi3Wxpx6XXHdratHvw2VGTbCoO7wjDTVsenAhC8NvHKzLMsye1mtDTvhZ6jCTgn3b1RLpTkhpRSsTyFAcxetsbZ2SDNXJtNaDuPrFkRNsh4cFCr1sDKDxZHu1kp2Qq4Y2ZWOk1zS-UbEHUWr1_grr-pVgGI46KFYT1auj7fjTdYNnXx5NxOvoICh5E_agiKFk_PzxufFgo4oX-jEE6wkvgoy3rMSwqlUgOT8rKxsCmzjiXmXEnlyTuQwp0gM30uc4jnZGjlNMzfUn_7v1CyTV_zTYYBeVY4eLH_UEMKkjRfKOmorsdVvTj_XD4BVkDLJLzka2hxH7PZhF3tDGAE&sig=AOD64_3VSkaeM1LiJNcXCc_DA_hf6e9fcg&client=ca-pub-6251538267574677&rf=1&nb=1&adurl=https://opscloudio.com/%3Futm-source%3DO8X6gx9u%26gad_source%3D5%26gad_campaignid%3D23928860358%26gclid%3DEAIaIQobChMI1_X2kOuslQMV3KlmAh1OMRKCEAEYASAAEgJvv_D_BwE
            - generic "OPScloudio" [ref=f6e10]:
              - link "Device Monetization SDK" [ref=f6e11] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CWGEq75hCapfCI9zTmsMPzuLIkAi57LzbhwHotOuk2xXAjbcBEAEg05GWImDl6uaDvA6gAYiN3uhDyAEBqAMByAPDBKoE9QFP0Ec-LsW6YZ10SFmT_Ottj0UOzaaID3t62S9uB4WMBVA4jZCnIGGHbxyQT1e__mekUhUEhVTArMgwAK71AI7c8SakIyXxs2FW8gFjVFMiGxeRoJ2fzHnG35d3sLPPVld8FDwk4QkfkKNDlsO3NELfcFmYBJbkZKQpi8wvevC_GNeM7icHoaFzEgXYA6Dtt5JfZIhGi630HReDoTcf-IyGJ1x5L06hyYIIW8_Unjc5RPps393QP3Kkpzo8Ij6UBrdbDoL-I1J_NpB8MvyUFoa288xbp93P-0e0cAvBOwTSBaazHyBd4WbcsrStSUTJfZcVGcQAEMAE1_eZnOoFiAXG3ZWSWaAGZoAHiMWuyB6oB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJ_N9pDrrJUDYAGxCZJynuY7JvDIgAoBmAsByAsBogwMKgoKCI7fsQKV4rECqg0CSU7IDQHqDRMIg_z2kOuslQMV3KlmAh1OMRKC8A0CiA4J2BMK0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAUYZiIBANAYAcIZAggB&ae=1&gclid=EAIaIQobChMI1_X2kOuslQMV3KlmAh1OMRKCEAEYASAAEgJvv_D_BwE&num=1&cid=CAQSngIAEQoqgW525OSkTaY8yOkVTvzj5KGvuULMZl5KePx04zIfCi3Wxpx6XXHdratHvw2VGTbCoO7wjDTVsenAhC8NvHKzLMsye1mtDTvhZ6jCTgn3b1RLpTkhpRSsTyFAcxetsbZ2SDNXJtNaDuPrFkRNsh4cFCr1sDKDxZHu1kp2Qq4Y2ZWOk1zS-UbEHUWr1_grr-pVgGI46KFYT1auj7fjTdYNnXx5NxOvoICh5E_agiKFk_PzxufFgo4oX-jEE6wkvgoy3rMSwqlUgOT8rKxsCmzjiXmXEnlyTuQwp0gM30uc4jnZGjlNMzfUn_7v1CyTV_zTYYBeVY4eLH_UEMKkjRfKOmorsdVvTj_XD4BVkDLJLzka2hxH7PZhF3tDGAE&sig=AOD64_3VSkaeM1LiJNcXCc_DA_hf6e9fcg&client=ca-pub-6251538267574677&rf=1&nb=0&adurl=https://opscloudio.com/%3Futm-source%3DO8X6gx9u%26gad_source%3D5%26gad_campaignid%3D23928860358%26gclid%3DEAIaIQobChMI1_X2kOuslQMV3KlmAh1OMRKCEAEYASAAEgJvv_D_BwE
            - generic "OPScloudio" [ref=f6e12]:
              - link "#1 App Monetization Solution" [ref=f6e13] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CWGEq75hCapfCI9zTmsMPzuLIkAi57LzbhwHotOuk2xXAjbcBEAEg05GWImDl6uaDvA6gAYiN3uhDyAEBqAMByAPDBKoE9QFP0Ec-LsW6YZ10SFmT_Ottj0UOzaaID3t62S9uB4WMBVA4jZCnIGGHbxyQT1e__mekUhUEhVTArMgwAK71AI7c8SakIyXxs2FW8gFjVFMiGxeRoJ2fzHnG35d3sLPPVld8FDwk4QkfkKNDlsO3NELfcFmYBJbkZKQpi8wvevC_GNeM7icHoaFzEgXYA6Dtt5JfZIhGi630HReDoTcf-IyGJ1x5L06hyYIIW8_Unjc5RPps393QP3Kkpzo8Ij6UBrdbDoL-I1J_NpB8MvyUFoa288xbp93P-0e0cAvBOwTSBaazHyBd4WbcsrStSUTJfZcVGcQAEMAE1_eZnOoFiAXG3ZWSWaAGZoAHiMWuyB6oB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJ_N9pDrrJUDYAGxCZJynuY7JvDIgAoBmAsByAsBogwMKgoKCI7fsQKV4rECqg0CSU7IDQHqDRMIg_z2kOuslQMV3KlmAh1OMRKC8A0CiA4J2BMK0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAUYZiIBANAYAcIZAggB&ae=1&gclid=EAIaIQobChMI1_X2kOuslQMV3KlmAh1OMRKCEAEYASAAEgJvv_D_BwE&num=1&cid=CAQSngIAEQoqgW525OSkTaY8yOkVTvzj5KGvuULMZl5KePx04zIfCi3Wxpx6XXHdratHvw2VGTbCoO7wjDTVsenAhC8NvHKzLMsye1mtDTvhZ6jCTgn3b1RLpTkhpRSsTyFAcxetsbZ2SDNXJtNaDuPrFkRNsh4cFCr1sDKDxZHu1kp2Qq4Y2ZWOk1zS-UbEHUWr1_grr-pVgGI46KFYT1auj7fjTdYNnXx5NxOvoICh5E_agiKFk_PzxufFgo4oX-jEE6wkvgoy3rMSwqlUgOT8rKxsCmzjiXmXEnlyTuQwp0gM30uc4jnZGjlNMzfUn_7v1CyTV_zTYYBeVY4eLH_UEMKkjRfKOmorsdVvTj_XD4BVkDLJLzka2hxH7PZhF3tDGAE&sig=AOD64_3VSkaeM1LiJNcXCc_DA_hf6e9fcg&client=ca-pub-6251538267574677&rf=1&nb=0&adurl=https://opscloudio.com/%3Futm-source%3DO8X6gx9u%26gad_source%3D5%26gad_campaignid%3D23928860358%26gclid%3DEAIaIQobChMI1_X2kOuslQMV3KlmAh1OMRKCEAEYASAAEgJvv_D_BwE
            - generic "OPScloudio" [ref=f6e14]:
              - link "No user disruption, no performance loss — just extra earnings from your hardware." [ref=f6e15] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CWGEq75hCapfCI9zTmsMPzuLIkAi57LzbhwHotOuk2xXAjbcBEAEg05GWImDl6uaDvA6gAYiN3uhDyAEBqAMByAPDBKoE9QFP0Ec-LsW6YZ10SFmT_Ottj0UOzaaID3t62S9uB4WMBVA4jZCnIGGHbxyQT1e__mekUhUEhVTArMgwAK71AI7c8SakIyXxs2FW8gFjVFMiGxeRoJ2fzHnG35d3sLPPVld8FDwk4QkfkKNDlsO3NELfcFmYBJbkZKQpi8wvevC_GNeM7icHoaFzEgXYA6Dtt5JfZIhGi630HReDoTcf-IyGJ1x5L06hyYIIW8_Unjc5RPps393QP3Kkpzo8Ij6UBrdbDoL-I1J_NpB8MvyUFoa288xbp93P-0e0cAvBOwTSBaazHyBd4WbcsrStSUTJfZcVGcQAEMAE1_eZnOoFiAXG3ZWSWaAGZoAHiMWuyB6oB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJ_N9pDrrJUDYAGxCZJynuY7JvDIgAoBmAsByAsBogwMKgoKCI7fsQKV4rECqg0CSU7IDQHqDRMIg_z2kOuslQMV3KlmAh1OMRKC8A0CiA4J2BMK0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAUYZiIBANAYAcIZAggB&ae=1&gclid=EAIaIQobChMI1_X2kOuslQMV3KlmAh1OMRKCEAEYASAAEgJvv_D_BwE&num=1&cid=CAQSngIAEQoqgW525OSkTaY8yOkVTvzj5KGvuULMZl5KePx04zIfCi3Wxpx6XXHdratHvw2VGTbCoO7wjDTVsenAhC8NvHKzLMsye1mtDTvhZ6jCTgn3b1RLpTkhpRSsTyFAcxetsbZ2SDNXJtNaDuPrFkRNsh4cFCr1sDKDxZHu1kp2Qq4Y2ZWOk1zS-UbEHUWr1_grr-pVgGI46KFYT1auj7fjTdYNnXx5NxOvoICh5E_agiKFk_PzxufFgo4oX-jEE6wkvgoy3rMSwqlUgOT8rKxsCmzjiXmXEnlyTuQwp0gM30uc4jnZGjlNMzfUn_7v1CyTV_zTYYBeVY4eLH_UEMKkjRfKOmorsdVvTj_XD4BVkDLJLzka2hxH7PZhF3tDGAE&sig=AOD64_3VSkaeM1LiJNcXCc_DA_hf6e9fcg&client=ca-pub-6251538267574677&rf=1&nb=7&adurl=https://opscloudio.com/%3Futm-source%3DO8X6gx9u%26gad_source%3D5%26gad_campaignid%3D23928860358%26gclid%3DEAIaIQobChMI1_X2kOuslQMV3KlmAh1OMRKCEAEYASAAEgJvv_D_BwE
                - text: No user disruption, no performance loss — just extra earnings
                - text: from your hardware.
          - link "OPEN" [ref=f6e19] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CWGEq75hCapfCI9zTmsMPzuLIkAi57LzbhwHotOuk2xXAjbcBEAEg05GWImDl6uaDvA6gAYiN3uhDyAEBqAMByAPDBKoE9QFP0Ec-LsW6YZ10SFmT_Ottj0UOzaaID3t62S9uB4WMBVA4jZCnIGGHbxyQT1e__mekUhUEhVTArMgwAK71AI7c8SakIyXxs2FW8gFjVFMiGxeRoJ2fzHnG35d3sLPPVld8FDwk4QkfkKNDlsO3NELfcFmYBJbkZKQpi8wvevC_GNeM7icHoaFzEgXYA6Dtt5JfZIhGi630HReDoTcf-IyGJ1x5L06hyYIIW8_Unjc5RPps393QP3Kkpzo8Ij6UBrdbDoL-I1J_NpB8MvyUFoa288xbp93P-0e0cAvBOwTSBaazHyBd4WbcsrStSUTJfZcVGcQAEMAE1_eZnOoFiAXG3ZWSWaAGZoAHiMWuyB6oB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJ_N9pDrrJUDYAGxCZJynuY7JvDIgAoBmAsByAsBogwMKgoKCI7fsQKV4rECqg0CSU7IDQHqDRMIg_z2kOuslQMV3KlmAh1OMRKC8A0CiA4J2BMK0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAUYZiIBANAYAcIZAggB&ae=1&gclid=EAIaIQobChMI1_X2kOuslQMV3KlmAh1OMRKCEAEYASAAEgJvv_D_BwE&num=1&cid=CAQSngIAEQoqgW525OSkTaY8yOkVTvzj5KGvuULMZl5KePx04zIfCi3Wxpx6XXHdratHvw2VGTbCoO7wjDTVsenAhC8NvHKzLMsye1mtDTvhZ6jCTgn3b1RLpTkhpRSsTyFAcxetsbZ2SDNXJtNaDuPrFkRNsh4cFCr1sDKDxZHu1kp2Qq4Y2ZWOk1zS-UbEHUWr1_grr-pVgGI46KFYT1auj7fjTdYNnXx5NxOvoICh5E_agiKFk_PzxufFgo4oX-jEE6wkvgoy3rMSwqlUgOT8rKxsCmzjiXmXEnlyTuQwp0gM30uc4jnZGjlNMzfUn_7v1CyTV_zTYYBeVY4eLH_UEMKkjRfKOmorsdVvTj_XD4BVkDLJLzka2hxH7PZhF3tDGAE&sig=AOD64_3VSkaeM1LiJNcXCc_DA_hf6e9fcg&client=ca-pub-6251538267574677&rf=1&nb=8&adurl=https://opscloudio.com/%3Futm-source%3DO8X6gx9u%26gad_source%3D5%26gad_campaignid%3D23928860358%26gclid%3DEAIaIQobChMI1_X2kOuslQMV3KlmAh1OMRKCEAEYASAAEgJvv_D_BwE
            - generic [ref=f6e20]: OPEN
            - img [ref=f6e21]
        - img [ref=f6e26] [cursor=pointer]
        - button [ref=f6e28] [cursor=pointer]:
          - img [ref=f6e29]
        - iframe
```