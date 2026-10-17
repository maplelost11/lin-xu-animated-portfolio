import { useLayoutEffect } from "react"
import { animate, inView, stagger } from "motion"
import TechText from "./components/TechText/TechText"

const assetPathPrefix = "/assets"
const imgAb6AXuDd7YLDhj6YEbHT1J4ZUzLYzFsuOVwOkOjjG63Ou6KaFMxm74ULMkHWjjGuKBn0QCSuRecdrtDlJcfUqnFltDCqAuuoPlQGh1TRLeBXltLBbHOr0UNhsmXk2I76V23ImJtYvPtvpPakT3Qm1UVox1L7BfkCrCou1MeDjeSvUsZwxndSojrP5UoIjyLbdChBxgDz2DbHlNob2NrKCuKJwzaz3Or52JvkAnzzWjlnFlSrVk = `${assetPathPrefix}/aa697.png`
const imgAb6AXuAkCxPdPwwygwAn8QJkNmOLd28J2OXraAfB7U5Kx0J9EQ0DcVdBFktJgyX2ZmysYepqZDlDufaieuM9Q5JQelMkyg6DQrfWqMg30LgRwRglnGrK12Y69EEuDmwi5Jmjt84UcZoUktCgX5Od1KwUOrClbIcJlgDy0ZKstVsR9PMGrtbDdxkwUyF1OkE9QgDwlWnTnNvCeiVbnT5ZwOsmyXdjVob7FGvAtJcdjTzyqPqfWZtB = `${assetPathPrefix}/c3d25.png`
const imgAb6AXuBwplBxXqZmk8Da4Ry0UXwTvfWzV8A8Oy5NzqYRp2VsBA9KtiseSiKsRbGasIFlPCsTb6Q13D8LrnwYygyyYx5Z4JwyAYsy2CJqfGpnaZb6H5Y5DMuwc2Vv0VMOjfZaZ4Xj0DQ6UwzA2Ja6GhEd3CZv0JrzYo4CPVicwP71Ex7PxsjNlGr9OTxPeeSoCsSlgQsrb6WxHWysi3QK2XberinKfcKuaOhmAfosMgapQfaRxi = `${assetPathPrefix}/d320f.png`
const imgContainer = `${assetPathPrefix}/b9cca.svg`
const imgContainer1 = `${assetPathPrefix}/05eff.svg`
const imgContainer2 = `${assetPathPrefix}/3de10.svg`
const imgContainer3 = `${assetPathPrefix}/3a9e2.svg`
const imgContainer4 = `${assetPathPrefix}/c27f4.svg`
const imgContainer5 = `${assetPathPrefix}/9f340.svg`
const imgContainer6 = `${assetPathPrefix}/020ab.svg`
const imgContainer7 = `${assetPathPrefix}/0e4a0.svg`
const imgContainer8 = `${assetPathPrefix}/03dd3.svg`
const imgContainer9 = `${assetPathPrefix}/ceff6.svg`
const imgContainer10 = `${assetPathPrefix}/7c2b0.svg`
const imgContainer11 = `${assetPathPrefix}/3bc71.svg`
const imgContainer12 = `${assetPathPrefix}/ab94e.svg`
const imgContainer13 = `${assetPathPrefix}/25b8f.svg`
const imgContainer14 = `${assetPathPrefix}/ec4fb.svg`
const imgContainer15 = `${assetPathPrefix}/b0702.svg`
const imgContainer16 = `${assetPathPrefix}/7bfd6.svg`
const imgContainer17 = `${assetPathPrefix}/2cc50.svg`
const imgContainer18 = `${assetPathPrefix}/00b69.svg`
const imgContainer19 = `${assetPathPrefix}/fc7f2.svg`
const imgContainer20 = `${assetPathPrefix}/59e02.svg`

function usePageMotion() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined
    }

    const cleanups = []
    const animatedElements = new Set()
    const revealIds = [
      "1:19",
      "1:29",
      "1:148",
      "1:226",
      "1:344",
      "1:380",
      "1:403",
    ]
    const staggerGroups = [
      ["1:157", ["1:158", "1:175", "1:192", "1:209"]],
      ["1:235", ["1:236", "1:263", "1:290", "1:317"]],
    ]
    const hoverIds = [
      "1:158",
      "1:175",
      "1:192",
      "1:209",
      "1:236",
      "1:263",
      "1:290",
      "1:317",
    ]

    const getNode = (id) => document.querySelector(`[data-node-id="${id}"]`)
    const prepare = (element, distance = 28) => {
      if (!element) return
      element.style.opacity = "0"
      element.style.transform = `translateY(${distance}px)`
      element.style.willChange = "transform, opacity"
      animatedElements.add(element)
    }

    const header = getNode("1:461")
    if (header) {
      const headerAnimation = animate(
        header,
        {
          opacity: [0, 1],
          transform: ["translateY(-12px)", "translateY(0px)"],
        },
        { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      )
      cleanups.push(() => headerAnimation.stop())
    }

    revealIds.forEach((id) => {
      const element = getNode(id)
      if (!element) return
      prepare(element)
      const stopObserving = inView(
        element,
        () => {
          const controls = animate(
            element,
            { opacity: 1, transform: "translateY(0px)" },
            { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
          )
          return () => controls.stop()
        },
        { amount: 0.12, margin: "0px 0px -8% 0px" },
      )
      cleanups.push(stopObserving)
    })

    staggerGroups.forEach(([groupId, itemIds]) => {
      const group = getNode(groupId)
      const items = itemIds.map(getNode).filter(Boolean)
      items.forEach((item) => prepare(item, 22))
      if (!group || !items.length) return
      const stopObserving = inView(
        group,
        () => {
          const controls = animate(
            items,
            { opacity: 1, transform: "translateY(0px)" },
            { delay: stagger(0.09), duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          )
          return () => controls.stop()
        },
        { amount: 0.12, margin: "0px 0px -6% 0px" },
      )
      cleanups.push(stopObserving)
    })

    hoverIds.forEach((id) => {
      const element = getNode(id)
      if (!element) return
      const lift = () =>
        animate(element, { transform: "translateY(-6px)" }, {
          type: "spring",
          stiffness: 320,
          damping: 24,
        })
      const settle = () =>
        animate(element, { transform: "translateY(0px)" }, {
          type: "spring",
          stiffness: 320,
          damping: 24,
        })
      element.addEventListener("pointerenter", lift)
      element.addEventListener("pointerleave", settle)
      cleanups.push(() => {
        element.removeEventListener("pointerenter", lift)
        element.removeEventListener("pointerleave", settle)
      })
    })

    return () => {
      cleanups.forEach((cleanup) => cleanup())
      animatedElements.forEach((element) => {
        element.style.removeProperty("opacity")
        element.style.removeProperty("transform")
        element.style.removeProperty("will-change")
      })
    }
  }, [])
}

export default function App() {
  usePageMotion()

  return (
    <div
      className="content-stretch flex flex-col gap-[96px] items-start relative size-full"
      data-node-id="1:3"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(252, 249, 237) 0%, rgb(252, 249, 237) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
      data-name="关于林序｜履历与产品哲学"
    >
      <div
        className="bg-[#fcf9ed] content-stretch flex flex-col items-start min-h-[720px] pt-[80px] relative shrink-0 w-full"
        data-node-id="1:4"
        data-name="Main"
      >
        <div
          className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
          data-node-id="1:5"
          data-name="Subtle decorative ambient canvas layer"
        >
          <div
            className="absolute bg-[rgba(212,233,196,0.3)] blur-[32px] left-[-80px] rounded-[9999px] size-[384px] top-[-128px]"
            data-node-id="1:6"
            data-name="Overlay+Blur"
          />
          <div
            className="absolute bg-[rgba(255,220,193,0.2)] blur-[32px] right-[-80px] rounded-[9999px] size-[480px] top-[320px]"
            data-node-id="1:7"
            data-name="Overlay+Blur"
          />
          <div
            className="content-stretch flex flex-col gap-[96px] items-start max-w-[1280px] pb-[96px] pt-[32px] px-[64px] relative shrink-0 w-full"
            data-node-id="1:8"
            data-name="Main Container Content"
          >
            <div
              className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full"
              data-node-id="1:9"
              data-name="Nav - Breadcrumb"
            >
              <div
                className="content-stretch flex gap-[4px] items-center relative shrink-0"
                data-node-id="1:10"
                data-name="Link"
              >
                <div
                  className="h-[11.25px] relative shrink-0 w-[10px]"
                  data-node-id="1:11"
                  data-name="Container"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgContainer}
                  />
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="1:13"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[12px] tracking-[0.48px] whitespace-nowrap"
                    data-node-id="1:14"
                  >
                    <p className="leading-[16px]">首页</p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0"
                data-node-id="1:15"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#c4c8bd] text-[12px] tracking-[0.48px] whitespace-nowrap"
                  data-node-id="1:16"
                >
                  <p className="leading-[16px]">/</p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0"
                data-node-id="1:17"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[12px] tracking-[0.48px] whitespace-nowrap"
                  data-node-id="1:18"
                >
                  <p className="leading-[16px]">关于我与产品哲学</p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[24px] items-start max-w-[896px] relative shrink-0 w-[896px]"
              data-node-id="1:19"
              data-name="Section: Header Title Statement"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                data-node-id="1:20"
                data-name="Background+Shadow:align-flex-start"
              >
                <div
                  className="bg-[#ebe8dc] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] items-center px-[14px] py-[6px] relative rounded-[9999px] shrink-0"
                  data-node-id="1:21"
                  data-name="Background+Shadow"
                >
                  <div
                    className="bg-[#81542b] relative rounded-[9999px] shrink-0 size-[8px]"
                    data-node-id="1:22"
                    data-name="Background"
                  />
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="1:23"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#444840] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap"
                      data-node-id="1:24"
                    >
                      <p className="leading-[14px]">{`ABOUT & CORE PHILOSOPHY`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-tech-title">
                <TechText
                  text="深思 · 克制 · 敬畏"
                  fontFamily={'"Noto Sans SC:Medium", sans-serif'}
                  fontWeight={500}
                  fontSize={104}
                  letterSpacing={-0.06}
                  align="left"
                  color="#1c1c15"
                  accentColor="#81542b"
                  reveal="letter"
                  reach={160}
                  softness={0.72}
                  dashLength={4}
                  dashGap={3}
                  specks={10}
                  intro="metrics"
                  introDuration={1.8}
                  clickKick
                  guides
                  sweep
                  speed={0.7}
                />
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                data-node-id="1:25"
                data-name="Heading 1"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[40px] tracking-[-1px] w-full"
                  data-node-id="1:26"
                >
                  <p className="leading-[50px] mb-0">在不确定的技术浪潮中，</p>
                  <p>
                    <span className="leading-[50px]">做</span>
                    <span className="[word-break:break-word] font-['Noto_Sans_SC:Medium'] leading-[50px] not-italic text-[#45573b]">
                      深思、克制
                    </span>
                    <span className="leading-[50px]">
                      且敬畏业务的产品实践者
                    </span>
                  </p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start max-w-[768px] relative shrink-0 w-[768px]"
                data-node-id="1:27"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[18px] whitespace-nowrap"
                  data-node-id="1:28"
                >
                  <p className="leading-[29.25px] mb-0">
                    7 年复杂企业级产品沉淀，4 年生成式 AI 与 Agent
                    落地实战。兼具技术底层穿透力与商业严谨性
                  </p>
                  <p className="leading-[29.25px]">
                    的复合背景，穿透模型黑盒，筑牢企业级生产壁垒。
                  </p>
                </div>
              </div>
            </div>
            <div
              className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_1164px] relative shrink-0 w-full"
              data-node-id="1:29"
              data-name="Section 1: Biography & Journey (Bento Split)"
            >
              <div
                className="col-[1/span_5] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0"
                data-node-id="1:30"
                data-name="Left: Portrait & Core Identity Badges"
              >
                <div
                  className="bg-[#f1eee2] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[24px] items-start p-[24px] relative rounded-[32px] shrink-0 w-full"
                  data-node-id="1:31"
                  data-name="Background+Shadow"
                >
                  <div
                    className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[400px] items-start justify-center overflow-clip relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full"
                    data-node-id="1:32"
                    data-name="Overlay+Shadow"
                  >
                    <div
                      className="flex-[1_0_0] min-h-px relative w-full"
                      data-node-id="1:33"
                      data-name="AB6AXuDD7yLDhj6YEb-hT-1j4zUzLYzFsuOVwOkOjjG63ou6kaFMxm74uLMkHWjjGu_KBn0qCSuRECDRTDlJCFUqnFlt-dCqAUUO_PlQGh1tRLeBXltLBb_hOr0uNHSMXk2i76v23imJTYvPtvp-PakT3qm1uVOX1l7bfkCRCou_-1meDJESvUSZwxndSojrP5UoIJYLbdChBxgDz2DbHlNOB2nr_kCuKJwzaz3OR52JvkAnzzWJLNFlSRVk"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute h-full left-[-39.81%] max-w-none top-0 w-[179.62%]"
                          src={
                            imgAb6AXuDd7YLDhj6YEbHT1J4ZUzLYzFsuOVwOkOjjG63Ou6KaFMxm74ULMkHWjjGuKBn0QCSuRecdrtDlJcfUqnFltDCqAuuoPlQGh1TRLeBXltLBbHOr0UNhsmXk2I76V23ImJtYvPtvpPakT3Qm1UVox1L7BfkCrCou1MeDjeSvUsZwxndSojrP5UoIjyLbdChBxgDz2DbHlNob2NrKCuKJwzaz3Or52JvkAnzzWjlnFlSrVk
                          }
                        />
                      </div>
                    </div>
                    <div
                      className="absolute bg-gradient-to-t from-[rgba(49,49,41,0.8)] inset-[0_0.01px_0_0] to-[rgba(49,49,41,0)] via-1/2 via-[rgba(49,49,41,0)]"
                      data-node-id="1:34"
                      data-name="Gradient"
                    />
                    <div
                      className="absolute bottom-[20px] content-stretch flex flex-col gap-[4px] items-start left-[20px] right-[20.01px]"
                      data-node-id="1:35"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="1:36"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffdcc1] text-[11px] tracking-[0.55px] uppercase w-full"
                          data-node-id="1:37"
                        >
                          <p className="leading-[14px]">PROFILE SNAPSHOT</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="1:38"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Newsreader:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#f4f1e4] text-[22px] w-full"
                          data-node-id="1:39"
                        >
                          <p className="leading-[30px]">林序 (Lin Xu)</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start opacity-85 relative shrink-0 w-full"
                        data-node-id="1:40"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#f4f1e4] text-[14px] w-full"
                          data-node-id="1:41"
                        >
                          <p className="leading-[22px]">
                            资深企业级 AI 产品架构师 · 北京
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                    data-node-id="1:42"
                    data-name="Key Fact Pills"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:43"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#585246] text-[12px] tracking-[0.6px] uppercase w-full"
                        data-node-id="1:44"
                      >
                        <p className="leading-[16px]">核心职能角色与定位</p>
                      </div>
                    </div>
                    <div
                      className="h-[64px] relative shrink-0 w-full"
                      data-node-id="1:45"
                      data-name="Container"
                    >
                      <div
                        className="absolute bg-[#e5e3d6] bottom-[36px] content-stretch flex gap-[6px] items-center left-0 pb-[6.5px] pt-[5.5px] px-[12px] rounded-[9999px] top-0"
                        data-node-id="1:46"
                        data-name="Background"
                      >
                        <div
                          className="bg-[#45573b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:47"
                          data-name="Background"
                        />
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#45573b] text-[12px] tracking-[0.48px] whitespace-nowrap"
                          data-node-id="1:48"
                        >
                          <p className="leading-[16px]">企业级 AI 架构思维</p>
                        </div>
                      </div>
                      <div
                        className="absolute bg-[#e5e3d6] bottom-[36px] content-stretch flex gap-[6px] items-center left-[148.67px] pb-[6.5px] pt-[5.5px] px-[12px] rounded-[9999px] top-0"
                        data-node-id="1:49"
                        data-name="Background"
                      >
                        <div
                          className="bg-[#81542b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:50"
                          data-name="Background"
                        />
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#81542b] text-[12px] tracking-[0.48px] whitespace-nowrap"
                          data-node-id="1:51"
                        >
                          <p className="leading-[16px]">
                            Human-in-the-Loop 倡导者
                          </p>
                        </div>
                      </div>
                      <div
                        className="absolute bg-[#e5e3d6] bottom-0 content-stretch flex gap-[6px] items-center left-0 pb-[6.5px] pt-[5.5px] px-[12px] rounded-[9999px] top-[36px]"
                        data-node-id="1:52"
                        data-name="Background"
                      >
                        <div
                          className="bg-[#585246] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:53"
                          data-name="Background"
                        />
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[12px] tracking-[0.48px] whitespace-nowrap"
                          data-node-id="1:54"
                        >
                          <p className="leading-[16px]">复杂业务流程解构者</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex gap-[8px] items-start justify-center pt-[4px] relative shrink-0 w-full"
                    data-node-id="1:55"
                    data-name="Metric Snapshot Grid"
                  >
                    <div
                      className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px p-[16px] relative rounded-[16px]"
                      data-node-id="1:56"
                      data-name="Background+Shadow"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="1:57"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[11px] tracking-[0.55px] uppercase w-full"
                          data-node-id="1:58"
                        >
                          <p className="leading-[14px]">累计研发系统</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="1:59"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Newsreader:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#45573b] text-[22px] w-full"
                          data-node-id="1:60"
                        >
                          <p className="leading-[30px]">12+ 套</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="1:61"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#74786f] text-[14px] w-full"
                          data-node-id="1:62"
                        >
                          <p className="leading-[22px]">覆盖 PaaS/金融/合规</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px p-[16px] relative rounded-[16px]"
                      data-node-id="1:63"
                      data-name="Background+Shadow"
                    >
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="1:64"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[11px] tracking-[0.55px] uppercase w-full"
                          data-node-id="1:65"
                        >
                          <p className="leading-[14px]">模型落地采纳率</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="1:66"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Newsreader:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#81542b] text-[22px] w-full"
                          data-node-id="1:67"
                        >
                          <p className="leading-[30px]">92.4%</p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-node-id="1:68"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#74786f] text-[14px] w-full"
                          data-node-id="1:69"
                        >
                          <p className="leading-[22px]">生产环境端到端验证</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[rgba(229,227,214,0.7)] content-stretch flex flex-col gap-[8px] items-start p-[24px] relative rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full"
                  data-node-id="1:70"
                  data-name="Editorial Pull-quote Widget"
                >
                  <div
                    className="h-[15px] relative shrink-0 w-full"
                    data-node-id="1:71"
                    data-name="Container"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgContainer1}
                    />
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:73"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[22px] w-full"
                      data-node-id="1:74"
                    >
                      <p className="leading-[30.25px] mb-0">
                        “大模型是心智引擎，而非万能药。真正的
                      </p>
                      <p className="leading-[30.25px] mb-0">
                        技术美学，在于让复杂的非确定性在稳固
                      </p>
                      <p className="leading-[30.25px]">
                        的系统骨架中平稳着陆。”
                      </p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-end relative shrink-0 w-full"
                    data-node-id="1:75"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[11px] text-right tracking-[0.275px] whitespace-nowrap"
                      data-node-id="1:76"
                    >
                      <p className="leading-[14px]">— 林序 · 执业手记</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-[6/span_7] content-stretch flex flex-col gap-[40px] items-start justify-self-stretch relative row-1 self-start shrink-0"
                data-node-id="1:77"
                data-name="Right: Professional Evolution Timeline"
              >
                <div
                  className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
                  data-node-id="1:78"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:79"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#81542b] text-[12px] tracking-[1.2px] uppercase w-full"
                      data-node-id="1:80"
                    >
                      <p className="leading-[16px]">PROFESSIONAL ODYSSEY</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:81"
                    data-name="Heading 2"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[28px] w-full"
                      data-node-id="1:82"
                    >
                      <p className="leading-[36px]">
                        从确定性工程走向概率智能：三次认知演化
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full"
                  data-node-id="1:83"
                  data-name="Timeline Stack"
                >
                  <div
                    className="bg-[#f6f4e7] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start p-[40px] relative rounded-[32px] shrink-0 w-full"
                    data-node-id="1:84"
                    data-name="Stage 1"
                  >
                    <div
                      className="content-center flex flex-wrap gap-y-[4px] items-center justify-between pr-[0.01px] relative shrink-0 w-full"
                      data-node-id="1:85"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex gap-[8px] items-center relative shrink-0"
                        data-node-id="1:86"
                        data-name="Container"
                      >
                        <div
                          className="bg-[#ebe1d2] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]"
                          data-node-id="1:87"
                          data-name="Background"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1b12] text-[12px] text-center tracking-[0.48px] whitespace-nowrap"
                            data-node-id="1:88"
                          >
                            <p className="leading-[16px]">01</p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="1:89"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#45573b] text-[14px] tracking-[0.28px] whitespace-nowrap"
                            data-node-id="1:90"
                          >
                            <p className="leading-[20px]">阶段一 · 根基奠定</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-[#ebe8dc] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[9999px] shrink-0"
                        data-node-id="1:91"
                        data-name="Background"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#444840] text-[11px] tracking-[0.55px] whitespace-nowrap"
                          data-node-id="1:92"
                        >
                          <p className="leading-[14px]">2018 — 2020</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:93"
                      data-name="Heading 3"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[22px] w-full"
                        data-node-id="1:94"
                      >
                        <p className="leading-[30px]">
                          复杂企业级 PaaS 与中后台业务系统
                        </p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:95"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[16px] w-full"
                        data-node-id="1:96"
                      >
                        <p className="leading-[26px] mb-0">
                          主导大型制造业供应链协作中台与多租户权限 PaaS
                          架构规划。在日均数十万级业
                        </p>
                        <p className="leading-[26px] mb-0">
                          务审批和强约束审计链条中，奠定了对“系统高可用、多角色隔离、极端合规容灾”
                        </p>
                        <p className="leading-[26px]">的敬畏心。</p>
                      </div>
                    </div>
                    <div
                      className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[12px] items-center p-[16px] relative rounded-[16px] shrink-0 w-full"
                      data-node-id="1:97"
                      data-name="Overlay"
                    >
                      <div
                        className="h-[17.5px] relative shrink-0 w-[18.333px]"
                        data-node-id="1:98"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer2}
                        />
                      </div>
                      <div
                        className="[word-break:break-word] content-stretch flex flex-col font-['Noto_Sans_SC:Medium'] items-start leading-[0] not-italic pb-[2px] pr-[28.14px] relative shrink-0 text-[#1c1c15] text-[14px] whitespace-nowrap"
                        data-node-id="1:100"
                        data-name="Container"
                      >
                        <div
                          className="flex flex-col justify-center mb-[-20px] relative shrink-0"
                          data-node-id="1:101"
                        >
                          <p className="leading-[22px]">核心认知：</p>
                        </div>
                        <div
                          className="h-[40px] relative shrink-0 w-[483.19px]"
                          data-node-id="1:102"
                          data-name="Strong"
                        >
                          <div
                            className="-translate-y-1/2 absolute flex flex-col justify-center left-[70px] top-[9px]"
                            data-node-id="1:103"
                          >
                            <p className="leading-[22px]">
                              “没有对业务一线泥泞流程的深扎，任何所谓的架构创新都是沙上筑
                            </p>
                          </div>
                          <div
                            className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[31px]"
                            data-node-id="1:104"
                          >
                            <p className="leading-[22px]">塔。”</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#f6f4e7] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start p-[40px] relative rounded-[32px] shrink-0 w-full"
                    data-node-id="1:105"
                    data-name="Stage 2"
                  >
                    <div
                      className="content-center flex flex-wrap gap-y-[4px] items-center justify-between relative shrink-0 w-full"
                      data-node-id="1:106"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex gap-[8px] items-center relative shrink-0"
                        data-node-id="1:107"
                        data-name="Container"
                      >
                        <div
                          className="bg-[#d4e9c4] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]"
                          data-node-id="1:108"
                          data-name="Background"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f1f09] text-[12px] text-center tracking-[0.48px] whitespace-nowrap"
                            data-node-id="1:109"
                          >
                            <p className="leading-[16px]">02</p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="1:110"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#45573b] text-[14px] tracking-[0.28px] whitespace-nowrap"
                            data-node-id="1:111"
                          >
                            <p className="leading-[20px]">阶段二 · 智能跃升</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-[#ebe8dc] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[9999px] shrink-0"
                        data-node-id="1:112"
                        data-name="Background"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#444840] text-[11px] tracking-[0.55px] whitespace-nowrap"
                          data-node-id="1:113"
                        >
                          <p className="leading-[14px]">2021 — 2022</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:114"
                      data-name="Heading 3"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[22px] w-full"
                        data-node-id="1:115"
                      >
                        <p className="leading-[30px]">
                          深耕自然语言处理与垂直认知决策 AI
                        </p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:116"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[16px] w-full"
                        data-node-id="1:117"
                      >
                        <p className="leading-[26px] mb-0">
                          主导传统判别式
                          NLP、垂直领域知识图谱与意图识别引擎在金融审计与智慧政务
                        </p>
                        <p className="leading-[26px] mb-0">
                          场景的工程化落地。带领算法工程师与业务领域专家共同梳理特征工程，构建百
                        </p>
                        <p className="leading-[26px]">亿级知识抽取网络。</p>
                      </div>
                    </div>
                    <div
                      className="bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[12px] items-center p-[16px] relative rounded-[16px] shrink-0 w-full"
                      data-node-id="1:118"
                      data-name="Overlay"
                    >
                      <div
                        className="h-[16.667px] relative shrink-0 w-[15.843px]"
                        data-node-id="1:119"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer3}
                        />
                      </div>
                      <div
                        className="[word-break:break-word] content-stretch flex flex-col font-['Noto_Sans_SC:Medium'] items-start leading-[0] not-italic pb-[2px] pr-[4.14px] relative shrink-0 text-[#1c1c15] text-[14px] whitespace-nowrap"
                        data-node-id="1:121"
                        data-name="Container"
                      >
                        <div
                          className="flex flex-col justify-center mb-[-20px] relative shrink-0"
                          data-node-id="1:122"
                        >
                          <p className="leading-[22px]">核心认知：</p>
                        </div>
                        <div
                          className="h-[40px] relative shrink-0 w-[507.19px]"
                          data-node-id="1:123"
                          data-name="Strong"
                        >
                          <div
                            className="-translate-y-1/2 absolute flex flex-col justify-center left-[70px] top-[9px]"
                            data-node-id="1:124"
                          >
                            <p className="leading-[22px]">
                              “算法指标的高 F1-score
                              绝不等于业务价值。不可解释的输出注定会在
                            </p>
                          </div>
                          <div
                            className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[31px]"
                            data-node-id="1:125"
                          >
                            <p className="leading-[22px]">
                              关键决策中被用户遗弃。”
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#ebe8dc] content-stretch flex flex-col gap-[16px] items-start p-[40px] relative rounded-[32px] shrink-0 w-full"
                    data-node-id="1:126"
                    data-name="Stage 3"
                  >
                    <div
                      className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
                      data-node-id="1:127"
                      data-name="Stage 3:shadow"
                    />
                    <div
                      className="content-center flex flex-wrap gap-y-[4px] items-center justify-between relative shrink-0 w-full"
                      data-node-id="1:128"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex gap-[8px] items-center relative shrink-0"
                        data-node-id="1:129"
                        data-name="Container"
                      >
                        <div
                          className="bg-[#81542b] content-stretch flex items-center justify-center pb-[6.5px] pt-[5.5px] relative rounded-[9999px] shrink-0 size-[28px]"
                          data-node-id="1:130"
                          data-name="Background"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.48px] whitespace-nowrap"
                            data-node-id="1:131"
                          >
                            <p className="leading-[16px]">03</p>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col items-start relative shrink-0"
                          data-node-id="1:132"
                          data-name="Container"
                        >
                          <div
                            className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#81542b] text-[14px] tracking-[0.28px] whitespace-nowrap"
                            data-node-id="1:133"
                          >
                            <p className="leading-[20px]">阶段三 · 范式重塑</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-[#f1eee2] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[9999px] shrink-0"
                        data-node-id="1:134"
                        data-name="Background"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c15] text-[11px] tracking-[0.55px] whitespace-nowrap"
                          data-node-id="1:135"
                        >
                          <p className="leading-[14px]">2023 — 至今</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:136"
                      data-name="Heading 3"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[22px] w-full"
                        data-node-id="1:137"
                      >
                        <p className="leading-[30px]">
                          大模型、Agentic Workflow 与生产系统领跑
                        </p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:138"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[16px] w-full"
                        data-node-id="1:139"
                      >
                        <p className="leading-[26px] mb-0">
                          作为 AI
                          产品一号位，从零到一构建并落地高阶企业智能体系：涵盖多路混合检索
                        </p>
                        <p className="leading-[26px] mb-0">
                          （Dense+Sparse+Rerank）智能企业知识库、多 Agent
                          协作式智能客服与工单
                        </p>
                        <p className="leading-[26px]">
                          自动归因网络、以及金融投研研报多模态信息提取中枢。
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[12px] items-center p-[16px] relative rounded-[16px] shrink-0 w-full"
                      data-node-id="1:140"
                      data-name="Background+Shadow"
                    >
                      <div
                        className="h-[16.667px] relative shrink-0 w-[13.333px]"
                        data-node-id="1:141"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer4}
                        />
                      </div>
                      <div
                        className="[word-break:break-word] content-stretch flex flex-col font-['Noto_Sans_SC:Medium'] items-start leading-[0] not-italic pb-[2px] pr-[12.27px] relative shrink-0 text-[#1c1c15] text-[14px] whitespace-nowrap"
                        data-node-id="1:143"
                        data-name="Container"
                      >
                        <div
                          className="flex flex-col justify-center mb-[-20px] relative shrink-0"
                          data-node-id="1:144"
                        >
                          <p className="leading-[22px]">核心认知：</p>
                        </div>
                        <div
                          className="h-[40px] relative shrink-0 w-[499.06px]"
                          data-node-id="1:145"
                          data-name="Strong"
                        >
                          <div
                            className="-translate-y-1/2 absolute flex flex-col justify-center left-[70px] top-[9px]"
                            data-node-id="1:146"
                          >
                            <p className="leading-[22px]">
                              “AI 产品经理不仅是 Prompt
                              书写者，更是业务价值链重构师与概率世
                            </p>
                          </div>
                          <div
                            className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[31px]"
                            data-node-id="1:147"
                          >
                            <p className="leading-[22px]">
                              界的防御式交互设计师。”
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full"
              data-node-id="1:148"
              data-name="Section 2: 4 Core Product Beliefs"
            >
              <div
                className="content-stretch flex items-end justify-between pb-[8px] relative shrink-0 w-full"
                data-node-id="1:149"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0"
                  data-node-id="1:150"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:151"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#81542b] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap"
                      data-node-id="1:152"
                    >
                      <p className="leading-[16px]">GUIDING PRINCIPLES</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:153"
                    data-name="Heading 2"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[40px] tracking-[-0.6px] whitespace-nowrap"
                      data-node-id="1:154"
                    >
                      <p className="leading-[48px]">
                        4 项坚定不移的 AI 产品哲学
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0"
                  data-node-id="1:155"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                    data-node-id="1:156"
                  >
                    <p className="leading-[22px] mb-0">
                      在大模型狂热与浮躁叙事之外，我们选择站在泥泞的土地上，用严格的工
                    </p>
                    <p className="leading-[22px]">
                      程方法论捍卫产品交付的尊严。
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__360px_360px] relative shrink-0 w-full"
                data-node-id="1:157"
                data-name="Container"
              >
                <div
                  className="bg-[#f6f4e7] col-1 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[24px] items-start justify-self-stretch p-[40px] relative rounded-[32px] row-1 self-start shrink-0"
                  data-node-id="1:158"
                  data-name="Belief Card 01"
                >
                  <div
                    className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                    data-node-id="1:159"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                      data-node-id="1:160"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start opacity-30 relative shrink-0"
                        data-node-id="1:161"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#45573b] text-[40px] tracking-[-0.6px] whitespace-nowrap"
                          data-node-id="1:162"
                        >
                          <p className="leading-[48px]">01</p>
                        </div>
                      </div>
                      <div
                        className="bg-[#d4e9c4] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]"
                        data-node-id="1:163"
                        data-name="Background"
                      >
                        <div
                          className="h-[16.667px] relative shrink-0 w-[13.333px]"
                          data-node-id="1:164"
                          data-name="Container"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgContainer5}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:166"
                      data-name="Heading 3"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[22px] w-full"
                        data-node-id="1:167"
                      >
                        <p className="leading-[30px]">
                          拥抱不确定性，设计防御式体验
                        </p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:168"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[16px] w-full"
                        data-node-id="1:169"
                      >
                        <p className="leading-[26px] mb-0">
                          “永远假设大模型会出错。真正考验 AI PM 的不是 Happy
                          Path，而
                        </p>
                        <p className="leading-[26px]">
                          是如何优雅降级、透明溯源与构建信任。”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full"
                    data-node-id="1:170"
                    data-name="Overlay"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:171"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#81542b] text-[11px] tracking-[0.55px] uppercase w-full"
                        data-node-id="1:172"
                      >
                        <p className="leading-[14px]">实践举措</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:173"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[14px] w-full"
                        data-node-id="1:174"
                      >
                        <p className="leading-[22px] mb-0">
                          引入置信度阈值机制、引用溯源锚点、无感双模型校验、以及一键呼叫
                        </p>
                        <p className="leading-[22px]">人类介入的退行通道。</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#f6f4e7] col-2 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[24px] items-start justify-self-stretch p-[40px] relative rounded-[32px] row-1 self-start shrink-0"
                  data-node-id="1:175"
                  data-name="Belief Card 02"
                >
                  <div
                    className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                    data-node-id="1:176"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                      data-node-id="1:177"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start opacity-30 relative shrink-0"
                        data-node-id="1:178"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#81542b] text-[40px] tracking-[-0.6px] whitespace-nowrap"
                          data-node-id="1:179"
                        >
                          <p className="leading-[48px]">02</p>
                        </div>
                      </div>
                      <div
                        className="bg-[#ffdcc1] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]"
                        data-node-id="1:180"
                        data-name="Background"
                      >
                        <div
                          className="relative shrink-0 size-[15px]"
                          data-node-id="1:181"
                          data-name="Container"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgContainer6}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:183"
                      data-name="Heading 3"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[22px] w-full"
                        data-node-id="1:184"
                      >
                        <p className="leading-[30px]">建立可量化的评估护城河</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:185"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[16px] w-full"
                        data-node-id="1:186"
                      >
                        <p className="leading-[26px] mb-0">
                          “没有高质量评测集的调优就是在黑夜中开枪。黄金 Dataset
                          与 Bad
                        </p>
                        <p className="leading-[26px]">
                          Case 资产库是不可替代的企业核心资产。”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full"
                    data-node-id="1:187"
                    data-name="Overlay"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:188"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#81542b] text-[11px] tracking-[0.55px] uppercase w-full"
                        data-node-id="1:189"
                      >
                        <p className="leading-[14px]">实践举措</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:190"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[14px] w-full"
                        data-node-id="1:191"
                      >
                        <p className="leading-[22px] mb-0">
                          搭建覆盖幻觉率、意图召回率、语义保真度的双盲评测集，推行“上线前
                        </p>
                        <p className="leading-[22px]">
                          必须通过 500+ Bad Cases 回归测试”。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#f6f4e7] col-1 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[24px] items-start justify-self-stretch p-[40px] relative rounded-[32px] row-2 self-start shrink-0"
                  data-node-id="1:192"
                  data-name="Belief Card 03"
                >
                  <div
                    className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                    data-node-id="1:193"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                      data-node-id="1:194"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start opacity-30 relative shrink-0"
                        data-node-id="1:195"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#45573b] text-[40px] tracking-[-0.6px] whitespace-nowrap"
                          data-node-id="1:196"
                        >
                          <p className="leading-[48px]">03</p>
                        </div>
                      </div>
                      <div
                        className="bg-[#d4e9c4] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]"
                        data-node-id="1:197"
                        data-name="Background"
                      >
                        <div
                          className="h-[9.167px] relative shrink-0 w-[20px]"
                          data-node-id="1:198"
                          data-name="Container"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgContainer7}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:200"
                      data-name="Heading 3"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[22px] w-full"
                        data-node-id="1:201"
                      >
                        <p className="leading-[30px]">
                          以业务完整闭环为唯一度量衡
                        </p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:202"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[16px] w-full"
                        data-node-id="1:203"
                      >
                        <p className="leading-[26px] mb-0">
                          “AI POC 容易，生产交付艰难。PM 的价值在于算清算力
                          Token 成
                        </p>
                        <p className="leading-[26px]">
                          本、打通审批合规流、让人工采纳率超过 90%。”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full"
                    data-node-id="1:204"
                    data-name="Overlay"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:205"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#81542b] text-[11px] tracking-[0.55px] uppercase w-full"
                        data-node-id="1:206"
                      >
                        <p className="leading-[14px]">实践举措</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:207"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[14px] w-full"
                        data-node-id="1:208"
                      >
                        <p className="leading-[22px] mb-0">
                          拒绝玩具式对话框，将 AI 生成嵌入既有 ERP/CRM
                          审批流，建立单位任
                        </p>
                        <p className="leading-[22px]">
                          务 Token 成本 ROI 跟踪看板。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#f6f4e7] col-2 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[24px] items-start justify-self-stretch p-[40px] relative rounded-[32px] row-2 self-start shrink-0"
                  data-node-id="1:209"
                  data-name="Belief Card 04"
                >
                  <div
                    className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                    data-node-id="1:210"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                      data-node-id="1:211"
                      data-name="Container"
                    >
                      <div
                        className="content-stretch flex flex-col items-start opacity-30 relative shrink-0"
                        data-node-id="1:212"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#81542b] text-[40px] tracking-[-0.6px] whitespace-nowrap"
                          data-node-id="1:213"
                        >
                          <p className="leading-[48px]">04</p>
                        </div>
                      </div>
                      <div
                        className="bg-[#ffdcc1] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]"
                        data-node-id="1:214"
                        data-name="Background"
                      >
                        <div
                          className="relative shrink-0 size-[16.667px]"
                          data-node-id="1:215"
                          data-name="Container"
                        >
                          <img
                            alt=""
                            className="absolute block inset-0 max-w-none size-full"
                            src={imgContainer8}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:217"
                      data-name="Heading 3"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[22px] w-full"
                        data-node-id="1:218"
                      >
                        <p className="leading-[30px]">
                          人机协同（Co-pilot）重于纯自动化
                        </p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:219"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[16px] w-full"
                        data-node-id="1:220"
                      >
                        <p className="leading-[26px] mb-0">
                          “真正的企业级落地不是让机器取代专家，而是赋能专家，让专家感
                        </p>
                        <p className="leading-[26px]">
                          受到掌控感与生产力跃迁。”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full"
                    data-node-id="1:221"
                    data-name="Overlay"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:222"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#81542b] text-[11px] tracking-[0.55px] uppercase w-full"
                        data-node-id="1:223"
                      >
                        <p className="leading-[14px]">实践举措</p>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:224"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[14px] w-full"
                        data-node-id="1:225"
                      >
                        <p className="leading-[22px] mb-0">
                          设计基于差异高亮（Diff
                          View）的交互、一键修改与人工回标通道，将
                        </p>
                        <p className="leading-[22px]">
                          员工转化为 AI 输出的责任主导者。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-[#f1eee2] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[64px] items-start p-[64px] relative rounded-[32px] shrink-0 w-full"
              data-node-id="1:226"
              data-name="Section 3: Deep Skill Tree & Knowledge Matrix"
            >
              <div
                className="content-stretch flex items-end justify-between relative shrink-0 w-full"
                data-node-id="1:227"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0"
                  data-node-id="1:228"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:229"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#81542b] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap"
                      data-node-id="1:230"
                    >
                      <p className="leading-[16px]">{`ARCHITECTURE & SKILLS`}</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:231"
                    data-name="Heading 2"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[40px] tracking-[-0.6px] whitespace-nowrap"
                      data-node-id="1:232"
                    >
                      <p className="leading-[48px]">深度技能树与知识体系</p>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#ebe8dc] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0"
                  data-node-id="1:233"
                  data-name="Background"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[11px] tracking-[0.55px] whitespace-nowrap"
                    data-node-id="1:234"
                  >
                    <p className="leading-[14px]">
                      持续迭代演进 · 2025 架构标准
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full"
                data-node-id="1:235"
                data-name="Container"
              >
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px pb-[74px] pt-[24px] px-[24px] relative rounded-[32px]"
                  data-node-id="1:236"
                  data-name="Skill Col 1"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center pb-[4px] relative shrink-0 w-full"
                    data-node-id="1:237"
                    data-name="Container"
                  >
                    <div
                      className="h-[18px] relative shrink-0 w-[20px]"
                      data-node-id="1:238"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer9}
                      />
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="1:240"
                      data-name="Heading 3"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#45573b] text-[22px] whitespace-nowrap"
                        data-node-id="1:241"
                      >
                        <p className="leading-[30px]">业务拆解与策略</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                    data-node-id="1:242"
                    data-name="List"
                  >
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:243"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:244"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#81542b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:245"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pr-[5.56px] relative shrink-0"
                        data-node-id="1:246"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:247"
                        >
                          <p className="mb-0">
                            <span className="leading-[22px]">
                              场景 ROI 测算：
                            </span>
                            <span className="[word-break:break-word] font-['Noto_Sans_SC:Medium'] leading-[22px] not-italic">
                              端到端成本
                            </span>
                          </p>
                          <p className="font-['Noto_Sans_SC:Medium'] leading-[22px] mb-0 not-italic">
                            收益核算与算力回本周期建
                          </p>
                          <p className="font-['Noto_Sans_SC:Medium'] leading-[22px] not-italic">
                            模
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:248"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:249"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#81542b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:250"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0"
                        data-node-id="1:251"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:252"
                        >
                          <p className="mb-0">
                            <span className="leading-[22px]">
                              容错矩阵分析：
                            </span>
                            <span className="[word-break:break-word] font-['Noto_Sans_SC:Medium'] leading-[22px] not-italic">
                              极端偶发幻
                            </span>
                          </p>
                          <p className="leading-[22px] mb-0">
                            觉对业务风控的影响评估与
                          </p>
                          <p className="leading-[22px]">兜底</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:253"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:254"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#81542b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:255"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0"
                        data-node-id="1:256"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:257"
                        >
                          <p className="mb-0">
                            <span className="leading-[22px]">
                              企业组织再造：
                            </span>
                            <span className="[word-break:break-word] font-['Noto_Sans_SC:Medium'] leading-[22px] not-italic">
                              人机分工流
                            </span>
                          </p>
                          <p className="leading-[22px]">程重构与团队培训落地</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:258"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:259"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#81542b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:260"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0"
                        data-node-id="1:261"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:262"
                        >
                          <p className="mb-0">
                            <span className="leading-[22px]">
                              竞品技术边界洞察：
                            </span>
                            <span className="[word-break:break-word] font-['Noto_Sans_SC:Medium'] leading-[22px] not-italic">
                              开源生
                            </span>
                          </p>
                          <p className="leading-[22px] mb-0">
                            态与商用闭源模型性价比推
                          </p>
                          <p className="leading-[22px]">演</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[32px]"
                  data-node-id="1:263"
                  data-name="Skill Col 2"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center pb-[4px] relative shrink-0 w-full"
                    data-node-id="1:264"
                    data-name="Container"
                  >
                    <div
                      className="relative shrink-0 size-[18px]"
                      data-node-id="1:265"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer10}
                      />
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pr-[13.58px] relative shrink-0"
                      data-node-id="1:267"
                      data-name="Heading 3"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Newsreader:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#45573b] text-[22px] whitespace-nowrap"
                        data-node-id="1:268"
                      >
                        <p className="leading-[30px] mb-0">{`AI & LLM 核心`}</p>
                        <p className="leading-[30px]">技术</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                    data-node-id="1:269"
                    data-name="List"
                  >
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:270"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:271"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#45573b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:272"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pr-[24.22px] relative shrink-0"
                        data-node-id="1:273"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:274"
                        >
                          <p className="leading-[22px] mb-0">
                            Agentic Workflow：
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[22px] mb-0">
                            ReAct 机制、Plan-and-
                          </p>
                          <p className="font-['Inter:Regular'] font-normal leading-[22px] not-italic">
                            Solve、确定性状态机
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:275"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:276"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#45573b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:277"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pr-[2.62px] relative shrink-0"
                        data-node-id="1:278"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:279"
                        >
                          <p className="mb-0">
                            <span className="leading-[22px]">
                              多路混合检索 RAG：
                            </span>
                            <span className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[22px]">
                              Dense
                            </span>
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[22px] mb-0">
                            + BM25 + Cross-Encoder
                          </p>
                          <p className="font-['Inter:Regular'] font-normal leading-[22px]">
                            Rerank 重排
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:280"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:281"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#45573b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:282"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pr-[6.09px] relative shrink-0"
                        data-node-id="1:283"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:284"
                        >
                          <p className="mb-0">
                            <span className="leading-[22px]">
                              文档结构拓扑解析：
                            </span>
                            <span className="[word-break:break-word] font-['Noto_Sans_SC:Medium'] leading-[22px] not-italic">
                              复杂版
                            </span>
                          </p>
                          <p className="leading-[22px] mb-0">
                            面 PDF、跨页表格与多模态
                          </p>
                          <p className="leading-[22px]">切片</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:285"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:286"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#45573b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:287"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pr-[10.08px] relative shrink-0"
                        data-node-id="1:288"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:289"
                        >
                          <p className="leading-[22px] mb-0">
                            Prompt 工程与微调裁决：
                          </p>
                          <p className="font-['Inter:Regular'] font-normal leading-[22px] mb-0">
                            Few-shot 与 LoRA 微调必
                          </p>
                          <p className="font-['Inter:Regular'] font-normal leading-[22px]">
                            要性判断
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[32px]"
                  data-node-id="1:290"
                  data-name="Skill Col 3"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center pb-[4px] relative shrink-0 w-full"
                    data-node-id="1:291"
                    data-name="Container"
                  >
                    <div
                      className="h-[20px] relative shrink-0 w-[16px]"
                      data-node-id="1:292"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer11}
                      />
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start pr-[3.98px] relative shrink-0"
                      data-node-id="1:294"
                      data-name="Heading 3"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#45573b] text-[22px] whitespace-nowrap"
                        data-node-id="1:295"
                      >
                        <p className="leading-[30px] mb-0">评测与工程护城</p>
                        <p className="leading-[30px]">河</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                    data-node-id="1:296"
                    data-name="List"
                  >
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:297"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:298"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#81542b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:299"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0"
                        data-node-id="1:300"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:301"
                        >
                          <p className="mb-0">
                            <span className="leading-[22px]">
                              自动化评测集搭建：
                            </span>
                            <span className="[word-break:break-word] font-['Noto_Sans_SC:Medium'] leading-[22px] not-italic">
                              涵盖召
                            </span>
                          </p>
                          <p className="leading-[22px] mb-0">
                            回、准确率、语气偏离的多
                          </p>
                          <p className="leading-[22px]">维指标</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:302"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:303"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#81542b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:304"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pr-[2.75px] relative shrink-0"
                        data-node-id="1:305"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:306"
                        >
                          <p className="mb-0">
                            <span className="leading-[22px]">
                              LLM-as-a-Judge：
                            </span>
                            <span className="[word-break:break-word] font-['Noto_Sans_SC:Medium'] leading-[22px] not-italic">
                              打分一
                            </span>
                          </p>
                          <p className="font-['Noto_Sans_SC:Medium'] leading-[22px] mb-0 not-italic">
                            致性校准与裁判准则提示词
                          </p>
                          <p className="font-['Noto_Sans_SC:Medium'] leading-[22px] not-italic">
                            优化
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:307"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:308"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#81542b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:309"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pr-[9.98px] relative shrink-0"
                        data-node-id="1:310"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:311"
                        >
                          <p className="mb-0">
                            <span className="leading-[22px]">
                              Bad Case 归因框架：
                            </span>
                            <span className="[word-break:break-word] font-['Noto_Sans_SC:Medium'] leading-[22px] not-italic">
                              知识
                            </span>
                          </p>
                          <p className="font-['Noto_Sans_SC:Medium'] leading-[22px] mb-0 not-italic">
                            缺失/理解错误/推理失败漏
                          </p>
                          <p className="font-['Noto_Sans_SC:Medium'] leading-[22px] not-italic">
                            斗归因
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:312"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:313"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#81542b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:314"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pr-[6.95px] relative shrink-0"
                        data-node-id="1:315"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:316"
                        >
                          <p className="mb-0">
                            <span className="leading-[22px]">
                              Token 成本控制：
                            </span>
                            <span className="[word-break:break-word] font-['Noto_Sans_SC:Medium'] leading-[22px] not-italic">
                              语义缓存
                            </span>
                          </p>
                          <p className="font-['Noto_Sans_SC:Medium'] leading-[22px] mb-0 not-italic">
                            (Semantic Cache) 与路由
                          </p>
                          <p className="font-['Noto_Sans_SC:Medium'] leading-[22px] not-italic">
                            分发
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px pb-[74px] pt-[24px] px-[24px] relative rounded-[32px]"
                  data-node-id="1:317"
                  data-name="Skill Col 4"
                >
                  <div
                    className="content-stretch flex gap-[8px] items-center pb-[4px] relative shrink-0 w-full"
                    data-node-id="1:318"
                    data-name="Container"
                  >
                    <div
                      className="h-[21px] relative shrink-0 w-[19.95px]"
                      data-node-id="1:319"
                      data-name="Container"
                    >
                      <img
                        alt=""
                        className="absolute block inset-0 max-w-none size-full"
                        src={imgContainer12}
                      />
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-node-id="1:321"
                      data-name="Heading 3"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#45573b] text-[22px] whitespace-nowrap"
                        data-node-id="1:322"
                      >
                        <p className="leading-[30px]">工具生态与交付</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                    data-node-id="1:323"
                    data-name="List"
                  >
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:324"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:325"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#45573b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:326"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="1:327"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:328"
                        >
                          <p className="mb-0">
                            <span className="leading-[22px]">
                              原型与防御体验：
                            </span>
                            <span className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic">
                              Figma 高
                            </span>
                          </p>
                          <p className="font-['Inter:Regular'] font-normal leading-[22px] mb-0">
                            保真动态交互与 Diff View 设
                          </p>
                          <p className="font-['Inter:Regular'] font-normal leading-[22px]">
                            计
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:329"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:330"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#45573b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:331"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pr-[5.73px] relative shrink-0"
                        data-node-id="1:332"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:333"
                        >
                          <p className="mb-0">
                            <span className="leading-[22px]">
                              数据验证与清洗：
                            </span>
                            <span className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[22px]">
                              Python,
                            </span>
                          </p>
                          <p className="font-['Inter:Regular'] font-normal leading-[22px]">
                            Pandas, SQL 脚本实操验证
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:334"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:335"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#45573b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:336"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pr-[44.62px] relative shrink-0"
                        data-node-id="1:337"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:338"
                        >
                          <p className="leading-[22px] mb-0">
                            链路追踪与可观测：
                          </p>
                          <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[22px] mb-0">
                            LangSmith, TruLens,
                          </p>
                          <p className="font-['Inter:Regular'] font-normal leading-[22px]">
                            Phoenix 调试
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                      data-node-id="1:339"
                      data-name="Item"
                    >
                      <div
                        className="content-stretch flex flex-col h-[14px] items-start pt-[8px] relative shrink-0 w-[6px]"
                        data-node-id="1:340"
                        data-name="Margin"
                      >
                        <div
                          className="bg-[#45573b] relative rounded-[9999px] shrink-0 size-[6px]"
                          data-node-id="1:341"
                          data-name="Background"
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start pr-[1.64px] relative shrink-0"
                        data-node-id="1:342"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] whitespace-nowrap"
                          data-node-id="1:343"
                        >
                          <p className="mb-0">
                            <span className="leading-[22px]">
                              工程协同联调：
                            </span>
                            <span className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular'] font-normal leading-[22px]">
                              Postman,
                            </span>
                          </p>
                          <p className="font-['Inter:Regular'] font-normal leading-[22px] mb-0">
                            OpenAPI 契约定义与敏捷迭
                          </p>
                          <p className="font-['Inter:Regular'] font-normal leading-[22px]">
                            代
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_358px] relative shrink-0 w-full"
              data-node-id="1:344"
              data-name="Section 4: Personal Profile & Life (Wabi-Sabi Human Nuance)"
            >
              <div
                className="col-[1/span_6] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-center shrink-0"
                data-node-id="1:345"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full"
                  data-node-id="1:346"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:347"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#81542b] text-[12px] tracking-[1.2px] uppercase w-full"
                      data-node-id="1:348"
                    >
                      <p className="leading-[16px]">BEYOND THE WORK</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:349"
                    data-name="Heading 2"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[40px] tracking-[-0.6px] w-full"
                      data-node-id="1:350"
                    >
                      <p className="leading-[48px]">器物、徒步与静默沉思</p>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                  data-node-id="1:351"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[16px] w-full"
                    data-node-id="1:352"
                  >
                    <p className="leading-[26px] mb-0">
                      在被光速计算和生成膨胀所充斥的时代，我习惯通过慢节奏的物理世界保持敏
                    </p>
                    <p className="leading-[26px] mb-0">
                      锐的心智。手握粗陶器具的微温、行走在北方山脊干燥凛冽的风里、等待银盐
                    </p>
                    <p className="leading-[26px] mb-0">
                      胶片在暗房里慢慢显影——这些看似低效的触感，恰是理解人机协同与复杂系
                    </p>
                    <p className="leading-[26px]">
                      统设计时不可或缺的情感锚点。
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex gap-[16px] items-start justify-center pt-[4px] relative shrink-0 w-full"
                  data-node-id="1:353"
                  data-name="Container"
                >
                  <div
                    className="bg-[#f1eee2] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px p-[16px] relative rounded-[16px]"
                    data-node-id="1:354"
                    data-name="Background"
                  >
                    <div
                      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                      data-node-id="1:355"
                      data-name="Container"
                    >
                      <div
                        className="h-[13.333px] relative shrink-0 w-[18.333px]"
                        data-node-id="1:356"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer13}
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="1:358"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#45573b] text-[14px] tracking-[0.28px] whitespace-nowrap"
                          data-node-id="1:359"
                        >
                          <p className="leading-[20px]">长文复盘与心智写作</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:360"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] w-full"
                        data-node-id="1:361"
                      >
                        <p className="leading-[22px] mb-0">
                          长期撰写 5,000+ 字 AI 产品实践长
                        </p>
                        <p className="leading-[22px] mb-0">
                          文，复盘真实落地中的教训与架构抉
                        </p>
                        <p className="leading-[22px]">
                          择，与行业同行深度思辨。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#f1eee2] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px p-[16px] relative rounded-[16px]"
                    data-node-id="1:362"
                    data-name="Background"
                  >
                    <div
                      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
                      data-node-id="1:363"
                      data-name="Container"
                    >
                      <div
                        className="h-[17.5px] relative shrink-0 w-[16.667px]"
                        data-node-id="1:364"
                        data-name="Container"
                      >
                        <img
                          alt=""
                          className="absolute block inset-0 max-w-none size-full"
                          src={imgContainer14}
                        />
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0"
                        data-node-id="1:366"
                        data-name="Container"
                      >
                        <div
                          className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#81542b] text-[14px] tracking-[0.28px] whitespace-nowrap"
                          data-node-id="1:367"
                        >
                          <p className="leading-[20px]">胶片摄影与荒野徒步</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:368"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] w-full"
                        data-node-id="1:369"
                      >
                        <p className="leading-[22px] mb-0">
                          习惯用定焦机械胶片相机观察光影与材
                        </p>
                        <p className="leading-[22px] mb-0">
                          质的细微过渡，享受有限张数带来的深
                        </p>
                        <p className="leading-[22px]">思与郑重。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-[7/span_6] content-stretch flex gap-[24px] h-[344px] items-start justify-center justify-self-stretch relative row-1 self-center shrink-0"
                data-node-id="1:370"
                data-name="Container"
              >
                <div
                  className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] flex-col h-[320px] items-start justify-center min-w-px overflow-clip relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                  data-node-id="1:371"
                  data-name="Overlay+Shadow"
                >
                  <div
                    className="flex-[1_0_0] min-h-px relative w-full"
                    data-node-id="1:372"
                    data-name="AB6AXuAKCxPdPWWYGWAn8qJKNmOLd28_j2OXra_afB7U5Kx0j9eQ0dcVD-B_FktJgyX2ZMYSYepqZDlDUFAIEU_M9Q5jQelMkyg6DQrfWqMg30LgRWRgln_GrK12y69eEUDmwi5Jmjt84UcZoUktCgX5OD1KW-uOrCLBIcJlgDY0ZKstVsR9pMGrtb-DDXKWUyF1OkE9qgDWLWnTNNvCEIVbnT5ZwOsmyXdjVob7FGvAtJCDJTzyqPqfWZtB"
                  >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        alt=""
                        className="absolute h-full left-[-60.38%] max-w-none top-0 w-[220.77%]"
                        src={
                          imgAb6AXuAkCxPdPwwygwAn8QJkNmOLd28J2OXraAfB7U5Kx0J9EQ0DcVdBFktJgyX2ZmysYepqZDlDufaieuM9Q5JQelMkyg6DQrfWqMg30LgRwRglnGrK12Y69EEuDmwi5Jmjt84UcZoUktCgX5Od1KwUOrClbIcJlgDy0ZKstVsR9PMGrtbDdxkwUyF1OkE9QgDwlWnTnNvCeiVbnT5ZwOsmyXdjVob7FGvAtJcdjTzyqPqfWZtB
                        }
                      />
                    </div>
                  </div>
                  <div
                    className="absolute backdrop-blur-[6px] bg-[rgba(252,249,237,0.85)] bottom-[12px] content-stretch flex flex-col items-start left-[12px] px-[10px] py-[4px] rounded-[9999px]"
                    data-node-id="1:373"
                    data-name="Overlay+OverlayBlur"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[11px] tracking-[0.55px] whitespace-nowrap"
                      data-node-id="1:374"
                    >
                      <p className="leading-[14px]">日常手作茶器</p>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-[1_0_0] flex-col h-[344px] items-start min-w-px pt-[24px] relative"
                  data-node-id="1:375"
                  data-name="Margin"
                >
                  <div
                    className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[320px] items-start justify-center overflow-clip relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full"
                    data-node-id="1:376"
                    data-name="Overlay+Shadow"
                  >
                    <div
                      className="flex-[1_0_0] min-h-px relative w-full"
                      data-node-id="1:377"
                      data-name="AB6AXuBWPLBxXQZmk8Da4Ry0UXwTvfWzV8A8Oy5nzqYRp2VS_bA9KtiseSiKSRbGasIFlPCsTb6q13D8lrnwYygyyYX-5z4-JwyAYsy2CJqfGpnaZB6H5_Y_5dMuwc2-Vv0vMOjfZaZ4xj0_dQ6uwzA2ja6ghEd3cZV0JRZYo4-C-PVicwP71ex7PXSJNlGR9OTxPEESoCSSlgQsrb6WxHWysi3qK2XberinKfcKua-OhmAfosMGAPQfaRXI"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute h-full left-[-60.38%] max-w-none top-0 w-[220.77%]"
                          src={
                            imgAb6AXuBwplBxXqZmk8Da4Ry0UXwTvfWzV8A8Oy5NzqYRp2VsBA9KtiseSiKsRbGasIFlPCsTb6Q13D8LrnwYygyyYx5Z4JwyAYsy2CJqfGpnaZb6H5Y5DMuwc2Vv0VMOjfZaZ4Xj0DQ6UwzA2Ja6GhEd3CZv0JrzYo4CPVicwP71Ex7PxsjNlGr9OTxPeeSoCsSlgQsrb6WxHWysi3QK2XberinKfcKuaOhmAfosMgapQfaRxi
                          }
                        />
                      </div>
                    </div>
                    <div
                      className="absolute backdrop-blur-[6px] bg-[rgba(252,249,237,0.85)] bottom-[12px] content-stretch flex flex-col items-start left-[12px] px-[10px] py-[4px] rounded-[9999px]"
                      data-node-id="1:378"
                      data-name="Overlay+OverlayBlur"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[11px] tracking-[0.55px] whitespace-nowrap"
                        data-node-id="1:379"
                      >
                        <p className="leading-[14px]">太行山脊徒步纪行</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-[#5d7052] content-stretch flex items-center justify-between overflow-clip p-[64px] relative rounded-[32px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full"
              data-node-id="1:380"
              data-name="Section 5: Call to Action Banner"
            >
              <div
                className="absolute bg-[rgba(69,87,59,0.2)] blur-[20px] bottom-[-80px] right-[-80px] rounded-[9999px] size-[320px]"
                data-node-id="1:381"
                data-name="Decorative organic background blob"
              />
              <div
                className="content-stretch flex flex-col gap-[8px] items-start max-w-[576px] relative shrink-0"
                data-node-id="1:382"
                data-name="Container"
              >
                <div
                  className="bg-[rgba(221,243,205,0.2)] content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0"
                  data-node-id="1:383"
                  data-name="Overlay"
                >
                  <div
                    className="bg-[#ffdcc1] relative rounded-[9999px] shrink-0 size-[6px]"
                    data-node-id="1:384"
                    data-name="Background"
                  />
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="1:385"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-white tracking-[0.55px] whitespace-nowrap"
                      data-node-id="1:386"
                    >
                      <p className="leading-[14px]">
                        Open for Strategic Engagements
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                  data-node-id="1:387"
                  data-name="Heading 2"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-white tracking-[-0.6px] whitespace-nowrap"
                    data-node-id="1:388"
                  >
                    <p className="leading-[50px] mb-0">寻找一个既懂业务深水</p>
                    <p className="leading-[50px] mb-0">区，</p>
                    <p className="leading-[50px] mb-0">
                      又懂技术边界的 AI 产品负
                    </p>
                    <p className="leading-[50px]">责人？</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full"
                  data-node-id="1:389"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(244,241,228,0.8)] whitespace-nowrap"
                    data-node-id="1:390"
                  >
                    <p className="leading-[26px] mb-0">
                      无论是企业级大模型与 Agent 项目顾问、从零到一构建核心 AI
                      产品
                    </p>
                    <p className="leading-[26px]">
                      团队，还是深度技术商业化评估，欢迎随时交流。
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[16px] items-center relative shrink-0"
                data-node-id="1:391"
                data-name="Container"
              >
                <div
                  className="bg-[#81542b] content-stretch flex gap-[8px] items-center justify-center px-[28px] py-[14px] relative rounded-[9999px] shrink-0"
                  data-node-id="1:392"
                  data-name="Link"
                >
                  <div
                    className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
                    data-node-id="1:393"
                    data-name="Link:shadow"
                  />
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="1:394"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.28px] whitespace-nowrap"
                      data-node-id="1:395"
                    >
                      <p className="leading-[20px]">讨论潜在机会 / 预约交流</p>
                    </div>
                  </div>
                  <div
                    className="relative shrink-0 size-[12px]"
                    data-node-id="1:396"
                    data-name="Container"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgContainer15}
                    />
                  </div>
                </div>
                <div
                  className="bg-[#fcf9ed] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] items-center justify-center px-[24px] py-[14px] relative rounded-[9999px] shrink-0"
                  data-node-id="1:398"
                  data-name="Link"
                >
                  <div
                    className="relative shrink-0 size-[12px]"
                    data-node-id="1:399"
                    data-name="Container"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgContainer16}
                    />
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0"
                    data-node-id="1:401"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[14px] tracking-[0.28px] whitespace-nowrap"
                      data-node-id="1:402"
                    >
                      <p className="leading-[20px]">
                        下载个人履历与案例集 (PDF)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#f6f4e7] content-stretch drop-shadow-[0px_1px_4px_rgba(44,44,36,0.03)] flex flex-col items-start relative shrink-0 w-full"
        data-node-id="1:403"
        data-name="Footer"
      >
        <div
          className="content-stretch flex flex-col gap-[64px] items-start max-w-[1280px] px-[64px] py-[96px] relative shrink-0 w-full"
          data-node-id="1:404"
          data-name="Container"
        >
          <div
            className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_214.50px] relative shrink-0 w-full"
            data-node-id="1:405"
            data-name="Container"
          >
            <div
              className="col-[1/span_7] h-[214.5px] justify-self-stretch relative row-1 shrink-0"
              data-node-id="1:406"
              data-name="Container"
            >
              <div
                className="absolute content-stretch flex gap-[8px] items-center left-0 right-0 top-0"
                data-node-id="1:407"
                data-name="Container"
              >
                <div
                  className="bg-[#81542b] relative rounded-[9999px] shrink-0 size-[10px]"
                  data-node-id="1:408"
                  data-name="Background"
                />
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0"
                  data-node-id="1:409"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#81542b] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap"
                    data-node-id="1:410"
                  >
                    <p className="leading-[16px]">{`DESIGN PHILOSOPHY & AI PRODUCT DIRECTION`}</p>
                  </div>
                </div>
              </div>
              <div
                className="absolute content-stretch flex flex-col items-start left-0 max-w-[672px] right-0 top-[31px]"
                data-node-id="1:411"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[28px] whitespace-nowrap"
                  data-node-id="1:412"
                >
                  <p className="leading-[45.5px] mb-0">
                    把 AI 能力转化为可验证的业务结果 —— 在不确定的技
                  </p>
                  <p className="leading-[45.5px] mb-0">
                    术浪潮中，以克制、深思与匠心，构建具备真实商业
                  </p>
                  <p className="leading-[45.5px]">价值的生成式智能产品形态。</p>
                </div>
              </div>
              <div
                className="absolute content-center flex flex-wrap gap-[16px] items-center left-0 pt-[8px] right-0 top-[184.5px]"
                data-node-id="1:413"
                data-name="Container"
              >
                <div
                  className="bg-[#ebe8dc] content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0"
                  data-node-id="1:414"
                  data-name="Background"
                >
                  <div
                    className="h-[11.667px] relative shrink-0 w-[9.333px]"
                    data-node-id="1:415"
                    data-name="Container"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgContainer17}
                    />
                  </div>
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[11px] tracking-[0.55px] whitespace-nowrap"
                    data-node-id="1:417"
                  >
                    <p className="leading-[14px]">北京 · 远距离协作</p>
                  </div>
                </div>
                <div
                  className="bg-[#ebe8dc] content-stretch flex gap-[5.99px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0"
                  data-node-id="1:418"
                  data-name="Background"
                >
                  <div
                    className="h-[11.667px] relative shrink-0 w-[10.5px]"
                    data-node-id="1:419"
                    data-name="Container"
                  >
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgContainer18}
                    />
                  </div>
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[11px] tracking-[0.55px] whitespace-nowrap"
                    data-node-id="1:421"
                  >
                    <p className="leading-[14px]">接受定向咨询预约</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-[8/span_5] content-stretch flex gap-[24px] h-[214.5px] items-start justify-center justify-self-stretch relative row-1 shrink-0"
              data-node-id="1:422"
              data-name="Container"
            >
              <div
                className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px pb-[70.5px] relative"
                data-node-id="1:423"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                  data-node-id="1:424"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[12px] tracking-[0.6px] w-full"
                    data-node-id="1:425"
                  >
                    <p className="leading-[16px]">框架导航</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                  data-node-id="1:426"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:427"
                    data-name="Link"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] w-full"
                      data-node-id="1:428"
                    >
                      <p className="leading-[22px]">代表案例与作品集</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:429"
                    data-name="Link"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] w-full"
                      data-node-id="1:430"
                    >
                      <p className="leading-[22px]">企业级 AI 架构能力</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:431"
                    data-name="Link"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] w-full"
                      data-node-id="1:432"
                    >
                      <p className="leading-[22px]">顾问与轻组合作形式</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:433"
                    data-name="Link"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[14px] w-full"
                      data-node-id="1:434"
                    >
                      <p className="leading-[22px]">产品方法论与履历</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px pb-[88.5px] relative"
                data-node-id="1:435"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                  data-node-id="1:436"
                  data-name="Container"
                >
                  <div
                    className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[12px] tracking-[0.6px] w-full"
                    data-node-id="1:437"
                  >
                    <p className="leading-[16px]">联络通路</p>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                  data-node-id="1:438"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:439"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[14px] w-full"
                      data-node-id="1:440"
                    >
                      <p className="leading-[22px]">linxu.aipm@domain.com</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:441"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#444840] text-[11px] tracking-[0.55px] w-full"
                      data-node-id="1:442"
                    >
                      <p className="leading-[14px]">工作邮箱 (24h 内反馈)</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-px items-start pt-[5px] relative shrink-0 w-full"
                    data-node-id="1:443"
                    data-name="Container"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c15] text-[14px] whitespace-nowrap"
                      data-node-id="1:444"
                    >
                      <p className="leading-[22px]">微信预约通道</p>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      data-node-id="1:445"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[11px] tracking-[0.55px] w-full"
                        data-node-id="1:446"
                      >
                        <p className="leading-[14px]">
                          添加前请备注：姓名+业务咨询
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex items-center justify-between pt-[40px] relative shrink-0 w-full"
            data-node-id="1:447"
            data-name="Container"
          >
            <div
              className="content-stretch flex flex-col items-start relative shrink-0"
              data-node-id="1:448"
              data-name="Container"
            >
              <div
                className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#444840] text-[11px] tracking-[0.55px] whitespace-nowrap"
                data-node-id="1:449"
              >
                <p className="leading-[14px]">
                  © 2025 林序 (Lin Xu). Crafted with restraint, clarity, and
                  artificial intelligence.
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[24px] items-center relative shrink-0"
              data-node-id="1:450"
              data-name="Container"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0"
                data-node-id="1:451"
                data-name="Link"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[11px] tracking-[0.55px] whitespace-nowrap"
                  data-node-id="1:452"
                >
                  <p className="leading-[14px]">个人声明</p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start opacity-40 relative shrink-0"
                data-node-id="1:453"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#444840] text-[11px] tracking-[0.55px] whitespace-nowrap"
                  data-node-id="1:454"
                >
                  <p className="leading-[14px]">·</p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0"
                data-node-id="1:455"
                data-name="Link"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[11px] tracking-[0.55px] whitespace-nowrap"
                  data-node-id="1:456"
                >
                  <p className="leading-[14px]">预约沟通</p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start opacity-40 relative shrink-0"
                data-node-id="1:457"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#444840] text-[11px] tracking-[0.55px] whitespace-nowrap"
                  data-node-id="1:458"
                >
                  <p className="leading-[14px]">·</p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0"
                data-node-id="1:459"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#444840] text-[11px] tracking-[0.55px] whitespace-nowrap"
                  data-node-id="1:460"
                >
                  <p className="leading-[14px]">北京 / 远程顾问协作</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(252,249,237,0.85)] content-stretch flex flex-col items-start left-0 right-0 shadow-[0px_1px_8px_0px_rgba(44,44,36,0.04)] top-0"
        data-node-id="1:461"
        data-name="Header"
      >
        <div
          className="content-stretch flex h-[80px] items-center justify-between max-w-[1280px] px-[64px] relative shrink-0 w-full"
          data-node-id="1:462"
          data-name="Container"
        >
          <div
            className="content-stretch flex gap-[12px] items-center relative shrink-0"
            data-node-id="1:463"
            data-name="Link"
          >
            <div
              className="bg-[#5d7052] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]"
              data-node-id="1:464"
              data-name="Background"
            >
              <div
                className="h-[21.465px] relative shrink-0 w-[20.518px]"
                data-node-id="1:465"
                data-name="Container"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgContainer19}
                />
              </div>
            </div>
            <div
              className="content-stretch flex flex-col items-start relative shrink-0"
              data-node-id="1:467"
              data-name="Container"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                data-node-id="1:468"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c15] text-[14px] tracking-[-0.35px] whitespace-nowrap"
                  data-node-id="1:469"
                >
                  <p className="leading-[20px]">林序 · AIPM</p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                data-node-id="1:470"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#444840] text-[11px] tracking-[0.275px] whitespace-nowrap"
                  data-node-id="1:471"
                >
                  <p className="leading-[14px]">
                    AI 产品经理 / Product Strategist
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[40px] items-center relative shrink-0"
            data-node-id="1:472"
            data-name="Container"
          >
            <div
              className="content-stretch flex gap-[40px] items-center relative shrink-0"
              data-node-id="1:473"
              data-name="Nav"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0"
                data-node-id="1:474"
                data-name="Link"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#444840] text-[14px] tracking-[0.28px] whitespace-nowrap"
                  data-node-id="1:475"
                >
                  <p className="leading-[20px]">作品 (Works)</p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0"
                data-node-id="1:476"
                data-name="Link"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#444840] text-[14px] tracking-[0.28px] whitespace-nowrap"
                  data-node-id="1:477"
                >
                  <p className="leading-[20px]">能力 (Capabilities)</p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0"
                data-node-id="1:478"
                data-name="Link"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#444840] text-[14px] tracking-[0.28px] whitespace-nowrap"
                  data-node-id="1:479"
                >
                  <p className="leading-[20px]">合作方式 (Services)</p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0"
                data-node-id="1:480"
                data-name="Link"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c15] text-[16px] whitespace-nowrap"
                  data-node-id="1:481"
                >
                  <p className="leading-[24px]">关于我 (About)</p>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[16px] items-center relative shrink-0"
              data-node-id="1:482"
              data-name="Container"
            >
              <div
                className="bg-[#5d7052] content-stretch drop-shadow-[0px_2px_4px_rgba(93,112,82,0.15)] flex items-center justify-center px-[24px] py-[10px] relative rounded-[9999px] shrink-0"
                data-node-id="1:483"
                data-name="Link"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.28px] whitespace-nowrap"
                  data-node-id="1:484"
                >
                  <p className="leading-[20px]">讨论合作 / 联系我</p>
                </div>
              </div>
              <div
                className="bg-[#45573b] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]"
                data-node-id="1:485"
                data-name="Background"
              >
                <div
                  className="relative shrink-0 size-[12px]"
                  data-node-id="1:486"
                  data-name="Container"
                >
                  <img
                    alt=""
                    className="absolute block inset-0 max-w-none size-full"
                    src={imgContainer20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
