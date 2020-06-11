// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// ------------------------------------------------------------------------------

import { BaseDateTime } from "./baseDateTime";
export namespace SpanishDateTime {
    export const LangMarker = 'Spa';
    export const CheckBothBeforeAfter = false;
    export const TillRegex = `(?<till>hasta|al?|--|-|—|——)(\\s+(el|la(s)?))?`;
    export const RangeConnectorRegex = `(?<and>y\\s*(el|(la(s)?)?)|${BaseDateTime.RangeConnectorSymbolRegex})`;
    export const DayRegex = `(?<day>01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|1|20|21|22|23|24|25|26|27|28|29|2|30|31|3|4|5|6|7|8|9)(?=\\b|t)`;
    export const MonthNumRegex = `(?<month>01|02|03|04|05|06|07|08|09|10|11|12|1|2|3|4|5|6|7|8|9)\\b`;
    export const AmDescRegex = `(${BaseDateTime.BaseAmDescRegex})`;
    export const PmDescRegex = `(${BaseDateTime.BasePmDescRegex})`;
    export const AmPmDescRegex = `(${BaseDateTime.BaseAmPmDescRegex})`;
    export const DescRegex = `(?<desc>(${AmDescRegex}|${PmDescRegex}))`;
    export const OfPrepositionRegex = `(\\bd(o|a|el?)\\b)`;
    export const AfterNextSuffixRegex = `\\b(que\\s+viene|pasad[oa])\\b`;
    export const RangePrefixRegex = `((de(sde)?|entre)\\s+(la(s)?\\s+)?)`;
    export const TwoDigitYearRegex = `\\b(?<![$])(?<year>([0-24-9]\\d))(?!(\\s*((\\:\\d)|${AmDescRegex}|${PmDescRegex}|\\.\\d)))\\b`;
    export const RelativeRegex = `(?<rela>((est[ae]|pr[oó]xim[oa]|([uú]ltim(o|as|os)))(\\s+fin(ales)?\\s+de(\\s+la)?)?)|(fin(ales)?\\s+de(\\s+la)?))\\b`;
    export const StrictRelativeRegex = `(?<rela>((est[ae]|pr[oó]xim[oa]|([uú]ltim(o|as|os)))(\\s+fin(ales)?\\s+de(\\s+la)?)?)|(fin(ales)?\\s+de(\\s+la)?))\\b`;
    export const WrittenOneToNineRegex = `(un[ao]?|dos|tres|cuatro|cinco|seis|siete|ocho|nueve)`;
    export const WrittenOneHundredToNineHundredRegex = `(doscient[oa]s|trescient[oa]s|cuatrocient[ao]s|quinient[ao]s|seiscient[ao]s|setecient[ao]s|ochocient[ao]s|novecient[ao]s|cien(to)?)`;
    export const WrittenOneToNinetyNineRegex = `(((treinta|cuarenta|cincuenta|sesenta|setenta|ochenta|noventa)(\\s+y\\s+${WrittenOneToNineRegex})?)|diez|once|doce|trece|catorce|quince|dieciséis|dieciseis|diecisiete|dieciocho|diecinueve|veinte|veintiuno|veintiún|veintiun|veintiuna|veintidós|veintidos|veintitrés|veintitres|veinticuatro|veinticinco|veintiséis|veintisiete|veintiocho|veintinueve|un[ao]?|dos|tres|cuatro|cinco|seis|siete|ocho|nueve)`;
    export const FullTextYearRegex = `\\b(?<fullyear>((dos\\s+)?mil)(\\s+${WrittenOneHundredToNineHundredRegex})?(\\s+${WrittenOneToNinetyNineRegex})?)`;
    export const YearRegex = `(${BaseDateTime.FourDigitYearRegex}|${FullTextYearRegex})`;
    export const RelativeMonthRegex = `(?<relmonth>((este|pr[oó]ximo|([uú]ltim(o|as|os)))\\s+mes)|(mes\\s+((que\\s+viene)|pasado)))\\b`;
    export const MonthRegex = `\\b(?<month>abr(il)?|ago(sto)?|dic(iembre)?|feb(rero)?|ene(ro)?|ju[ln](io)?|mar(zo)?|mayo?|nov(iembre)?|oct(ubre)?|sep?t(iembre)?|sep)\\b`;
    export const MonthSuffixRegex = `(?<msuf>((del?|la|el)\\s+)?(${RelativeMonthRegex}|${MonthRegex}))`;
    export const DateUnitRegex = `(?<unit>años?|mes(es)?|semanas?|d[ií]as?)\\b`;
    export const PastRegex = `(?<past>\\b(pasad(a|o)(s)?|[uú]ltim[oa](s)?|anterior(es)?|previo(s)?)\\b)`;
    export const FutureRegex = `(?<past>\\b(siguiente(s)?|pr[oó]xim[oa](s)?|dentro\\s+de|en)\\b)`;
    export const SimpleCasesRegex = `\\b((desde\\s+el|desde|del?)\\s+)?(${DayRegex})\\s*${TillRegex}\\s*(${DayRegex})\\s+${MonthSuffixRegex}((\\s+|\\s*,\\s*)(en\\s+|del\\s+|de\\s+)?${YearRegex})?\\b`;
    export const MonthFrontSimpleCasesRegex = `\\b${MonthSuffixRegex}\\s+((desde\\s+el|desde|del)\\s+)?(${DayRegex})\\s*${TillRegex}\\s*(${DayRegex})((\\s+|\\s*,\\s*)(en\\s+|del\\s+|de\\s+)?${YearRegex})?\\b`;
    export const MonthFrontBetweenRegex = `\\b${MonthSuffixRegex}\\s+((entre|entre\\s+el)\\s+)(${DayRegex})\\s*${RangeConnectorRegex}\\s*(${DayRegex})((\\s+|\\s*,\\s*)(en\\s+|del\\s+|de\\s+)?${YearRegex})?\\b`;
    export const DayBetweenRegex = `\\b((entre|entre\\s+el)\\s+)(${DayRegex})\\s*${RangeConnectorRegex}\\s*(${DayRegex})\\s+${MonthSuffixRegex}((\\s+|\\s*,\\s*)(en\\s+|del\\s+|de\\s+)?${YearRegex})?\\b`;
    export const SpecialYearPrefixes = `((del\\s+)?calend[aá]rio|(?<special>fiscal|escolar))`;
    export const OneWordPeriodRegex = `\\b(((((la|el)\\s+)?mes\\s+((${OfPrepositionRegex})\\s+)?)|((pr[oó]xim[oa]?|est[ea]|[uú]ltim[oa]?)\\s+))?(${MonthRegex})|((la|el)\\s+)?(((${RelativeRegex}\\s+)${DateUnitRegex}(\\s+${AfterNextSuffixRegex})?)|${DateUnitRegex}(\\s+${AfterNextSuffixRegex}))|va\\s+de\\s+${DateUnitRegex})`;
    export const MonthWithYearRegex = `\\b(((pr[oó]xim[oa](s)?|este|esta|[uú]ltim[oa]?)\\s+)?(${MonthRegex})(\\s+|(\\s*[,-]\\s*))((de|del|de la)\\s+)?(${YearRegex}|(?<order>pr[oó]ximo(s)?|[uú]ltimo?|este)\\s+año))\\b`;
    export const MonthNumWithYearRegex = `\\b((${YearRegex}(\\s*?)[/\\-\\.~](\\s*?)${MonthNumRegex})|(${MonthNumRegex}(\\s*?)[/\\-\\.~](\\s*?)${YearRegex}))\\b`;
    export const WeekOfMonthRegex = `(?<wom>(la\\s+)?(?<cardinal>primera?|1ra|segunda|2da|tercera?|3ra|cuarta|4ta|quinta|5ta|[uú]ltima)\\s+semana\\s+${MonthSuffixRegex})`;
    export const WeekOfYearRegex = `(?<woy>(la\\s+)?(?<cardinal>primera?|1ra|segunda|2da|tercera?|3ra|cuarta|4ta|quinta|5ta|[uú]ltima?|([12345]ª))\\s+semana(\\s+del?)?\\s+(${YearRegex}|(?<order>pr[oó]ximo|[uú]ltimo|este)\\s+año))`;
    export const FollowedDateUnit = `^\\s*${DateUnitRegex}`;
    export const NumberCombinedWithDateUnit = `\\b(?<num>\\d+(\\.\\d*)?)${DateUnitRegex}`;
    export const QuarterTermRegex = `(?<cardinal>primer|1er|segundo|2do|tercer|3ro|4to|((1|2|3|4)º))\\s+(cuatrimestre|cuarto)`;
    export const QuarterRegex = `(el\\s+)?${QuarterTermRegex}((\\s+del?|\\s*,\\s*)?\\s+(${YearRegex}|(?<order>pr[oó]ximo(s)?|[uú]ltimo?|este)\\s+a[ñn]o|a[ñn]o(\\s+${AfterNextSuffixRegex})))?`;
    export const QuarterRegexYearFront = `(${YearRegex}|(?<order>pr[oó]ximo(s)?|[uú]ltimo?|este)\\s+a[ñn]o)\\s+(el\\s+)?${QuarterTermRegex}`;
    export const AllHalfYearRegex = `^[.]`;
    export const EarlyPrefixRegex = `\\b(?<EarlyPrefix>((comienzos?|inicios?)\\s+(${OfPrepositionRegex})))\\b`;
    export const MidPrefixRegex = `\\b(?<MidPrefix>(mediados\\s+(${OfPrepositionRegex})))\\b`;
    export const LaterPrefixRegex = `\\b(?<LatePrefix>((fines|finales)\\s+(${OfPrepositionRegex})))\\b`;
    export const PrefixPeriodRegex = `(${EarlyPrefixRegex}|${MidPrefixRegex}|${LaterPrefixRegex})`;
    export const PrefixDayRegex = `^[.]`;
    export const CenturySuffixRegex = `^[.]`;
    export const SeasonRegex = `\\b(?<season>(([uú]ltim[oa]|est[ea]|el|la|(pr[oó]xim[oa]s?|siguiente)|${PrefixPeriodRegex})\\s+)?(?<seas>primavera|verano|otoño|invierno)((\\s+del?|\\s*,\\s*)?\\s+(${YearRegex}|(?<order>pr[oó]ximo|[uú]ltimo|este)\\s+año))?)\\b`;
    export const WhichWeekRegex = `\\b(semana)(\\s*)(?<number>5[0-3]|[1-4]\\d|0?[1-9])\\b`;
    export const WeekOfRegex = `((del?|el|la)\\s+)?(semana)(\\s*)(${OfPrepositionRegex})`;
    export const MonthOfRegex = `(mes)(\\s+)(${OfPrepositionRegex})`;
    export const RangeUnitRegex = `\\b(?<unit>años?|mes(es)?|semanas?)\\b`;
    export const InConnectorRegex = `\\b(in)\\b`;
    export const SinceYearSuffixRegex = `^[.]`;
    export const WithinNextPrefixRegex = `\\b(dentro\\s+de)\\b`;
    export const FromRegex = `((de(sde)?)(\\s*la(s)?)?)$`;
    export const BetweenRegex = `(entre\\s*(la(s)?)?)`;
    export const WeekDayRegex = `\\b(?<weekday>domingos?|lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bados?|lun|mar|mi[eé]|jue|vie|s[aá]b|dom|lu|ma|mi|ju|vi|s[aá]|do)\\b`;
    export const OnRegex = `(?<=\\ben\\s+)(${DayRegex}s?)\\b`;
    export const RelaxedOnRegex = `(?<=\\b(en|d?el)\\s+)((?<day>10|11|12|13|14|15|16|17|18|19|1st|20|21|22|23|24|25|26|27|28|29|2|30|31|3|4|5|6|7|8|9)s?)\\b`;
    export const ThisRegex = `\\b((este\\s*)${WeekDayRegex})|(${WeekDayRegex}\\s*((de\\s+)?esta\\s+semana))\\b`;
    export const LastDateRegex = `\\b(([uú]ltimo)\\s*${WeekDayRegex})|(${WeekDayRegex}(\\s+((de\\s+)?(esta|la)\\s+([uú]ltima\\s+)?semana)))\\b`;
    export const NextDateRegex = `\\b(((pr[oó]ximo|siguiente)\\s*)${WeekDayRegex})|(${WeekDayRegex}(\\s+(de\\s+)?(la\\s+)?(pr[oó]xima|siguiente)(\\s*semana)))\\b`;
    export const SpecialDayRegex = `\\b((el\\s+)?(d[ií]a\\s+antes\\s+de\\s+ayer|anteayer)|((el\\s+)?d[ií]a\\s+(despu[eé]s\\s+)?de\\s+mañana|pasado\\s+mañana)|(el\\s)?d[ií]a siguiente|(el\\s)?pr[oó]ximo\\s+d[ií]a|(el\\s+)?[uú]ltimo d[ií]a|(d)?el d[ií]a(?!\\s+d)|ayer|mañana|hoy)\\b`;
    export const SpecialDayWithNumRegex = `^[.]`;
    export const ForTheRegex = `^[.]`;
    export const WeekDayAndDayOfMonthRegex = `^[.]`;
    export const WeekDayAndDayRegex = `^[.]`;
    export const WeekDayOfMonthRegex = `(?<wom>(el\\s+)?(?<cardinal>primer|1er|segundo|2do|tercer|3er|cuarto|4to|quinto|5to|[uú]ltimo)\\s+${WeekDayRegex}\\s+${MonthSuffixRegex})`;
    export const RelativeWeekDayRegex = `^[.]`;
    export const AmbiguousRangeModifierPrefix = `^[.]`;
    export const NumberEndingPattern = `^[.]`;
    export const SpecialDateRegex = `(?<=\\b(en)\\s+el\\s+)${DayRegex}\\b`;
    export const OfMonthRegex = `^\\s*de\\s*${MonthSuffixRegex}`;
    export const MonthEndRegex = `(${MonthRegex}\\s*(el)?\\s*$)`;
    export const WeekDayEnd = `${WeekDayRegex}\\s*,?\\s*$`;
    export const WeekDayStart = `^[\\.]`;
    export const DateYearRegex = `(?<year>${YearRegex}|${TwoDigitYearRegex})`;
    export const DateExtractor1 = `\\b(${WeekDayRegex}(\\s+|\\s*,\\s*))?${DayRegex}?((\\s*(de)|[/\\\\\\.\\-])\\s*)?${MonthRegex}\\b`;
    export const DateExtractor2 = `\\b(${WeekDayRegex}(\\s+|\\s*,\\s*))?${DayRegex}\\s*([\\.\\-]|de)\\s*${MonthRegex}(\\s*,\\s*|\\s*(del?)\\s*)${DateYearRegex}\\b`;
    export const DateExtractor3 = `\\b(${WeekDayRegex}(\\s+|\\s*,\\s*))?${DayRegex}(\\s+|\\s*,\\s*|\\s+de\\s+|\\s*-\\s*)${MonthRegex}((\\s+|\\s*,\\s*)${DateYearRegex})?\\b`;
    export const DateExtractor4 = `\\b${MonthNumRegex}\\s*[/\\\\\\-]\\s*${DayRegex}\\s*[/\\\\\\-]\\s*${DateYearRegex}(?!\\s*[/\\\\\\-\\.]\\s*\\d+)`;
    export const DateExtractor5 = `\\b${DayRegex}\\s*[/\\\\\\-\\.]\\s*(${MonthNumRegex}|${MonthRegex})\\s*[/\\\\\\-\\.]\\s*${DateYearRegex}(?!\\s*[/\\\\\\-\\.]\\s*\\d+)`;
    export const DateExtractor6 = `(?<=\\b(en|el)\\s+)${MonthNumRegex}[\\-\\.]${DayRegex}\\b`;
    export const DateExtractor7 = `\\b${MonthNumRegex}\\s*/\\s*${DayRegex}((\\s+|\\s*,\\s*|\\s+de\\s+)${DateYearRegex})?\\b`;
    export const DateExtractor8 = `(?<=\\b(en|el)\\s+)${DayRegex}[\\\\\\-]${MonthNumRegex}\\b`;
    export const DateExtractor9 = `\\b${DayRegex}\\s*/\\s*${MonthNumRegex}((\\s+|\\s*,\\s*|\\s+de\\s+)${DateYearRegex})?\\b`;
    export const DateExtractor10 = `\\b${YearRegex}\\s*[/\\\\\\-\\.]\\s*${MonthNumRegex}\\s*[/\\\\\\-\\.]\\s*${DayRegex}(?!\\s*[/\\\\\\-\\.]\\s*\\d+)`;
    export const HourNumRegex = `\\b(?<hournum>cero|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce)\\b`;
    export const MinuteNumRegex = `(?<minnum>uno?|d[óo]s|tr[eé]s|cuatro|cinco|s[eé]is|siete|ocho|nueve|diez|once|doce|trece|catorce|quince|diecis[eé]is|diecisiete|dieciocho|diecinueve|veinte|treinta|cuarenta|cincuenta)`;
    export const DeltaMinuteNumRegex = `(?<deltaminnum>uno?|d[óo]s|tr[eé]s|cuatro|cinco|s[eé]is|siete|ocho|nueve|diez|once|doce|trece|catorce|quince|diecis[eé]is|diecisiete|dieciocho|diecinueve|veinte|treinta|cuarenta|cincuenta)`;
    export const OclockRegex = `(?<oclock>en\\s+punto)`;
    export const PmRegex = `(?<pm>((por|de|a|en)\\s+la)\\s+(tarde|noche))`;
    export const AmRegex = `(?<am>((por|de|a|en)\\s+la)\\s+(mañana|madrugada))`;
    export const AmTimeRegex = `(?<am>(esta|(por|de|a|en)\\s+la)\\s+(mañana|madrugada))`;
    export const PmTimeRegex = `(?<pm>(esta|(por|de|a|en)\\s+la)\\s+(tarde|noche))`;
    export const LessThanOneHour = `(?<lth>((\\s+y\\s+)?cuarto|(\\s*)menos cuarto|(\\s+y\\s+)media|${BaseDateTime.DeltaMinuteRegex}(\\s+(minutos?|mins?))|${DeltaMinuteNumRegex}(\\s+(minutos?|mins?))))`;
    export const TensTimeRegex = `(?<tens>diez|veint(i|e)|treinta|cuarenta|cincuenta)`;
    export const WrittenTimeRegex = `(?<writtentime>${HourNumRegex}\\s*((y|menos)\\s+)?((${TensTimeRegex}(\\s*y\\s+)?)?${MinuteNumRegex}))`;
    export const TimePrefix = `(?<prefix>${LessThanOneHour}(\\s+(pasad[ao]s)\\s+(de\\s+las|las)?|\\s+(para|antes\\s+de)?\\s+(las?))?)`;
    export const TimeSuffix = `(?<suffix>(${LessThanOneHour}\\s+)?(${AmRegex}|${PmRegex}|${OclockRegex}))`;
    export const BasicTime = `(?<basictime>${WrittenTimeRegex}|${HourNumRegex}|${BaseDateTime.HourRegex}:${BaseDateTime.MinuteRegex}(:${BaseDateTime.SecondRegex})?|${BaseDateTime.HourRegex})`;
    export const AtRegex = `\\b(?<=\\b(a las?)\\s+)(${WrittenTimeRegex}|${HourNumRegex}|${BaseDateTime.HourRegex})\\b(\\s*\\bh\\b)?`;
    export const ConnectNumRegex = `(${BaseDateTime.HourRegex}(?<min>00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59)\\s*${DescRegex})`;
    export const TimeRegex1 = `(\\b${TimePrefix}\\s+)?(${WrittenTimeRegex}|${HourNumRegex}|${BaseDateTime.HourRegex})\\s*(${DescRegex}|\\s*\\bh\\b)`;
    export const TimeRegex2 = `(\\b${TimePrefix}\\s+)?(t)?${BaseDateTime.HourRegex}(\\s*)?:(\\s*)?${BaseDateTime.MinuteRegex}((\\s*)?:(\\s*)?${BaseDateTime.SecondRegex})?((\\s*${DescRegex})|\\b)`;
    export const TimeRegex3 = `(\\b${TimePrefix}\\s+)?${BaseDateTime.HourRegex}\\.${BaseDateTime.MinuteRegex}(\\s*(${DescRegex}|\\bh\\b))`;
    export const TimeRegex4 = `\\b((${DescRegex}?)|(${BasicTime}?)(${DescRegex}?))(${TimePrefix}\\s*)(${HourNumRegex}|${BaseDateTime.HourRegex})?(\\s+${TensTimeRegex}(\\s+y\\s+)?${MinuteNumRegex}?)?(${OclockRegex})?\\b`;
    export const TimeRegex5 = `\\b(${TimePrefix}|${BasicTime}${TimePrefix})\\s+(\\s*${DescRegex})?${BasicTime}?\\s*${TimeSuffix}\\b`;
    export const TimeRegex6 = `(${BasicTime}(\\s*${DescRegex})?\\s+${TimeSuffix}\\b)`;
    export const TimeRegex7 = `\\b${TimeSuffix}\\s+a\\s+las\\s+${BasicTime}((\\s*${DescRegex})|\\b)`;
    export const TimeRegex8 = `\\b${TimeSuffix}\\s+${BasicTime}((\\s*${DescRegex})|\\b)`;
    export const TimeRegex9 = `\\b(?<writtentime>${HourNumRegex}\\s+(${TensTimeRegex}\\s*)(y\\s+)?${MinuteNumRegex}?)\\b`;
    export const TimeRegex10 = `(a\\s+la|al)\\s+(madrugada|mañana|medio\\s*d[ií]a|tarde|noche)`;
    export const TimeRegex11 = `\\b(${WrittenTimeRegex})(\\s+${DescRegex})?\\b`;
    export const TimeRegex12 = `(\\b${TimePrefix}\\s+)?${BaseDateTime.HourRegex}(\\s*h\\s*)${BaseDateTime.MinuteRegex}(\\s*${DescRegex})?`;
    export const PrepositionRegex = `\\b(?<prep>(a(l)?|en|de(l)?)?(\\s*(la(s)?|el|los))?$)\\b`;
    export const NowRegex = `\\b(?<now>(justo\\s+)?ahora(\\s+mismo)?|en\\s+este\\s+momento|tan\\s+pronto\\s+como\\s+sea\\s+posible|tan\\s+pronto\\s+como\\s+(pueda|puedas|podamos|puedan)|lo\\s+m[aá]s\\s+pronto\\s+posible|recientemente|previamente)\\b`;
    export const SuffixRegex = `^\\s*(((y|a|en|por)\\s+la|al)\\s+)?(mañana|madrugada|medio\\s*d[ií]a|tarde|noche)\\b`;
    export const TimeOfDayRegex = `\\b(?<timeOfDay>mañana|madrugada|(pasado\\s+(el\\s+)?)?medio\\s?d[ií]a|tarde|a?noche)\\b`;
    export const SpecificTimeOfDayRegex = `\\b(((((a\\s+)?la|esta|siguiente|pr[oó]xim[oa]|[uú]ltim[oa])\\s+)?${TimeOfDayRegex}))\\b`;
    export const TimeOfTodayAfterRegex = `^\\s*(,\\s*)?(en|de(l)?\\s+)?${SpecificTimeOfDayRegex}`;
    export const TimeOfTodayBeforeRegex = `(${SpecificTimeOfDayRegex}(\\s*,)?(\\s+(a\\s+la(s)?|para))?\\s*)`;
    export const SimpleTimeOfTodayAfterRegex = `(${HourNumRegex}|${BaseDateTime.HourRegex})\\s*(,\\s*)?((en|de(l)?)?\\s+)?${SpecificTimeOfDayRegex}`;
    export const SimpleTimeOfTodayBeforeRegex = `(${SpecificTimeOfDayRegex}(\\s*,)?(\\s+(a\\s+la|para))?\\s*(${HourNumRegex}|${BaseDateTime.HourRegex}))`;
    export const SpecificEndOfRegex = `((a|e)l\\s+)?fin(alizar|al)?(\\s+(el|de(l)?)(\\s+d[ií]a)?(\\s+de)?)?\\s*$`;
    export const UnspecificEndOfRegex = `^[.]`;
    export const UnspecificEndOfRangeRegex = `^[.]`;
    export const UnitRegex = `(?<unit>años?|mes(es)?|semanas?|d[ií]as?|horas?|hrs?|hs?|minutos?|mins?|segundos?|segs?)\\b`;
    export const ConnectorRegex = `^(,|t|para las?|cerca de las?)$`;
    export const TimeHourNumRegex = `(?<hour>veintiuno|veintidos|veintitres|veinticuatro|cero|uno|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|trece|catorce|quince|diecis([eé])is|diecisiete|dieciocho|diecinueve|veinte)`;
    export const PureNumFromTo = `((desde|de)\\s+(la(s)?\\s+)?)?(${BaseDateTime.HourRegex}|${TimeHourNumRegex})(\\s*(?<leftDesc>${DescRegex}))?\\s*${TillRegex}\\s*(${BaseDateTime.HourRegex}|${TimeHourNumRegex})\\s*(?<rightDesc>${PmRegex}|${AmRegex}|${DescRegex})?`;
    export const PureNumBetweenAnd = `(entre\\s+(la(s)?\\s+)?)(${BaseDateTime.HourRegex}|${TimeHourNumRegex})(\\s*(?<leftDesc>${DescRegex}))?\\s*y\\s*(la(s)?\\s+)?(${BaseDateTime.HourRegex}|${TimeHourNumRegex})\\s*(?<rightDesc>${PmRegex}|${AmRegex}|${DescRegex})?`;
    export const TimeRegexWithDotConnector = `(${BaseDateTime.HourRegex}(\\s*\\.\\s*)${BaseDateTime.MinuteRegex})`;
    export const SpecificTimeFromTo = `(${RangePrefixRegex})?(?<time1>((${TimeRegex2}|${TimeRegexWithDotConnector}(\\s*${DescRegex})?)|(${BaseDateTime.HourRegex}|${TimeHourNumRegex})(\\s*(?<leftDesc>${DescRegex}))?))\\s*${TillRegex}\\s*(?<time2>((${TimeRegex2}|${TimeRegexWithDotConnector}(\\s*${DescRegex})?)|(${BaseDateTime.HourRegex}|${TimeHourNumRegex})(\\s*(?<rightDesc>${DescRegex}))?))`;
    export const SpecificTimeBetweenAnd = `(${BetweenRegex})(?<time1>((${TimeRegex1}|${TimeRegex2}|${TimeRegexWithDotConnector}(\\s*${DescRegex})?)|(${BaseDateTime.HourRegex}|${TimeHourNumRegex})(\\s*(?<leftDesc>${DescRegex}))?))\\s*${RangeConnectorRegex}\\s*(?<time2>((${TimeRegex1}|${TimeRegex2}|${TimeRegexWithDotConnector}(\\s*${DescRegex})?)|(${BaseDateTime.HourRegex}|${TimeHourNumRegex})(\\s*(?<rightDesc>${DescRegex}))?))`;
    export const TimeUnitRegex = `([^A-Za-z]{1,}|\\b)(?<unit>horas?|h|minutos?|mins?|segundos?|se[cg]s?)\\b`;
    export const TimeFollowedUnit = `^\\s*${TimeUnitRegex}`;
    export const TimeNumberCombinedWithUnit = `\\b(?<num>\\d+(\\,\\d*)?)\\s*${TimeUnitRegex}`;
    export const DateTimePeriodNumberCombinedWithUnit = `\\b(?<num>\\d+(\\.\\d*)?)\\s*${TimeUnitRegex}`;
    export const PeriodTimeOfDayWithDateRegex = `\\b(((y|a|en|por)\\s+(la\\s+)?|al\\s+)?(((?<early>primeras\\s+horas\\s+)|(?<late>(últimas|altas)\\s+horas\\s+))?(de\\s+la\\s+)?(?<timeOfDay>(mañana|madrugada|(pasado\\s+(el\\s+)?)?medio\\s?d[ií]a|tarde|noche|anoche))))(\\s+(del|de))?\\b`;
    export const RelativeTimeUnitRegex = `(${PastRegex}|${FutureRegex})\\s+${TimeUnitRegex}`;
    export const LessThanRegex = `\\b(dentro\\s+de\\s+menos\\s+de)\\b`;
    export const MoreThanRegex = `\\b(durante\\s+(m[áa]s\\s+)?de)\\b`;
    export const SuffixAndRegex = `(?<suffix>\\s*(y)\\s+((un[ao]?)\\s+)?(?<suffix_num>media|cuarto))`;
    export const FollowedUnit = `^\\s*${UnitRegex}`;
    export const DurationNumberCombinedWithUnit = `\\b(?<num>\\d+(\\,\\d*)?)${UnitRegex}`;
    export const AnUnitRegex = `\\b(una?)\\s+${UnitRegex}`;
    export const DuringRegex = `^[.]`;
    export const AllRegex = `\\b(?<all>tod[oa]?\\s+(el|la)\\s+(?<unit>año|mes|semana|d[ií]a))\\b`;
    export const HalfRegex = `\\b(?<half>medi[oa]\\s+(?<unit>ano|mes|semana|d[íi]a|hora))\\b`;
    export const ConjunctionRegex = `^[.]`;
    export const InexactNumberRegex = `\\b(pocos?|algo|varios)\\b`;
    export const InexactNumberUnitRegex = `\\b(pocos?|algo|varios)\\s+${UnitRegex}`;
    export const HolidayRegex1 = `\\b(?<holiday>viernes santo|mi[eé]rcoles de ceniza|martes de carnaval|d[ií]a (de|de los) presidentes?|clebraci[oó]n de mao|año nuevo chino|año nuevo|noche vieja|(festividad de )?los mayos|d[ií]a de los inocentes|navidad|noche buena|d[ií]a de acci[oó]n de gracias|acci[oó]n de gracias|yuandan|halloween|noches de brujas|pascuas)(\\s+(del?\\s+)?(${YearRegex}|(?<order>(pr[oó]xim[oa]?|est[ea]|[uú]ltim[oa]?|en))\\s+año))?\\b`;
    export const HolidayRegex2 = `\\b(?<holiday>(d[ií]a( del?( la)?)? )?(martin luther king|todos los santos|blanco|san patricio|san valent[ií]n|san jorge|cinco de mayo|independencia|raza|trabajador))(\\s+(del?\\s+)?(${YearRegex}|(?<order>(pr[oó]xim[oa]?|est[ea]|[uú]ltim[oa]?|en))\\s+año))?\\b`;
    export const HolidayRegex3 = `\\b(?<holiday>(d[ií]a( del?( las?)?)? )(trabajador|madres?|padres?|[aá]rbol|mujer(es)?|solteros?|niños?|marmota|san valent[ií]n|maestro))(\\s+(del?\\s+)?(${YearRegex}|(?<order>(pr[oó]xim[oa]?|est[ea]|[uú]ltim[oa]?|en))\\s+año))?\\b`;
    export const BeforeRegex = `(antes(\\s+del?(\\s+las?)?)?)`;
    export const AfterRegex = `(despu[eé]s(\\s*del?(\\s+las?)?)?)`;
    export const SinceRegex = `(desde(\\s+(las?|el))?)`;
    export const AroundRegex = `^[.]`;
    export const PeriodicRegex = `\\b(?<periodic>a\\s*diario|diariamente|mensualmente|semanalmente|quincenalmente|anualmente)\\b`;
    export const EachExpression = `cada|tod[oa]s\\s*(l[oa]s)?`;
    export const EachUnitRegex = `(?<each>(${EachExpression})\\s*${UnitRegex})`;
    export const EachPrefixRegex = `(?<each>(${EachExpression})\\s*$)`;
    export const EachDayRegex = `\\s*(${EachExpression})\\s*d[ií]as\\s*\\b`;
    export const BeforeEachDayRegex = `(${EachExpression})\\s*d[ií]as(\\s+a\\s+las?)?\\s*\\b`;
    export const SetEachRegex = `(?<each>(${EachExpression})\\s*)`;
    export const LaterEarlyPeriodRegex = `\\b((${PrefixPeriodRegex})\\s+(?<suffix>${OneWordPeriodRegex})|(${UnspecificEndOfRangeRegex}))\\b`;
    export const RelativeWeekRegex = `(((la|el)\\s+)?(((est[ae]|pr[oó]xim[oa]|[uú]ltim(o|as|os))\\s+semanas?)|(semanas?\\s+(que\\s+viene|pasad[oa]))))`;
    export const WeekWithWeekDayRangeRegex = `\\b(((${RelativeWeekRegex})((\\s+entre\\s+${WeekDayRegex}\\s+y\\s+${WeekDayRegex})|(\\s+de\\s+${WeekDayRegex}\\s+a\\s+${WeekDayRegex})))|((entre\\s+${WeekDayRegex}\\s+y\\s+${WeekDayRegex})|(de\\s+${WeekDayRegex}\\s+a\\s+${WeekDayRegex}))${OfPrepositionRegex}\\s+${RelativeWeekRegex})\\b`;
    export const GeneralEndingRegex = `^[.]`;
    export const MiddlePauseRegex = `^[.]`;
    export const PrefixArticleRegex = `^[\\.]`;
    export const OrRegex = `^[.]`;
    export const YearPlusNumberRegex = `\\b(años?\\s+((?<year>(\\d{2,4}))|${FullTextYearRegex}))\\b`;
    export const NumberAsTimeRegex = `^[.]`;
    export const TimeBeforeAfterRegex = `^[.]`;
    export const DateNumberConnectorRegex = `^[.]`;
    export const CenturyRegex = `^[.]`;
    export const DecadeRegex = `(?<decade>diez|veinte|treinta|cuarenta|cincuenta|sesenta|setenta|ochenta|noventa)`;
    export const DecadeWithCenturyRegex = `(los\\s+)?((((d[ée]cada(\\s+de)?)\\s+)(((?<century>\\d|1\\d|2\\d)?(?<decade>\\d0))))|a[ñn]os\\s+((((dos\\s+)?mil\\s+)?(${WrittenOneHundredToNineHundredRegex}\\s+)?${DecadeRegex})|((dos\\s+)?mil\\s+)?(${WrittenOneHundredToNineHundredRegex})(\\s+${DecadeRegex}?)|((dos\\s+)?mil)(\\s+${WrittenOneHundredToNineHundredRegex}\\s+)?${DecadeRegex}?))`;
    export const RelativeDecadeRegex = `\\b(((el|las?)\\s+)?${RelativeRegex}\\s+(((?<number>[\\d]+)|${WrittenOneToNineRegex})\\s+)?d[eé]cadas?)\\b`;
    export const ComplexDatePeriodRegex = `^[.]`;
    export const YearSuffix = `((,|\\sde)?\\s*(${YearRegex}|${FullTextYearRegex}))`;
    export const AgoRegex = `\\b(antes\\s+de\\s+(?<day>hoy|ayer|mañana)|antes)\\b`;
    export const LaterRegex = `\\b(despu[eé]s|desde\\s+ahora|a\\s+partir\\s+de\\s+(?<day>hoy|ayer|mañana))\\b`;
    export const Tomorrow = 'mañana';
    export const UnitMap: ReadonlyMap<string, string> = new Map<string, string>([["años", "Y"],["año", "Y"],["meses", "MON"],["mes", "MON"],["semanas", "W"],["semana", "W"],["dias", "D"],["dia", "D"],["días", "D"],["día", "D"],["jornada", "D"],["horas", "H"],["hora", "H"],["hrs", "H"],["hr", "H"],["h", "H"],["minutos", "M"],["minuto", "M"],["mins", "M"],["min", "M"],["segundos", "S"],["segundo", "S"],["segs", "S"],["seg", "S"]]);
    export const UnitValueMap: ReadonlyMap<string, number> = new Map<string, number>([["años", 31536000],["año", 31536000],["meses", 2592000],["mes", 2592000],["semanas", 604800],["semana", 604800],["dias", 86400],["dia", 86400],["días", 86400],["día", 86400],["horas", 3600],["hora", 3600],["hrs", 3600],["hr", 3600],["h", 3600],["minutos", 60],["minuto", 60],["mins", 60],["min", 60],["segundos", 1],["segundo", 1],["segs", 1],["seg", 1]]);
    export const SpecialYearPrefixesMap: ReadonlyMap<string, string> = new Map<string, string>([["fiscal", "FY"],["escolar", "SY"]]);
    export const SeasonMap: ReadonlyMap<string, string> = new Map<string, string>([["primavera", "SP"],["verano", "SU"],["otoño", "FA"],["invierno", "WI"]]);
    export const SeasonValueMap: ReadonlyMap<string, number> = new Map<string, number>([["SP", 3],["SU", 6],["FA", 9],["WI", 12]]);
    export const CardinalMap: ReadonlyMap<string, number> = new Map<string, number>([["primer", 1],["primero", 1],["primera", 1],["1er", 1],["1ro", 1],["1ra", 1],["segundo", 2],["segunda", 2],["2do", 2],["2da", 2],["tercer", 3],["tercero", 3],["tercera", 3],["3er", 3],["3ro", 3],["3ra", 3],["cuarto", 4],["cuarta", 4],["4to", 4],["4ta", 4],["quinto", 5],["quinta", 5],["5to", 5],["5ta", 5]]);
    export const DayOfWeek: ReadonlyMap<string, number> = new Map<string, number>([["lunes", 1],["martes", 2],["miercoles", 3],["miércoles", 3],["jueves", 4],["viernes", 5],["sabado", 6],["sábado", 6],["domingo", 0],["lu", 1],["ma", 2],["mi", 3],["ju", 4],["vi", 5],["sa", 6],["do", 0]]);
    export const MonthOfYear: ReadonlyMap<string, number> = new Map<string, number>([["1", 1],["2", 2],["3", 3],["4", 4],["5", 5],["6", 6],["7", 7],["8", 8],["9", 9],["10", 10],["11", 11],["12", 12],["enero", 1],["febrero", 2],["marzo", 3],["abril", 4],["mayo", 5],["junio", 6],["julio", 7],["agosto", 8],["septiembre", 9],["setiembre", 9],["octubre", 10],["noviembre", 11],["diciembre", 12],["ene", 1],["feb", 2],["mar", 3],["abr", 4],["may", 5],["jun", 6],["jul", 7],["ago", 8],["sept", 9],["sep", 9],["set", 9],["oct", 10],["nov", 11],["dic", 12],["01", 1],["02", 2],["03", 3],["04", 4],["05", 5],["06", 6],["07", 7],["08", 8],["09", 9]]);
    export const Numbers: ReadonlyMap<string, number> = new Map<string, number>([["cero", 0],["un", 1],["una", 1],["uno", 1],["dos", 2],["dós", 2],["tres", 3],["trés", 3],["cuatro", 4],["cinco", 5],["seis", 6],["séis", 6],["siete", 7],["ocho", 8],["nueve", 9],["diez", 10],["once", 11],["doce", 12],["docena", 12],["docenas", 12],["trece", 13],["catorce", 14],["quince", 15],["dieciseis", 16],["dieciséis", 16],["diecisiete", 17],["dieciocho", 18],["diecinueve", 19],["veinte", 20],["veinti", 20],["ventiuna", 21],["ventiuno", 21],["veintiun", 21],["veintiún", 21],["veintiuno", 21],["veintiuna", 21],["veintidos", 22],["veintidós", 22],["veintitres", 23],["veintitrés", 23],["veinticuatro", 24],["veinticinco", 25],["veintiseis", 26],["veintiséis", 26],["veintisiete", 27],["veintiocho", 28],["veintinueve", 29],["treinta", 30],["cuarenta", 40],["cincuenta", 50]]);
    export const HolidayNames: ReadonlyMap<string, string[]> = new Map<string, string[]>([["padres", ["diadelpadre"]],["madres", ["diadelamadre"]],["acciondegracias", ["diadegracias","diadeacciondegracias","acciondegracias"]],["trabajador", ["diadeltrabajador"]],["delaraza", ["diadelaraza","diadeladiversidadcultural"]],["memoria", ["diadelamemoria"]],["pascuas", ["diadepascuas","pascuas"]],["navidad", ["navidad","diadenavidad"]],["nochebuena", ["diadenochebuena","nochebuena"]],["añonuevo", ["añonuevo","diadeañonuevo"]],["nochevieja", ["nochevieja","diadenochevieja"]],["yuandan", ["yuandan"]],["maestro", ["diadelmaestro"]],["todoslossantos", ["todoslossantos"]],["niño", ["diadelniño"]],["mujer", ["diadelamujer"]]]);
    export const VariableHolidaysTimexDictionary: ReadonlyMap<string, string> = new Map<string, string>([["padres", "-06-WXX-7-3"],["madres", "-05-WXX-7-2"],["acciondegracias", "-11-WXX-4-4"],["delaraza", "-10-WXX-1-2"],["memoria", "-03-WXX-2-4"]]);
    export const DoubleNumbers: ReadonlyMap<string, number> = new Map<string, number>([["mitad", 0.5],["cuarto", 0.25]]);
    export const DateTokenPrefix = 'en ';
    export const TimeTokenPrefix = 'a las ';
    export const TokenBeforeDate = 'el ';
    export const TokenBeforeTime = 'a las ';
    export const UpcomingPrefixRegex = `.^`;
    export const NextPrefixRegex = `(pr[oó]xim[oa]|siguiente|${UpcomingPrefixRegex})\\b`;
    export const PastPrefixRegex = `.^`;
    export const PreviousPrefixRegex = `([uú]ltim[oa]|${PastPrefixRegex})\\b`;
    export const PreviousSuffixRegex = `\\b(pasad[ao])\\b`;
    export const ThisPrefixRegex = `(est[ea])\\b`;
    export const RelativeDayRegex = `(?<relday>((este|pr[oó]ximo|([uú]ltim(o|as|os)))\\s+días)|(días\\s+((que\\s+viene)|pasado)))\\b`;
    export const RestOfDateRegex = `\\bresto\\s+((del|de)\\s+)?((la|el|est[ae])\\s+)?(?<duration>semana|mes|año|decada)(\\s+actual)?\\b`;
    export const RelativeDurationUnitRegex = `^[\\.]`;
    export const ReferencePrefixRegex = `(mism[ao]|aquel)\\b`;
    export const ReferenceDatePeriodRegex = `\\b${ReferencePrefixRegex}\\s+(${DateUnitRegex}|fin\\s+de\\s+semana)\\b`;
    export const FromToRegex = `\\b(from).+(to)\\b.+`;
    export const SingleAmbiguousMonthRegex = `^(the\\s+)?(may|march)$`;
    export const UnspecificDatePeriodRegex = `^[.]`;
    export const PrepositionSuffixRegex = `\\b(on|in|at|around|for|during|since|from|to)$`;
    export const RestOfDateTimeRegex = `\\bresto\\s+((del|de)\\s+)?((la|el|est[ae])\\s+)?(?<unit>(día|jornada))(\\s+de\\s+hoy)?\\b`;
    export const SetWeekDayRegex = `^[\\.]`;
    export const NightRegex = `\\b(medionoche|noche)\\b`;
    export const CommonDatePrefixRegex = `^[\\.]`;
    export const DurationUnitRegex = `^[\\.]`;
    export const DurationConnectorRegex = `^[.]`;
    export const SuffixAfterRegex = `^[.](?!$)`;
    export const YearPeriodRegex = `^[.]`;
    export const FutureSuffixRegex = `\\b(despu[ée]s)\\b`;
    export const WrittenDecades: ReadonlyMap<string, number> = new Map<string, number>([["", 0]]);
    export const SpecialDecadeCases: ReadonlyMap<string, number> = new Map<string, number>([["", 0]]);
    export const DefaultLanguageFallback = 'DMY';
    export const DurationDateRestrictions = [ "hoy" ];
    export const AmbiguityFiltersDict: ReadonlyMap<string, string> = new Map<string, string>([["null", "null"]]);
    export const EarlyMorningTermList = [ "madrugada" ];
    export const MorningTermList = [ "mañana" ];
    export const AfternoonTermList = [ "pasado mediodia","pasado el mediodia" ];
    export const EveningTermList = [ "tarde" ];
    export const NightTermList = [ "noche" ];
    export const SameDayTerms = [ "hoy","el dia" ];
    export const PlusOneDayTerms = [ "mañana","dia siguiente","el dia de mañana","proximo dia" ];
    export const MinusOneDayTerms = [ "ayer","ultimo dia" ];
    export const PlusTwoDayTerms = [ "pasado mañana","dia despues de mañana" ];
    export const MinusTwoDayTerms = [ "anteayer","dia antes de ayer" ];
    export const MonthTerms = [ "mes","meses" ];
    export const MonthToDateTerms = [ "mes a la fecha","meses a la fecha" ];
    export const WeekendTerms = [ "fin de semana" ];
    export const WeekTerms = [ "semana" ];
    export const YearTerms = [ "año","años" ];
    export const YearToDateTerms = [ "año a la fecha","años a la fecha" ];
    export const SpecialCharactersEquivalent: ReadonlyMap<string, string> = new Map<string, string>([["á", "a"],["é", "e"],["í", "i"],["ó", "o"],["ú", "u"]]);
}
