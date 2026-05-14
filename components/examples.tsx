import {
  Button,
  CategoryLabel,
  Checkbox,
  ChoiceChip,
  AdditionalServiceSection,
  DiagnosticCodeList,
  DiagnosticListSection,
  DotBadge,
  DiagActionCard,
  DiagCodeItem,
  DiagReportCard,
  FilterChip,
  GlobalNavigationBar,
  GlobalNavigationBarItemComponent,
  HistoryTimelineSection,
  IconButton,
  InputField,
  InputFieldWithButton,
  MaintenanceSummaryCard,
  NavigationBar,
  NumberCountBadge,
  StepProgressBar,
  TimelineProgressBar,
  MatrixProgressBar,
  NotificationBanner,
  AuthorityItem,
  AuthorityList,
  PartSelectionSection,
  RadioButton,
  RecommendCard,
  RecordTab,
  ServiceItem,
  ServiceBanner,
  ServiceMenuItem,
  ServiceMenuSection,
  ShopItem,
  ShopListSection,
  StatusItem,
  Thumbnail,
  VehicleStatusCard,
  VehicleWarningSection
} from "./index";

export function DesignSystemExamples() {
  return (
    <>
      <NumberCountBadge>1</NumberCountBadge>
      <DotBadge />
      <CategoryLabel>#엔진오일</CategoryLabel>
      <FilterChip label="Label" selected />
      <FilterChip label="Label" selected={false} />
      <ChoiceChip value="00:00" selected />
      <ChoiceChip value="00:00" selected={false} />
      <Button variant="filled" size="xlarge">
        Label
      </Button>
      <Button variant="filled" size="large">
        Label
      </Button>
      <Button variant="filled" size="medium">
        Label
      </Button>
      <Button variant="filled" size="small">
        Label
      </Button>
      <Button variant="outlined" size="large">
        Label
      </Button>
      <Button variant="outlined" size="medium">
        Label
      </Button>
      <Button variant="text" size="large" iconLeft iconRight>
        Label
      </Button>
      <Button variant="text" size="xsmall" iconLeft iconRight>
        Label
      </Button>
      <InputField
        id="name"
        placeholder="Hint_Text"
        helperText="Caption"
        trailingIcons={["home", "home"]}
      />
      <InputField
        id="car-number"
        placeholder="Hint_Text"
        helperText="Caption"
        size="medium"
        status="error"
        trailingIcons={["cancelMuted", "error"]}
      />
      <InputFieldWithButton />
      <InputFieldWithButton size="medium" />
      <Checkbox label="필수 약관에 동의합니다" defaultChecked />
      <Checkbox label="오류 체크박스" error />
      <GlobalNavigationBar />
      <GlobalNavigationBarItemComponent label="홈" active />
      <GlobalNavigationBarItemComponent label="Label" />
      <NavigationBar variant="logo" />
      <NavigationBar variant="back" />
      <NavigationBar variant="default" />
      <RecordTab variant="diag" />
      <RecordTab variant="repair" />
      <VehicleWarningSection />
      <AuthorityItem />
      <AuthorityList />
      <DiagCodeItem />
      <DiagnosticCodeList />
      <StatusItem />
      <IconButton size="large" />
      <IconButton size="medium" state="pressed" />
      <IconButton size="small" state="disabled" />
      <RadioButton selected />
      <RadioButton selected={false} />
      <RadioButton selected={false} state="disabled" />
      <NotificationBanner actionLabel="진단하기" />
      <StepProgressBar step="step01" />
      <StepProgressBar step="step02" />
      <StepProgressBar step="step03" />
      <TimelineProgressBar step="step01" />
      <TimelineProgressBar step="step02" />
      <TimelineProgressBar step="step03" />
      <MatrixProgressBar step="step01" />
      <MatrixProgressBar step="step03" />
      <MatrixProgressBar step="step05" />
      <AdditionalServiceSection />
      <ServiceBanner state="scheduled" />
      <ServiceBanner state="in-progress" />
      <PartSelectionSection />
      <HistoryTimelineSection />
      <DiagnosticListSection />
      <ShopItem />
      <ShopItem state="pressed" />
      <ShopListSection />
      <ServiceMenuItem category="engine-oil" />
      <ServiceMenuItem category="tire" />
      <ServiceMenuItem category="exterior-repair" />
      <ServiceMenuItem category="vehicle-maintenance" />
      <ServiceItem serviceType="washer" />
      <ServiceItem serviceType="coolant" />
      <ServiceItem serviceType="wiper" />
      <ServiceItem serviceType="aircon-filter" />
      <ServiceItem serviceType="air-filter" />
      <ServiceItem serviceType="oil-filter" />
      <RecommendCard />
      <RecommendCard selected />
      <MaintenanceSummaryCard state="collapsed" />
      <MaintenanceSummaryCard state="expanded" />
      <Thumbnail variant="shop-logo-thumbnail" />
      <Thumbnail variant="item-thumbnail" />
      <Thumbnail variant="item-detail-thumbnail" />
      <Thumbnail variant="shop-detail-thumbnail" />
      <DiagActionCard />
      <VehicleStatusCard />
      <DiagReportCard />
      <ServiceMenuSection />
      <ServiceMenuSection variant="surface" />
    </>
  );
}
