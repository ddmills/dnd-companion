import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
  /** The string representation of JavaScript regexp. You may provide it with flags "/^abc.*\/i" or without flags like "^abc.*". More info about RegExp characters and flags: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */
  RegExpAsString: any;
};

export type AbilityScore = {
  __typename?: 'AbilityScore';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  full_name?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  skills: Array<Skill>;
  url?: Maybe<Scalars['String']>;
};


export type AbilityScoreSkillsArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManySkillInput>;
};

export type Alignment = {
  __typename?: 'Alignment';
  _id: Scalars['String'];
  abbreviation?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Background = {
  __typename?: 'Background';
  _id: Scalars['String'];
  bonds?: Maybe<BackgroundBonds>;
  feature?: Maybe<BackgroundFeature>;
  flaws?: Maybe<BackgroundFlaws>;
  ideals?: Maybe<BackgroundIdeals>;
  index?: Maybe<Scalars['String']>;
  language_options?: Maybe<BackgroundLanguage_Options>;
  name?: Maybe<Scalars['String']>;
  personality_traits?: Maybe<BackgroundPersonality_Traits>;
  starting_equipment?: Maybe<Array<Maybe<BackgroundStarting_Equipment>>>;
  starting_equipment_options?: Maybe<Array<Maybe<BackgroundStarting_Equipment_Options>>>;
  starting_proficiencies: Array<Proficiency>;
  url?: Maybe<Scalars['String']>;
};


export type BackgroundStarting_ProficienciesArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyProficiencyInput>;
};

export type BackgroundBonds = {
  __typename?: 'BackgroundBonds';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundFeature = {
  __typename?: 'BackgroundFeature';
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
};

export type BackgroundFlaws = {
  __typename?: 'BackgroundFlaws';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundIdeals = {
  __typename?: 'BackgroundIdeals';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<BackgroundIdealsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundIdealsFrom = {
  __typename?: 'BackgroundIdealsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  alignments?: Maybe<Array<Maybe<BackgroundIdealsFromAlignments>>>;
  desc?: Maybe<Scalars['String']>;
};

export type BackgroundIdealsFromAlignments = {
  __typename?: 'BackgroundIdealsFromAlignments';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type BackgroundLanguage_Options = {
  __typename?: 'BackgroundLanguage_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<BackgroundLanguage_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundLanguage_OptionsFrom = {
  __typename?: 'BackgroundLanguage_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type BackgroundPersonality_Traits = {
  __typename?: 'BackgroundPersonality_traits';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundStarting_Equipment = {
  __typename?: 'BackgroundStarting_equipment';
  equipment?: Maybe<BackgroundStarting_EquipmentEquipment>;
  quantity?: Maybe<Scalars['Float']>;
};

export type BackgroundStarting_EquipmentEquipment = {
  __typename?: 'BackgroundStarting_equipmentEquipment';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type BackgroundStarting_Equipment_Options = {
  __typename?: 'BackgroundStarting_equipment_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<BackgroundStarting_Equipment_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type BackgroundStarting_Equipment_OptionsFrom = {
  __typename?: 'BackgroundStarting_equipment_optionsFrom';
  equipment?: Maybe<BackgroundStarting_Equipment_OptionsFromEquipment>;
  quantity?: Maybe<Scalars['Float']>;
};

export type BackgroundStarting_Equipment_OptionsFromEquipment = {
  __typename?: 'BackgroundStarting_equipment_optionsFromEquipment';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Class = {
  __typename?: 'Class';
  _id: Scalars['String'];
  class_levels: Array<Level>;
  hit_die?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['String']>;
  multi_classing?: Maybe<ClassMulti_Classing>;
  name?: Maybe<Scalars['String']>;
  proficiencies: Array<Proficiency>;
  proficiency_choices?: Maybe<Array<Maybe<ClassProficiency_Choices>>>;
  saving_throws?: Maybe<Array<Maybe<ClassSaving_Throws>>>;
  spellcasting?: Maybe<ClassSpellcasting>;
  spells: Array<Spell>;
  starting_equipment?: Maybe<Array<Maybe<ClassStarting_Equipment>>>;
  starting_equipment_options?: Maybe<Array<Maybe<ClassStarting_Equipment_Options>>>;
  subclasses?: Maybe<Array<Maybe<ClassSubclasses>>>;
  url?: Maybe<Scalars['String']>;
};


export type ClassClass_LevelsArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyLevelInput>;
};


export type ClassProficienciesArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyProficiencyInput>;
};


export type ClassSpellsArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManySpellInput>;
};

export type ClassMulti_Classing = {
  __typename?: 'ClassMulti_classing';
  prerequisite_options?: Maybe<ClassMulti_ClassingPrerequisite_Options>;
  prerequisites?: Maybe<Array<Maybe<ClassMulti_ClassingPrerequisites>>>;
  proficiencies?: Maybe<Array<Maybe<ClassMulti_ClassingProficiencies>>>;
  proficiency_choices?: Maybe<Array<Maybe<ClassMulti_ClassingProficiency_Choices>>>;
};

export type ClassMulti_ClassingPrerequisite_Options = {
  __typename?: 'ClassMulti_classingPrerequisite_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<ClassMulti_ClassingPrerequisite_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type ClassMulti_ClassingPrerequisite_OptionsFrom = {
  __typename?: 'ClassMulti_classingPrerequisite_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<ClassMulti_ClassingPrerequisite_OptionsFromAbility_Score>;
  minimum_score?: Maybe<Scalars['Float']>;
};

export type ClassMulti_ClassingPrerequisite_OptionsFromAbility_Score = {
  __typename?: 'ClassMulti_classingPrerequisite_optionsFromAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassMulti_ClassingPrerequisites = {
  __typename?: 'ClassMulti_classingPrerequisites';
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<ClassMulti_ClassingPrerequisitesAbility_Score>;
  minimum_score?: Maybe<Scalars['Float']>;
};

export type ClassMulti_ClassingPrerequisitesAbility_Score = {
  __typename?: 'ClassMulti_classingPrerequisitesAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassMulti_ClassingProficiencies = {
  __typename?: 'ClassMulti_classingProficiencies';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassMulti_ClassingProficiency_Choices = {
  __typename?: 'ClassMulti_classingProficiency_choices';
  _id?: Maybe<Scalars['MongoID']>;
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<ClassMulti_ClassingProficiency_ChoicesFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type ClassMulti_ClassingProficiency_ChoicesFrom = {
  __typename?: 'ClassMulti_classingProficiency_choicesFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassProficiency_Choices = {
  __typename?: 'ClassProficiency_choices';
  _id?: Maybe<Scalars['MongoID']>;
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<ClassProficiency_ChoicesFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type ClassProficiency_ChoicesFrom = {
  __typename?: 'ClassProficiency_choicesFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassSaving_Throws = {
  __typename?: 'ClassSaving_throws';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassSpellcasting = {
  __typename?: 'ClassSpellcasting';
  info?: Maybe<Array<Maybe<ClassSpellcastingInfo>>>;
  level?: Maybe<Scalars['Float']>;
  spellcasting_ability?: Maybe<ClassSpellcastingSpellcasting_Ability>;
};

export type ClassSpellcastingInfo = {
  __typename?: 'ClassSpellcastingInfo';
  _id?: Maybe<Scalars['MongoID']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
};

export type ClassSpellcastingSpellcasting_Ability = {
  __typename?: 'ClassSpellcastingSpellcasting_ability';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassStarting_Equipment = {
  __typename?: 'ClassStarting_equipment';
  _id?: Maybe<Scalars['MongoID']>;
  equipment?: Maybe<ClassStarting_EquipmentEquipment>;
  quantity?: Maybe<Scalars['Float']>;
};

export type ClassStarting_EquipmentEquipment = {
  __typename?: 'ClassStarting_equipmentEquipment';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassStarting_Equipment_Options = {
  __typename?: 'ClassStarting_equipment_options';
  _id?: Maybe<Scalars['MongoID']>;
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<ClassStarting_Equipment_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type ClassStarting_Equipment_OptionsFrom = {
  __typename?: 'ClassStarting_equipment_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  equipment?: Maybe<ClassStarting_Equipment_OptionsFromEquipment>;
  quantity?: Maybe<Scalars['Float']>;
};

export type ClassStarting_Equipment_OptionsFromEquipment = {
  __typename?: 'ClassStarting_equipment_optionsFromEquipment';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ClassSubclasses = {
  __typename?: 'ClassSubclasses';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Condition = {
  __typename?: 'Condition';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type DamageType = {
  __typename?: 'DamageType';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Equipment = {
  __typename?: 'Equipment';
  _id: Scalars['String'];
  armor_category?: Maybe<Scalars['String']>;
  armor_class?: Maybe<EquipmentArmor_Class>;
  capacity?: Maybe<Scalars['String']>;
  category_range?: Maybe<Scalars['String']>;
  contents?: Maybe<Array<Maybe<EquipmentContents>>>;
  cost?: Maybe<EquipmentCost>;
  damage?: Maybe<EquipmentDamage>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipment_category?: Maybe<EquipmentEquipment_Category>;
  gear_category?: Maybe<EquipmentGear_Category>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  properties: Array<WeaponProperty>;
  quantity?: Maybe<Scalars['Float']>;
  range?: Maybe<EquipmentRange>;
  special?: Maybe<Array<Maybe<Scalars['String']>>>;
  speed?: Maybe<EquipmentSpeed>;
  stealth_disadvantage?: Maybe<Scalars['Boolean']>;
  str_minimum?: Maybe<Scalars['Float']>;
  throw_range?: Maybe<EquipmentThrow_Range>;
  tool_category?: Maybe<Scalars['String']>;
  two_handed_damage?: Maybe<EquipmentTwo_Handed_Damage>;
  url?: Maybe<Scalars['String']>;
  vehicle_category?: Maybe<Scalars['String']>;
  weapon_category?: Maybe<Scalars['String']>;
  weapon_range?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};


export type EquipmentPropertiesArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyWeaponPropertyInput>;
};

export type EquipmentArmor_Class = {
  __typename?: 'EquipmentArmor_class';
  base?: Maybe<Scalars['Float']>;
  dex_bonus?: Maybe<Scalars['Boolean']>;
  max_bonus?: Maybe<Scalars['Float']>;
};

export type EquipmentCategory = {
  __typename?: 'EquipmentCategory';
  _id: Scalars['String'];
  equipment: Array<Equipment>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type EquipmentCategoryEquipmentArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyEquipmentInput>;
};

export type EquipmentContents = {
  __typename?: 'EquipmentContents';
  _id?: Maybe<Scalars['MongoID']>;
  item?: Maybe<EquipmentContentsItem>;
  quantity?: Maybe<Scalars['Float']>;
};

export type EquipmentContentsItem = {
  __typename?: 'EquipmentContentsItem';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EquipmentCost = {
  __typename?: 'EquipmentCost';
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type EquipmentDamage = {
  __typename?: 'EquipmentDamage';
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<EquipmentDamageDamage_Type>;
};

export type EquipmentDamageDamage_Type = {
  __typename?: 'EquipmentDamageDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EquipmentEquipment_Category = {
  __typename?: 'EquipmentEquipment_category';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EquipmentGear_Category = {
  __typename?: 'EquipmentGear_category';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EquipmentRange = {
  __typename?: 'EquipmentRange';
  long?: Maybe<Scalars['Float']>;
  normal?: Maybe<Scalars['Float']>;
};

export type EquipmentSpeed = {
  __typename?: 'EquipmentSpeed';
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type EquipmentThrow_Range = {
  __typename?: 'EquipmentThrow_range';
  long?: Maybe<Scalars['Float']>;
  normal?: Maybe<Scalars['Float']>;
};

export type EquipmentTwo_Handed_Damage = {
  __typename?: 'EquipmentTwo_handed_damage';
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<EquipmentTwo_Handed_DamageDamage_Type>;
};

export type EquipmentTwo_Handed_DamageDamage_Type = {
  __typename?: 'EquipmentTwo_handed_damageDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Feat = {
  __typename?: 'Feat';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prerequisites?: Maybe<Array<Maybe<FeatPrerequisites>>>;
  url?: Maybe<Scalars['String']>;
};

export type FeatPrerequisites = {
  __typename?: 'FeatPrerequisites';
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<FeatPrerequisitesAbility_Score>;
  minimum_score?: Maybe<Scalars['Float']>;
};

export type FeatPrerequisitesAbility_Score = {
  __typename?: 'FeatPrerequisitesAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Feature = {
  __typename?: 'Feature';
  _id: Scalars['String'];
  choice?: Maybe<FeatureChoice>;
  class?: Maybe<Class>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  feature_specific?: Maybe<FeatureFeature_Specific>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<FeatureParent>;
  prerequisites?: Maybe<Array<Maybe<FeaturePrerequisites>>>;
  reference?: Maybe<Scalars['String']>;
  subclass?: Maybe<Subclass>;
  url?: Maybe<Scalars['String']>;
};


export type FeatureClassArgs = {
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneClassInput>;
};


export type FeatureSubclassArgs = {
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneSubclassInput>;
};

export type FeatureChoice = {
  __typename?: 'FeatureChoice';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FeatureChoiceFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type FeatureChoiceFrom = {
  __typename?: 'FeatureChoiceFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FeatureFeature_Specific = {
  __typename?: 'FeatureFeature_specific';
  expertise_options?: Maybe<FeatureFeature_SpecificExpertise_Options>;
  subfeature_options?: Maybe<FeatureFeature_SpecificSubfeature_Options>;
};

export type FeatureFeature_SpecificExpertise_Options = {
  __typename?: 'FeatureFeature_specificExpertise_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FeatureFeature_SpecificExpertise_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type FeatureFeature_SpecificExpertise_OptionsFrom = {
  __typename?: 'FeatureFeature_specificExpertise_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FeatureFeature_SpecificSubfeature_Options = {
  __typename?: 'FeatureFeature_specificSubfeature_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FeatureFeature_SpecificSubfeature_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type FeatureFeature_SpecificSubfeature_OptionsFrom = {
  __typename?: 'FeatureFeature_specificSubfeature_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FeatureParent = {
  __typename?: 'FeatureParent';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FeaturePrerequisites = {
  __typename?: 'FeaturePrerequisites';
  _id?: Maybe<Scalars['MongoID']>;
  level?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyAbilityScoreDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAbilityScoreFull_NameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAbilityScoreIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAbilityScoreInput = {
  AND?: Maybe<Array<FilterFindManyAbilityScoreInput>>;
  OR?: Maybe<Array<FilterFindManyAbilityScoreInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyAbilityScoreOperatorsInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  full_name?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<FilterFindManyAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyAbilityScoreNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyAbilityScoreOperatorsInput = {
  _id?: Maybe<FilterFindManyAbilityScore_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyAbilityScoreDescOperatorsInput>;
  full_name?: Maybe<FilterFindManyAbilityScoreFull_NameOperatorsInput>;
  index?: Maybe<FilterFindManyAbilityScoreIndexOperatorsInput>;
  name?: Maybe<FilterFindManyAbilityScoreNameOperatorsInput>;
  url?: Maybe<FilterFindManyAbilityScoreUrlOperatorsInput>;
};

export type FilterFindManyAbilityScoreSkillsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyAbilityScoreUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAbilityScore_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAlignmentAbbreviationOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAlignmentDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAlignmentIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAlignmentInput = {
  AND?: Maybe<Array<FilterFindManyAlignmentInput>>;
  OR?: Maybe<Array<FilterFindManyAlignmentInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyAlignmentOperatorsInput>;
  abbreviation?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyAlignmentNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyAlignmentOperatorsInput = {
  _id?: Maybe<FilterFindManyAlignment_IdOperatorsInput>;
  abbreviation?: Maybe<FilterFindManyAlignmentAbbreviationOperatorsInput>;
  desc?: Maybe<FilterFindManyAlignmentDescOperatorsInput>;
  index?: Maybe<FilterFindManyAlignmentIndexOperatorsInput>;
  name?: Maybe<FilterFindManyAlignmentNameOperatorsInput>;
  url?: Maybe<FilterFindManyAlignmentUrlOperatorsInput>;
};

export type FilterFindManyAlignmentUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyAlignment_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundBondsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyBackgroundBondsFromOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundBondsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundBondsOperatorsInput = {
  choose?: Maybe<FilterFindManyBackgroundBondsChooseOperatorsInput>;
  from?: Maybe<FilterFindManyBackgroundBondsFromOperatorsInput>;
  type?: Maybe<FilterFindManyBackgroundBondsTypeOperatorsInput>;
};

export type FilterFindManyBackgroundBondsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundFeatureDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundFeatureInput = {
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundFeatureNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundFeatureOperatorsInput = {
  desc?: Maybe<FilterFindManyBackgroundFeatureDescOperatorsInput>;
  name?: Maybe<FilterFindManyBackgroundFeatureNameOperatorsInput>;
};

export type FilterFindManyBackgroundFlawsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyBackgroundFlawsFromOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundFlawsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundFlawsOperatorsInput = {
  choose?: Maybe<FilterFindManyBackgroundFlawsChooseOperatorsInput>;
  from?: Maybe<FilterFindManyBackgroundFlawsFromOperatorsInput>;
  type?: Maybe<FilterFindManyBackgroundFlawsTypeOperatorsInput>;
};

export type FilterFindManyBackgroundFlawsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundIdealsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyBackgroundIdealsFromAlignmentsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundIdealsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  alignments?: Maybe<Array<Maybe<FilterFindManyBackgroundIdealsFromAlignmentsInput>>>;
  desc?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundIdealsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyBackgroundIdealsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundIdealsOperatorsInput = {
  choose?: Maybe<FilterFindManyBackgroundIdealsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyBackgroundIdealsTypeOperatorsInput>;
};

export type FilterFindManyBackgroundIdealsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundInput = {
  AND?: Maybe<Array<FilterFindManyBackgroundInput>>;
  OR?: Maybe<Array<FilterFindManyBackgroundInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyBackgroundOperatorsInput>;
  bonds?: Maybe<FilterFindManyBackgroundBondsInput>;
  feature?: Maybe<FilterFindManyBackgroundFeatureInput>;
  flaws?: Maybe<FilterFindManyBackgroundFlawsInput>;
  ideals?: Maybe<FilterFindManyBackgroundIdealsInput>;
  index?: Maybe<Scalars['String']>;
  language_options?: Maybe<FilterFindManyBackgroundLanguage_OptionsInput>;
  name?: Maybe<Scalars['String']>;
  personality_traits?: Maybe<FilterFindManyBackgroundPersonality_TraitsInput>;
  starting_equipment?: Maybe<Array<Maybe<FilterFindManyBackgroundStarting_EquipmentInput>>>;
  starting_equipment_options?: Maybe<Array<Maybe<FilterFindManyBackgroundStarting_Equipment_OptionsInput>>>;
  starting_proficiencies?: Maybe<Array<Maybe<FilterFindManyBackgroundStarting_ProficienciesInput>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundLanguage_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyBackgroundLanguage_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundLanguage_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyBackgroundLanguage_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundLanguage_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyBackgroundLanguage_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyBackgroundLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindManyBackgroundLanguage_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyBackgroundOperatorsInput = {
  _id?: Maybe<FilterFindManyBackground_IdOperatorsInput>;
  bonds?: Maybe<FilterFindManyBackgroundBondsOperatorsInput>;
  feature?: Maybe<FilterFindManyBackgroundFeatureOperatorsInput>;
  flaws?: Maybe<FilterFindManyBackgroundFlawsOperatorsInput>;
  ideals?: Maybe<FilterFindManyBackgroundIdealsOperatorsInput>;
  index?: Maybe<FilterFindManyBackgroundIndexOperatorsInput>;
  language_options?: Maybe<FilterFindManyBackgroundLanguage_OptionsOperatorsInput>;
  name?: Maybe<FilterFindManyBackgroundNameOperatorsInput>;
  personality_traits?: Maybe<FilterFindManyBackgroundPersonality_TraitsOperatorsInput>;
  url?: Maybe<FilterFindManyBackgroundUrlOperatorsInput>;
};

export type FilterFindManyBackgroundPersonality_TraitsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyBackgroundPersonality_TraitsFromOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundPersonality_TraitsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundPersonality_TraitsOperatorsInput = {
  choose?: Maybe<FilterFindManyBackgroundPersonality_TraitsChooseOperatorsInput>;
  from?: Maybe<FilterFindManyBackgroundPersonality_TraitsFromOperatorsInput>;
  type?: Maybe<FilterFindManyBackgroundPersonality_TraitsTypeOperatorsInput>;
};

export type FilterFindManyBackgroundPersonality_TraitsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackgroundStarting_EquipmentEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundStarting_EquipmentInput = {
  equipment?: Maybe<FilterFindManyBackgroundStarting_EquipmentEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
};

export type FilterFindManyBackgroundStarting_Equipment_OptionsFromEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundStarting_Equipment_OptionsFromInput = {
  equipment?: Maybe<FilterFindManyBackgroundStarting_Equipment_OptionsFromEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
};

export type FilterFindManyBackgroundStarting_Equipment_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyBackgroundStarting_Equipment_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundStarting_ProficienciesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyBackgroundUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyBackground_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClassClass_LevelsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClassHit_DieOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyClassIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClassInput = {
  AND?: Maybe<Array<FilterFindManyClassInput>>;
  OR?: Maybe<Array<FilterFindManyClassInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyClassOperatorsInput>;
  class_levels?: Maybe<Scalars['String']>;
  hit_die?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['String']>;
  multi_classing?: Maybe<FilterFindManyClassMulti_ClassingInput>;
  name?: Maybe<Scalars['String']>;
  proficiencies?: Maybe<Array<Maybe<FilterFindManyClassProficienciesInput>>>;
  proficiency_choices?: Maybe<Array<Maybe<FilterFindManyClassProficiency_ChoicesInput>>>;
  saving_throws?: Maybe<Array<Maybe<FilterFindManyClassSaving_ThrowsInput>>>;
  spellcasting?: Maybe<FilterFindManyClassSpellcastingInput>;
  spells?: Maybe<Scalars['String']>;
  starting_equipment?: Maybe<Array<Maybe<FilterFindManyClassStarting_EquipmentInput>>>;
  starting_equipment_options?: Maybe<Array<Maybe<FilterFindManyClassStarting_Equipment_OptionsInput>>>;
  subclasses?: Maybe<Array<Maybe<FilterFindManyClassSubclassesInput>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassMulti_ClassingInput = {
  prerequisite_options?: Maybe<FilterFindManyClassMulti_ClassingPrerequisite_OptionsInput>;
  prerequisites?: Maybe<Array<Maybe<FilterFindManyClassMulti_ClassingPrerequisitesInput>>>;
  proficiencies?: Maybe<Array<Maybe<FilterFindManyClassMulti_ClassingProficienciesInput>>>;
  proficiency_choices?: Maybe<Array<Maybe<FilterFindManyClassMulti_ClassingProficiency_ChoicesInput>>>;
};

export type FilterFindManyClassMulti_ClassingOperatorsInput = {
  prerequisite_options?: Maybe<FilterFindManyClassMulti_ClassingPrerequisite_OptionsOperatorsInput>;
};

export type FilterFindManyClassMulti_ClassingPrerequisite_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyClassMulti_ClassingPrerequisite_OptionsFromAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassMulti_ClassingPrerequisite_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<FilterFindManyClassMulti_ClassingPrerequisite_OptionsFromAbility_ScoreInput>;
  minimum_score?: Maybe<Scalars['Float']>;
};

export type FilterFindManyClassMulti_ClassingPrerequisite_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyClassMulti_ClassingPrerequisite_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassMulti_ClassingPrerequisite_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyClassMulti_ClassingPrerequisite_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyClassMulti_ClassingPrerequisite_OptionsTypeOperatorsInput>;
};

export type FilterFindManyClassMulti_ClassingPrerequisite_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClassMulti_ClassingPrerequisitesAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassMulti_ClassingPrerequisitesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<FilterFindManyClassMulti_ClassingPrerequisitesAbility_ScoreInput>;
  minimum_score?: Maybe<Scalars['Float']>;
};

export type FilterFindManyClassMulti_ClassingProficienciesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassMulti_ClassingProficiency_ChoicesFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassMulti_ClassingProficiency_ChoicesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyClassMulti_ClassingProficiency_ChoicesFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyClassOperatorsInput = {
  _id?: Maybe<FilterFindManyClass_IdOperatorsInput>;
  class_levels?: Maybe<FilterFindManyClassClass_LevelsOperatorsInput>;
  hit_die?: Maybe<FilterFindManyClassHit_DieOperatorsInput>;
  index?: Maybe<FilterFindManyClassIndexOperatorsInput>;
  multi_classing?: Maybe<FilterFindManyClassMulti_ClassingOperatorsInput>;
  name?: Maybe<FilterFindManyClassNameOperatorsInput>;
  spellcasting?: Maybe<FilterFindManyClassSpellcastingOperatorsInput>;
  spells?: Maybe<FilterFindManyClassSpellsOperatorsInput>;
  url?: Maybe<FilterFindManyClassUrlOperatorsInput>;
};

export type FilterFindManyClassProficienciesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassProficiency_ChoicesFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassProficiency_ChoicesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyClassProficiency_ChoicesFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassSaving_ThrowsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassSpellcastingInfoInput = {
  _id?: Maybe<Scalars['MongoID']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassSpellcastingInput = {
  info?: Maybe<Array<Maybe<FilterFindManyClassSpellcastingInfoInput>>>;
  level?: Maybe<Scalars['Float']>;
  spellcasting_ability?: Maybe<FilterFindManyClassSpellcastingSpellcasting_AbilityInput>;
};

export type FilterFindManyClassSpellcastingLevelOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyClassSpellcastingOperatorsInput = {
  level?: Maybe<FilterFindManyClassSpellcastingLevelOperatorsInput>;
  spellcasting_ability?: Maybe<FilterFindManyClassSpellcastingSpellcasting_AbilityOperatorsInput>;
};

export type FilterFindManyClassSpellcastingSpellcasting_AbilityIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClassSpellcastingSpellcasting_AbilityInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassSpellcastingSpellcasting_AbilityNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClassSpellcastingSpellcasting_AbilityOperatorsInput = {
  index?: Maybe<FilterFindManyClassSpellcastingSpellcasting_AbilityIndexOperatorsInput>;
  name?: Maybe<FilterFindManyClassSpellcastingSpellcasting_AbilityNameOperatorsInput>;
  url?: Maybe<FilterFindManyClassSpellcastingSpellcasting_AbilityUrlOperatorsInput>;
};

export type FilterFindManyClassSpellcastingSpellcasting_AbilityUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClassSpellsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClassStarting_EquipmentEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassStarting_EquipmentInput = {
  _id?: Maybe<Scalars['MongoID']>;
  equipment?: Maybe<FilterFindManyClassStarting_EquipmentEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
};

export type FilterFindManyClassStarting_Equipment_OptionsFromEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassStarting_Equipment_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  equipment?: Maybe<FilterFindManyClassStarting_Equipment_OptionsFromEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
};

export type FilterFindManyClassStarting_Equipment_OptionsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyClassStarting_Equipment_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassSubclassesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyClassUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyClass_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyConditionDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyConditionIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyConditionInput = {
  AND?: Maybe<Array<FilterFindManyConditionInput>>;
  OR?: Maybe<Array<FilterFindManyConditionInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyConditionOperatorsInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyConditionNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyConditionOperatorsInput = {
  _id?: Maybe<FilterFindManyCondition_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyConditionDescOperatorsInput>;
  index?: Maybe<FilterFindManyConditionIndexOperatorsInput>;
  name?: Maybe<FilterFindManyConditionNameOperatorsInput>;
  url?: Maybe<FilterFindManyConditionUrlOperatorsInput>;
};

export type FilterFindManyConditionUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyCondition_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyDamageTypeDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyDamageTypeIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyDamageTypeInput = {
  AND?: Maybe<Array<FilterFindManyDamageTypeInput>>;
  OR?: Maybe<Array<FilterFindManyDamageTypeInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyDamageTypeOperatorsInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyDamageTypeNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyDamageTypeOperatorsInput = {
  _id?: Maybe<FilterFindManyDamageType_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyDamageTypeDescOperatorsInput>;
  index?: Maybe<FilterFindManyDamageTypeIndexOperatorsInput>;
  name?: Maybe<FilterFindManyDamageTypeNameOperatorsInput>;
  url?: Maybe<FilterFindManyDamageTypeUrlOperatorsInput>;
};

export type FilterFindManyDamageTypeUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyDamageType_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentArmor_CategoryOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentArmor_ClassBaseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentArmor_ClassDex_BonusOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FilterFindManyEquipmentArmor_ClassInput = {
  base?: Maybe<Scalars['Float']>;
  dex_bonus?: Maybe<Scalars['Boolean']>;
  max_bonus?: Maybe<Scalars['Float']>;
};

export type FilterFindManyEquipmentArmor_ClassMax_BonusOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentArmor_ClassOperatorsInput = {
  base?: Maybe<FilterFindManyEquipmentArmor_ClassBaseOperatorsInput>;
  dex_bonus?: Maybe<FilterFindManyEquipmentArmor_ClassDex_BonusOperatorsInput>;
  max_bonus?: Maybe<FilterFindManyEquipmentArmor_ClassMax_BonusOperatorsInput>;
};

export type FilterFindManyEquipmentCapacityOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentCategoryEquipmentInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentCategoryIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentCategoryInput = {
  AND?: Maybe<Array<FilterFindManyEquipmentCategoryInput>>;
  OR?: Maybe<Array<FilterFindManyEquipmentCategoryInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyEquipmentCategoryOperatorsInput>;
  equipment?: Maybe<Array<Maybe<FilterFindManyEquipmentCategoryEquipmentInput>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentCategoryNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyEquipmentCategoryOperatorsInput = {
  _id?: Maybe<FilterFindManyEquipmentCategory_IdOperatorsInput>;
  index?: Maybe<FilterFindManyEquipmentCategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindManyEquipmentCategoryNameOperatorsInput>;
  url?: Maybe<FilterFindManyEquipmentCategoryUrlOperatorsInput>;
};

export type FilterFindManyEquipmentCategoryUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentCategory_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentCategory_RangeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentContentsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  item?: Maybe<FilterFindManyEquipmentContentsItemInput>;
  quantity?: Maybe<Scalars['Float']>;
};

export type FilterFindManyEquipmentContentsItemInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentCostInput = {
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentCostOperatorsInput = {
  quantity?: Maybe<FilterFindManyEquipmentCostQuantityOperatorsInput>;
  unit?: Maybe<FilterFindManyEquipmentCostUnitOperatorsInput>;
};

export type FilterFindManyEquipmentCostQuantityOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentCostUnitOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentDamageDamage_DiceOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentDamageDamage_TypeIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentDamageDamage_TypeNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentDamageDamage_TypeOperatorsInput = {
  index?: Maybe<FilterFindManyEquipmentDamageDamage_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindManyEquipmentDamageDamage_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindManyEquipmentDamageDamage_TypeUrlOperatorsInput>;
};

export type FilterFindManyEquipmentDamageDamage_TypeUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentDamageInput = {
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<FilterFindManyEquipmentDamageDamage_TypeInput>;
};

export type FilterFindManyEquipmentDamageOperatorsInput = {
  damage_dice?: Maybe<FilterFindManyEquipmentDamageDamage_DiceOperatorsInput>;
  damage_type?: Maybe<FilterFindManyEquipmentDamageDamage_TypeOperatorsInput>;
};

export type FilterFindManyEquipmentDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentEquipment_CategoryIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentEquipment_CategoryInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentEquipment_CategoryNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentEquipment_CategoryOperatorsInput = {
  index?: Maybe<FilterFindManyEquipmentEquipment_CategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindManyEquipmentEquipment_CategoryNameOperatorsInput>;
  url?: Maybe<FilterFindManyEquipmentEquipment_CategoryUrlOperatorsInput>;
};

export type FilterFindManyEquipmentEquipment_CategoryUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentGear_CategoryIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentGear_CategoryInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentGear_CategoryNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentGear_CategoryOperatorsInput = {
  index?: Maybe<FilterFindManyEquipmentGear_CategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindManyEquipmentGear_CategoryNameOperatorsInput>;
  url?: Maybe<FilterFindManyEquipmentGear_CategoryUrlOperatorsInput>;
};

export type FilterFindManyEquipmentGear_CategoryUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentInput = {
  AND?: Maybe<Array<FilterFindManyEquipmentInput>>;
  OR?: Maybe<Array<FilterFindManyEquipmentInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyEquipmentOperatorsInput>;
  armor_category?: Maybe<Scalars['String']>;
  armor_class?: Maybe<FilterFindManyEquipmentArmor_ClassInput>;
  capacity?: Maybe<Scalars['String']>;
  category_range?: Maybe<Scalars['String']>;
  contents?: Maybe<Array<Maybe<FilterFindManyEquipmentContentsInput>>>;
  cost?: Maybe<FilterFindManyEquipmentCostInput>;
  damage?: Maybe<FilterFindManyEquipmentDamageInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipment_category?: Maybe<FilterFindManyEquipmentEquipment_CategoryInput>;
  gear_category?: Maybe<FilterFindManyEquipmentGear_CategoryInput>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<Maybe<FilterFindManyEquipmentPropertiesInput>>>;
  quantity?: Maybe<Scalars['Float']>;
  range?: Maybe<FilterFindManyEquipmentRangeInput>;
  special?: Maybe<Array<Maybe<Scalars['String']>>>;
  speed?: Maybe<FilterFindManyEquipmentSpeedInput>;
  stealth_disadvantage?: Maybe<Scalars['Boolean']>;
  str_minimum?: Maybe<Scalars['Float']>;
  throw_range?: Maybe<FilterFindManyEquipmentThrow_RangeInput>;
  tool_category?: Maybe<Scalars['String']>;
  two_handed_damage?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageInput>;
  url?: Maybe<Scalars['String']>;
  vehicle_category?: Maybe<Scalars['String']>;
  weapon_category?: Maybe<Scalars['String']>;
  weapon_range?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type FilterFindManyEquipmentNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyEquipmentOperatorsInput = {
  _id?: Maybe<FilterFindManyEquipment_IdOperatorsInput>;
  armor_category?: Maybe<FilterFindManyEquipmentArmor_CategoryOperatorsInput>;
  armor_class?: Maybe<FilterFindManyEquipmentArmor_ClassOperatorsInput>;
  capacity?: Maybe<FilterFindManyEquipmentCapacityOperatorsInput>;
  category_range?: Maybe<FilterFindManyEquipmentCategory_RangeOperatorsInput>;
  cost?: Maybe<FilterFindManyEquipmentCostOperatorsInput>;
  damage?: Maybe<FilterFindManyEquipmentDamageOperatorsInput>;
  desc?: Maybe<FilterFindManyEquipmentDescOperatorsInput>;
  equipment_category?: Maybe<FilterFindManyEquipmentEquipment_CategoryOperatorsInput>;
  gear_category?: Maybe<FilterFindManyEquipmentGear_CategoryOperatorsInput>;
  index?: Maybe<FilterFindManyEquipmentIndexOperatorsInput>;
  name?: Maybe<FilterFindManyEquipmentNameOperatorsInput>;
  quantity?: Maybe<FilterFindManyEquipmentQuantityOperatorsInput>;
  range?: Maybe<FilterFindManyEquipmentRangeOperatorsInput>;
  special?: Maybe<FilterFindManyEquipmentSpecialOperatorsInput>;
  speed?: Maybe<FilterFindManyEquipmentSpeedOperatorsInput>;
  stealth_disadvantage?: Maybe<FilterFindManyEquipmentStealth_DisadvantageOperatorsInput>;
  str_minimum?: Maybe<FilterFindManyEquipmentStr_MinimumOperatorsInput>;
  throw_range?: Maybe<FilterFindManyEquipmentThrow_RangeOperatorsInput>;
  tool_category?: Maybe<FilterFindManyEquipmentTool_CategoryOperatorsInput>;
  two_handed_damage?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageOperatorsInput>;
  url?: Maybe<FilterFindManyEquipmentUrlOperatorsInput>;
  vehicle_category?: Maybe<FilterFindManyEquipmentVehicle_CategoryOperatorsInput>;
  weapon_category?: Maybe<FilterFindManyEquipmentWeapon_CategoryOperatorsInput>;
  weapon_range?: Maybe<FilterFindManyEquipmentWeapon_RangeOperatorsInput>;
  weight?: Maybe<FilterFindManyEquipmentWeightOperatorsInput>;
};

export type FilterFindManyEquipmentPropertiesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentQuantityOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentRangeInput = {
  long?: Maybe<Scalars['Float']>;
  normal?: Maybe<Scalars['Float']>;
};

export type FilterFindManyEquipmentRangeLongOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentRangeNormalOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentRangeOperatorsInput = {
  long?: Maybe<FilterFindManyEquipmentRangeLongOperatorsInput>;
  normal?: Maybe<FilterFindManyEquipmentRangeNormalOperatorsInput>;
};

export type FilterFindManyEquipmentSpecialOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentSpeedInput = {
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentSpeedOperatorsInput = {
  quantity?: Maybe<FilterFindManyEquipmentSpeedQuantityOperatorsInput>;
  unit?: Maybe<FilterFindManyEquipmentSpeedUnitOperatorsInput>;
};

export type FilterFindManyEquipmentSpeedQuantityOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentSpeedUnitOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentStealth_DisadvantageOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FilterFindManyEquipmentStr_MinimumOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentThrow_RangeInput = {
  long?: Maybe<Scalars['Float']>;
  normal?: Maybe<Scalars['Float']>;
};

export type FilterFindManyEquipmentThrow_RangeLongOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentThrow_RangeNormalOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipmentThrow_RangeOperatorsInput = {
  long?: Maybe<FilterFindManyEquipmentThrow_RangeLongOperatorsInput>;
  normal?: Maybe<FilterFindManyEquipmentThrow_RangeNormalOperatorsInput>;
};

export type FilterFindManyEquipmentTool_CategoryOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_DiceOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeOperatorsInput = {
  index?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeUrlOperatorsInput>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageInput = {
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeInput>;
};

export type FilterFindManyEquipmentTwo_Handed_DamageOperatorsInput = {
  damage_dice?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_DiceOperatorsInput>;
  damage_type?: Maybe<FilterFindManyEquipmentTwo_Handed_DamageDamage_TypeOperatorsInput>;
};

export type FilterFindManyEquipmentUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentVehicle_CategoryOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentWeapon_CategoryOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentWeapon_RangeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyEquipmentWeightOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyEquipment_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatInput = {
  AND?: Maybe<Array<FilterFindManyFeatInput>>;
  OR?: Maybe<Array<FilterFindManyFeatInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyFeatOperatorsInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prerequisites?: Maybe<Array<Maybe<FilterFindManyFeatPrerequisitesInput>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyFeatOperatorsInput = {
  _id?: Maybe<FilterFindManyFeat_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyFeatDescOperatorsInput>;
  index?: Maybe<FilterFindManyFeatIndexOperatorsInput>;
  name?: Maybe<FilterFindManyFeatNameOperatorsInput>;
  url?: Maybe<FilterFindManyFeatUrlOperatorsInput>;
};

export type FilterFindManyFeatPrerequisitesAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatPrerequisitesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<FilterFindManyFeatPrerequisitesAbility_ScoreInput>;
  minimum_score?: Maybe<Scalars['Float']>;
};

export type FilterFindManyFeatUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeat_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureChoiceChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyFeatureChoiceFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureChoiceInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyFeatureChoiceFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureChoiceOperatorsInput = {
  choose?: Maybe<FilterFindManyFeatureChoiceChooseOperatorsInput>;
  type?: Maybe<FilterFindManyFeatureChoiceTypeOperatorsInput>;
};

export type FilterFindManyFeatureChoiceTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureClassIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureClassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureClassNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureClassOperatorsInput = {
  index?: Maybe<FilterFindManyFeatureClassIndexOperatorsInput>;
  name?: Maybe<FilterFindManyFeatureClassNameOperatorsInput>;
  url?: Maybe<FilterFindManyFeatureClassUrlOperatorsInput>;
};

export type FilterFindManyFeatureClassUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureFeature_SpecificExpertise_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyFeatureFeature_SpecificExpertise_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureFeature_SpecificExpertise_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyFeatureFeature_SpecificExpertise_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureFeature_SpecificExpertise_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyFeatureFeature_SpecificExpertise_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyFeatureFeature_SpecificExpertise_OptionsTypeOperatorsInput>;
};

export type FilterFindManyFeatureFeature_SpecificExpertise_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureFeature_SpecificInput = {
  expertise_options?: Maybe<FilterFindManyFeatureFeature_SpecificExpertise_OptionsInput>;
  subfeature_options?: Maybe<FilterFindManyFeatureFeature_SpecificSubfeature_OptionsInput>;
};

export type FilterFindManyFeatureFeature_SpecificOperatorsInput = {
  expertise_options?: Maybe<FilterFindManyFeatureFeature_SpecificExpertise_OptionsOperatorsInput>;
  subfeature_options?: Maybe<FilterFindManyFeatureFeature_SpecificSubfeature_OptionsOperatorsInput>;
};

export type FilterFindManyFeatureFeature_SpecificSubfeature_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyFeatureFeature_SpecificSubfeature_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureFeature_SpecificSubfeature_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyFeatureFeature_SpecificSubfeature_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureFeature_SpecificSubfeature_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyFeatureFeature_SpecificSubfeature_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyFeatureFeature_SpecificSubfeature_OptionsTypeOperatorsInput>;
};

export type FilterFindManyFeatureFeature_SpecificSubfeature_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureInput = {
  AND?: Maybe<Array<FilterFindManyFeatureInput>>;
  OR?: Maybe<Array<FilterFindManyFeatureInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyFeatureOperatorsInput>;
  choice?: Maybe<FilterFindManyFeatureChoiceInput>;
  class?: Maybe<FilterFindManyFeatureClassInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  feature_specific?: Maybe<FilterFindManyFeatureFeature_SpecificInput>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<FilterFindManyFeatureParentInput>;
  prerequisites?: Maybe<Array<Maybe<FilterFindManyFeaturePrerequisitesInput>>>;
  reference?: Maybe<Scalars['String']>;
  subclass?: Maybe<FilterFindManyFeatureSubclassInput>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureLevelOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyFeatureNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyFeatureOperatorsInput = {
  _id?: Maybe<FilterFindManyFeature_IdOperatorsInput>;
  choice?: Maybe<FilterFindManyFeatureChoiceOperatorsInput>;
  class?: Maybe<FilterFindManyFeatureClassOperatorsInput>;
  desc?: Maybe<FilterFindManyFeatureDescOperatorsInput>;
  feature_specific?: Maybe<FilterFindManyFeatureFeature_SpecificOperatorsInput>;
  index?: Maybe<FilterFindManyFeatureIndexOperatorsInput>;
  level?: Maybe<FilterFindManyFeatureLevelOperatorsInput>;
  name?: Maybe<FilterFindManyFeatureNameOperatorsInput>;
  parent?: Maybe<FilterFindManyFeatureParentOperatorsInput>;
  reference?: Maybe<FilterFindManyFeatureReferenceOperatorsInput>;
  subclass?: Maybe<FilterFindManyFeatureSubclassOperatorsInput>;
  url?: Maybe<FilterFindManyFeatureUrlOperatorsInput>;
};

export type FilterFindManyFeatureParentIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureParentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureParentNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureParentOperatorsInput = {
  index?: Maybe<FilterFindManyFeatureParentIndexOperatorsInput>;
  name?: Maybe<FilterFindManyFeatureParentNameOperatorsInput>;
  url?: Maybe<FilterFindManyFeatureParentUrlOperatorsInput>;
};

export type FilterFindManyFeatureParentUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeaturePrerequisitesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  level?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureReferenceOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureSubclassIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureSubclassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyFeatureSubclassNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureSubclassOperatorsInput = {
  index?: Maybe<FilterFindManyFeatureSubclassIndexOperatorsInput>;
  name?: Maybe<FilterFindManyFeatureSubclassNameOperatorsInput>;
  url?: Maybe<FilterFindManyFeatureSubclassUrlOperatorsInput>;
};

export type FilterFindManyFeatureSubclassUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeatureUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyFeature_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLanguageDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLanguageIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLanguageInput = {
  AND?: Maybe<Array<FilterFindManyLanguageInput>>;
  OR?: Maybe<Array<FilterFindManyLanguageInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyLanguageOperatorsInput>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  script?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typical_speakers?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyLanguageNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyLanguageOperatorsInput = {
  _id?: Maybe<FilterFindManyLanguage_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyLanguageDescOperatorsInput>;
  index?: Maybe<FilterFindManyLanguageIndexOperatorsInput>;
  name?: Maybe<FilterFindManyLanguageNameOperatorsInput>;
  script?: Maybe<FilterFindManyLanguageScriptOperatorsInput>;
  type?: Maybe<FilterFindManyLanguageTypeOperatorsInput>;
  typical_speakers?: Maybe<FilterFindManyLanguageTypical_SpeakersOperatorsInput>;
  url?: Maybe<FilterFindManyLanguageUrlOperatorsInput>;
};

export type FilterFindManyLanguageScriptOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLanguageTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLanguageTypical_SpeakersOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLanguageUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLanguage_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelAbility_Score_BonusesOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClassIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelClassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyLevelClassNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelClassOperatorsInput = {
  index?: Maybe<FilterFindManyLevelClassIndexOperatorsInput>;
  name?: Maybe<FilterFindManyLevelClassNameOperatorsInput>;
  url?: Maybe<FilterFindManyLevelClassUrlOperatorsInput>;
};

export type FilterFindManyLevelClassUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelClass_SpecificAction_SurgesOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificArcane_Recovery_LevelsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificAura_RangeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificBardic_Inspiration_DieOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificBrutal_Critical_DiceOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificChannel_Divinity_ChargesOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificCreating_Spell_SlotsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  sorcery_point_cost?: Maybe<Scalars['Float']>;
  spell_slot_level?: Maybe<Scalars['Float']>;
};

export type FilterFindManyLevelClass_SpecificDestroy_Undead_CrOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificExtra_AttacksOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificFavored_EnemiesOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificFavored_TerrainOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificIndomitable_UsesOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificInput = {
  action_surges?: Maybe<Scalars['Float']>;
  arcane_recovery_levels?: Maybe<Scalars['Float']>;
  aura_range?: Maybe<Scalars['Float']>;
  bardic_inspiration_die?: Maybe<Scalars['Float']>;
  brutal_critical_dice?: Maybe<Scalars['Float']>;
  channel_divinity_charges?: Maybe<Scalars['Float']>;
  creating_spell_slots?: Maybe<Array<Maybe<FilterFindManyLevelClass_SpecificCreating_Spell_SlotsInput>>>;
  destroy_undead_cr?: Maybe<Scalars['Float']>;
  extra_attacks?: Maybe<Scalars['Float']>;
  favored_enemies?: Maybe<Scalars['Float']>;
  favored_terrain?: Maybe<Scalars['Float']>;
  indomitable_uses?: Maybe<Scalars['Float']>;
  invocations_known?: Maybe<Scalars['Float']>;
  ki_points?: Maybe<Scalars['Float']>;
  magical_secrets_max_5?: Maybe<Scalars['Float']>;
  magical_secrets_max_7?: Maybe<Scalars['Float']>;
  magical_secrets_max_9?: Maybe<Scalars['Float']>;
  martial_arts?: Maybe<FilterFindManyLevelClass_SpecificMartial_ArtsInput>;
  metamagic_known?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_6?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_7?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_8?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_9?: Maybe<Scalars['Float']>;
  rage_count?: Maybe<Scalars['Float']>;
  rage_damage_bonus?: Maybe<Scalars['Float']>;
  sneak_attack?: Maybe<FilterFindManyLevelClass_SpecificSneak_AttackInput>;
  song_of_rest_die?: Maybe<Scalars['Float']>;
  sorcery_points?: Maybe<Scalars['Float']>;
  unarmored_movement?: Maybe<Scalars['Float']>;
  wild_shape_fly?: Maybe<Scalars['Boolean']>;
  wild_shape_max_cr?: Maybe<Scalars['Float']>;
  wild_shape_swim?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyLevelClass_SpecificInvocations_KnownOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificKi_PointsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMagical_Secrets_Max_5OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMagical_Secrets_Max_7OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMagical_Secrets_Max_9OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMartial_ArtsDice_CountOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMartial_ArtsDice_ValueOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMartial_ArtsInput = {
  dice_count?: Maybe<Scalars['Float']>;
  dice_value?: Maybe<Scalars['Float']>;
};

export type FilterFindManyLevelClass_SpecificMartial_ArtsOperatorsInput = {
  dice_count?: Maybe<FilterFindManyLevelClass_SpecificMartial_ArtsDice_CountOperatorsInput>;
  dice_value?: Maybe<FilterFindManyLevelClass_SpecificMartial_ArtsDice_ValueOperatorsInput>;
};

export type FilterFindManyLevelClass_SpecificMetamagic_KnownOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_6OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_7OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_8OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_9OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificOperatorsInput = {
  action_surges?: Maybe<FilterFindManyLevelClass_SpecificAction_SurgesOperatorsInput>;
  arcane_recovery_levels?: Maybe<FilterFindManyLevelClass_SpecificArcane_Recovery_LevelsOperatorsInput>;
  aura_range?: Maybe<FilterFindManyLevelClass_SpecificAura_RangeOperatorsInput>;
  bardic_inspiration_die?: Maybe<FilterFindManyLevelClass_SpecificBardic_Inspiration_DieOperatorsInput>;
  brutal_critical_dice?: Maybe<FilterFindManyLevelClass_SpecificBrutal_Critical_DiceOperatorsInput>;
  channel_divinity_charges?: Maybe<FilterFindManyLevelClass_SpecificChannel_Divinity_ChargesOperatorsInput>;
  destroy_undead_cr?: Maybe<FilterFindManyLevelClass_SpecificDestroy_Undead_CrOperatorsInput>;
  extra_attacks?: Maybe<FilterFindManyLevelClass_SpecificExtra_AttacksOperatorsInput>;
  favored_enemies?: Maybe<FilterFindManyLevelClass_SpecificFavored_EnemiesOperatorsInput>;
  favored_terrain?: Maybe<FilterFindManyLevelClass_SpecificFavored_TerrainOperatorsInput>;
  indomitable_uses?: Maybe<FilterFindManyLevelClass_SpecificIndomitable_UsesOperatorsInput>;
  invocations_known?: Maybe<FilterFindManyLevelClass_SpecificInvocations_KnownOperatorsInput>;
  ki_points?: Maybe<FilterFindManyLevelClass_SpecificKi_PointsOperatorsInput>;
  magical_secrets_max_5?: Maybe<FilterFindManyLevelClass_SpecificMagical_Secrets_Max_5OperatorsInput>;
  magical_secrets_max_7?: Maybe<FilterFindManyLevelClass_SpecificMagical_Secrets_Max_7OperatorsInput>;
  magical_secrets_max_9?: Maybe<FilterFindManyLevelClass_SpecificMagical_Secrets_Max_9OperatorsInput>;
  martial_arts?: Maybe<FilterFindManyLevelClass_SpecificMartial_ArtsOperatorsInput>;
  metamagic_known?: Maybe<FilterFindManyLevelClass_SpecificMetamagic_KnownOperatorsInput>;
  mystic_arcanum_level_6?: Maybe<FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_6OperatorsInput>;
  mystic_arcanum_level_7?: Maybe<FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_7OperatorsInput>;
  mystic_arcanum_level_8?: Maybe<FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_8OperatorsInput>;
  mystic_arcanum_level_9?: Maybe<FilterFindManyLevelClass_SpecificMystic_Arcanum_Level_9OperatorsInput>;
  rage_count?: Maybe<FilterFindManyLevelClass_SpecificRage_CountOperatorsInput>;
  rage_damage_bonus?: Maybe<FilterFindManyLevelClass_SpecificRage_Damage_BonusOperatorsInput>;
  sneak_attack?: Maybe<FilterFindManyLevelClass_SpecificSneak_AttackOperatorsInput>;
  song_of_rest_die?: Maybe<FilterFindManyLevelClass_SpecificSong_Of_Rest_DieOperatorsInput>;
  sorcery_points?: Maybe<FilterFindManyLevelClass_SpecificSorcery_PointsOperatorsInput>;
  unarmored_movement?: Maybe<FilterFindManyLevelClass_SpecificUnarmored_MovementOperatorsInput>;
  wild_shape_fly?: Maybe<FilterFindManyLevelClass_SpecificWild_Shape_FlyOperatorsInput>;
  wild_shape_max_cr?: Maybe<FilterFindManyLevelClass_SpecificWild_Shape_Max_CrOperatorsInput>;
  wild_shape_swim?: Maybe<FilterFindManyLevelClass_SpecificWild_Shape_SwimOperatorsInput>;
};

export type FilterFindManyLevelClass_SpecificRage_CountOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificRage_Damage_BonusOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificSneak_AttackDice_CountOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificSneak_AttackDice_ValueOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificSneak_AttackInput = {
  dice_count?: Maybe<Scalars['Float']>;
  dice_value?: Maybe<Scalars['Float']>;
};

export type FilterFindManyLevelClass_SpecificSneak_AttackOperatorsInput = {
  dice_count?: Maybe<FilterFindManyLevelClass_SpecificSneak_AttackDice_CountOperatorsInput>;
  dice_value?: Maybe<FilterFindManyLevelClass_SpecificSneak_AttackDice_ValueOperatorsInput>;
};

export type FilterFindManyLevelClass_SpecificSong_Of_Rest_DieOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificSorcery_PointsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificUnarmored_MovementOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificWild_Shape_FlyOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FilterFindManyLevelClass_SpecificWild_Shape_Max_CrOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelClass_SpecificWild_Shape_SwimOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FilterFindManyLevelFeaturesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyLevelIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelInput = {
  AND?: Maybe<Array<FilterFindManyLevelInput>>;
  OR?: Maybe<Array<FilterFindManyLevelInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyLevelOperatorsInput>;
  ability_score_bonuses?: Maybe<Scalars['Float']>;
  class?: Maybe<FilterFindManyLevelClassInput>;
  class_specific?: Maybe<FilterFindManyLevelClass_SpecificInput>;
  features?: Maybe<Array<Maybe<FilterFindManyLevelFeaturesInput>>>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  prof_bonus?: Maybe<Scalars['Float']>;
  spellcasting?: Maybe<FilterFindManyLevelSpellcastingInput>;
  subclass?: Maybe<FilterFindManyLevelSubclassInput>;
  subclass_specific?: Maybe<FilterFindManyLevelSubclass_SpecificInput>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyLevelLevelOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyLevelOperatorsInput = {
  _id?: Maybe<FilterFindManyLevel_IdOperatorsInput>;
  ability_score_bonuses?: Maybe<FilterFindManyLevelAbility_Score_BonusesOperatorsInput>;
  class?: Maybe<FilterFindManyLevelClassOperatorsInput>;
  class_specific?: Maybe<FilterFindManyLevelClass_SpecificOperatorsInput>;
  index?: Maybe<FilterFindManyLevelIndexOperatorsInput>;
  level?: Maybe<FilterFindManyLevelLevelOperatorsInput>;
  prof_bonus?: Maybe<FilterFindManyLevelProf_BonusOperatorsInput>;
  spellcasting?: Maybe<FilterFindManyLevelSpellcastingOperatorsInput>;
  subclass?: Maybe<FilterFindManyLevelSubclassOperatorsInput>;
  subclass_specific?: Maybe<FilterFindManyLevelSubclass_SpecificOperatorsInput>;
  url?: Maybe<FilterFindManyLevelUrlOperatorsInput>;
};

export type FilterFindManyLevelProf_BonusOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingCantrips_KnownOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingInput = {
  cantrips_known?: Maybe<Scalars['Float']>;
  spell_slots_level_1?: Maybe<Scalars['Float']>;
  spell_slots_level_2?: Maybe<Scalars['Float']>;
  spell_slots_level_3?: Maybe<Scalars['Float']>;
  spell_slots_level_4?: Maybe<Scalars['Float']>;
  spell_slots_level_5?: Maybe<Scalars['Float']>;
  spell_slots_level_6?: Maybe<Scalars['Float']>;
  spell_slots_level_7?: Maybe<Scalars['Float']>;
  spell_slots_level_8?: Maybe<Scalars['Float']>;
  spell_slots_level_9?: Maybe<Scalars['Float']>;
  spells_known?: Maybe<Scalars['Float']>;
};

export type FilterFindManyLevelSpellcastingOperatorsInput = {
  cantrips_known?: Maybe<FilterFindManyLevelSpellcastingCantrips_KnownOperatorsInput>;
  spell_slots_level_1?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_1OperatorsInput>;
  spell_slots_level_2?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_2OperatorsInput>;
  spell_slots_level_3?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_3OperatorsInput>;
  spell_slots_level_4?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_4OperatorsInput>;
  spell_slots_level_5?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_5OperatorsInput>;
  spell_slots_level_6?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_6OperatorsInput>;
  spell_slots_level_7?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_7OperatorsInput>;
  spell_slots_level_8?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_8OperatorsInput>;
  spell_slots_level_9?: Maybe<FilterFindManyLevelSpellcastingSpell_Slots_Level_9OperatorsInput>;
  spells_known?: Maybe<FilterFindManyLevelSpellcastingSpells_KnownOperatorsInput>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_1OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_2OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_3OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_4OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_5OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_6OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_7OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_8OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpell_Slots_Level_9OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSpellcastingSpells_KnownOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSubclassIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelSubclassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyLevelSubclassNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelSubclassOperatorsInput = {
  index?: Maybe<FilterFindManyLevelSubclassIndexOperatorsInput>;
  name?: Maybe<FilterFindManyLevelSubclassNameOperatorsInput>;
  url?: Maybe<FilterFindManyLevelSubclassUrlOperatorsInput>;
};

export type FilterFindManyLevelSubclassUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevelSubclass_SpecificAdditional_Magical_Secrets_Max_LvlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSubclass_SpecificAura_RangeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyLevelSubclass_SpecificInput = {
  additional_magical_secrets_max_lvl?: Maybe<Scalars['Float']>;
  aura_range?: Maybe<Scalars['Float']>;
};

export type FilterFindManyLevelSubclass_SpecificOperatorsInput = {
  additional_magical_secrets_max_lvl?: Maybe<FilterFindManyLevelSubclass_SpecificAdditional_Magical_Secrets_Max_LvlOperatorsInput>;
  aura_range?: Maybe<FilterFindManyLevelSubclass_SpecificAura_RangeOperatorsInput>;
};

export type FilterFindManyLevelUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyLevel_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicItemDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicItemEquipment_CategoryIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicItemEquipment_CategoryInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyMagicItemEquipment_CategoryNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicItemEquipment_CategoryOperatorsInput = {
  index?: Maybe<FilterFindManyMagicItemEquipment_CategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindManyMagicItemEquipment_CategoryNameOperatorsInput>;
  url?: Maybe<FilterFindManyMagicItemEquipment_CategoryUrlOperatorsInput>;
};

export type FilterFindManyMagicItemEquipment_CategoryUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicItemIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicItemInput = {
  AND?: Maybe<Array<FilterFindManyMagicItemInput>>;
  OR?: Maybe<Array<FilterFindManyMagicItemInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyMagicItemOperatorsInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipment_category?: Maybe<FilterFindManyMagicItemEquipment_CategoryInput>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyMagicItemNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyMagicItemOperatorsInput = {
  _id?: Maybe<FilterFindManyMagicItem_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyMagicItemDescOperatorsInput>;
  equipment_category?: Maybe<FilterFindManyMagicItemEquipment_CategoryOperatorsInput>;
  index?: Maybe<FilterFindManyMagicItemIndexOperatorsInput>;
  name?: Maybe<FilterFindManyMagicItemNameOperatorsInput>;
  url?: Maybe<FilterFindManyMagicItemUrlOperatorsInput>;
};

export type FilterFindManyMagicItemUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicItem_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicSchoolDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicSchoolIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicSchoolInput = {
  AND?: Maybe<Array<FilterFindManyMagicSchoolInput>>;
  OR?: Maybe<Array<FilterFindManyMagicSchoolInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyMagicSchoolOperatorsInput>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyMagicSchoolNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyMagicSchoolOperatorsInput = {
  _id?: Maybe<FilterFindManyMagicSchool_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyMagicSchoolDescOperatorsInput>;
  index?: Maybe<FilterFindManyMagicSchoolIndexOperatorsInput>;
  name?: Maybe<FilterFindManyMagicSchoolNameOperatorsInput>;
  url?: Maybe<FilterFindManyMagicSchoolUrlOperatorsInput>;
};

export type FilterFindManyMagicSchoolUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMagicSchool_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterActionsDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyMonsterActionsDamageInput = {
  _id?: Maybe<Scalars['MongoID']>;
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<FilterFindManyMonsterActionsDamageDamage_TypeInput>;
};

export type FilterFindManyMonsterActionsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  attack_bonus?: Maybe<Scalars['Float']>;
  damage?: Maybe<Array<Maybe<FilterFindManyMonsterActionsDamageInput>>>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FilterFindManyMonsterAlignmentOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterArmor_ClassOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterChallenge_RatingOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterCharismaOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterCondition_ImmunitiesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyMonsterConstitutionOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterDexterityOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterFormsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyMonsterHit_DiceOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterHit_PointsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterInput = {
  AND?: Maybe<Array<FilterFindManyMonsterInput>>;
  OR?: Maybe<Array<FilterFindManyMonsterInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyMonsterOperatorsInput>;
  actions?: Maybe<Array<Maybe<FilterFindManyMonsterActionsInput>>>;
  alignment?: Maybe<Scalars['String']>;
  armor_class?: Maybe<Scalars['Float']>;
  challenge_rating?: Maybe<Scalars['Float']>;
  charisma?: Maybe<Scalars['Float']>;
  condition_immunities?: Maybe<Array<Maybe<FilterFindManyMonsterCondition_ImmunitiesInput>>>;
  constitution?: Maybe<Scalars['Float']>;
  damage_immunities?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_resistances?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_vulnerabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  dexterity?: Maybe<Scalars['Float']>;
  forms?: Maybe<Array<Maybe<FilterFindManyMonsterFormsInput>>>;
  hit_dice?: Maybe<Scalars['String']>;
  hit_points?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['String']>;
  intelligence?: Maybe<Scalars['Float']>;
  languages?: Maybe<Scalars['String']>;
  legendary_actions?: Maybe<Array<Maybe<FilterFindManyMonsterLegendary_ActionsInput>>>;
  name?: Maybe<Scalars['String']>;
  proficiencies?: Maybe<Array<Maybe<FilterFindManyMonsterProficienciesInput>>>;
  reactions?: Maybe<Array<Maybe<FilterFindManyMonsterReactionsInput>>>;
  senses?: Maybe<FilterFindManyMonsterSensesInput>;
  size?: Maybe<Scalars['String']>;
  special_abilities?: Maybe<Array<Maybe<FilterFindManyMonsterSpecial_AbilitiesInput>>>;
  speed?: Maybe<FilterFindManyMonsterSpeedInput>;
  strength?: Maybe<Scalars['Float']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  wisdom?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

export type FilterFindManyMonsterIntelligenceOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterLanguagesOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterLegendary_ActionsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  attack_bonus?: Maybe<Scalars['Float']>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FilterFindManyMonsterNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyMonsterOperatorsInput = {
  _id?: Maybe<FilterFindManyMonster_IdOperatorsInput>;
  alignment?: Maybe<FilterFindManyMonsterAlignmentOperatorsInput>;
  armor_class?: Maybe<FilterFindManyMonsterArmor_ClassOperatorsInput>;
  challenge_rating?: Maybe<FilterFindManyMonsterChallenge_RatingOperatorsInput>;
  charisma?: Maybe<FilterFindManyMonsterCharismaOperatorsInput>;
  constitution?: Maybe<FilterFindManyMonsterConstitutionOperatorsInput>;
  dexterity?: Maybe<FilterFindManyMonsterDexterityOperatorsInput>;
  hit_dice?: Maybe<FilterFindManyMonsterHit_DiceOperatorsInput>;
  hit_points?: Maybe<FilterFindManyMonsterHit_PointsOperatorsInput>;
  index?: Maybe<FilterFindManyMonsterIndexOperatorsInput>;
  intelligence?: Maybe<FilterFindManyMonsterIntelligenceOperatorsInput>;
  languages?: Maybe<FilterFindManyMonsterLanguagesOperatorsInput>;
  name?: Maybe<FilterFindManyMonsterNameOperatorsInput>;
  senses?: Maybe<FilterFindManyMonsterSensesOperatorsInput>;
  size?: Maybe<FilterFindManyMonsterSizeOperatorsInput>;
  speed?: Maybe<FilterFindManyMonsterSpeedOperatorsInput>;
  strength?: Maybe<FilterFindManyMonsterStrengthOperatorsInput>;
  subtype?: Maybe<FilterFindManyMonsterSubtypeOperatorsInput>;
  type?: Maybe<FilterFindManyMonsterTypeOperatorsInput>;
  url?: Maybe<FilterFindManyMonsterUrlOperatorsInput>;
  wisdom?: Maybe<FilterFindManyMonsterWisdomOperatorsInput>;
  xp?: Maybe<FilterFindManyMonsterXpOperatorsInput>;
};

export type FilterFindManyMonsterProficienciesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  proficiency?: Maybe<FilterFindManyMonsterProficienciesProficiencyInput>;
  value?: Maybe<Scalars['Float']>;
};

export type FilterFindManyMonsterProficienciesProficiencyInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyMonsterReactionsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FilterFindManyMonsterSensesBlindsightOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSensesDarkvisionOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSensesInput = {
  blindsight?: Maybe<Scalars['String']>;
  darkvision?: Maybe<Scalars['String']>;
  passive_perception?: Maybe<Scalars['Float']>;
  tremorsense?: Maybe<Scalars['String']>;
  truesight?: Maybe<Scalars['String']>;
};

export type FilterFindManyMonsterSensesOperatorsInput = {
  blindsight?: Maybe<FilterFindManyMonsterSensesBlindsightOperatorsInput>;
  darkvision?: Maybe<FilterFindManyMonsterSensesDarkvisionOperatorsInput>;
  passive_perception?: Maybe<FilterFindManyMonsterSensesPassive_PerceptionOperatorsInput>;
  tremorsense?: Maybe<FilterFindManyMonsterSensesTremorsenseOperatorsInput>;
  truesight?: Maybe<FilterFindManyMonsterSensesTruesightOperatorsInput>;
};

export type FilterFindManyMonsterSensesPassive_PerceptionOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterSensesTremorsenseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSensesTruesightOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSizeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSpecial_AbilitiesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FilterFindManyMonsterSpeedBurrowOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSpeedClimbOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSpeedFlyOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSpeedHoverOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FilterFindManyMonsterSpeedInput = {
  burrow?: Maybe<Scalars['String']>;
  climb?: Maybe<Scalars['String']>;
  fly?: Maybe<Scalars['String']>;
  hover?: Maybe<Scalars['Boolean']>;
  swim?: Maybe<Scalars['String']>;
  walk?: Maybe<Scalars['String']>;
};

export type FilterFindManyMonsterSpeedOperatorsInput = {
  burrow?: Maybe<FilterFindManyMonsterSpeedBurrowOperatorsInput>;
  climb?: Maybe<FilterFindManyMonsterSpeedClimbOperatorsInput>;
  fly?: Maybe<FilterFindManyMonsterSpeedFlyOperatorsInput>;
  hover?: Maybe<FilterFindManyMonsterSpeedHoverOperatorsInput>;
  swim?: Maybe<FilterFindManyMonsterSpeedSwimOperatorsInput>;
  walk?: Maybe<FilterFindManyMonsterSpeedWalkOperatorsInput>;
};

export type FilterFindManyMonsterSpeedSwimOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterSpeedWalkOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterStrengthOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterSubtypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyMonsterWisdomOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyMonsterXpOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyMonster_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyProficiencyClassesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyProficiencyIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyProficiencyInput = {
  AND?: Maybe<Array<FilterFindManyProficiencyInput>>;
  OR?: Maybe<Array<FilterFindManyProficiencyInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyProficiencyOperatorsInput>;
  classes?: Maybe<Array<Maybe<FilterFindManyProficiencyClassesInput>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  races?: Maybe<Array<Maybe<FilterFindManyProficiencyRacesInput>>>;
  references?: Maybe<Array<Maybe<FilterFindManyProficiencyReferencesInput>>>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyProficiencyNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyProficiencyOperatorsInput = {
  _id?: Maybe<FilterFindManyProficiency_IdOperatorsInput>;
  index?: Maybe<FilterFindManyProficiencyIndexOperatorsInput>;
  name?: Maybe<FilterFindManyProficiencyNameOperatorsInput>;
  type?: Maybe<FilterFindManyProficiencyTypeOperatorsInput>;
  url?: Maybe<FilterFindManyProficiencyUrlOperatorsInput>;
};

export type FilterFindManyProficiencyRacesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyProficiencyReferencesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyProficiencyTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyProficiencyUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyProficiency_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsFromAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<FilterFindManyRaceAbility_Bonus_OptionsFromAbility_ScoreInput>;
  bonus?: Maybe<Scalars['Float']>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyRaceAbility_Bonus_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyRaceAbility_Bonus_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyRaceAbility_Bonus_OptionsTypeOperatorsInput>;
};

export type FilterFindManyRaceAbility_Bonus_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceAbility_BonusesAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceAbility_BonusesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<FilterFindManyRaceAbility_BonusesAbility_ScoreInput>;
  bonus?: Maybe<Scalars['Float']>;
};

export type FilterFindManyRaceAgeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceAlignmentOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceInput = {
  AND?: Maybe<Array<FilterFindManyRaceInput>>;
  OR?: Maybe<Array<FilterFindManyRaceInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyRaceOperatorsInput>;
  ability_bonus_options?: Maybe<FilterFindManyRaceAbility_Bonus_OptionsInput>;
  ability_bonuses?: Maybe<Array<Maybe<FilterFindManyRaceAbility_BonusesInput>>>;
  age?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  language_desc?: Maybe<Scalars['String']>;
  language_options?: Maybe<FilterFindManyRaceLanguage_OptionsInput>;
  languages?: Maybe<Array<Maybe<FilterFindManyRaceLanguagesInput>>>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  size_description?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['Float']>;
  starting_proficiencies?: Maybe<Array<Maybe<FilterFindManyRaceStarting_ProficienciesInput>>>;
  starting_proficiency_options?: Maybe<FilterFindManyRaceStarting_Proficiency_OptionsInput>;
  subraces?: Maybe<Array<Maybe<FilterFindManyRaceSubracesInput>>>;
  traits?: Maybe<Array<Maybe<FilterFindManyRaceTraitsInput>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceLanguage_DescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceLanguage_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyRaceLanguage_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceLanguage_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyRaceLanguage_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceLanguage_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyRaceLanguage_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyRaceLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindManyRaceLanguage_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceLanguagesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyRaceOperatorsInput = {
  _id?: Maybe<FilterFindManyRace_IdOperatorsInput>;
  ability_bonus_options?: Maybe<FilterFindManyRaceAbility_Bonus_OptionsOperatorsInput>;
  age?: Maybe<FilterFindManyRaceAgeOperatorsInput>;
  alignment?: Maybe<FilterFindManyRaceAlignmentOperatorsInput>;
  index?: Maybe<FilterFindManyRaceIndexOperatorsInput>;
  language_desc?: Maybe<FilterFindManyRaceLanguage_DescOperatorsInput>;
  language_options?: Maybe<FilterFindManyRaceLanguage_OptionsOperatorsInput>;
  name?: Maybe<FilterFindManyRaceNameOperatorsInput>;
  size?: Maybe<FilterFindManyRaceSizeOperatorsInput>;
  size_description?: Maybe<FilterFindManyRaceSize_DescriptionOperatorsInput>;
  speed?: Maybe<FilterFindManyRaceSpeedOperatorsInput>;
  starting_proficiency_options?: Maybe<FilterFindManyRaceStarting_Proficiency_OptionsOperatorsInput>;
  url?: Maybe<FilterFindManyRaceUrlOperatorsInput>;
};

export type FilterFindManyRaceSizeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceSize_DescriptionOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceSpeedOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyRaceStarting_ProficienciesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyRaceStarting_Proficiency_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyRaceStarting_Proficiency_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyRaceStarting_Proficiency_OptionsTypeOperatorsInput>;
};

export type FilterFindManyRaceStarting_Proficiency_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRaceSubracesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceTraitsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyRaceUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRace_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRuleDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRuleIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRuleInput = {
  AND?: Maybe<Array<FilterFindManyRuleInput>>;
  OR?: Maybe<Array<FilterFindManyRuleInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyRuleOperatorsInput>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subsections?: Maybe<Array<Maybe<FilterFindManyRuleSubsectionsInput>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyRuleNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyRuleOperatorsInput = {
  _id?: Maybe<FilterFindManyRule_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyRuleDescOperatorsInput>;
  index?: Maybe<FilterFindManyRuleIndexOperatorsInput>;
  name?: Maybe<FilterFindManyRuleNameOperatorsInput>;
  url?: Maybe<FilterFindManyRuleUrlOperatorsInput>;
};

export type FilterFindManyRuleSectionDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRuleSectionIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRuleSectionInput = {
  AND?: Maybe<Array<FilterFindManyRuleSectionInput>>;
  OR?: Maybe<Array<FilterFindManyRuleSectionInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyRuleSectionOperatorsInput>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyRuleSectionNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyRuleSectionOperatorsInput = {
  _id?: Maybe<FilterFindManyRuleSection_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyRuleSectionDescOperatorsInput>;
  index?: Maybe<FilterFindManyRuleSectionIndexOperatorsInput>;
  name?: Maybe<FilterFindManyRuleSectionNameOperatorsInput>;
  url?: Maybe<FilterFindManyRuleSectionUrlOperatorsInput>;
};

export type FilterFindManyRuleSectionUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRuleSection_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRuleSubsectionsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyRuleUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyRule_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySkillAbility_ScoreIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySkillAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySkillAbility_ScoreNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySkillAbility_ScoreOperatorsInput = {
  index?: Maybe<FilterFindManySkillAbility_ScoreIndexOperatorsInput>;
  name?: Maybe<FilterFindManySkillAbility_ScoreNameOperatorsInput>;
  url?: Maybe<FilterFindManySkillAbility_ScoreUrlOperatorsInput>;
};

export type FilterFindManySkillAbility_ScoreUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySkillDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySkillIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySkillInput = {
  AND?: Maybe<Array<FilterFindManySkillInput>>;
  OR?: Maybe<Array<FilterFindManySkillInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManySkillOperatorsInput>;
  ability_score?: Maybe<FilterFindManySkillAbility_ScoreInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySkillNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySkillOperatorsInput = {
  _id?: Maybe<FilterFindManySkill_IdOperatorsInput>;
  ability_score?: Maybe<FilterFindManySkillAbility_ScoreOperatorsInput>;
  desc?: Maybe<FilterFindManySkillDescOperatorsInput>;
  index?: Maybe<FilterFindManySkillIndexOperatorsInput>;
  name?: Maybe<FilterFindManySkillNameOperatorsInput>;
  url?: Maybe<FilterFindManySkillUrlOperatorsInput>;
};

export type FilterFindManySkillUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySkill_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellArea_Of_EffectInput = {
  size?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManySpellClassesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySpellDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySpellDamageInput = {
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  damage_at_slot_level?: Maybe<Scalars['JSON']>;
  damage_type?: Maybe<FilterFindManySpellDamageDamage_TypeInput>;
};

export type FilterFindManySpellDcDc_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySpellDcInput = {
  dc_success?: Maybe<Scalars['String']>;
  dc_type?: Maybe<FilterFindManySpellDcDc_TypeInput>;
  desc?: Maybe<Scalars['String']>;
};

export type FilterFindManySpellInput = {
  AND?: Maybe<Array<FilterFindManySpellInput>>;
  OR?: Maybe<Array<FilterFindManySpellInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManySpellOperatorsInput>;
  area_of_effect?: Maybe<FilterFindManySpellArea_Of_EffectInput>;
  attack_type?: Maybe<Scalars['String']>;
  casting_time?: Maybe<Scalars['String']>;
  classes?: Maybe<Array<Maybe<FilterFindManySpellClassesInput>>>;
  components?: Maybe<Array<Maybe<Scalars['String']>>>;
  concentration?: Maybe<Scalars['Boolean']>;
  damage?: Maybe<FilterFindManySpellDamageInput>;
  dc?: Maybe<FilterFindManySpellDcInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  duration?: Maybe<Scalars['String']>;
  heal_at_slot_level?: Maybe<Scalars['JSON']>;
  higher_level?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  material?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  range?: Maybe<Scalars['String']>;
  ritual?: Maybe<Scalars['Boolean']>;
  school?: Maybe<FilterFindManySpellSchoolInput>;
  subclasses?: Maybe<Array<Maybe<FilterFindManySpellSubclassesInput>>>;
  url?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySpellOperatorsInput = {
  _id?: Maybe<FilterFindManySpell_IdOperatorsInput>;
  school?: Maybe<FilterFindManySpellSchoolOperatorsInput>;
};

export type FilterFindManySpellSchoolIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellSchoolInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySpellSchoolNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellSchoolOperatorsInput = {
  index?: Maybe<FilterFindManySpellSchoolIndexOperatorsInput>;
  name?: Maybe<FilterFindManySpellSchoolNameOperatorsInput>;
  url?: Maybe<FilterFindManySpellSchoolUrlOperatorsInput>;
};

export type FilterFindManySpellSchoolUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySpellSubclassesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySpell_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassClassIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassClassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySubclassClassNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassClassOperatorsInput = {
  index?: Maybe<FilterFindManySubclassClassIndexOperatorsInput>;
  name?: Maybe<FilterFindManySubclassClassNameOperatorsInput>;
  url?: Maybe<FilterFindManySubclassClassUrlOperatorsInput>;
};

export type FilterFindManySubclassClassUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassInput = {
  AND?: Maybe<Array<FilterFindManySubclassInput>>;
  OR?: Maybe<Array<FilterFindManySubclassInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManySubclassOperatorsInput>;
  class?: Maybe<FilterFindManySubclassClassInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  spells?: Maybe<Array<Maybe<FilterFindManySubclassSpellsInput>>>;
  subclass_flavor?: Maybe<Scalars['String']>;
  subclass_levels?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySubclassNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySubclassOperatorsInput = {
  _id?: Maybe<FilterFindManySubclass_IdOperatorsInput>;
  class?: Maybe<FilterFindManySubclassClassOperatorsInput>;
  desc?: Maybe<FilterFindManySubclassDescOperatorsInput>;
  index?: Maybe<FilterFindManySubclassIndexOperatorsInput>;
  name?: Maybe<FilterFindManySubclassNameOperatorsInput>;
  subclass_flavor?: Maybe<FilterFindManySubclassSubclass_FlavorOperatorsInput>;
  subclass_levels?: Maybe<FilterFindManySubclassSubclass_LevelsOperatorsInput>;
  url?: Maybe<FilterFindManySubclassUrlOperatorsInput>;
};

export type FilterFindManySubclassSpellsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  prerequisites?: Maybe<Array<Maybe<FilterFindManySubclassSpellsPrerequisitesInput>>>;
  spell?: Maybe<FilterFindManySubclassSpellsSpellInput>;
};

export type FilterFindManySubclassSpellsPrerequisitesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySubclassSpellsSpellInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySubclassSubclass_FlavorOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassSubclass_LevelsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclassUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubclass_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubraceAbility_BonusesAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySubraceAbility_BonusesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<FilterFindManySubraceAbility_BonusesAbility_ScoreInput>;
  bonus?: Maybe<Scalars['Float']>;
};

export type FilterFindManySubraceDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubraceIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubraceInput = {
  AND?: Maybe<Array<FilterFindManySubraceInput>>;
  OR?: Maybe<Array<FilterFindManySubraceInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManySubraceOperatorsInput>;
  ability_bonuses?: Maybe<Array<Maybe<FilterFindManySubraceAbility_BonusesInput>>>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  language_options?: Maybe<FilterFindManySubraceLanguage_OptionsInput>;
  name?: Maybe<Scalars['String']>;
  race?: Maybe<FilterFindManySubraceRaceInput>;
  racial_traits?: Maybe<Array<Maybe<FilterFindManySubraceRacial_TraitsInput>>>;
  starting_proficiencies?: Maybe<Array<Maybe<FilterFindManySubraceStarting_ProficienciesInput>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySubraceLanguage_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManySubraceLanguage_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySubraceLanguage_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManySubraceLanguage_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManySubraceLanguage_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManySubraceLanguage_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManySubraceLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindManySubraceLanguage_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubraceNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySubraceOperatorsInput = {
  _id?: Maybe<FilterFindManySubrace_IdOperatorsInput>;
  desc?: Maybe<FilterFindManySubraceDescOperatorsInput>;
  index?: Maybe<FilterFindManySubraceIndexOperatorsInput>;
  language_options?: Maybe<FilterFindManySubraceLanguage_OptionsOperatorsInput>;
  name?: Maybe<FilterFindManySubraceNameOperatorsInput>;
  race?: Maybe<FilterFindManySubraceRaceOperatorsInput>;
  url?: Maybe<FilterFindManySubraceUrlOperatorsInput>;
};

export type FilterFindManySubraceRaceIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubraceRaceInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySubraceRaceNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubraceRaceOperatorsInput = {
  index?: Maybe<FilterFindManySubraceRaceIndexOperatorsInput>;
  name?: Maybe<FilterFindManySubraceRaceNameOperatorsInput>;
  url?: Maybe<FilterFindManySubraceRaceUrlOperatorsInput>;
};

export type FilterFindManySubraceRaceUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubraceRacial_TraitsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySubraceStarting_ProficienciesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManySubraceUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySubrace_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitInput = {
  AND?: Maybe<Array<FilterFindManyTraitInput>>;
  OR?: Maybe<Array<FilterFindManyTraitInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyTraitOperatorsInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<FilterFindManyTraitParentInput>;
  proficiencies?: Maybe<Array<Maybe<FilterFindManyTraitProficienciesInput>>>;
  proficiency_choices?: Maybe<FilterFindManyTraitProficiency_ChoicesInput>;
  races?: Maybe<Array<Maybe<FilterFindManyTraitRacesInput>>>;
  subraces?: Maybe<Array<Maybe<FilterFindManyTraitSubracesInput>>>;
  trait_specific?: Maybe<FilterFindManyTraitTrait_SpecificInput>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyTraitOperatorsInput = {
  _id?: Maybe<FilterFindManyTrait_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyTraitDescOperatorsInput>;
  index?: Maybe<FilterFindManyTraitIndexOperatorsInput>;
  name?: Maybe<FilterFindManyTraitNameOperatorsInput>;
  parent?: Maybe<FilterFindManyTraitParentOperatorsInput>;
  proficiency_choices?: Maybe<FilterFindManyTraitProficiency_ChoicesOperatorsInput>;
  trait_specific?: Maybe<FilterFindManyTraitTrait_SpecificOperatorsInput>;
  url?: Maybe<FilterFindManyTraitUrlOperatorsInput>;
};

export type FilterFindManyTraitParentIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitParentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitParentNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitParentOperatorsInput = {
  index?: Maybe<FilterFindManyTraitParentIndexOperatorsInput>;
  name?: Maybe<FilterFindManyTraitParentNameOperatorsInput>;
  url?: Maybe<FilterFindManyTraitParentUrlOperatorsInput>;
};

export type FilterFindManyTraitParentUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitProficienciesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitProficiency_ChoicesChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyTraitProficiency_ChoicesFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitProficiency_ChoicesInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyTraitProficiency_ChoicesFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitProficiency_ChoicesOperatorsInput = {
  choose?: Maybe<FilterFindManyTraitProficiency_ChoicesChooseOperatorsInput>;
  type?: Maybe<FilterFindManyTraitProficiency_ChoicesTypeOperatorsInput>;
};

export type FilterFindManyTraitProficiency_ChoicesTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitRacesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitSubracesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDamageInput = {
  _id?: Maybe<Scalars['MongoID']>;
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  damage_type?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDamageDamage_TypeInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeOperatorsInput = {
  index?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeUrlOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcInput = {
  dc_type?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeInput>;
  success_type?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcOperatorsInput = {
  dc_type?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcDc_TypeOperatorsInput>;
  success_type?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcSuccess_TypeOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDcSuccess_TypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponInput = {
  damage?: Maybe<Array<Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDamageInput>>>;
  dc?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcInput>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  usage?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponUsageInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponOperatorsInput = {
  dc?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDcOperatorsInput>;
  desc?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponDescOperatorsInput>;
  name?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponNameOperatorsInput>;
  usage?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponUsageOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponUsageInput = {
  times?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponUsageOperatorsInput = {
  times?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponUsageTimesOperatorsInput>;
  type?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponUsageTypeOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponUsageTimesOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyTraitTrait_SpecificBreath_WeaponUsageTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificDamage_TypeIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificDamage_TypeNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificDamage_TypeOperatorsInput = {
  index?: Maybe<FilterFindManyTraitTrait_SpecificDamage_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindManyTraitTrait_SpecificDamage_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindManyTraitTrait_SpecificDamage_TypeUrlOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificDamage_TypeUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificInput = {
  breath_weapon?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponInput>;
  damage_type?: Maybe<FilterFindManyTraitTrait_SpecificDamage_TypeInput>;
  spell_options?: Maybe<FilterFindManyTraitTrait_SpecificSpell_OptionsInput>;
  subtrait_options?: Maybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsInput>;
};

export type FilterFindManyTraitTrait_SpecificOperatorsInput = {
  breath_weapon?: Maybe<FilterFindManyTraitTrait_SpecificBreath_WeaponOperatorsInput>;
  damage_type?: Maybe<FilterFindManyTraitTrait_SpecificDamage_TypeOperatorsInput>;
  spell_options?: Maybe<FilterFindManyTraitTrait_SpecificSpell_OptionsOperatorsInput>;
  subtrait_options?: Maybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificSpell_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyTraitTrait_SpecificSpell_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificSpell_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyTraitTrait_SpecificSpell_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificSpell_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyTraitTrait_SpecificSpell_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyTraitTrait_SpecificSpell_OptionsTypeOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificSpell_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindManyTraitTrait_SpecificSubtrait_OptionsTypeOperatorsInput>;
};

export type FilterFindManyTraitTrait_SpecificSubtrait_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTraitUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyTrait_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyWeaponPropertyDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyWeaponPropertyIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyWeaponPropertyInput = {
  AND?: Maybe<Array<FilterFindManyWeaponPropertyInput>>;
  OR?: Maybe<Array<FilterFindManyWeaponPropertyInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyWeaponPropertyOperatorsInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindManyWeaponPropertyNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyWeaponPropertyOperatorsInput = {
  _id?: Maybe<FilterFindManyWeaponProperty_IdOperatorsInput>;
  desc?: Maybe<FilterFindManyWeaponPropertyDescOperatorsInput>;
  index?: Maybe<FilterFindManyWeaponPropertyIndexOperatorsInput>;
  name?: Maybe<FilterFindManyWeaponPropertyNameOperatorsInput>;
  url?: Maybe<FilterFindManyWeaponPropertyUrlOperatorsInput>;
};

export type FilterFindManyWeaponPropertyUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyWeaponProperty_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAbilityScoreDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAbilityScoreFull_NameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAbilityScoreIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAbilityScoreInput = {
  AND?: Maybe<Array<FilterFindOneAbilityScoreInput>>;
  OR?: Maybe<Array<FilterFindOneAbilityScoreInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneAbilityScoreOperatorsInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  full_name?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<FilterFindOneAbilityScoreSkillsInput>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneAbilityScoreNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneAbilityScoreOperatorsInput = {
  _id?: Maybe<FilterFindOneAbilityScore_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneAbilityScoreDescOperatorsInput>;
  full_name?: Maybe<FilterFindOneAbilityScoreFull_NameOperatorsInput>;
  index?: Maybe<FilterFindOneAbilityScoreIndexOperatorsInput>;
  name?: Maybe<FilterFindOneAbilityScoreNameOperatorsInput>;
  url?: Maybe<FilterFindOneAbilityScoreUrlOperatorsInput>;
};

export type FilterFindOneAbilityScoreSkillsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneAbilityScoreUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAbilityScore_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAlignmentAbbreviationOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAlignmentDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAlignmentIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAlignmentInput = {
  AND?: Maybe<Array<FilterFindOneAlignmentInput>>;
  OR?: Maybe<Array<FilterFindOneAlignmentInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneAlignmentOperatorsInput>;
  abbreviation?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneAlignmentNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneAlignmentOperatorsInput = {
  _id?: Maybe<FilterFindOneAlignment_IdOperatorsInput>;
  abbreviation?: Maybe<FilterFindOneAlignmentAbbreviationOperatorsInput>;
  desc?: Maybe<FilterFindOneAlignmentDescOperatorsInput>;
  index?: Maybe<FilterFindOneAlignmentIndexOperatorsInput>;
  name?: Maybe<FilterFindOneAlignmentNameOperatorsInput>;
  url?: Maybe<FilterFindOneAlignmentUrlOperatorsInput>;
};

export type FilterFindOneAlignmentUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneAlignment_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundBondsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneBackgroundBondsFromOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundBondsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundBondsOperatorsInput = {
  choose?: Maybe<FilterFindOneBackgroundBondsChooseOperatorsInput>;
  from?: Maybe<FilterFindOneBackgroundBondsFromOperatorsInput>;
  type?: Maybe<FilterFindOneBackgroundBondsTypeOperatorsInput>;
};

export type FilterFindOneBackgroundBondsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundFeatureDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundFeatureInput = {
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundFeatureNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundFeatureOperatorsInput = {
  desc?: Maybe<FilterFindOneBackgroundFeatureDescOperatorsInput>;
  name?: Maybe<FilterFindOneBackgroundFeatureNameOperatorsInput>;
};

export type FilterFindOneBackgroundFlawsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneBackgroundFlawsFromOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundFlawsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundFlawsOperatorsInput = {
  choose?: Maybe<FilterFindOneBackgroundFlawsChooseOperatorsInput>;
  from?: Maybe<FilterFindOneBackgroundFlawsFromOperatorsInput>;
  type?: Maybe<FilterFindOneBackgroundFlawsTypeOperatorsInput>;
};

export type FilterFindOneBackgroundFlawsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundIdealsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneBackgroundIdealsFromAlignmentsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundIdealsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  alignments?: Maybe<Array<Maybe<FilterFindOneBackgroundIdealsFromAlignmentsInput>>>;
  desc?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundIdealsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneBackgroundIdealsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundIdealsOperatorsInput = {
  choose?: Maybe<FilterFindOneBackgroundIdealsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneBackgroundIdealsTypeOperatorsInput>;
};

export type FilterFindOneBackgroundIdealsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundInput = {
  AND?: Maybe<Array<FilterFindOneBackgroundInput>>;
  OR?: Maybe<Array<FilterFindOneBackgroundInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneBackgroundOperatorsInput>;
  bonds?: Maybe<FilterFindOneBackgroundBondsInput>;
  feature?: Maybe<FilterFindOneBackgroundFeatureInput>;
  flaws?: Maybe<FilterFindOneBackgroundFlawsInput>;
  ideals?: Maybe<FilterFindOneBackgroundIdealsInput>;
  index?: Maybe<Scalars['String']>;
  language_options?: Maybe<FilterFindOneBackgroundLanguage_OptionsInput>;
  name?: Maybe<Scalars['String']>;
  personality_traits?: Maybe<FilterFindOneBackgroundPersonality_TraitsInput>;
  starting_equipment?: Maybe<Array<Maybe<FilterFindOneBackgroundStarting_EquipmentInput>>>;
  starting_equipment_options?: Maybe<Array<Maybe<FilterFindOneBackgroundStarting_Equipment_OptionsInput>>>;
  starting_proficiencies?: Maybe<Array<Maybe<FilterFindOneBackgroundStarting_ProficienciesInput>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundLanguage_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneBackgroundLanguage_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundLanguage_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneBackgroundLanguage_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundLanguage_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneBackgroundLanguage_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneBackgroundLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindOneBackgroundLanguage_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneBackgroundOperatorsInput = {
  _id?: Maybe<FilterFindOneBackground_IdOperatorsInput>;
  bonds?: Maybe<FilterFindOneBackgroundBondsOperatorsInput>;
  feature?: Maybe<FilterFindOneBackgroundFeatureOperatorsInput>;
  flaws?: Maybe<FilterFindOneBackgroundFlawsOperatorsInput>;
  ideals?: Maybe<FilterFindOneBackgroundIdealsOperatorsInput>;
  index?: Maybe<FilterFindOneBackgroundIndexOperatorsInput>;
  language_options?: Maybe<FilterFindOneBackgroundLanguage_OptionsOperatorsInput>;
  name?: Maybe<FilterFindOneBackgroundNameOperatorsInput>;
  personality_traits?: Maybe<FilterFindOneBackgroundPersonality_TraitsOperatorsInput>;
  url?: Maybe<FilterFindOneBackgroundUrlOperatorsInput>;
};

export type FilterFindOneBackgroundPersonality_TraitsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneBackgroundPersonality_TraitsFromOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundPersonality_TraitsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundPersonality_TraitsOperatorsInput = {
  choose?: Maybe<FilterFindOneBackgroundPersonality_TraitsChooseOperatorsInput>;
  from?: Maybe<FilterFindOneBackgroundPersonality_TraitsFromOperatorsInput>;
  type?: Maybe<FilterFindOneBackgroundPersonality_TraitsTypeOperatorsInput>;
};

export type FilterFindOneBackgroundPersonality_TraitsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackgroundStarting_EquipmentEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundStarting_EquipmentInput = {
  equipment?: Maybe<FilterFindOneBackgroundStarting_EquipmentEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
};

export type FilterFindOneBackgroundStarting_Equipment_OptionsFromEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundStarting_Equipment_OptionsFromInput = {
  equipment?: Maybe<FilterFindOneBackgroundStarting_Equipment_OptionsFromEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
};

export type FilterFindOneBackgroundStarting_Equipment_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneBackgroundStarting_Equipment_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundStarting_ProficienciesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneBackgroundUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneBackground_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClassClass_LevelsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClassHit_DieOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneClassIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClassInput = {
  AND?: Maybe<Array<FilterFindOneClassInput>>;
  OR?: Maybe<Array<FilterFindOneClassInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneClassOperatorsInput>;
  class_levels?: Maybe<Scalars['String']>;
  hit_die?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['String']>;
  multi_classing?: Maybe<FilterFindOneClassMulti_ClassingInput>;
  name?: Maybe<Scalars['String']>;
  proficiencies?: Maybe<Array<Maybe<FilterFindOneClassProficienciesInput>>>;
  proficiency_choices?: Maybe<Array<Maybe<FilterFindOneClassProficiency_ChoicesInput>>>;
  saving_throws?: Maybe<Array<Maybe<FilterFindOneClassSaving_ThrowsInput>>>;
  spellcasting?: Maybe<FilterFindOneClassSpellcastingInput>;
  spells?: Maybe<Scalars['String']>;
  starting_equipment?: Maybe<Array<Maybe<FilterFindOneClassStarting_EquipmentInput>>>;
  starting_equipment_options?: Maybe<Array<Maybe<FilterFindOneClassStarting_Equipment_OptionsInput>>>;
  subclasses?: Maybe<Array<Maybe<FilterFindOneClassSubclassesInput>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassMulti_ClassingInput = {
  prerequisite_options?: Maybe<FilterFindOneClassMulti_ClassingPrerequisite_OptionsInput>;
  prerequisites?: Maybe<Array<Maybe<FilterFindOneClassMulti_ClassingPrerequisitesInput>>>;
  proficiencies?: Maybe<Array<Maybe<FilterFindOneClassMulti_ClassingProficienciesInput>>>;
  proficiency_choices?: Maybe<Array<Maybe<FilterFindOneClassMulti_ClassingProficiency_ChoicesInput>>>;
};

export type FilterFindOneClassMulti_ClassingOperatorsInput = {
  prerequisite_options?: Maybe<FilterFindOneClassMulti_ClassingPrerequisite_OptionsOperatorsInput>;
};

export type FilterFindOneClassMulti_ClassingPrerequisite_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneClassMulti_ClassingPrerequisite_OptionsFromAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassMulti_ClassingPrerequisite_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<FilterFindOneClassMulti_ClassingPrerequisite_OptionsFromAbility_ScoreInput>;
  minimum_score?: Maybe<Scalars['Float']>;
};

export type FilterFindOneClassMulti_ClassingPrerequisite_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneClassMulti_ClassingPrerequisite_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassMulti_ClassingPrerequisite_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneClassMulti_ClassingPrerequisite_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneClassMulti_ClassingPrerequisite_OptionsTypeOperatorsInput>;
};

export type FilterFindOneClassMulti_ClassingPrerequisite_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClassMulti_ClassingPrerequisitesAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassMulti_ClassingPrerequisitesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<FilterFindOneClassMulti_ClassingPrerequisitesAbility_ScoreInput>;
  minimum_score?: Maybe<Scalars['Float']>;
};

export type FilterFindOneClassMulti_ClassingProficienciesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassMulti_ClassingProficiency_ChoicesFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassMulti_ClassingProficiency_ChoicesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneClassMulti_ClassingProficiency_ChoicesFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneClassOperatorsInput = {
  _id?: Maybe<FilterFindOneClass_IdOperatorsInput>;
  class_levels?: Maybe<FilterFindOneClassClass_LevelsOperatorsInput>;
  hit_die?: Maybe<FilterFindOneClassHit_DieOperatorsInput>;
  index?: Maybe<FilterFindOneClassIndexOperatorsInput>;
  multi_classing?: Maybe<FilterFindOneClassMulti_ClassingOperatorsInput>;
  name?: Maybe<FilterFindOneClassNameOperatorsInput>;
  spellcasting?: Maybe<FilterFindOneClassSpellcastingOperatorsInput>;
  spells?: Maybe<FilterFindOneClassSpellsOperatorsInput>;
  url?: Maybe<FilterFindOneClassUrlOperatorsInput>;
};

export type FilterFindOneClassProficienciesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassProficiency_ChoicesFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassProficiency_ChoicesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneClassProficiency_ChoicesFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassSaving_ThrowsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassSpellcastingInfoInput = {
  _id?: Maybe<Scalars['MongoID']>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassSpellcastingInput = {
  info?: Maybe<Array<Maybe<FilterFindOneClassSpellcastingInfoInput>>>;
  level?: Maybe<Scalars['Float']>;
  spellcasting_ability?: Maybe<FilterFindOneClassSpellcastingSpellcasting_AbilityInput>;
};

export type FilterFindOneClassSpellcastingLevelOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneClassSpellcastingOperatorsInput = {
  level?: Maybe<FilterFindOneClassSpellcastingLevelOperatorsInput>;
  spellcasting_ability?: Maybe<FilterFindOneClassSpellcastingSpellcasting_AbilityOperatorsInput>;
};

export type FilterFindOneClassSpellcastingSpellcasting_AbilityIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClassSpellcastingSpellcasting_AbilityInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassSpellcastingSpellcasting_AbilityNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClassSpellcastingSpellcasting_AbilityOperatorsInput = {
  index?: Maybe<FilterFindOneClassSpellcastingSpellcasting_AbilityIndexOperatorsInput>;
  name?: Maybe<FilterFindOneClassSpellcastingSpellcasting_AbilityNameOperatorsInput>;
  url?: Maybe<FilterFindOneClassSpellcastingSpellcasting_AbilityUrlOperatorsInput>;
};

export type FilterFindOneClassSpellcastingSpellcasting_AbilityUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClassSpellsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClassStarting_EquipmentEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassStarting_EquipmentInput = {
  _id?: Maybe<Scalars['MongoID']>;
  equipment?: Maybe<FilterFindOneClassStarting_EquipmentEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
};

export type FilterFindOneClassStarting_Equipment_OptionsFromEquipmentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassStarting_Equipment_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  equipment?: Maybe<FilterFindOneClassStarting_Equipment_OptionsFromEquipmentInput>;
  quantity?: Maybe<Scalars['Float']>;
};

export type FilterFindOneClassStarting_Equipment_OptionsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneClassStarting_Equipment_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassSubclassesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneClassUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneClass_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneConditionDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneConditionIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneConditionInput = {
  AND?: Maybe<Array<FilterFindOneConditionInput>>;
  OR?: Maybe<Array<FilterFindOneConditionInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneConditionOperatorsInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneConditionNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneConditionOperatorsInput = {
  _id?: Maybe<FilterFindOneCondition_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneConditionDescOperatorsInput>;
  index?: Maybe<FilterFindOneConditionIndexOperatorsInput>;
  name?: Maybe<FilterFindOneConditionNameOperatorsInput>;
  url?: Maybe<FilterFindOneConditionUrlOperatorsInput>;
};

export type FilterFindOneConditionUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneCondition_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneDamageTypeDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneDamageTypeIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneDamageTypeInput = {
  AND?: Maybe<Array<FilterFindOneDamageTypeInput>>;
  OR?: Maybe<Array<FilterFindOneDamageTypeInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneDamageTypeOperatorsInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneDamageTypeNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneDamageTypeOperatorsInput = {
  _id?: Maybe<FilterFindOneDamageType_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneDamageTypeDescOperatorsInput>;
  index?: Maybe<FilterFindOneDamageTypeIndexOperatorsInput>;
  name?: Maybe<FilterFindOneDamageTypeNameOperatorsInput>;
  url?: Maybe<FilterFindOneDamageTypeUrlOperatorsInput>;
};

export type FilterFindOneDamageTypeUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneDamageType_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentArmor_CategoryOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentArmor_ClassBaseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentArmor_ClassDex_BonusOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FilterFindOneEquipmentArmor_ClassInput = {
  base?: Maybe<Scalars['Float']>;
  dex_bonus?: Maybe<Scalars['Boolean']>;
  max_bonus?: Maybe<Scalars['Float']>;
};

export type FilterFindOneEquipmentArmor_ClassMax_BonusOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentArmor_ClassOperatorsInput = {
  base?: Maybe<FilterFindOneEquipmentArmor_ClassBaseOperatorsInput>;
  dex_bonus?: Maybe<FilterFindOneEquipmentArmor_ClassDex_BonusOperatorsInput>;
  max_bonus?: Maybe<FilterFindOneEquipmentArmor_ClassMax_BonusOperatorsInput>;
};

export type FilterFindOneEquipmentCapacityOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentCategoryEquipmentInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentCategoryIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentCategoryInput = {
  AND?: Maybe<Array<FilterFindOneEquipmentCategoryInput>>;
  OR?: Maybe<Array<FilterFindOneEquipmentCategoryInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneEquipmentCategoryOperatorsInput>;
  equipment?: Maybe<Array<Maybe<FilterFindOneEquipmentCategoryEquipmentInput>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentCategoryNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneEquipmentCategoryOperatorsInput = {
  _id?: Maybe<FilterFindOneEquipmentCategory_IdOperatorsInput>;
  index?: Maybe<FilterFindOneEquipmentCategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindOneEquipmentCategoryNameOperatorsInput>;
  url?: Maybe<FilterFindOneEquipmentCategoryUrlOperatorsInput>;
};

export type FilterFindOneEquipmentCategoryUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentCategory_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentCategory_RangeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentContentsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  item?: Maybe<FilterFindOneEquipmentContentsItemInput>;
  quantity?: Maybe<Scalars['Float']>;
};

export type FilterFindOneEquipmentContentsItemInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentCostInput = {
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentCostOperatorsInput = {
  quantity?: Maybe<FilterFindOneEquipmentCostQuantityOperatorsInput>;
  unit?: Maybe<FilterFindOneEquipmentCostUnitOperatorsInput>;
};

export type FilterFindOneEquipmentCostQuantityOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentCostUnitOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentDamageDamage_DiceOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentDamageDamage_TypeIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentDamageDamage_TypeNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentDamageDamage_TypeOperatorsInput = {
  index?: Maybe<FilterFindOneEquipmentDamageDamage_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindOneEquipmentDamageDamage_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindOneEquipmentDamageDamage_TypeUrlOperatorsInput>;
};

export type FilterFindOneEquipmentDamageDamage_TypeUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentDamageInput = {
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<FilterFindOneEquipmentDamageDamage_TypeInput>;
};

export type FilterFindOneEquipmentDamageOperatorsInput = {
  damage_dice?: Maybe<FilterFindOneEquipmentDamageDamage_DiceOperatorsInput>;
  damage_type?: Maybe<FilterFindOneEquipmentDamageDamage_TypeOperatorsInput>;
};

export type FilterFindOneEquipmentDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentEquipment_CategoryIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentEquipment_CategoryInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentEquipment_CategoryNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentEquipment_CategoryOperatorsInput = {
  index?: Maybe<FilterFindOneEquipmentEquipment_CategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindOneEquipmentEquipment_CategoryNameOperatorsInput>;
  url?: Maybe<FilterFindOneEquipmentEquipment_CategoryUrlOperatorsInput>;
};

export type FilterFindOneEquipmentEquipment_CategoryUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentGear_CategoryIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentGear_CategoryInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentGear_CategoryNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentGear_CategoryOperatorsInput = {
  index?: Maybe<FilterFindOneEquipmentGear_CategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindOneEquipmentGear_CategoryNameOperatorsInput>;
  url?: Maybe<FilterFindOneEquipmentGear_CategoryUrlOperatorsInput>;
};

export type FilterFindOneEquipmentGear_CategoryUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentInput = {
  AND?: Maybe<Array<FilterFindOneEquipmentInput>>;
  OR?: Maybe<Array<FilterFindOneEquipmentInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneEquipmentOperatorsInput>;
  armor_category?: Maybe<Scalars['String']>;
  armor_class?: Maybe<FilterFindOneEquipmentArmor_ClassInput>;
  capacity?: Maybe<Scalars['String']>;
  category_range?: Maybe<Scalars['String']>;
  contents?: Maybe<Array<Maybe<FilterFindOneEquipmentContentsInput>>>;
  cost?: Maybe<FilterFindOneEquipmentCostInput>;
  damage?: Maybe<FilterFindOneEquipmentDamageInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipment_category?: Maybe<FilterFindOneEquipmentEquipment_CategoryInput>;
  gear_category?: Maybe<FilterFindOneEquipmentGear_CategoryInput>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<Maybe<FilterFindOneEquipmentPropertiesInput>>>;
  quantity?: Maybe<Scalars['Float']>;
  range?: Maybe<FilterFindOneEquipmentRangeInput>;
  special?: Maybe<Array<Maybe<Scalars['String']>>>;
  speed?: Maybe<FilterFindOneEquipmentSpeedInput>;
  stealth_disadvantage?: Maybe<Scalars['Boolean']>;
  str_minimum?: Maybe<Scalars['Float']>;
  throw_range?: Maybe<FilterFindOneEquipmentThrow_RangeInput>;
  tool_category?: Maybe<Scalars['String']>;
  two_handed_damage?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageInput>;
  url?: Maybe<Scalars['String']>;
  vehicle_category?: Maybe<Scalars['String']>;
  weapon_category?: Maybe<Scalars['String']>;
  weapon_range?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
};

export type FilterFindOneEquipmentNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneEquipmentOperatorsInput = {
  _id?: Maybe<FilterFindOneEquipment_IdOperatorsInput>;
  armor_category?: Maybe<FilterFindOneEquipmentArmor_CategoryOperatorsInput>;
  armor_class?: Maybe<FilterFindOneEquipmentArmor_ClassOperatorsInput>;
  capacity?: Maybe<FilterFindOneEquipmentCapacityOperatorsInput>;
  category_range?: Maybe<FilterFindOneEquipmentCategory_RangeOperatorsInput>;
  cost?: Maybe<FilterFindOneEquipmentCostOperatorsInput>;
  damage?: Maybe<FilterFindOneEquipmentDamageOperatorsInput>;
  desc?: Maybe<FilterFindOneEquipmentDescOperatorsInput>;
  equipment_category?: Maybe<FilterFindOneEquipmentEquipment_CategoryOperatorsInput>;
  gear_category?: Maybe<FilterFindOneEquipmentGear_CategoryOperatorsInput>;
  index?: Maybe<FilterFindOneEquipmentIndexOperatorsInput>;
  name?: Maybe<FilterFindOneEquipmentNameOperatorsInput>;
  quantity?: Maybe<FilterFindOneEquipmentQuantityOperatorsInput>;
  range?: Maybe<FilterFindOneEquipmentRangeOperatorsInput>;
  special?: Maybe<FilterFindOneEquipmentSpecialOperatorsInput>;
  speed?: Maybe<FilterFindOneEquipmentSpeedOperatorsInput>;
  stealth_disadvantage?: Maybe<FilterFindOneEquipmentStealth_DisadvantageOperatorsInput>;
  str_minimum?: Maybe<FilterFindOneEquipmentStr_MinimumOperatorsInput>;
  throw_range?: Maybe<FilterFindOneEquipmentThrow_RangeOperatorsInput>;
  tool_category?: Maybe<FilterFindOneEquipmentTool_CategoryOperatorsInput>;
  two_handed_damage?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageOperatorsInput>;
  url?: Maybe<FilterFindOneEquipmentUrlOperatorsInput>;
  vehicle_category?: Maybe<FilterFindOneEquipmentVehicle_CategoryOperatorsInput>;
  weapon_category?: Maybe<FilterFindOneEquipmentWeapon_CategoryOperatorsInput>;
  weapon_range?: Maybe<FilterFindOneEquipmentWeapon_RangeOperatorsInput>;
  weight?: Maybe<FilterFindOneEquipmentWeightOperatorsInput>;
};

export type FilterFindOneEquipmentPropertiesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentQuantityOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentRangeInput = {
  long?: Maybe<Scalars['Float']>;
  normal?: Maybe<Scalars['Float']>;
};

export type FilterFindOneEquipmentRangeLongOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentRangeNormalOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentRangeOperatorsInput = {
  long?: Maybe<FilterFindOneEquipmentRangeLongOperatorsInput>;
  normal?: Maybe<FilterFindOneEquipmentRangeNormalOperatorsInput>;
};

export type FilterFindOneEquipmentSpecialOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentSpeedInput = {
  quantity?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentSpeedOperatorsInput = {
  quantity?: Maybe<FilterFindOneEquipmentSpeedQuantityOperatorsInput>;
  unit?: Maybe<FilterFindOneEquipmentSpeedUnitOperatorsInput>;
};

export type FilterFindOneEquipmentSpeedQuantityOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentSpeedUnitOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentStealth_DisadvantageOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FilterFindOneEquipmentStr_MinimumOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentThrow_RangeInput = {
  long?: Maybe<Scalars['Float']>;
  normal?: Maybe<Scalars['Float']>;
};

export type FilterFindOneEquipmentThrow_RangeLongOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentThrow_RangeNormalOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipmentThrow_RangeOperatorsInput = {
  long?: Maybe<FilterFindOneEquipmentThrow_RangeLongOperatorsInput>;
  normal?: Maybe<FilterFindOneEquipmentThrow_RangeNormalOperatorsInput>;
};

export type FilterFindOneEquipmentTool_CategoryOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_DiceOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeOperatorsInput = {
  index?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeUrlOperatorsInput>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageInput = {
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeInput>;
};

export type FilterFindOneEquipmentTwo_Handed_DamageOperatorsInput = {
  damage_dice?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_DiceOperatorsInput>;
  damage_type?: Maybe<FilterFindOneEquipmentTwo_Handed_DamageDamage_TypeOperatorsInput>;
};

export type FilterFindOneEquipmentUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentVehicle_CategoryOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentWeapon_CategoryOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentWeapon_RangeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneEquipmentWeightOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneEquipment_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatInput = {
  AND?: Maybe<Array<FilterFindOneFeatInput>>;
  OR?: Maybe<Array<FilterFindOneFeatInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneFeatOperatorsInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prerequisites?: Maybe<Array<Maybe<FilterFindOneFeatPrerequisitesInput>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneFeatOperatorsInput = {
  _id?: Maybe<FilterFindOneFeat_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneFeatDescOperatorsInput>;
  index?: Maybe<FilterFindOneFeatIndexOperatorsInput>;
  name?: Maybe<FilterFindOneFeatNameOperatorsInput>;
  url?: Maybe<FilterFindOneFeatUrlOperatorsInput>;
};

export type FilterFindOneFeatPrerequisitesAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatPrerequisitesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<FilterFindOneFeatPrerequisitesAbility_ScoreInput>;
  minimum_score?: Maybe<Scalars['Float']>;
};

export type FilterFindOneFeatUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeat_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureChoiceChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneFeatureChoiceFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureChoiceInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneFeatureChoiceFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureChoiceOperatorsInput = {
  choose?: Maybe<FilterFindOneFeatureChoiceChooseOperatorsInput>;
  type?: Maybe<FilterFindOneFeatureChoiceTypeOperatorsInput>;
};

export type FilterFindOneFeatureChoiceTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureClassIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureClassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureClassNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureClassOperatorsInput = {
  index?: Maybe<FilterFindOneFeatureClassIndexOperatorsInput>;
  name?: Maybe<FilterFindOneFeatureClassNameOperatorsInput>;
  url?: Maybe<FilterFindOneFeatureClassUrlOperatorsInput>;
};

export type FilterFindOneFeatureClassUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureFeature_SpecificExpertise_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneFeatureFeature_SpecificExpertise_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureFeature_SpecificExpertise_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneFeatureFeature_SpecificExpertise_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureFeature_SpecificExpertise_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneFeatureFeature_SpecificExpertise_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneFeatureFeature_SpecificExpertise_OptionsTypeOperatorsInput>;
};

export type FilterFindOneFeatureFeature_SpecificExpertise_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureFeature_SpecificInput = {
  expertise_options?: Maybe<FilterFindOneFeatureFeature_SpecificExpertise_OptionsInput>;
  subfeature_options?: Maybe<FilterFindOneFeatureFeature_SpecificSubfeature_OptionsInput>;
};

export type FilterFindOneFeatureFeature_SpecificOperatorsInput = {
  expertise_options?: Maybe<FilterFindOneFeatureFeature_SpecificExpertise_OptionsOperatorsInput>;
  subfeature_options?: Maybe<FilterFindOneFeatureFeature_SpecificSubfeature_OptionsOperatorsInput>;
};

export type FilterFindOneFeatureFeature_SpecificSubfeature_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneFeatureFeature_SpecificSubfeature_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureFeature_SpecificSubfeature_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneFeatureFeature_SpecificSubfeature_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureFeature_SpecificSubfeature_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneFeatureFeature_SpecificSubfeature_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneFeatureFeature_SpecificSubfeature_OptionsTypeOperatorsInput>;
};

export type FilterFindOneFeatureFeature_SpecificSubfeature_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureInput = {
  AND?: Maybe<Array<FilterFindOneFeatureInput>>;
  OR?: Maybe<Array<FilterFindOneFeatureInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneFeatureOperatorsInput>;
  choice?: Maybe<FilterFindOneFeatureChoiceInput>;
  class?: Maybe<FilterFindOneFeatureClassInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  feature_specific?: Maybe<FilterFindOneFeatureFeature_SpecificInput>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<FilterFindOneFeatureParentInput>;
  prerequisites?: Maybe<Array<Maybe<FilterFindOneFeaturePrerequisitesInput>>>;
  reference?: Maybe<Scalars['String']>;
  subclass?: Maybe<FilterFindOneFeatureSubclassInput>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureLevelOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneFeatureNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneFeatureOperatorsInput = {
  _id?: Maybe<FilterFindOneFeature_IdOperatorsInput>;
  choice?: Maybe<FilterFindOneFeatureChoiceOperatorsInput>;
  class?: Maybe<FilterFindOneFeatureClassOperatorsInput>;
  desc?: Maybe<FilterFindOneFeatureDescOperatorsInput>;
  feature_specific?: Maybe<FilterFindOneFeatureFeature_SpecificOperatorsInput>;
  index?: Maybe<FilterFindOneFeatureIndexOperatorsInput>;
  level?: Maybe<FilterFindOneFeatureLevelOperatorsInput>;
  name?: Maybe<FilterFindOneFeatureNameOperatorsInput>;
  parent?: Maybe<FilterFindOneFeatureParentOperatorsInput>;
  reference?: Maybe<FilterFindOneFeatureReferenceOperatorsInput>;
  subclass?: Maybe<FilterFindOneFeatureSubclassOperatorsInput>;
  url?: Maybe<FilterFindOneFeatureUrlOperatorsInput>;
};

export type FilterFindOneFeatureParentIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureParentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureParentNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureParentOperatorsInput = {
  index?: Maybe<FilterFindOneFeatureParentIndexOperatorsInput>;
  name?: Maybe<FilterFindOneFeatureParentNameOperatorsInput>;
  url?: Maybe<FilterFindOneFeatureParentUrlOperatorsInput>;
};

export type FilterFindOneFeatureParentUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeaturePrerequisitesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  level?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureReferenceOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureSubclassIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureSubclassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneFeatureSubclassNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureSubclassOperatorsInput = {
  index?: Maybe<FilterFindOneFeatureSubclassIndexOperatorsInput>;
  name?: Maybe<FilterFindOneFeatureSubclassNameOperatorsInput>;
  url?: Maybe<FilterFindOneFeatureSubclassUrlOperatorsInput>;
};

export type FilterFindOneFeatureSubclassUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeatureUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneFeature_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLanguageDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLanguageIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLanguageInput = {
  AND?: Maybe<Array<FilterFindOneLanguageInput>>;
  OR?: Maybe<Array<FilterFindOneLanguageInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneLanguageOperatorsInput>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  script?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typical_speakers?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneLanguageNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneLanguageOperatorsInput = {
  _id?: Maybe<FilterFindOneLanguage_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneLanguageDescOperatorsInput>;
  index?: Maybe<FilterFindOneLanguageIndexOperatorsInput>;
  name?: Maybe<FilterFindOneLanguageNameOperatorsInput>;
  script?: Maybe<FilterFindOneLanguageScriptOperatorsInput>;
  type?: Maybe<FilterFindOneLanguageTypeOperatorsInput>;
  typical_speakers?: Maybe<FilterFindOneLanguageTypical_SpeakersOperatorsInput>;
  url?: Maybe<FilterFindOneLanguageUrlOperatorsInput>;
};

export type FilterFindOneLanguageScriptOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLanguageTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLanguageTypical_SpeakersOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLanguageUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLanguage_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelAbility_Score_BonusesOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClassIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelClassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneLevelClassNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelClassOperatorsInput = {
  index?: Maybe<FilterFindOneLevelClassIndexOperatorsInput>;
  name?: Maybe<FilterFindOneLevelClassNameOperatorsInput>;
  url?: Maybe<FilterFindOneLevelClassUrlOperatorsInput>;
};

export type FilterFindOneLevelClassUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelClass_SpecificAction_SurgesOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificArcane_Recovery_LevelsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificAura_RangeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificBardic_Inspiration_DieOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificBrutal_Critical_DiceOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificChannel_Divinity_ChargesOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificCreating_Spell_SlotsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  sorcery_point_cost?: Maybe<Scalars['Float']>;
  spell_slot_level?: Maybe<Scalars['Float']>;
};

export type FilterFindOneLevelClass_SpecificDestroy_Undead_CrOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificExtra_AttacksOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificFavored_EnemiesOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificFavored_TerrainOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificIndomitable_UsesOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificInput = {
  action_surges?: Maybe<Scalars['Float']>;
  arcane_recovery_levels?: Maybe<Scalars['Float']>;
  aura_range?: Maybe<Scalars['Float']>;
  bardic_inspiration_die?: Maybe<Scalars['Float']>;
  brutal_critical_dice?: Maybe<Scalars['Float']>;
  channel_divinity_charges?: Maybe<Scalars['Float']>;
  creating_spell_slots?: Maybe<Array<Maybe<FilterFindOneLevelClass_SpecificCreating_Spell_SlotsInput>>>;
  destroy_undead_cr?: Maybe<Scalars['Float']>;
  extra_attacks?: Maybe<Scalars['Float']>;
  favored_enemies?: Maybe<Scalars['Float']>;
  favored_terrain?: Maybe<Scalars['Float']>;
  indomitable_uses?: Maybe<Scalars['Float']>;
  invocations_known?: Maybe<Scalars['Float']>;
  ki_points?: Maybe<Scalars['Float']>;
  magical_secrets_max_5?: Maybe<Scalars['Float']>;
  magical_secrets_max_7?: Maybe<Scalars['Float']>;
  magical_secrets_max_9?: Maybe<Scalars['Float']>;
  martial_arts?: Maybe<FilterFindOneLevelClass_SpecificMartial_ArtsInput>;
  metamagic_known?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_6?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_7?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_8?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_9?: Maybe<Scalars['Float']>;
  rage_count?: Maybe<Scalars['Float']>;
  rage_damage_bonus?: Maybe<Scalars['Float']>;
  sneak_attack?: Maybe<FilterFindOneLevelClass_SpecificSneak_AttackInput>;
  song_of_rest_die?: Maybe<Scalars['Float']>;
  sorcery_points?: Maybe<Scalars['Float']>;
  unarmored_movement?: Maybe<Scalars['Float']>;
  wild_shape_fly?: Maybe<Scalars['Boolean']>;
  wild_shape_max_cr?: Maybe<Scalars['Float']>;
  wild_shape_swim?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneLevelClass_SpecificInvocations_KnownOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificKi_PointsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMagical_Secrets_Max_5OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMagical_Secrets_Max_7OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMagical_Secrets_Max_9OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMartial_ArtsDice_CountOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMartial_ArtsDice_ValueOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMartial_ArtsInput = {
  dice_count?: Maybe<Scalars['Float']>;
  dice_value?: Maybe<Scalars['Float']>;
};

export type FilterFindOneLevelClass_SpecificMartial_ArtsOperatorsInput = {
  dice_count?: Maybe<FilterFindOneLevelClass_SpecificMartial_ArtsDice_CountOperatorsInput>;
  dice_value?: Maybe<FilterFindOneLevelClass_SpecificMartial_ArtsDice_ValueOperatorsInput>;
};

export type FilterFindOneLevelClass_SpecificMetamagic_KnownOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_6OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_7OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_8OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_9OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificOperatorsInput = {
  action_surges?: Maybe<FilterFindOneLevelClass_SpecificAction_SurgesOperatorsInput>;
  arcane_recovery_levels?: Maybe<FilterFindOneLevelClass_SpecificArcane_Recovery_LevelsOperatorsInput>;
  aura_range?: Maybe<FilterFindOneLevelClass_SpecificAura_RangeOperatorsInput>;
  bardic_inspiration_die?: Maybe<FilterFindOneLevelClass_SpecificBardic_Inspiration_DieOperatorsInput>;
  brutal_critical_dice?: Maybe<FilterFindOneLevelClass_SpecificBrutal_Critical_DiceOperatorsInput>;
  channel_divinity_charges?: Maybe<FilterFindOneLevelClass_SpecificChannel_Divinity_ChargesOperatorsInput>;
  destroy_undead_cr?: Maybe<FilterFindOneLevelClass_SpecificDestroy_Undead_CrOperatorsInput>;
  extra_attacks?: Maybe<FilterFindOneLevelClass_SpecificExtra_AttacksOperatorsInput>;
  favored_enemies?: Maybe<FilterFindOneLevelClass_SpecificFavored_EnemiesOperatorsInput>;
  favored_terrain?: Maybe<FilterFindOneLevelClass_SpecificFavored_TerrainOperatorsInput>;
  indomitable_uses?: Maybe<FilterFindOneLevelClass_SpecificIndomitable_UsesOperatorsInput>;
  invocations_known?: Maybe<FilterFindOneLevelClass_SpecificInvocations_KnownOperatorsInput>;
  ki_points?: Maybe<FilterFindOneLevelClass_SpecificKi_PointsOperatorsInput>;
  magical_secrets_max_5?: Maybe<FilterFindOneLevelClass_SpecificMagical_Secrets_Max_5OperatorsInput>;
  magical_secrets_max_7?: Maybe<FilterFindOneLevelClass_SpecificMagical_Secrets_Max_7OperatorsInput>;
  magical_secrets_max_9?: Maybe<FilterFindOneLevelClass_SpecificMagical_Secrets_Max_9OperatorsInput>;
  martial_arts?: Maybe<FilterFindOneLevelClass_SpecificMartial_ArtsOperatorsInput>;
  metamagic_known?: Maybe<FilterFindOneLevelClass_SpecificMetamagic_KnownOperatorsInput>;
  mystic_arcanum_level_6?: Maybe<FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_6OperatorsInput>;
  mystic_arcanum_level_7?: Maybe<FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_7OperatorsInput>;
  mystic_arcanum_level_8?: Maybe<FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_8OperatorsInput>;
  mystic_arcanum_level_9?: Maybe<FilterFindOneLevelClass_SpecificMystic_Arcanum_Level_9OperatorsInput>;
  rage_count?: Maybe<FilterFindOneLevelClass_SpecificRage_CountOperatorsInput>;
  rage_damage_bonus?: Maybe<FilterFindOneLevelClass_SpecificRage_Damage_BonusOperatorsInput>;
  sneak_attack?: Maybe<FilterFindOneLevelClass_SpecificSneak_AttackOperatorsInput>;
  song_of_rest_die?: Maybe<FilterFindOneLevelClass_SpecificSong_Of_Rest_DieOperatorsInput>;
  sorcery_points?: Maybe<FilterFindOneLevelClass_SpecificSorcery_PointsOperatorsInput>;
  unarmored_movement?: Maybe<FilterFindOneLevelClass_SpecificUnarmored_MovementOperatorsInput>;
  wild_shape_fly?: Maybe<FilterFindOneLevelClass_SpecificWild_Shape_FlyOperatorsInput>;
  wild_shape_max_cr?: Maybe<FilterFindOneLevelClass_SpecificWild_Shape_Max_CrOperatorsInput>;
  wild_shape_swim?: Maybe<FilterFindOneLevelClass_SpecificWild_Shape_SwimOperatorsInput>;
};

export type FilterFindOneLevelClass_SpecificRage_CountOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificRage_Damage_BonusOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificSneak_AttackDice_CountOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificSneak_AttackDice_ValueOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificSneak_AttackInput = {
  dice_count?: Maybe<Scalars['Float']>;
  dice_value?: Maybe<Scalars['Float']>;
};

export type FilterFindOneLevelClass_SpecificSneak_AttackOperatorsInput = {
  dice_count?: Maybe<FilterFindOneLevelClass_SpecificSneak_AttackDice_CountOperatorsInput>;
  dice_value?: Maybe<FilterFindOneLevelClass_SpecificSneak_AttackDice_ValueOperatorsInput>;
};

export type FilterFindOneLevelClass_SpecificSong_Of_Rest_DieOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificSorcery_PointsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificUnarmored_MovementOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificWild_Shape_FlyOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FilterFindOneLevelClass_SpecificWild_Shape_Max_CrOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelClass_SpecificWild_Shape_SwimOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FilterFindOneLevelFeaturesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneLevelIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelInput = {
  AND?: Maybe<Array<FilterFindOneLevelInput>>;
  OR?: Maybe<Array<FilterFindOneLevelInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneLevelOperatorsInput>;
  ability_score_bonuses?: Maybe<Scalars['Float']>;
  class?: Maybe<FilterFindOneLevelClassInput>;
  class_specific?: Maybe<FilterFindOneLevelClass_SpecificInput>;
  features?: Maybe<Array<Maybe<FilterFindOneLevelFeaturesInput>>>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  prof_bonus?: Maybe<Scalars['Float']>;
  spellcasting?: Maybe<FilterFindOneLevelSpellcastingInput>;
  subclass?: Maybe<FilterFindOneLevelSubclassInput>;
  subclass_specific?: Maybe<FilterFindOneLevelSubclass_SpecificInput>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneLevelLevelOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneLevelOperatorsInput = {
  _id?: Maybe<FilterFindOneLevel_IdOperatorsInput>;
  ability_score_bonuses?: Maybe<FilterFindOneLevelAbility_Score_BonusesOperatorsInput>;
  class?: Maybe<FilterFindOneLevelClassOperatorsInput>;
  class_specific?: Maybe<FilterFindOneLevelClass_SpecificOperatorsInput>;
  index?: Maybe<FilterFindOneLevelIndexOperatorsInput>;
  level?: Maybe<FilterFindOneLevelLevelOperatorsInput>;
  prof_bonus?: Maybe<FilterFindOneLevelProf_BonusOperatorsInput>;
  spellcasting?: Maybe<FilterFindOneLevelSpellcastingOperatorsInput>;
  subclass?: Maybe<FilterFindOneLevelSubclassOperatorsInput>;
  subclass_specific?: Maybe<FilterFindOneLevelSubclass_SpecificOperatorsInput>;
  url?: Maybe<FilterFindOneLevelUrlOperatorsInput>;
};

export type FilterFindOneLevelProf_BonusOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingCantrips_KnownOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingInput = {
  cantrips_known?: Maybe<Scalars['Float']>;
  spell_slots_level_1?: Maybe<Scalars['Float']>;
  spell_slots_level_2?: Maybe<Scalars['Float']>;
  spell_slots_level_3?: Maybe<Scalars['Float']>;
  spell_slots_level_4?: Maybe<Scalars['Float']>;
  spell_slots_level_5?: Maybe<Scalars['Float']>;
  spell_slots_level_6?: Maybe<Scalars['Float']>;
  spell_slots_level_7?: Maybe<Scalars['Float']>;
  spell_slots_level_8?: Maybe<Scalars['Float']>;
  spell_slots_level_9?: Maybe<Scalars['Float']>;
  spells_known?: Maybe<Scalars['Float']>;
};

export type FilterFindOneLevelSpellcastingOperatorsInput = {
  cantrips_known?: Maybe<FilterFindOneLevelSpellcastingCantrips_KnownOperatorsInput>;
  spell_slots_level_1?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_1OperatorsInput>;
  spell_slots_level_2?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_2OperatorsInput>;
  spell_slots_level_3?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_3OperatorsInput>;
  spell_slots_level_4?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_4OperatorsInput>;
  spell_slots_level_5?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_5OperatorsInput>;
  spell_slots_level_6?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_6OperatorsInput>;
  spell_slots_level_7?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_7OperatorsInput>;
  spell_slots_level_8?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_8OperatorsInput>;
  spell_slots_level_9?: Maybe<FilterFindOneLevelSpellcastingSpell_Slots_Level_9OperatorsInput>;
  spells_known?: Maybe<FilterFindOneLevelSpellcastingSpells_KnownOperatorsInput>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_1OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_2OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_3OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_4OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_5OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_6OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_7OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_8OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpell_Slots_Level_9OperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSpellcastingSpells_KnownOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSubclassIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelSubclassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneLevelSubclassNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelSubclassOperatorsInput = {
  index?: Maybe<FilterFindOneLevelSubclassIndexOperatorsInput>;
  name?: Maybe<FilterFindOneLevelSubclassNameOperatorsInput>;
  url?: Maybe<FilterFindOneLevelSubclassUrlOperatorsInput>;
};

export type FilterFindOneLevelSubclassUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevelSubclass_SpecificAdditional_Magical_Secrets_Max_LvlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSubclass_SpecificAura_RangeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneLevelSubclass_SpecificInput = {
  additional_magical_secrets_max_lvl?: Maybe<Scalars['Float']>;
  aura_range?: Maybe<Scalars['Float']>;
};

export type FilterFindOneLevelSubclass_SpecificOperatorsInput = {
  additional_magical_secrets_max_lvl?: Maybe<FilterFindOneLevelSubclass_SpecificAdditional_Magical_Secrets_Max_LvlOperatorsInput>;
  aura_range?: Maybe<FilterFindOneLevelSubclass_SpecificAura_RangeOperatorsInput>;
};

export type FilterFindOneLevelUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneLevel_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicItemDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicItemEquipment_CategoryIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicItemEquipment_CategoryInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneMagicItemEquipment_CategoryNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicItemEquipment_CategoryOperatorsInput = {
  index?: Maybe<FilterFindOneMagicItemEquipment_CategoryIndexOperatorsInput>;
  name?: Maybe<FilterFindOneMagicItemEquipment_CategoryNameOperatorsInput>;
  url?: Maybe<FilterFindOneMagicItemEquipment_CategoryUrlOperatorsInput>;
};

export type FilterFindOneMagicItemEquipment_CategoryUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicItemIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicItemInput = {
  AND?: Maybe<Array<FilterFindOneMagicItemInput>>;
  OR?: Maybe<Array<FilterFindOneMagicItemInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneMagicItemOperatorsInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipment_category?: Maybe<FilterFindOneMagicItemEquipment_CategoryInput>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneMagicItemNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneMagicItemOperatorsInput = {
  _id?: Maybe<FilterFindOneMagicItem_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneMagicItemDescOperatorsInput>;
  equipment_category?: Maybe<FilterFindOneMagicItemEquipment_CategoryOperatorsInput>;
  index?: Maybe<FilterFindOneMagicItemIndexOperatorsInput>;
  name?: Maybe<FilterFindOneMagicItemNameOperatorsInput>;
  url?: Maybe<FilterFindOneMagicItemUrlOperatorsInput>;
};

export type FilterFindOneMagicItemUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicItem_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicSchoolDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicSchoolIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicSchoolInput = {
  AND?: Maybe<Array<FilterFindOneMagicSchoolInput>>;
  OR?: Maybe<Array<FilterFindOneMagicSchoolInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneMagicSchoolOperatorsInput>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneMagicSchoolNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneMagicSchoolOperatorsInput = {
  _id?: Maybe<FilterFindOneMagicSchool_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneMagicSchoolDescOperatorsInput>;
  index?: Maybe<FilterFindOneMagicSchoolIndexOperatorsInput>;
  name?: Maybe<FilterFindOneMagicSchoolNameOperatorsInput>;
  url?: Maybe<FilterFindOneMagicSchoolUrlOperatorsInput>;
};

export type FilterFindOneMagicSchoolUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMagicSchool_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterActionsDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneMonsterActionsDamageInput = {
  _id?: Maybe<Scalars['MongoID']>;
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<FilterFindOneMonsterActionsDamageDamage_TypeInput>;
};

export type FilterFindOneMonsterActionsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  attack_bonus?: Maybe<Scalars['Float']>;
  damage?: Maybe<Array<Maybe<FilterFindOneMonsterActionsDamageInput>>>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FilterFindOneMonsterAlignmentOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterArmor_ClassOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterChallenge_RatingOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterCharismaOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterCondition_ImmunitiesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneMonsterConstitutionOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterDexterityOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterFormsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneMonsterHit_DiceOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterHit_PointsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterInput = {
  AND?: Maybe<Array<FilterFindOneMonsterInput>>;
  OR?: Maybe<Array<FilterFindOneMonsterInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneMonsterOperatorsInput>;
  actions?: Maybe<Array<Maybe<FilterFindOneMonsterActionsInput>>>;
  alignment?: Maybe<Scalars['String']>;
  armor_class?: Maybe<Scalars['Float']>;
  challenge_rating?: Maybe<Scalars['Float']>;
  charisma?: Maybe<Scalars['Float']>;
  condition_immunities?: Maybe<Array<Maybe<FilterFindOneMonsterCondition_ImmunitiesInput>>>;
  constitution?: Maybe<Scalars['Float']>;
  damage_immunities?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_resistances?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_vulnerabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  dexterity?: Maybe<Scalars['Float']>;
  forms?: Maybe<Array<Maybe<FilterFindOneMonsterFormsInput>>>;
  hit_dice?: Maybe<Scalars['String']>;
  hit_points?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['String']>;
  intelligence?: Maybe<Scalars['Float']>;
  languages?: Maybe<Scalars['String']>;
  legendary_actions?: Maybe<Array<Maybe<FilterFindOneMonsterLegendary_ActionsInput>>>;
  name?: Maybe<Scalars['String']>;
  proficiencies?: Maybe<Array<Maybe<FilterFindOneMonsterProficienciesInput>>>;
  reactions?: Maybe<Array<Maybe<FilterFindOneMonsterReactionsInput>>>;
  senses?: Maybe<FilterFindOneMonsterSensesInput>;
  size?: Maybe<Scalars['String']>;
  special_abilities?: Maybe<Array<Maybe<FilterFindOneMonsterSpecial_AbilitiesInput>>>;
  speed?: Maybe<FilterFindOneMonsterSpeedInput>;
  strength?: Maybe<Scalars['Float']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  wisdom?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

export type FilterFindOneMonsterIntelligenceOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterLanguagesOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterLegendary_ActionsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  attack_bonus?: Maybe<Scalars['Float']>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FilterFindOneMonsterNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneMonsterOperatorsInput = {
  _id?: Maybe<FilterFindOneMonster_IdOperatorsInput>;
  alignment?: Maybe<FilterFindOneMonsterAlignmentOperatorsInput>;
  armor_class?: Maybe<FilterFindOneMonsterArmor_ClassOperatorsInput>;
  challenge_rating?: Maybe<FilterFindOneMonsterChallenge_RatingOperatorsInput>;
  charisma?: Maybe<FilterFindOneMonsterCharismaOperatorsInput>;
  constitution?: Maybe<FilterFindOneMonsterConstitutionOperatorsInput>;
  dexterity?: Maybe<FilterFindOneMonsterDexterityOperatorsInput>;
  hit_dice?: Maybe<FilterFindOneMonsterHit_DiceOperatorsInput>;
  hit_points?: Maybe<FilterFindOneMonsterHit_PointsOperatorsInput>;
  index?: Maybe<FilterFindOneMonsterIndexOperatorsInput>;
  intelligence?: Maybe<FilterFindOneMonsterIntelligenceOperatorsInput>;
  languages?: Maybe<FilterFindOneMonsterLanguagesOperatorsInput>;
  name?: Maybe<FilterFindOneMonsterNameOperatorsInput>;
  senses?: Maybe<FilterFindOneMonsterSensesOperatorsInput>;
  size?: Maybe<FilterFindOneMonsterSizeOperatorsInput>;
  speed?: Maybe<FilterFindOneMonsterSpeedOperatorsInput>;
  strength?: Maybe<FilterFindOneMonsterStrengthOperatorsInput>;
  subtype?: Maybe<FilterFindOneMonsterSubtypeOperatorsInput>;
  type?: Maybe<FilterFindOneMonsterTypeOperatorsInput>;
  url?: Maybe<FilterFindOneMonsterUrlOperatorsInput>;
  wisdom?: Maybe<FilterFindOneMonsterWisdomOperatorsInput>;
  xp?: Maybe<FilterFindOneMonsterXpOperatorsInput>;
};

export type FilterFindOneMonsterProficienciesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  proficiency?: Maybe<FilterFindOneMonsterProficienciesProficiencyInput>;
  value?: Maybe<Scalars['Float']>;
};

export type FilterFindOneMonsterProficienciesProficiencyInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneMonsterReactionsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FilterFindOneMonsterSensesBlindsightOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSensesDarkvisionOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSensesInput = {
  blindsight?: Maybe<Scalars['String']>;
  darkvision?: Maybe<Scalars['String']>;
  passive_perception?: Maybe<Scalars['Float']>;
  tremorsense?: Maybe<Scalars['String']>;
  truesight?: Maybe<Scalars['String']>;
};

export type FilterFindOneMonsterSensesOperatorsInput = {
  blindsight?: Maybe<FilterFindOneMonsterSensesBlindsightOperatorsInput>;
  darkvision?: Maybe<FilterFindOneMonsterSensesDarkvisionOperatorsInput>;
  passive_perception?: Maybe<FilterFindOneMonsterSensesPassive_PerceptionOperatorsInput>;
  tremorsense?: Maybe<FilterFindOneMonsterSensesTremorsenseOperatorsInput>;
  truesight?: Maybe<FilterFindOneMonsterSensesTruesightOperatorsInput>;
};

export type FilterFindOneMonsterSensesPassive_PerceptionOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterSensesTremorsenseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSensesTruesightOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSizeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSpecial_AbilitiesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FilterFindOneMonsterSpeedBurrowOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSpeedClimbOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSpeedFlyOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSpeedHoverOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FilterFindOneMonsterSpeedInput = {
  burrow?: Maybe<Scalars['String']>;
  climb?: Maybe<Scalars['String']>;
  fly?: Maybe<Scalars['String']>;
  hover?: Maybe<Scalars['Boolean']>;
  swim?: Maybe<Scalars['String']>;
  walk?: Maybe<Scalars['String']>;
};

export type FilterFindOneMonsterSpeedOperatorsInput = {
  burrow?: Maybe<FilterFindOneMonsterSpeedBurrowOperatorsInput>;
  climb?: Maybe<FilterFindOneMonsterSpeedClimbOperatorsInput>;
  fly?: Maybe<FilterFindOneMonsterSpeedFlyOperatorsInput>;
  hover?: Maybe<FilterFindOneMonsterSpeedHoverOperatorsInput>;
  swim?: Maybe<FilterFindOneMonsterSpeedSwimOperatorsInput>;
  walk?: Maybe<FilterFindOneMonsterSpeedWalkOperatorsInput>;
};

export type FilterFindOneMonsterSpeedSwimOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterSpeedWalkOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterStrengthOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterSubtypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneMonsterWisdomOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneMonsterXpOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneMonster_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneProficiencyClassesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneProficiencyIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneProficiencyInput = {
  AND?: Maybe<Array<FilterFindOneProficiencyInput>>;
  OR?: Maybe<Array<FilterFindOneProficiencyInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneProficiencyOperatorsInput>;
  classes?: Maybe<Array<Maybe<FilterFindOneProficiencyClassesInput>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  races?: Maybe<Array<Maybe<FilterFindOneProficiencyRacesInput>>>;
  references?: Maybe<Array<Maybe<FilterFindOneProficiencyReferencesInput>>>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneProficiencyNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneProficiencyOperatorsInput = {
  _id?: Maybe<FilterFindOneProficiency_IdOperatorsInput>;
  index?: Maybe<FilterFindOneProficiencyIndexOperatorsInput>;
  name?: Maybe<FilterFindOneProficiencyNameOperatorsInput>;
  type?: Maybe<FilterFindOneProficiencyTypeOperatorsInput>;
  url?: Maybe<FilterFindOneProficiencyUrlOperatorsInput>;
};

export type FilterFindOneProficiencyRacesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneProficiencyReferencesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneProficiencyTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneProficiencyUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneProficiency_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsFromAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<FilterFindOneRaceAbility_Bonus_OptionsFromAbility_ScoreInput>;
  bonus?: Maybe<Scalars['Float']>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneRaceAbility_Bonus_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneRaceAbility_Bonus_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneRaceAbility_Bonus_OptionsTypeOperatorsInput>;
};

export type FilterFindOneRaceAbility_Bonus_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceAbility_BonusesAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceAbility_BonusesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<FilterFindOneRaceAbility_BonusesAbility_ScoreInput>;
  bonus?: Maybe<Scalars['Float']>;
};

export type FilterFindOneRaceAgeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceAlignmentOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceInput = {
  AND?: Maybe<Array<FilterFindOneRaceInput>>;
  OR?: Maybe<Array<FilterFindOneRaceInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneRaceOperatorsInput>;
  ability_bonus_options?: Maybe<FilterFindOneRaceAbility_Bonus_OptionsInput>;
  ability_bonuses?: Maybe<Array<Maybe<FilterFindOneRaceAbility_BonusesInput>>>;
  age?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  language_desc?: Maybe<Scalars['String']>;
  language_options?: Maybe<FilterFindOneRaceLanguage_OptionsInput>;
  languages?: Maybe<Array<Maybe<FilterFindOneRaceLanguagesInput>>>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  size_description?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['Float']>;
  starting_proficiencies?: Maybe<Array<Maybe<FilterFindOneRaceStarting_ProficienciesInput>>>;
  starting_proficiency_options?: Maybe<FilterFindOneRaceStarting_Proficiency_OptionsInput>;
  subraces?: Maybe<Array<Maybe<FilterFindOneRaceSubracesInput>>>;
  traits?: Maybe<Array<Maybe<FilterFindOneRaceTraitsInput>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceLanguage_DescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceLanguage_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneRaceLanguage_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceLanguage_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneRaceLanguage_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceLanguage_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneRaceLanguage_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneRaceLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindOneRaceLanguage_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceLanguagesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneRaceOperatorsInput = {
  _id?: Maybe<FilterFindOneRace_IdOperatorsInput>;
  ability_bonus_options?: Maybe<FilterFindOneRaceAbility_Bonus_OptionsOperatorsInput>;
  age?: Maybe<FilterFindOneRaceAgeOperatorsInput>;
  alignment?: Maybe<FilterFindOneRaceAlignmentOperatorsInput>;
  index?: Maybe<FilterFindOneRaceIndexOperatorsInput>;
  language_desc?: Maybe<FilterFindOneRaceLanguage_DescOperatorsInput>;
  language_options?: Maybe<FilterFindOneRaceLanguage_OptionsOperatorsInput>;
  name?: Maybe<FilterFindOneRaceNameOperatorsInput>;
  size?: Maybe<FilterFindOneRaceSizeOperatorsInput>;
  size_description?: Maybe<FilterFindOneRaceSize_DescriptionOperatorsInput>;
  speed?: Maybe<FilterFindOneRaceSpeedOperatorsInput>;
  starting_proficiency_options?: Maybe<FilterFindOneRaceStarting_Proficiency_OptionsOperatorsInput>;
  url?: Maybe<FilterFindOneRaceUrlOperatorsInput>;
};

export type FilterFindOneRaceSizeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceSize_DescriptionOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceSpeedOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneRaceStarting_ProficienciesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneRaceStarting_Proficiency_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneRaceStarting_Proficiency_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneRaceStarting_Proficiency_OptionsTypeOperatorsInput>;
};

export type FilterFindOneRaceStarting_Proficiency_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRaceSubracesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceTraitsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneRaceUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRace_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRuleDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRuleIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRuleInput = {
  AND?: Maybe<Array<FilterFindOneRuleInput>>;
  OR?: Maybe<Array<FilterFindOneRuleInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneRuleOperatorsInput>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subsections?: Maybe<Array<Maybe<FilterFindOneRuleSubsectionsInput>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneRuleNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneRuleOperatorsInput = {
  _id?: Maybe<FilterFindOneRule_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneRuleDescOperatorsInput>;
  index?: Maybe<FilterFindOneRuleIndexOperatorsInput>;
  name?: Maybe<FilterFindOneRuleNameOperatorsInput>;
  url?: Maybe<FilterFindOneRuleUrlOperatorsInput>;
};

export type FilterFindOneRuleSectionDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRuleSectionIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRuleSectionInput = {
  AND?: Maybe<Array<FilterFindOneRuleSectionInput>>;
  OR?: Maybe<Array<FilterFindOneRuleSectionInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneRuleSectionOperatorsInput>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneRuleSectionNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneRuleSectionOperatorsInput = {
  _id?: Maybe<FilterFindOneRuleSection_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneRuleSectionDescOperatorsInput>;
  index?: Maybe<FilterFindOneRuleSectionIndexOperatorsInput>;
  name?: Maybe<FilterFindOneRuleSectionNameOperatorsInput>;
  url?: Maybe<FilterFindOneRuleSectionUrlOperatorsInput>;
};

export type FilterFindOneRuleSectionUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRuleSection_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRuleSubsectionsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneRuleUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneRule_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSkillAbility_ScoreIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSkillAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSkillAbility_ScoreNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSkillAbility_ScoreOperatorsInput = {
  index?: Maybe<FilterFindOneSkillAbility_ScoreIndexOperatorsInput>;
  name?: Maybe<FilterFindOneSkillAbility_ScoreNameOperatorsInput>;
  url?: Maybe<FilterFindOneSkillAbility_ScoreUrlOperatorsInput>;
};

export type FilterFindOneSkillAbility_ScoreUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSkillDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSkillIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSkillInput = {
  AND?: Maybe<Array<FilterFindOneSkillInput>>;
  OR?: Maybe<Array<FilterFindOneSkillInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneSkillOperatorsInput>;
  ability_score?: Maybe<FilterFindOneSkillAbility_ScoreInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSkillNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSkillOperatorsInput = {
  _id?: Maybe<FilterFindOneSkill_IdOperatorsInput>;
  ability_score?: Maybe<FilterFindOneSkillAbility_ScoreOperatorsInput>;
  desc?: Maybe<FilterFindOneSkillDescOperatorsInput>;
  index?: Maybe<FilterFindOneSkillIndexOperatorsInput>;
  name?: Maybe<FilterFindOneSkillNameOperatorsInput>;
  url?: Maybe<FilterFindOneSkillUrlOperatorsInput>;
};

export type FilterFindOneSkillUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSkill_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellArea_Of_EffectInput = {
  size?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneSpellClassesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSpellDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSpellDamageInput = {
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  damage_at_slot_level?: Maybe<Scalars['JSON']>;
  damage_type?: Maybe<FilterFindOneSpellDamageDamage_TypeInput>;
};

export type FilterFindOneSpellDcDc_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSpellDcInput = {
  dc_success?: Maybe<Scalars['String']>;
  dc_type?: Maybe<FilterFindOneSpellDcDc_TypeInput>;
  desc?: Maybe<Scalars['String']>;
};

export type FilterFindOneSpellInput = {
  AND?: Maybe<Array<FilterFindOneSpellInput>>;
  OR?: Maybe<Array<FilterFindOneSpellInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneSpellOperatorsInput>;
  area_of_effect?: Maybe<FilterFindOneSpellArea_Of_EffectInput>;
  attack_type?: Maybe<Scalars['String']>;
  casting_time?: Maybe<Scalars['String']>;
  classes?: Maybe<Array<Maybe<FilterFindOneSpellClassesInput>>>;
  components?: Maybe<Array<Maybe<Scalars['String']>>>;
  concentration?: Maybe<Scalars['Boolean']>;
  damage?: Maybe<FilterFindOneSpellDamageInput>;
  dc?: Maybe<FilterFindOneSpellDcInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  duration?: Maybe<Scalars['String']>;
  heal_at_slot_level?: Maybe<Scalars['JSON']>;
  higher_level?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  material?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  range?: Maybe<Scalars['String']>;
  ritual?: Maybe<Scalars['Boolean']>;
  school?: Maybe<FilterFindOneSpellSchoolInput>;
  subclasses?: Maybe<Array<Maybe<FilterFindOneSpellSubclassesInput>>>;
  url?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSpellOperatorsInput = {
  _id?: Maybe<FilterFindOneSpell_IdOperatorsInput>;
  school?: Maybe<FilterFindOneSpellSchoolOperatorsInput>;
};

export type FilterFindOneSpellSchoolIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellSchoolInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSpellSchoolNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellSchoolOperatorsInput = {
  index?: Maybe<FilterFindOneSpellSchoolIndexOperatorsInput>;
  name?: Maybe<FilterFindOneSpellSchoolNameOperatorsInput>;
  url?: Maybe<FilterFindOneSpellSchoolUrlOperatorsInput>;
};

export type FilterFindOneSpellSchoolUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSpellSubclassesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSpell_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassClassIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassClassInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubclassClassNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassClassOperatorsInput = {
  index?: Maybe<FilterFindOneSubclassClassIndexOperatorsInput>;
  name?: Maybe<FilterFindOneSubclassClassNameOperatorsInput>;
  url?: Maybe<FilterFindOneSubclassClassUrlOperatorsInput>;
};

export type FilterFindOneSubclassClassUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassInput = {
  AND?: Maybe<Array<FilterFindOneSubclassInput>>;
  OR?: Maybe<Array<FilterFindOneSubclassInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneSubclassOperatorsInput>;
  class?: Maybe<FilterFindOneSubclassClassInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  spells?: Maybe<Array<Maybe<FilterFindOneSubclassSpellsInput>>>;
  subclass_flavor?: Maybe<Scalars['String']>;
  subclass_levels?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubclassNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSubclassOperatorsInput = {
  _id?: Maybe<FilterFindOneSubclass_IdOperatorsInput>;
  class?: Maybe<FilterFindOneSubclassClassOperatorsInput>;
  desc?: Maybe<FilterFindOneSubclassDescOperatorsInput>;
  index?: Maybe<FilterFindOneSubclassIndexOperatorsInput>;
  name?: Maybe<FilterFindOneSubclassNameOperatorsInput>;
  subclass_flavor?: Maybe<FilterFindOneSubclassSubclass_FlavorOperatorsInput>;
  subclass_levels?: Maybe<FilterFindOneSubclassSubclass_LevelsOperatorsInput>;
  url?: Maybe<FilterFindOneSubclassUrlOperatorsInput>;
};

export type FilterFindOneSubclassSpellsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  prerequisites?: Maybe<Array<Maybe<FilterFindOneSubclassSpellsPrerequisitesInput>>>;
  spell?: Maybe<FilterFindOneSubclassSpellsSpellInput>;
};

export type FilterFindOneSubclassSpellsPrerequisitesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubclassSpellsSpellInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubclassSubclass_FlavorOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassSubclass_LevelsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclassUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubclass_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubraceAbility_BonusesAbility_ScoreInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubraceAbility_BonusesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<FilterFindOneSubraceAbility_BonusesAbility_ScoreInput>;
  bonus?: Maybe<Scalars['Float']>;
};

export type FilterFindOneSubraceDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubraceIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubraceInput = {
  AND?: Maybe<Array<FilterFindOneSubraceInput>>;
  OR?: Maybe<Array<FilterFindOneSubraceInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneSubraceOperatorsInput>;
  ability_bonuses?: Maybe<Array<Maybe<FilterFindOneSubraceAbility_BonusesInput>>>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  language_options?: Maybe<FilterFindOneSubraceLanguage_OptionsInput>;
  name?: Maybe<Scalars['String']>;
  race?: Maybe<FilterFindOneSubraceRaceInput>;
  racial_traits?: Maybe<Array<Maybe<FilterFindOneSubraceRacial_TraitsInput>>>;
  starting_proficiencies?: Maybe<Array<Maybe<FilterFindOneSubraceStarting_ProficienciesInput>>>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubraceLanguage_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneSubraceLanguage_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubraceLanguage_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneSubraceLanguage_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubraceLanguage_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneSubraceLanguage_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneSubraceLanguage_OptionsTypeOperatorsInput>;
};

export type FilterFindOneSubraceLanguage_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubraceNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSubraceOperatorsInput = {
  _id?: Maybe<FilterFindOneSubrace_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneSubraceDescOperatorsInput>;
  index?: Maybe<FilterFindOneSubraceIndexOperatorsInput>;
  language_options?: Maybe<FilterFindOneSubraceLanguage_OptionsOperatorsInput>;
  name?: Maybe<FilterFindOneSubraceNameOperatorsInput>;
  race?: Maybe<FilterFindOneSubraceRaceOperatorsInput>;
  url?: Maybe<FilterFindOneSubraceUrlOperatorsInput>;
};

export type FilterFindOneSubraceRaceIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubraceRaceInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubraceRaceNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubraceRaceOperatorsInput = {
  index?: Maybe<FilterFindOneSubraceRaceIndexOperatorsInput>;
  name?: Maybe<FilterFindOneSubraceRaceNameOperatorsInput>;
  url?: Maybe<FilterFindOneSubraceRaceUrlOperatorsInput>;
};

export type FilterFindOneSubraceRaceUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubraceRacial_TraitsInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubraceStarting_ProficienciesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneSubraceUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSubrace_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitInput = {
  AND?: Maybe<Array<FilterFindOneTraitInput>>;
  OR?: Maybe<Array<FilterFindOneTraitInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneTraitOperatorsInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<FilterFindOneTraitParentInput>;
  proficiencies?: Maybe<Array<Maybe<FilterFindOneTraitProficienciesInput>>>;
  proficiency_choices?: Maybe<FilterFindOneTraitProficiency_ChoicesInput>;
  races?: Maybe<Array<Maybe<FilterFindOneTraitRacesInput>>>;
  subraces?: Maybe<Array<Maybe<FilterFindOneTraitSubracesInput>>>;
  trait_specific?: Maybe<FilterFindOneTraitTrait_SpecificInput>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneTraitOperatorsInput = {
  _id?: Maybe<FilterFindOneTrait_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneTraitDescOperatorsInput>;
  index?: Maybe<FilterFindOneTraitIndexOperatorsInput>;
  name?: Maybe<FilterFindOneTraitNameOperatorsInput>;
  parent?: Maybe<FilterFindOneTraitParentOperatorsInput>;
  proficiency_choices?: Maybe<FilterFindOneTraitProficiency_ChoicesOperatorsInput>;
  trait_specific?: Maybe<FilterFindOneTraitTrait_SpecificOperatorsInput>;
  url?: Maybe<FilterFindOneTraitUrlOperatorsInput>;
};

export type FilterFindOneTraitParentIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitParentInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitParentNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitParentOperatorsInput = {
  index?: Maybe<FilterFindOneTraitParentIndexOperatorsInput>;
  name?: Maybe<FilterFindOneTraitParentNameOperatorsInput>;
  url?: Maybe<FilterFindOneTraitParentUrlOperatorsInput>;
};

export type FilterFindOneTraitParentUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitProficienciesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitProficiency_ChoicesChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneTraitProficiency_ChoicesFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitProficiency_ChoicesInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneTraitProficiency_ChoicesFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitProficiency_ChoicesOperatorsInput = {
  choose?: Maybe<FilterFindOneTraitProficiency_ChoicesChooseOperatorsInput>;
  type?: Maybe<FilterFindOneTraitProficiency_ChoicesTypeOperatorsInput>;
};

export type FilterFindOneTraitProficiency_ChoicesTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitRacesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitSubracesInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDamageDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDamageInput = {
  _id?: Maybe<Scalars['MongoID']>;
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  damage_type?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDamageDamage_TypeInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeOperatorsInput = {
  index?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeUrlOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcInput = {
  dc_type?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeInput>;
  success_type?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcOperatorsInput = {
  dc_type?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcDc_TypeOperatorsInput>;
  success_type?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcSuccess_TypeOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDcSuccess_TypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponInput = {
  damage?: Maybe<Array<Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDamageInput>>>;
  dc?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcInput>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  usage?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponUsageInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponOperatorsInput = {
  dc?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDcOperatorsInput>;
  desc?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponDescOperatorsInput>;
  name?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponNameOperatorsInput>;
  usage?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponUsageOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponUsageInput = {
  times?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponUsageOperatorsInput = {
  times?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponUsageTimesOperatorsInput>;
  type?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponUsageTypeOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponUsageTimesOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneTraitTrait_SpecificBreath_WeaponUsageTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificDamage_TypeIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificDamage_TypeInput = {
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificDamage_TypeNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificDamage_TypeOperatorsInput = {
  index?: Maybe<FilterFindOneTraitTrait_SpecificDamage_TypeIndexOperatorsInput>;
  name?: Maybe<FilterFindOneTraitTrait_SpecificDamage_TypeNameOperatorsInput>;
  url?: Maybe<FilterFindOneTraitTrait_SpecificDamage_TypeUrlOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificDamage_TypeUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificInput = {
  breath_weapon?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponInput>;
  damage_type?: Maybe<FilterFindOneTraitTrait_SpecificDamage_TypeInput>;
  spell_options?: Maybe<FilterFindOneTraitTrait_SpecificSpell_OptionsInput>;
  subtrait_options?: Maybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsInput>;
};

export type FilterFindOneTraitTrait_SpecificOperatorsInput = {
  breath_weapon?: Maybe<FilterFindOneTraitTrait_SpecificBreath_WeaponOperatorsInput>;
  damage_type?: Maybe<FilterFindOneTraitTrait_SpecificDamage_TypeOperatorsInput>;
  spell_options?: Maybe<FilterFindOneTraitTrait_SpecificSpell_OptionsOperatorsInput>;
  subtrait_options?: Maybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificSpell_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneTraitTrait_SpecificSpell_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificSpell_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneTraitTrait_SpecificSpell_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificSpell_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneTraitTrait_SpecificSpell_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneTraitTrait_SpecificSpell_OptionsTypeOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificSpell_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsChooseOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsFromInput = {
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsInput = {
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsFromInput>>>;
  type?: Maybe<Scalars['String']>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsOperatorsInput = {
  choose?: Maybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsChooseOperatorsInput>;
  type?: Maybe<FilterFindOneTraitTrait_SpecificSubtrait_OptionsTypeOperatorsInput>;
};

export type FilterFindOneTraitTrait_SpecificSubtrait_OptionsTypeOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTraitUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneTrait_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneWeaponPropertyDescOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneWeaponPropertyIndexOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneWeaponPropertyInput = {
  AND?: Maybe<Array<FilterFindOneWeaponPropertyInput>>;
  OR?: Maybe<Array<FilterFindOneWeaponPropertyInput>>;
  _id?: Maybe<Scalars['String']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneWeaponPropertyOperatorsInput>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type FilterFindOneWeaponPropertyNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneWeaponPropertyOperatorsInput = {
  _id?: Maybe<FilterFindOneWeaponProperty_IdOperatorsInput>;
  desc?: Maybe<FilterFindOneWeaponPropertyDescOperatorsInput>;
  index?: Maybe<FilterFindOneWeaponPropertyIndexOperatorsInput>;
  name?: Maybe<FilterFindOneWeaponPropertyNameOperatorsInput>;
  url?: Maybe<FilterFindOneWeaponPropertyUrlOperatorsInput>;
};

export type FilterFindOneWeaponPropertyUrlOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneWeaponProperty_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type Language = {
  __typename?: 'Language';
  _id: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  script?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typical_speakers?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
};

export type Level = {
  __typename?: 'Level';
  _id: Scalars['String'];
  ability_score_bonuses?: Maybe<Scalars['Float']>;
  class?: Maybe<LevelClass>;
  class_specific?: Maybe<LevelClass_Specific>;
  features: Array<Feature>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  prof_bonus?: Maybe<Scalars['Float']>;
  spellcasting?: Maybe<LevelSpellcasting>;
  subclass?: Maybe<LevelSubclass>;
  subclass_specific?: Maybe<LevelSubclass_Specific>;
  url?: Maybe<Scalars['String']>;
};


export type LevelFeaturesArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyFeatureInput>;
};

export type LevelClass = {
  __typename?: 'LevelClass';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LevelClass_Specific = {
  __typename?: 'LevelClass_specific';
  action_surges?: Maybe<Scalars['Float']>;
  arcane_recovery_levels?: Maybe<Scalars['Float']>;
  aura_range?: Maybe<Scalars['Float']>;
  bardic_inspiration_die?: Maybe<Scalars['Float']>;
  brutal_critical_dice?: Maybe<Scalars['Float']>;
  channel_divinity_charges?: Maybe<Scalars['Float']>;
  creating_spell_slots?: Maybe<Array<Maybe<LevelClass_SpecificCreating_Spell_Slots>>>;
  destroy_undead_cr?: Maybe<Scalars['Float']>;
  extra_attacks?: Maybe<Scalars['Float']>;
  favored_enemies?: Maybe<Scalars['Float']>;
  favored_terrain?: Maybe<Scalars['Float']>;
  indomitable_uses?: Maybe<Scalars['Float']>;
  invocations_known?: Maybe<Scalars['Float']>;
  ki_points?: Maybe<Scalars['Float']>;
  magical_secrets_max_5?: Maybe<Scalars['Float']>;
  magical_secrets_max_7?: Maybe<Scalars['Float']>;
  magical_secrets_max_9?: Maybe<Scalars['Float']>;
  martial_arts?: Maybe<LevelClass_SpecificMartial_Arts>;
  metamagic_known?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_6?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_7?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_8?: Maybe<Scalars['Float']>;
  mystic_arcanum_level_9?: Maybe<Scalars['Float']>;
  rage_count?: Maybe<Scalars['Float']>;
  rage_damage_bonus?: Maybe<Scalars['Float']>;
  sneak_attack?: Maybe<LevelClass_SpecificSneak_Attack>;
  song_of_rest_die?: Maybe<Scalars['Float']>;
  sorcery_points?: Maybe<Scalars['Float']>;
  unarmored_movement?: Maybe<Scalars['Float']>;
  wild_shape_fly?: Maybe<Scalars['Boolean']>;
  wild_shape_max_cr?: Maybe<Scalars['Float']>;
  wild_shape_swim?: Maybe<Scalars['Boolean']>;
};

export type LevelClass_SpecificCreating_Spell_Slots = {
  __typename?: 'LevelClass_specificCreating_spell_slots';
  _id?: Maybe<Scalars['MongoID']>;
  sorcery_point_cost?: Maybe<Scalars['Float']>;
  spell_slot_level?: Maybe<Scalars['Float']>;
};

export type LevelClass_SpecificMartial_Arts = {
  __typename?: 'LevelClass_specificMartial_arts';
  dice_count?: Maybe<Scalars['Float']>;
  dice_value?: Maybe<Scalars['Float']>;
};

export type LevelClass_SpecificSneak_Attack = {
  __typename?: 'LevelClass_specificSneak_attack';
  dice_count?: Maybe<Scalars['Float']>;
  dice_value?: Maybe<Scalars['Float']>;
};

export type LevelSpellcasting = {
  __typename?: 'LevelSpellcasting';
  cantrips_known?: Maybe<Scalars['Float']>;
  spell_slots_level_1?: Maybe<Scalars['Float']>;
  spell_slots_level_2?: Maybe<Scalars['Float']>;
  spell_slots_level_3?: Maybe<Scalars['Float']>;
  spell_slots_level_4?: Maybe<Scalars['Float']>;
  spell_slots_level_5?: Maybe<Scalars['Float']>;
  spell_slots_level_6?: Maybe<Scalars['Float']>;
  spell_slots_level_7?: Maybe<Scalars['Float']>;
  spell_slots_level_8?: Maybe<Scalars['Float']>;
  spell_slots_level_9?: Maybe<Scalars['Float']>;
  spells_known?: Maybe<Scalars['Float']>;
};

export type LevelSubclass = {
  __typename?: 'LevelSubclass';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LevelSubclass_Specific = {
  __typename?: 'LevelSubclass_specific';
  additional_magical_secrets_max_lvl?: Maybe<Scalars['Float']>;
  aura_range?: Maybe<Scalars['Float']>;
};

export type MagicItem = {
  __typename?: 'MagicItem';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  equipment_category?: Maybe<MagicItemEquipment_Category>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MagicItemEquipment_Category = {
  __typename?: 'MagicItemEquipment_category';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MagicSchool = {
  __typename?: 'MagicSchool';
  _id: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Monster = {
  __typename?: 'Monster';
  _id: Scalars['String'];
  actions?: Maybe<Array<Maybe<MonsterActions>>>;
  alignment?: Maybe<Scalars['String']>;
  armor_class?: Maybe<Scalars['Float']>;
  challenge_rating?: Maybe<Scalars['Float']>;
  charisma?: Maybe<Scalars['Float']>;
  condition_immunities?: Maybe<Array<Maybe<MonsterCondition_Immunities>>>;
  constitution?: Maybe<Scalars['Float']>;
  damage_immunities?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_resistances?: Maybe<Array<Maybe<Scalars['String']>>>;
  damage_vulnerabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  dexterity?: Maybe<Scalars['Float']>;
  forms?: Maybe<Array<Maybe<MonsterForms>>>;
  hit_dice?: Maybe<Scalars['String']>;
  hit_points?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['String']>;
  intelligence?: Maybe<Scalars['Float']>;
  languages?: Maybe<Scalars['String']>;
  legendary_actions?: Maybe<Array<Maybe<MonsterLegendary_Actions>>>;
  name?: Maybe<Scalars['String']>;
  proficiencies?: Maybe<Array<Maybe<MonsterProficiencies>>>;
  reactions?: Maybe<Array<Maybe<MonsterReactions>>>;
  senses?: Maybe<MonsterSenses>;
  size?: Maybe<Scalars['String']>;
  special_abilities?: Maybe<Array<Maybe<MonsterSpecial_Abilities>>>;
  speed?: Maybe<MonsterSpeed>;
  strength?: Maybe<Scalars['Float']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  wisdom?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

export type MonsterActions = {
  __typename?: 'MonsterActions';
  _id?: Maybe<Scalars['MongoID']>;
  attack_bonus?: Maybe<Scalars['Float']>;
  damage?: Maybe<Array<Maybe<MonsterActionsDamage>>>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MonsterActionsDamage = {
  __typename?: 'MonsterActionsDamage';
  _id?: Maybe<Scalars['MongoID']>;
  damage_dice?: Maybe<Scalars['String']>;
  damage_type?: Maybe<MonsterActionsDamageDamage_Type>;
};

export type MonsterActionsDamageDamage_Type = {
  __typename?: 'MonsterActionsDamageDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MonsterCondition_Immunities = {
  __typename?: 'MonsterCondition_immunities';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MonsterForms = {
  __typename?: 'MonsterForms';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MonsterLegendary_Actions = {
  __typename?: 'MonsterLegendary_actions';
  _id?: Maybe<Scalars['MongoID']>;
  attack_bonus?: Maybe<Scalars['Float']>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MonsterProficiencies = {
  __typename?: 'MonsterProficiencies';
  _id?: Maybe<Scalars['MongoID']>;
  proficiency?: Maybe<MonsterProficienciesProficiency>;
  value?: Maybe<Scalars['Float']>;
};

export type MonsterProficienciesProficiency = {
  __typename?: 'MonsterProficienciesProficiency';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MonsterReactions = {
  __typename?: 'MonsterReactions';
  _id?: Maybe<Scalars['MongoID']>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MonsterSenses = {
  __typename?: 'MonsterSenses';
  blindsight?: Maybe<Scalars['String']>;
  darkvision?: Maybe<Scalars['String']>;
  passive_perception?: Maybe<Scalars['Float']>;
  tremorsense?: Maybe<Scalars['String']>;
  truesight?: Maybe<Scalars['String']>;
};

export type MonsterSpecial_Abilities = {
  __typename?: 'MonsterSpecial_abilities';
  _id?: Maybe<Scalars['MongoID']>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type MonsterSpeed = {
  __typename?: 'MonsterSpeed';
  burrow?: Maybe<Scalars['String']>;
  climb?: Maybe<Scalars['String']>;
  fly?: Maybe<Scalars['String']>;
  hover?: Maybe<Scalars['Boolean']>;
  swim?: Maybe<Scalars['String']>;
  walk?: Maybe<Scalars['String']>;
};

export type Proficiency = {
  __typename?: 'Proficiency';
  _id: Scalars['String'];
  classes?: Maybe<Array<Maybe<ProficiencyClasses>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  races?: Maybe<Array<Maybe<ProficiencyRaces>>>;
  references?: Maybe<Array<Maybe<ProficiencyReferences>>>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ProficiencyClasses = {
  __typename?: 'ProficiencyClasses';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ProficiencyRaces = {
  __typename?: 'ProficiencyRaces';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ProficiencyReferences = {
  __typename?: 'ProficiencyReferences';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  abilityScore?: Maybe<AbilityScore>;
  abilityScores: Array<AbilityScore>;
  alignment?: Maybe<Alignment>;
  alignments: Array<Alignment>;
  background?: Maybe<Background>;
  backgrounds: Array<Background>;
  class?: Maybe<Class>;
  classes: Array<Class>;
  condition?: Maybe<Condition>;
  conditions: Array<Condition>;
  damageType?: Maybe<DamageType>;
  damageTypes: Array<DamageType>;
  equipment?: Maybe<Equipment>;
  equipmentCategories: Array<EquipmentCategory>;
  equipmentCategory?: Maybe<EquipmentCategory>;
  equipments: Array<Equipment>;
  feat?: Maybe<Feat>;
  feats: Array<Feat>;
  feature?: Maybe<Feature>;
  features: Array<Feature>;
  language?: Maybe<Language>;
  languages: Array<Language>;
  level?: Maybe<Level>;
  levels: Array<Level>;
  magicItem?: Maybe<MagicItem>;
  magicItems: Array<MagicItem>;
  magicSchool?: Maybe<MagicSchool>;
  magicSchools: Array<MagicSchool>;
  monster?: Maybe<Monster>;
  monsters: Array<Monster>;
  proficiencies: Array<Proficiency>;
  proficiency?: Maybe<Proficiency>;
  race?: Maybe<Race>;
  races: Array<Race>;
  rule?: Maybe<Rule>;
  ruleSection?: Maybe<RuleSection>;
  ruleSections: Array<RuleSection>;
  rules: Array<Rule>;
  skill?: Maybe<Skill>;
  skills: Array<Skill>;
  spell?: Maybe<Spell>;
  spells: Array<Spell>;
  subclass?: Maybe<Subclass>;
  subclasses: Array<Subclass>;
  subrace?: Maybe<Subrace>;
  subraces: Array<Subrace>;
  trait?: Maybe<Trait>;
  traits: Array<Trait>;
  weaponProperties: Array<WeaponProperty>;
  weaponProperty?: Maybe<WeaponProperty>;
};


export type QueryAbilityScoreArgs = {
  filter?: Maybe<FilterFindOneAbilityScoreInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneAbilityScoreInput>;
};


export type QueryAbilityScoresArgs = {
  filter?: Maybe<FilterFindManyAbilityScoreInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyAbilityScoreInput>;
};


export type QueryAlignmentArgs = {
  filter?: Maybe<FilterFindOneAlignmentInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneAlignmentInput>;
};


export type QueryAlignmentsArgs = {
  filter?: Maybe<FilterFindManyAlignmentInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyAlignmentInput>;
};


export type QueryBackgroundArgs = {
  filter?: Maybe<FilterFindOneBackgroundInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneBackgroundInput>;
};


export type QueryBackgroundsArgs = {
  filter?: Maybe<FilterFindManyBackgroundInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyBackgroundInput>;
};


export type QueryClassArgs = {
  filter?: Maybe<FilterFindOneClassInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneClassInput>;
};


export type QueryClassesArgs = {
  filter?: Maybe<FilterFindManyClassInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyClassInput>;
};


export type QueryConditionArgs = {
  filter?: Maybe<FilterFindOneConditionInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneConditionInput>;
};


export type QueryConditionsArgs = {
  filter?: Maybe<FilterFindManyConditionInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyConditionInput>;
};


export type QueryDamageTypeArgs = {
  filter?: Maybe<FilterFindOneDamageTypeInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneDamageTypeInput>;
};


export type QueryDamageTypesArgs = {
  filter?: Maybe<FilterFindManyDamageTypeInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyDamageTypeInput>;
};


export type QueryEquipmentArgs = {
  filter?: Maybe<FilterFindOneEquipmentInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneEquipmentInput>;
};


export type QueryEquipmentCategoriesArgs = {
  filter?: Maybe<FilterFindManyEquipmentCategoryInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyEquipmentCategoryInput>;
};


export type QueryEquipmentCategoryArgs = {
  filter?: Maybe<FilterFindOneEquipmentCategoryInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneEquipmentCategoryInput>;
};


export type QueryEquipmentsArgs = {
  filter?: Maybe<FilterFindManyEquipmentInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyEquipmentInput>;
};


export type QueryFeatArgs = {
  filter?: Maybe<FilterFindOneFeatInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneFeatInput>;
};


export type QueryFeatsArgs = {
  filter?: Maybe<FilterFindManyFeatInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyFeatInput>;
};


export type QueryFeatureArgs = {
  filter?: Maybe<FilterFindOneFeatureInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneFeatureInput>;
};


export type QueryFeaturesArgs = {
  filter?: Maybe<FilterFindManyFeatureInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyFeatureInput>;
};


export type QueryLanguageArgs = {
  filter?: Maybe<FilterFindOneLanguageInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneLanguageInput>;
};


export type QueryLanguagesArgs = {
  filter?: Maybe<FilterFindManyLanguageInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyLanguageInput>;
};


export type QueryLevelArgs = {
  filter?: Maybe<FilterFindOneLevelInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneLevelInput>;
};


export type QueryLevelsArgs = {
  filter?: Maybe<FilterFindManyLevelInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyLevelInput>;
};


export type QueryMagicItemArgs = {
  filter?: Maybe<FilterFindOneMagicItemInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneMagicItemInput>;
};


export type QueryMagicItemsArgs = {
  filter?: Maybe<FilterFindManyMagicItemInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyMagicItemInput>;
};


export type QueryMagicSchoolArgs = {
  filter?: Maybe<FilterFindOneMagicSchoolInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneMagicSchoolInput>;
};


export type QueryMagicSchoolsArgs = {
  filter?: Maybe<FilterFindManyMagicSchoolInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyMagicSchoolInput>;
};


export type QueryMonsterArgs = {
  filter?: Maybe<FilterFindOneMonsterInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneMonsterInput>;
};


export type QueryMonstersArgs = {
  filter?: Maybe<FilterFindManyMonsterInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyMonsterInput>;
};


export type QueryProficienciesArgs = {
  filter?: Maybe<FilterFindManyProficiencyInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyProficiencyInput>;
};


export type QueryProficiencyArgs = {
  filter?: Maybe<FilterFindOneProficiencyInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneProficiencyInput>;
};


export type QueryRaceArgs = {
  filter?: Maybe<FilterFindOneRaceInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneRaceInput>;
};


export type QueryRacesArgs = {
  filter?: Maybe<FilterFindManyRaceInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyRaceInput>;
};


export type QueryRuleArgs = {
  filter?: Maybe<FilterFindOneRuleInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneRuleInput>;
};


export type QueryRuleSectionArgs = {
  filter?: Maybe<FilterFindOneRuleSectionInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneRuleSectionInput>;
};


export type QueryRuleSectionsArgs = {
  filter?: Maybe<FilterFindManyRuleSectionInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyRuleSectionInput>;
};


export type QueryRulesArgs = {
  filter?: Maybe<FilterFindManyRuleInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyRuleInput>;
};


export type QuerySkillArgs = {
  filter?: Maybe<FilterFindOneSkillInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneSkillInput>;
};


export type QuerySkillsArgs = {
  filter?: Maybe<FilterFindManySkillInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManySkillInput>;
};


export type QuerySpellArgs = {
  filter?: Maybe<FilterFindOneSpellInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneSpellInput>;
};


export type QuerySpellsArgs = {
  filter?: Maybe<FilterFindManySpellInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManySpellInput>;
};


export type QuerySubclassArgs = {
  filter?: Maybe<FilterFindOneSubclassInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneSubclassInput>;
};


export type QuerySubclassesArgs = {
  filter?: Maybe<FilterFindManySubclassInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManySubclassInput>;
};


export type QuerySubraceArgs = {
  filter?: Maybe<FilterFindOneSubraceInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneSubraceInput>;
};


export type QuerySubracesArgs = {
  filter?: Maybe<FilterFindManySubraceInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManySubraceInput>;
};


export type QueryTraitArgs = {
  filter?: Maybe<FilterFindOneTraitInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneTraitInput>;
};


export type QueryTraitsArgs = {
  filter?: Maybe<FilterFindManyTraitInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyTraitInput>;
};


export type QueryWeaponPropertiesArgs = {
  filter?: Maybe<FilterFindManyWeaponPropertyInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyWeaponPropertyInput>;
};


export type QueryWeaponPropertyArgs = {
  filter?: Maybe<FilterFindOneWeaponPropertyInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneWeaponPropertyInput>;
};

export type Race = {
  __typename?: 'Race';
  _id: Scalars['String'];
  ability_bonus_options?: Maybe<RaceAbility_Bonus_Options>;
  ability_bonuses?: Maybe<Array<Maybe<RaceAbility_Bonuses>>>;
  age?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  language_desc?: Maybe<Scalars['String']>;
  language_options?: Maybe<RaceLanguage_Options>;
  languages?: Maybe<Array<Maybe<RaceLanguages>>>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  size_description?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['Float']>;
  starting_proficiencies?: Maybe<Array<Maybe<RaceStarting_Proficiencies>>>;
  starting_proficiency_options?: Maybe<RaceStarting_Proficiency_Options>;
  subraces?: Maybe<Array<Maybe<RaceSubraces>>>;
  traits: Array<Trait>;
  url?: Maybe<Scalars['String']>;
};


export type RaceTraitsArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyTraitInput>;
};

export type RaceAbility_Bonus_Options = {
  __typename?: 'RaceAbility_bonus_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<RaceAbility_Bonus_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type RaceAbility_Bonus_OptionsFrom = {
  __typename?: 'RaceAbility_bonus_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<RaceAbility_Bonus_OptionsFromAbility_Score>;
  bonus?: Maybe<Scalars['Float']>;
};

export type RaceAbility_Bonus_OptionsFromAbility_Score = {
  __typename?: 'RaceAbility_bonus_optionsFromAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RaceAbility_Bonuses = {
  __typename?: 'RaceAbility_bonuses';
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<RaceAbility_BonusesAbility_Score>;
  bonus?: Maybe<Scalars['Float']>;
};

export type RaceAbility_BonusesAbility_Score = {
  __typename?: 'RaceAbility_bonusesAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RaceLanguage_Options = {
  __typename?: 'RaceLanguage_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<RaceLanguage_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type RaceLanguage_OptionsFrom = {
  __typename?: 'RaceLanguage_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RaceLanguages = {
  __typename?: 'RaceLanguages';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RaceStarting_Proficiencies = {
  __typename?: 'RaceStarting_proficiencies';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RaceStarting_Proficiency_Options = {
  __typename?: 'RaceStarting_proficiency_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<RaceStarting_Proficiency_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type RaceStarting_Proficiency_OptionsFrom = {
  __typename?: 'RaceStarting_proficiency_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RaceSubraces = {
  __typename?: 'RaceSubraces';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Rule = {
  __typename?: 'Rule';
  _id: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subsections: Array<RuleSection>;
  url?: Maybe<Scalars['String']>;
};


export type RuleSubsectionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyRuleSectionInput>;
};

export type RuleSection = {
  __typename?: 'RuleSection';
  _id: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Skill = {
  __typename?: 'Skill';
  _id: Scalars['String'];
  ability_score?: Maybe<SkillAbility_Score>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SkillAbility_Score = {
  __typename?: 'SkillAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum SortFindManyAbilityScoreInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  FullNameAsc = 'FULL_NAME_ASC',
  FullNameDesc = 'FULL_NAME_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyAlignmentInput {
  AbbreviationAsc = 'ABBREVIATION_ASC',
  AbbreviationDesc = 'ABBREVIATION_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyBackgroundInput {
  BondsChooseAsc = 'BONDS__CHOOSE_ASC',
  BondsChooseDesc = 'BONDS__CHOOSE_DESC',
  BondsFromAsc = 'BONDS__FROM_ASC',
  BondsFromDesc = 'BONDS__FROM_DESC',
  BondsTypeAsc = 'BONDS__TYPE_ASC',
  BondsTypeDesc = 'BONDS__TYPE_DESC',
  FeatureDescAsc = 'FEATURE__DESC_ASC',
  FeatureDescDesc = 'FEATURE__DESC_DESC',
  FeatureNameAsc = 'FEATURE__NAME_ASC',
  FeatureNameDesc = 'FEATURE__NAME_DESC',
  FlawsChooseAsc = 'FLAWS__CHOOSE_ASC',
  FlawsChooseDesc = 'FLAWS__CHOOSE_DESC',
  FlawsFromAsc = 'FLAWS__FROM_ASC',
  FlawsFromDesc = 'FLAWS__FROM_DESC',
  FlawsTypeAsc = 'FLAWS__TYPE_ASC',
  FlawsTypeDesc = 'FLAWS__TYPE_DESC',
  IdealsChooseAsc = 'IDEALS__CHOOSE_ASC',
  IdealsChooseDesc = 'IDEALS__CHOOSE_DESC',
  IdealsTypeAsc = 'IDEALS__TYPE_ASC',
  IdealsTypeDesc = 'IDEALS__TYPE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PersonalityTraitsChooseAsc = 'PERSONALITY_TRAITS__CHOOSE_ASC',
  PersonalityTraitsChooseDesc = 'PERSONALITY_TRAITS__CHOOSE_DESC',
  PersonalityTraitsFromAsc = 'PERSONALITY_TRAITS__FROM_ASC',
  PersonalityTraitsFromDesc = 'PERSONALITY_TRAITS__FROM_DESC',
  PersonalityTraitsTypeAsc = 'PERSONALITY_TRAITS__TYPE_ASC',
  PersonalityTraitsTypeDesc = 'PERSONALITY_TRAITS__TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyClassInput {
  ClassLevelsAsc = 'CLASS_LEVELS_ASC',
  ClassLevelsDesc = 'CLASS_LEVELS_DESC',
  HitDieAsc = 'HIT_DIE_ASC',
  HitDieDesc = 'HIT_DIE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  MultiClassingPrerequisiteOptionsChooseAsc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__CHOOSE_ASC',
  MultiClassingPrerequisiteOptionsChooseDesc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__CHOOSE_DESC',
  MultiClassingPrerequisiteOptionsTypeAsc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__TYPE_ASC',
  MultiClassingPrerequisiteOptionsTypeDesc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SpellcastingLevelAsc = 'SPELLCASTING__LEVEL_ASC',
  SpellcastingLevelDesc = 'SPELLCASTING__LEVEL_DESC',
  SpellcastingSpellcastingAbilityIndexAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__INDEX_ASC',
  SpellcastingSpellcastingAbilityIndexDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__INDEX_DESC',
  SpellcastingSpellcastingAbilityNameAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__NAME_ASC',
  SpellcastingSpellcastingAbilityNameDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__NAME_DESC',
  SpellcastingSpellcastingAbilityUrlAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__URL_ASC',
  SpellcastingSpellcastingAbilityUrlDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__URL_DESC',
  SpellsAsc = 'SPELLS_ASC',
  SpellsDesc = 'SPELLS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyConditionInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyDamageTypeInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyEquipmentCategoryInput {
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyEquipmentInput {
  ArmorCategoryAsc = 'ARMOR_CATEGORY_ASC',
  ArmorCategoryDesc = 'ARMOR_CATEGORY_DESC',
  ArmorClassBaseAsc = 'ARMOR_CLASS__BASE_ASC',
  ArmorClassBaseDesc = 'ARMOR_CLASS__BASE_DESC',
  ArmorClassDexBonusAsc = 'ARMOR_CLASS__DEX_BONUS_ASC',
  ArmorClassDexBonusDesc = 'ARMOR_CLASS__DEX_BONUS_DESC',
  ArmorClassMaxBonusAsc = 'ARMOR_CLASS__MAX_BONUS_ASC',
  ArmorClassMaxBonusDesc = 'ARMOR_CLASS__MAX_BONUS_DESC',
  CapacityAsc = 'CAPACITY_ASC',
  CapacityDesc = 'CAPACITY_DESC',
  CategoryRangeAsc = 'CATEGORY_RANGE_ASC',
  CategoryRangeDesc = 'CATEGORY_RANGE_DESC',
  CostQuantityAsc = 'COST__QUANTITY_ASC',
  CostQuantityDesc = 'COST__QUANTITY_DESC',
  CostUnitAsc = 'COST__UNIT_ASC',
  CostUnitDesc = 'COST__UNIT_DESC',
  DamageDamageDiceAsc = 'DAMAGE__DAMAGE_DICE_ASC',
  DamageDamageDiceDesc = 'DAMAGE__DAMAGE_DICE_DESC',
  DamageDamageTypeIndexAsc = 'DAMAGE__DAMAGE_TYPE__INDEX_ASC',
  DamageDamageTypeIndexDesc = 'DAMAGE__DAMAGE_TYPE__INDEX_DESC',
  DamageDamageTypeNameAsc = 'DAMAGE__DAMAGE_TYPE__NAME_ASC',
  DamageDamageTypeNameDesc = 'DAMAGE__DAMAGE_TYPE__NAME_DESC',
  DamageDamageTypeUrlAsc = 'DAMAGE__DAMAGE_TYPE__URL_ASC',
  DamageDamageTypeUrlDesc = 'DAMAGE__DAMAGE_TYPE__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  EquipmentCategoryIndexAsc = 'EQUIPMENT_CATEGORY__INDEX_ASC',
  EquipmentCategoryIndexDesc = 'EQUIPMENT_CATEGORY__INDEX_DESC',
  EquipmentCategoryNameAsc = 'EQUIPMENT_CATEGORY__NAME_ASC',
  EquipmentCategoryNameDesc = 'EQUIPMENT_CATEGORY__NAME_DESC',
  EquipmentCategoryUrlAsc = 'EQUIPMENT_CATEGORY__URL_ASC',
  EquipmentCategoryUrlDesc = 'EQUIPMENT_CATEGORY__URL_DESC',
  GearCategoryIndexAsc = 'GEAR_CATEGORY__INDEX_ASC',
  GearCategoryIndexDesc = 'GEAR_CATEGORY__INDEX_DESC',
  GearCategoryNameAsc = 'GEAR_CATEGORY__NAME_ASC',
  GearCategoryNameDesc = 'GEAR_CATEGORY__NAME_DESC',
  GearCategoryUrlAsc = 'GEAR_CATEGORY__URL_ASC',
  GearCategoryUrlDesc = 'GEAR_CATEGORY__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC',
  RangeLongAsc = 'RANGE__LONG_ASC',
  RangeLongDesc = 'RANGE__LONG_DESC',
  RangeNormalAsc = 'RANGE__NORMAL_ASC',
  RangeNormalDesc = 'RANGE__NORMAL_DESC',
  SpecialAsc = 'SPECIAL_ASC',
  SpecialDesc = 'SPECIAL_DESC',
  SpeedQuantityAsc = 'SPEED__QUANTITY_ASC',
  SpeedQuantityDesc = 'SPEED__QUANTITY_DESC',
  SpeedUnitAsc = 'SPEED__UNIT_ASC',
  SpeedUnitDesc = 'SPEED__UNIT_DESC',
  StealthDisadvantageAsc = 'STEALTH_DISADVANTAGE_ASC',
  StealthDisadvantageDesc = 'STEALTH_DISADVANTAGE_DESC',
  StrMinimumAsc = 'STR_MINIMUM_ASC',
  StrMinimumDesc = 'STR_MINIMUM_DESC',
  ThrowRangeLongAsc = 'THROW_RANGE__LONG_ASC',
  ThrowRangeLongDesc = 'THROW_RANGE__LONG_DESC',
  ThrowRangeNormalAsc = 'THROW_RANGE__NORMAL_ASC',
  ThrowRangeNormalDesc = 'THROW_RANGE__NORMAL_DESC',
  ToolCategoryAsc = 'TOOL_CATEGORY_ASC',
  ToolCategoryDesc = 'TOOL_CATEGORY_DESC',
  TwoHandedDamageDamageDiceAsc = 'TWO_HANDED_DAMAGE__DAMAGE_DICE_ASC',
  TwoHandedDamageDamageDiceDesc = 'TWO_HANDED_DAMAGE__DAMAGE_DICE_DESC',
  TwoHandedDamageDamageTypeIndexAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_ASC',
  TwoHandedDamageDamageTypeIndexDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_DESC',
  TwoHandedDamageDamageTypeNameAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_ASC',
  TwoHandedDamageDamageTypeNameDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_DESC',
  TwoHandedDamageDamageTypeUrlAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_ASC',
  TwoHandedDamageDamageTypeUrlDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  VehicleCategoryAsc = 'VEHICLE_CATEGORY_ASC',
  VehicleCategoryDesc = 'VEHICLE_CATEGORY_DESC',
  WeaponCategoryAsc = 'WEAPON_CATEGORY_ASC',
  WeaponCategoryDesc = 'WEAPON_CATEGORY_DESC',
  WeaponRangeAsc = 'WEAPON_RANGE_ASC',
  WeaponRangeDesc = 'WEAPON_RANGE_DESC',
  WeightAsc = 'WEIGHT_ASC',
  WeightDesc = 'WEIGHT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyFeatInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyFeatureInput {
  ChoiceChooseAsc = 'CHOICE__CHOOSE_ASC',
  ChoiceChooseDesc = 'CHOICE__CHOOSE_DESC',
  ChoiceTypeAsc = 'CHOICE__TYPE_ASC',
  ChoiceTypeDesc = 'CHOICE__TYPE_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  FeatureSpecificExpertiseOptionsChooseAsc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_ASC',
  FeatureSpecificExpertiseOptionsChooseDesc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_DESC',
  FeatureSpecificExpertiseOptionsTypeAsc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_ASC',
  FeatureSpecificExpertiseOptionsTypeDesc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_DESC',
  FeatureSpecificSubfeatureOptionsChooseAsc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_ASC',
  FeatureSpecificSubfeatureOptionsChooseDesc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_DESC',
  FeatureSpecificSubfeatureOptionsTypeAsc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_ASC',
  FeatureSpecificSubfeatureOptionsTypeDesc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ParentIndexAsc = 'PARENT__INDEX_ASC',
  ParentIndexDesc = 'PARENT__INDEX_DESC',
  ParentNameAsc = 'PARENT__NAME_ASC',
  ParentNameDesc = 'PARENT__NAME_DESC',
  ParentUrlAsc = 'PARENT__URL_ASC',
  ParentUrlDesc = 'PARENT__URL_DESC',
  ReferenceAsc = 'REFERENCE_ASC',
  ReferenceDesc = 'REFERENCE_DESC',
  SubclassIndexAsc = 'SUBCLASS__INDEX_ASC',
  SubclassIndexDesc = 'SUBCLASS__INDEX_DESC',
  SubclassNameAsc = 'SUBCLASS__NAME_ASC',
  SubclassNameDesc = 'SUBCLASS__NAME_DESC',
  SubclassUrlAsc = 'SUBCLASS__URL_ASC',
  SubclassUrlDesc = 'SUBCLASS__URL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyLanguageInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ScriptAsc = 'SCRIPT_ASC',
  ScriptDesc = 'SCRIPT_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  TypicalSpeakersAsc = 'TYPICAL_SPEAKERS_ASC',
  TypicalSpeakersDesc = 'TYPICAL_SPEAKERS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyLevelInput {
  AbilityScoreBonusesAsc = 'ABILITY_SCORE_BONUSES_ASC',
  AbilityScoreBonusesDesc = 'ABILITY_SCORE_BONUSES_DESC',
  ClassSpecificActionSurgesAsc = 'CLASS_SPECIFIC__ACTION_SURGES_ASC',
  ClassSpecificActionSurgesDesc = 'CLASS_SPECIFIC__ACTION_SURGES_DESC',
  ClassSpecificArcaneRecoveryLevelsAsc = 'CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_ASC',
  ClassSpecificArcaneRecoveryLevelsDesc = 'CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_DESC',
  ClassSpecificAuraRangeAsc = 'CLASS_SPECIFIC__AURA_RANGE_ASC',
  ClassSpecificAuraRangeDesc = 'CLASS_SPECIFIC__AURA_RANGE_DESC',
  ClassSpecificBardicInspirationDieAsc = 'CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_ASC',
  ClassSpecificBardicInspirationDieDesc = 'CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_DESC',
  ClassSpecificBrutalCriticalDiceAsc = 'CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_ASC',
  ClassSpecificBrutalCriticalDiceDesc = 'CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_DESC',
  ClassSpecificChannelDivinityChargesAsc = 'CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_ASC',
  ClassSpecificChannelDivinityChargesDesc = 'CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_DESC',
  ClassSpecificDestroyUndeadCrAsc = 'CLASS_SPECIFIC__DESTROY_UNDEAD_CR_ASC',
  ClassSpecificDestroyUndeadCrDesc = 'CLASS_SPECIFIC__DESTROY_UNDEAD_CR_DESC',
  ClassSpecificExtraAttacksAsc = 'CLASS_SPECIFIC__EXTRA_ATTACKS_ASC',
  ClassSpecificExtraAttacksDesc = 'CLASS_SPECIFIC__EXTRA_ATTACKS_DESC',
  ClassSpecificFavoredEnemiesAsc = 'CLASS_SPECIFIC__FAVORED_ENEMIES_ASC',
  ClassSpecificFavoredEnemiesDesc = 'CLASS_SPECIFIC__FAVORED_ENEMIES_DESC',
  ClassSpecificFavoredTerrainAsc = 'CLASS_SPECIFIC__FAVORED_TERRAIN_ASC',
  ClassSpecificFavoredTerrainDesc = 'CLASS_SPECIFIC__FAVORED_TERRAIN_DESC',
  ClassSpecificIndomitableUsesAsc = 'CLASS_SPECIFIC__INDOMITABLE_USES_ASC',
  ClassSpecificIndomitableUsesDesc = 'CLASS_SPECIFIC__INDOMITABLE_USES_DESC',
  ClassSpecificInvocationsKnownAsc = 'CLASS_SPECIFIC__INVOCATIONS_KNOWN_ASC',
  ClassSpecificInvocationsKnownDesc = 'CLASS_SPECIFIC__INVOCATIONS_KNOWN_DESC',
  ClassSpecificKiPointsAsc = 'CLASS_SPECIFIC__KI_POINTS_ASC',
  ClassSpecificKiPointsDesc = 'CLASS_SPECIFIC__KI_POINTS_DESC',
  ClassSpecificMagicalSecretsMax_5Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_ASC',
  ClassSpecificMagicalSecretsMax_5Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_DESC',
  ClassSpecificMagicalSecretsMax_7Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_ASC',
  ClassSpecificMagicalSecretsMax_7Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_DESC',
  ClassSpecificMagicalSecretsMax_9Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_ASC',
  ClassSpecificMagicalSecretsMax_9Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_DESC',
  ClassSpecificMartialArtsDiceCountAsc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_ASC',
  ClassSpecificMartialArtsDiceCountDesc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_DESC',
  ClassSpecificMartialArtsDiceValueAsc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_ASC',
  ClassSpecificMartialArtsDiceValueDesc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_DESC',
  ClassSpecificMetamagicKnownAsc = 'CLASS_SPECIFIC__METAMAGIC_KNOWN_ASC',
  ClassSpecificMetamagicKnownDesc = 'CLASS_SPECIFIC__METAMAGIC_KNOWN_DESC',
  ClassSpecificMysticArcanumLevel_6Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_ASC',
  ClassSpecificMysticArcanumLevel_6Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_DESC',
  ClassSpecificMysticArcanumLevel_7Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_ASC',
  ClassSpecificMysticArcanumLevel_7Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_DESC',
  ClassSpecificMysticArcanumLevel_8Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_ASC',
  ClassSpecificMysticArcanumLevel_8Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_DESC',
  ClassSpecificMysticArcanumLevel_9Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_ASC',
  ClassSpecificMysticArcanumLevel_9Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_DESC',
  ClassSpecificRageCountAsc = 'CLASS_SPECIFIC__RAGE_COUNT_ASC',
  ClassSpecificRageCountDesc = 'CLASS_SPECIFIC__RAGE_COUNT_DESC',
  ClassSpecificRageDamageBonusAsc = 'CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_ASC',
  ClassSpecificRageDamageBonusDesc = 'CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_DESC',
  ClassSpecificSneakAttackDiceCountAsc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_ASC',
  ClassSpecificSneakAttackDiceCountDesc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_DESC',
  ClassSpecificSneakAttackDiceValueAsc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_ASC',
  ClassSpecificSneakAttackDiceValueDesc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_DESC',
  ClassSpecificSongOfRestDieAsc = 'CLASS_SPECIFIC__SONG_OF_REST_DIE_ASC',
  ClassSpecificSongOfRestDieDesc = 'CLASS_SPECIFIC__SONG_OF_REST_DIE_DESC',
  ClassSpecificSorceryPointsAsc = 'CLASS_SPECIFIC__SORCERY_POINTS_ASC',
  ClassSpecificSorceryPointsDesc = 'CLASS_SPECIFIC__SORCERY_POINTS_DESC',
  ClassSpecificUnarmoredMovementAsc = 'CLASS_SPECIFIC__UNARMORED_MOVEMENT_ASC',
  ClassSpecificUnarmoredMovementDesc = 'CLASS_SPECIFIC__UNARMORED_MOVEMENT_DESC',
  ClassSpecificWildShapeFlyAsc = 'CLASS_SPECIFIC__WILD_SHAPE_FLY_ASC',
  ClassSpecificWildShapeFlyDesc = 'CLASS_SPECIFIC__WILD_SHAPE_FLY_DESC',
  ClassSpecificWildShapeMaxCrAsc = 'CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_ASC',
  ClassSpecificWildShapeMaxCrDesc = 'CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_DESC',
  ClassSpecificWildShapeSwimAsc = 'CLASS_SPECIFIC__WILD_SHAPE_SWIM_ASC',
  ClassSpecificWildShapeSwimDesc = 'CLASS_SPECIFIC__WILD_SHAPE_SWIM_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  ProfBonusAsc = 'PROF_BONUS_ASC',
  ProfBonusDesc = 'PROF_BONUS_DESC',
  SpellcastingCantripsKnownAsc = 'SPELLCASTING__CANTRIPS_KNOWN_ASC',
  SpellcastingCantripsKnownDesc = 'SPELLCASTING__CANTRIPS_KNOWN_DESC',
  SpellcastingSpellsKnownAsc = 'SPELLCASTING__SPELLS_KNOWN_ASC',
  SpellcastingSpellsKnownDesc = 'SPELLCASTING__SPELLS_KNOWN_DESC',
  SpellcastingSpellSlotsLevel_1Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_1_ASC',
  SpellcastingSpellSlotsLevel_1Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_1_DESC',
  SpellcastingSpellSlotsLevel_2Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_2_ASC',
  SpellcastingSpellSlotsLevel_2Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_2_DESC',
  SpellcastingSpellSlotsLevel_3Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_3_ASC',
  SpellcastingSpellSlotsLevel_3Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_3_DESC',
  SpellcastingSpellSlotsLevel_4Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_4_ASC',
  SpellcastingSpellSlotsLevel_4Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_4_DESC',
  SpellcastingSpellSlotsLevel_5Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_5_ASC',
  SpellcastingSpellSlotsLevel_5Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_5_DESC',
  SpellcastingSpellSlotsLevel_6Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_6_ASC',
  SpellcastingSpellSlotsLevel_6Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_6_DESC',
  SpellcastingSpellSlotsLevel_7Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_7_ASC',
  SpellcastingSpellSlotsLevel_7Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_7_DESC',
  SpellcastingSpellSlotsLevel_8Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_8_ASC',
  SpellcastingSpellSlotsLevel_8Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_8_DESC',
  SpellcastingSpellSlotsLevel_9Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_9_ASC',
  SpellcastingSpellSlotsLevel_9Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_9_DESC',
  SubclassSpecificAdditionalMagicalSecretsMaxLvlAsc = 'SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_ASC',
  SubclassSpecificAdditionalMagicalSecretsMaxLvlDesc = 'SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_DESC',
  SubclassSpecificAuraRangeAsc = 'SUBCLASS_SPECIFIC__AURA_RANGE_ASC',
  SubclassSpecificAuraRangeDesc = 'SUBCLASS_SPECIFIC__AURA_RANGE_DESC',
  SubclassIndexAsc = 'SUBCLASS__INDEX_ASC',
  SubclassIndexDesc = 'SUBCLASS__INDEX_DESC',
  SubclassNameAsc = 'SUBCLASS__NAME_ASC',
  SubclassNameDesc = 'SUBCLASS__NAME_DESC',
  SubclassUrlAsc = 'SUBCLASS__URL_ASC',
  SubclassUrlDesc = 'SUBCLASS__URL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyMagicItemInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  EquipmentCategoryIndexAsc = 'EQUIPMENT_CATEGORY__INDEX_ASC',
  EquipmentCategoryIndexDesc = 'EQUIPMENT_CATEGORY__INDEX_DESC',
  EquipmentCategoryNameAsc = 'EQUIPMENT_CATEGORY__NAME_ASC',
  EquipmentCategoryNameDesc = 'EQUIPMENT_CATEGORY__NAME_DESC',
  EquipmentCategoryUrlAsc = 'EQUIPMENT_CATEGORY__URL_ASC',
  EquipmentCategoryUrlDesc = 'EQUIPMENT_CATEGORY__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyMagicSchoolInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyMonsterInput {
  AlignmentAsc = 'ALIGNMENT_ASC',
  AlignmentDesc = 'ALIGNMENT_DESC',
  ArmorClassAsc = 'ARMOR_CLASS_ASC',
  ArmorClassDesc = 'ARMOR_CLASS_DESC',
  ChallengeRatingAsc = 'CHALLENGE_RATING_ASC',
  ChallengeRatingDesc = 'CHALLENGE_RATING_DESC',
  CharismaAsc = 'CHARISMA_ASC',
  CharismaDesc = 'CHARISMA_DESC',
  ConstitutionAsc = 'CONSTITUTION_ASC',
  ConstitutionDesc = 'CONSTITUTION_DESC',
  DexterityAsc = 'DEXTERITY_ASC',
  DexterityDesc = 'DEXTERITY_DESC',
  HitDiceAsc = 'HIT_DICE_ASC',
  HitDiceDesc = 'HIT_DICE_DESC',
  HitPointsAsc = 'HIT_POINTS_ASC',
  HitPointsDesc = 'HIT_POINTS_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  IntelligenceAsc = 'INTELLIGENCE_ASC',
  IntelligenceDesc = 'INTELLIGENCE_DESC',
  LanguagesAsc = 'LANGUAGES_ASC',
  LanguagesDesc = 'LANGUAGES_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SensesBlindsightAsc = 'SENSES__BLINDSIGHT_ASC',
  SensesBlindsightDesc = 'SENSES__BLINDSIGHT_DESC',
  SensesDarkvisionAsc = 'SENSES__DARKVISION_ASC',
  SensesDarkvisionDesc = 'SENSES__DARKVISION_DESC',
  SensesPassivePerceptionAsc = 'SENSES__PASSIVE_PERCEPTION_ASC',
  SensesPassivePerceptionDesc = 'SENSES__PASSIVE_PERCEPTION_DESC',
  SensesTremorsenseAsc = 'SENSES__TREMORSENSE_ASC',
  SensesTremorsenseDesc = 'SENSES__TREMORSENSE_DESC',
  SensesTruesightAsc = 'SENSES__TRUESIGHT_ASC',
  SensesTruesightDesc = 'SENSES__TRUESIGHT_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  SpeedBurrowAsc = 'SPEED__BURROW_ASC',
  SpeedBurrowDesc = 'SPEED__BURROW_DESC',
  SpeedClimbAsc = 'SPEED__CLIMB_ASC',
  SpeedClimbDesc = 'SPEED__CLIMB_DESC',
  SpeedFlyAsc = 'SPEED__FLY_ASC',
  SpeedFlyDesc = 'SPEED__FLY_DESC',
  SpeedHoverAsc = 'SPEED__HOVER_ASC',
  SpeedHoverDesc = 'SPEED__HOVER_DESC',
  SpeedSwimAsc = 'SPEED__SWIM_ASC',
  SpeedSwimDesc = 'SPEED__SWIM_DESC',
  SpeedWalkAsc = 'SPEED__WALK_ASC',
  SpeedWalkDesc = 'SPEED__WALK_DESC',
  StrengthAsc = 'STRENGTH_ASC',
  StrengthDesc = 'STRENGTH_DESC',
  SubtypeAsc = 'SUBTYPE_ASC',
  SubtypeDesc = 'SUBTYPE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  WisdomAsc = 'WISDOM_ASC',
  WisdomDesc = 'WISDOM_DESC',
  XpAsc = 'XP_ASC',
  XpDesc = 'XP_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyProficiencyInput {
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyRaceInput {
  AbilityBonusOptionsChooseAsc = 'ABILITY_BONUS_OPTIONS__CHOOSE_ASC',
  AbilityBonusOptionsChooseDesc = 'ABILITY_BONUS_OPTIONS__CHOOSE_DESC',
  AbilityBonusOptionsTypeAsc = 'ABILITY_BONUS_OPTIONS__TYPE_ASC',
  AbilityBonusOptionsTypeDesc = 'ABILITY_BONUS_OPTIONS__TYPE_DESC',
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  AlignmentAsc = 'ALIGNMENT_ASC',
  AlignmentDesc = 'ALIGNMENT_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageDescAsc = 'LANGUAGE_DESC_ASC',
  LanguageDescDesc = 'LANGUAGE_DESC_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  SizeDescriptionAsc = 'SIZE_DESCRIPTION_ASC',
  SizeDescriptionDesc = 'SIZE_DESCRIPTION_DESC',
  SpeedAsc = 'SPEED_ASC',
  SpeedDesc = 'SPEED_DESC',
  StartingProficiencyOptionsChooseAsc = 'STARTING_PROFICIENCY_OPTIONS__CHOOSE_ASC',
  StartingProficiencyOptionsChooseDesc = 'STARTING_PROFICIENCY_OPTIONS__CHOOSE_DESC',
  StartingProficiencyOptionsTypeAsc = 'STARTING_PROFICIENCY_OPTIONS__TYPE_ASC',
  StartingProficiencyOptionsTypeDesc = 'STARTING_PROFICIENCY_OPTIONS__TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyRuleInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyRuleSectionInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManySkillInput {
  AbilityScoreIndexAsc = 'ABILITY_SCORE__INDEX_ASC',
  AbilityScoreIndexDesc = 'ABILITY_SCORE__INDEX_DESC',
  AbilityScoreNameAsc = 'ABILITY_SCORE__NAME_ASC',
  AbilityScoreNameDesc = 'ABILITY_SCORE__NAME_DESC',
  AbilityScoreUrlAsc = 'ABILITY_SCORE__URL_ASC',
  AbilityScoreUrlDesc = 'ABILITY_SCORE__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManySpellInput {
  SchoolIndexAsc = 'SCHOOL__INDEX_ASC',
  SchoolIndexDesc = 'SCHOOL__INDEX_DESC',
  SchoolNameAsc = 'SCHOOL__NAME_ASC',
  SchoolNameDesc = 'SCHOOL__NAME_DESC',
  SchoolUrlAsc = 'SCHOOL__URL_ASC',
  SchoolUrlDesc = 'SCHOOL__URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManySubclassInput {
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SubclassFlavorAsc = 'SUBCLASS_FLAVOR_ASC',
  SubclassFlavorDesc = 'SUBCLASS_FLAVOR_DESC',
  SubclassLevelsAsc = 'SUBCLASS_LEVELS_ASC',
  SubclassLevelsDesc = 'SUBCLASS_LEVELS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManySubraceInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  RaceIndexAsc = 'RACE__INDEX_ASC',
  RaceIndexDesc = 'RACE__INDEX_DESC',
  RaceNameAsc = 'RACE__NAME_ASC',
  RaceNameDesc = 'RACE__NAME_DESC',
  RaceUrlAsc = 'RACE__URL_ASC',
  RaceUrlDesc = 'RACE__URL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyTraitInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ParentIndexAsc = 'PARENT__INDEX_ASC',
  ParentIndexDesc = 'PARENT__INDEX_DESC',
  ParentNameAsc = 'PARENT__NAME_ASC',
  ParentNameDesc = 'PARENT__NAME_DESC',
  ParentUrlAsc = 'PARENT__URL_ASC',
  ParentUrlDesc = 'PARENT__URL_DESC',
  ProficiencyChoicesChooseAsc = 'PROFICIENCY_CHOICES__CHOOSE_ASC',
  ProficiencyChoicesChooseDesc = 'PROFICIENCY_CHOICES__CHOOSE_DESC',
  ProficiencyChoicesTypeAsc = 'PROFICIENCY_CHOICES__TYPE_ASC',
  ProficiencyChoicesTypeDesc = 'PROFICIENCY_CHOICES__TYPE_DESC',
  TraitSpecificBreathWeaponDcDcTypeIndexAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_ASC',
  TraitSpecificBreathWeaponDcDcTypeIndexDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_DESC',
  TraitSpecificBreathWeaponDcDcTypeNameAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_ASC',
  TraitSpecificBreathWeaponDcDcTypeNameDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_DESC',
  TraitSpecificBreathWeaponDcDcTypeUrlAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_ASC',
  TraitSpecificBreathWeaponDcDcTypeUrlDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_DESC',
  TraitSpecificBreathWeaponDcSuccessTypeAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_ASC',
  TraitSpecificBreathWeaponDcSuccessTypeDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_DESC',
  TraitSpecificBreathWeaponDescAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DESC_ASC',
  TraitSpecificBreathWeaponDescDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DESC_DESC',
  TraitSpecificBreathWeaponNameAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__NAME_ASC',
  TraitSpecificBreathWeaponNameDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__NAME_DESC',
  TraitSpecificBreathWeaponUsageTimesAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_ASC',
  TraitSpecificBreathWeaponUsageTimesDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_DESC',
  TraitSpecificBreathWeaponUsageTypeAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_ASC',
  TraitSpecificBreathWeaponUsageTypeDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_DESC',
  TraitSpecificDamageTypeIndexAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_ASC',
  TraitSpecificDamageTypeIndexDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_DESC',
  TraitSpecificDamageTypeNameAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_ASC',
  TraitSpecificDamageTypeNameDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_DESC',
  TraitSpecificDamageTypeUrlAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__URL_ASC',
  TraitSpecificDamageTypeUrlDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__URL_DESC',
  TraitSpecificSpellOptionsChooseAsc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_ASC',
  TraitSpecificSpellOptionsChooseDesc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_DESC',
  TraitSpecificSpellOptionsTypeAsc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_ASC',
  TraitSpecificSpellOptionsTypeDesc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_DESC',
  TraitSpecificSubtraitOptionsChooseAsc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_ASC',
  TraitSpecificSubtraitOptionsChooseDesc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_DESC',
  TraitSpecificSubtraitOptionsTypeAsc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_ASC',
  TraitSpecificSubtraitOptionsTypeDesc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyWeaponPropertyInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneAbilityScoreInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  FullNameAsc = 'FULL_NAME_ASC',
  FullNameDesc = 'FULL_NAME_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneAlignmentInput {
  AbbreviationAsc = 'ABBREVIATION_ASC',
  AbbreviationDesc = 'ABBREVIATION_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneBackgroundInput {
  BondsChooseAsc = 'BONDS__CHOOSE_ASC',
  BondsChooseDesc = 'BONDS__CHOOSE_DESC',
  BondsFromAsc = 'BONDS__FROM_ASC',
  BondsFromDesc = 'BONDS__FROM_DESC',
  BondsTypeAsc = 'BONDS__TYPE_ASC',
  BondsTypeDesc = 'BONDS__TYPE_DESC',
  FeatureDescAsc = 'FEATURE__DESC_ASC',
  FeatureDescDesc = 'FEATURE__DESC_DESC',
  FeatureNameAsc = 'FEATURE__NAME_ASC',
  FeatureNameDesc = 'FEATURE__NAME_DESC',
  FlawsChooseAsc = 'FLAWS__CHOOSE_ASC',
  FlawsChooseDesc = 'FLAWS__CHOOSE_DESC',
  FlawsFromAsc = 'FLAWS__FROM_ASC',
  FlawsFromDesc = 'FLAWS__FROM_DESC',
  FlawsTypeAsc = 'FLAWS__TYPE_ASC',
  FlawsTypeDesc = 'FLAWS__TYPE_DESC',
  IdealsChooseAsc = 'IDEALS__CHOOSE_ASC',
  IdealsChooseDesc = 'IDEALS__CHOOSE_DESC',
  IdealsTypeAsc = 'IDEALS__TYPE_ASC',
  IdealsTypeDesc = 'IDEALS__TYPE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PersonalityTraitsChooseAsc = 'PERSONALITY_TRAITS__CHOOSE_ASC',
  PersonalityTraitsChooseDesc = 'PERSONALITY_TRAITS__CHOOSE_DESC',
  PersonalityTraitsFromAsc = 'PERSONALITY_TRAITS__FROM_ASC',
  PersonalityTraitsFromDesc = 'PERSONALITY_TRAITS__FROM_DESC',
  PersonalityTraitsTypeAsc = 'PERSONALITY_TRAITS__TYPE_ASC',
  PersonalityTraitsTypeDesc = 'PERSONALITY_TRAITS__TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneClassInput {
  ClassLevelsAsc = 'CLASS_LEVELS_ASC',
  ClassLevelsDesc = 'CLASS_LEVELS_DESC',
  HitDieAsc = 'HIT_DIE_ASC',
  HitDieDesc = 'HIT_DIE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  MultiClassingPrerequisiteOptionsChooseAsc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__CHOOSE_ASC',
  MultiClassingPrerequisiteOptionsChooseDesc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__CHOOSE_DESC',
  MultiClassingPrerequisiteOptionsTypeAsc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__TYPE_ASC',
  MultiClassingPrerequisiteOptionsTypeDesc = 'MULTI_CLASSING__PREREQUISITE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SpellcastingLevelAsc = 'SPELLCASTING__LEVEL_ASC',
  SpellcastingLevelDesc = 'SPELLCASTING__LEVEL_DESC',
  SpellcastingSpellcastingAbilityIndexAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__INDEX_ASC',
  SpellcastingSpellcastingAbilityIndexDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__INDEX_DESC',
  SpellcastingSpellcastingAbilityNameAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__NAME_ASC',
  SpellcastingSpellcastingAbilityNameDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__NAME_DESC',
  SpellcastingSpellcastingAbilityUrlAsc = 'SPELLCASTING__SPELLCASTING_ABILITY__URL_ASC',
  SpellcastingSpellcastingAbilityUrlDesc = 'SPELLCASTING__SPELLCASTING_ABILITY__URL_DESC',
  SpellsAsc = 'SPELLS_ASC',
  SpellsDesc = 'SPELLS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneConditionInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneDamageTypeInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneEquipmentCategoryInput {
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneEquipmentInput {
  ArmorCategoryAsc = 'ARMOR_CATEGORY_ASC',
  ArmorCategoryDesc = 'ARMOR_CATEGORY_DESC',
  ArmorClassBaseAsc = 'ARMOR_CLASS__BASE_ASC',
  ArmorClassBaseDesc = 'ARMOR_CLASS__BASE_DESC',
  ArmorClassDexBonusAsc = 'ARMOR_CLASS__DEX_BONUS_ASC',
  ArmorClassDexBonusDesc = 'ARMOR_CLASS__DEX_BONUS_DESC',
  ArmorClassMaxBonusAsc = 'ARMOR_CLASS__MAX_BONUS_ASC',
  ArmorClassMaxBonusDesc = 'ARMOR_CLASS__MAX_BONUS_DESC',
  CapacityAsc = 'CAPACITY_ASC',
  CapacityDesc = 'CAPACITY_DESC',
  CategoryRangeAsc = 'CATEGORY_RANGE_ASC',
  CategoryRangeDesc = 'CATEGORY_RANGE_DESC',
  CostQuantityAsc = 'COST__QUANTITY_ASC',
  CostQuantityDesc = 'COST__QUANTITY_DESC',
  CostUnitAsc = 'COST__UNIT_ASC',
  CostUnitDesc = 'COST__UNIT_DESC',
  DamageDamageDiceAsc = 'DAMAGE__DAMAGE_DICE_ASC',
  DamageDamageDiceDesc = 'DAMAGE__DAMAGE_DICE_DESC',
  DamageDamageTypeIndexAsc = 'DAMAGE__DAMAGE_TYPE__INDEX_ASC',
  DamageDamageTypeIndexDesc = 'DAMAGE__DAMAGE_TYPE__INDEX_DESC',
  DamageDamageTypeNameAsc = 'DAMAGE__DAMAGE_TYPE__NAME_ASC',
  DamageDamageTypeNameDesc = 'DAMAGE__DAMAGE_TYPE__NAME_DESC',
  DamageDamageTypeUrlAsc = 'DAMAGE__DAMAGE_TYPE__URL_ASC',
  DamageDamageTypeUrlDesc = 'DAMAGE__DAMAGE_TYPE__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  EquipmentCategoryIndexAsc = 'EQUIPMENT_CATEGORY__INDEX_ASC',
  EquipmentCategoryIndexDesc = 'EQUIPMENT_CATEGORY__INDEX_DESC',
  EquipmentCategoryNameAsc = 'EQUIPMENT_CATEGORY__NAME_ASC',
  EquipmentCategoryNameDesc = 'EQUIPMENT_CATEGORY__NAME_DESC',
  EquipmentCategoryUrlAsc = 'EQUIPMENT_CATEGORY__URL_ASC',
  EquipmentCategoryUrlDesc = 'EQUIPMENT_CATEGORY__URL_DESC',
  GearCategoryIndexAsc = 'GEAR_CATEGORY__INDEX_ASC',
  GearCategoryIndexDesc = 'GEAR_CATEGORY__INDEX_DESC',
  GearCategoryNameAsc = 'GEAR_CATEGORY__NAME_ASC',
  GearCategoryNameDesc = 'GEAR_CATEGORY__NAME_DESC',
  GearCategoryUrlAsc = 'GEAR_CATEGORY__URL_ASC',
  GearCategoryUrlDesc = 'GEAR_CATEGORY__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC',
  RangeLongAsc = 'RANGE__LONG_ASC',
  RangeLongDesc = 'RANGE__LONG_DESC',
  RangeNormalAsc = 'RANGE__NORMAL_ASC',
  RangeNormalDesc = 'RANGE__NORMAL_DESC',
  SpecialAsc = 'SPECIAL_ASC',
  SpecialDesc = 'SPECIAL_DESC',
  SpeedQuantityAsc = 'SPEED__QUANTITY_ASC',
  SpeedQuantityDesc = 'SPEED__QUANTITY_DESC',
  SpeedUnitAsc = 'SPEED__UNIT_ASC',
  SpeedUnitDesc = 'SPEED__UNIT_DESC',
  StealthDisadvantageAsc = 'STEALTH_DISADVANTAGE_ASC',
  StealthDisadvantageDesc = 'STEALTH_DISADVANTAGE_DESC',
  StrMinimumAsc = 'STR_MINIMUM_ASC',
  StrMinimumDesc = 'STR_MINIMUM_DESC',
  ThrowRangeLongAsc = 'THROW_RANGE__LONG_ASC',
  ThrowRangeLongDesc = 'THROW_RANGE__LONG_DESC',
  ThrowRangeNormalAsc = 'THROW_RANGE__NORMAL_ASC',
  ThrowRangeNormalDesc = 'THROW_RANGE__NORMAL_DESC',
  ToolCategoryAsc = 'TOOL_CATEGORY_ASC',
  ToolCategoryDesc = 'TOOL_CATEGORY_DESC',
  TwoHandedDamageDamageDiceAsc = 'TWO_HANDED_DAMAGE__DAMAGE_DICE_ASC',
  TwoHandedDamageDamageDiceDesc = 'TWO_HANDED_DAMAGE__DAMAGE_DICE_DESC',
  TwoHandedDamageDamageTypeIndexAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_ASC',
  TwoHandedDamageDamageTypeIndexDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__INDEX_DESC',
  TwoHandedDamageDamageTypeNameAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_ASC',
  TwoHandedDamageDamageTypeNameDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__NAME_DESC',
  TwoHandedDamageDamageTypeUrlAsc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_ASC',
  TwoHandedDamageDamageTypeUrlDesc = 'TWO_HANDED_DAMAGE__DAMAGE_TYPE__URL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  VehicleCategoryAsc = 'VEHICLE_CATEGORY_ASC',
  VehicleCategoryDesc = 'VEHICLE_CATEGORY_DESC',
  WeaponCategoryAsc = 'WEAPON_CATEGORY_ASC',
  WeaponCategoryDesc = 'WEAPON_CATEGORY_DESC',
  WeaponRangeAsc = 'WEAPON_RANGE_ASC',
  WeaponRangeDesc = 'WEAPON_RANGE_DESC',
  WeightAsc = 'WEIGHT_ASC',
  WeightDesc = 'WEIGHT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneFeatInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneFeatureInput {
  ChoiceChooseAsc = 'CHOICE__CHOOSE_ASC',
  ChoiceChooseDesc = 'CHOICE__CHOOSE_DESC',
  ChoiceTypeAsc = 'CHOICE__TYPE_ASC',
  ChoiceTypeDesc = 'CHOICE__TYPE_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  FeatureSpecificExpertiseOptionsChooseAsc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_ASC',
  FeatureSpecificExpertiseOptionsChooseDesc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__CHOOSE_DESC',
  FeatureSpecificExpertiseOptionsTypeAsc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_ASC',
  FeatureSpecificExpertiseOptionsTypeDesc = 'FEATURE_SPECIFIC__EXPERTISE_OPTIONS__TYPE_DESC',
  FeatureSpecificSubfeatureOptionsChooseAsc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_ASC',
  FeatureSpecificSubfeatureOptionsChooseDesc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__CHOOSE_DESC',
  FeatureSpecificSubfeatureOptionsTypeAsc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_ASC',
  FeatureSpecificSubfeatureOptionsTypeDesc = 'FEATURE_SPECIFIC__SUBFEATURE_OPTIONS__TYPE_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ParentIndexAsc = 'PARENT__INDEX_ASC',
  ParentIndexDesc = 'PARENT__INDEX_DESC',
  ParentNameAsc = 'PARENT__NAME_ASC',
  ParentNameDesc = 'PARENT__NAME_DESC',
  ParentUrlAsc = 'PARENT__URL_ASC',
  ParentUrlDesc = 'PARENT__URL_DESC',
  ReferenceAsc = 'REFERENCE_ASC',
  ReferenceDesc = 'REFERENCE_DESC',
  SubclassIndexAsc = 'SUBCLASS__INDEX_ASC',
  SubclassIndexDesc = 'SUBCLASS__INDEX_DESC',
  SubclassNameAsc = 'SUBCLASS__NAME_ASC',
  SubclassNameDesc = 'SUBCLASS__NAME_DESC',
  SubclassUrlAsc = 'SUBCLASS__URL_ASC',
  SubclassUrlDesc = 'SUBCLASS__URL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneLanguageInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ScriptAsc = 'SCRIPT_ASC',
  ScriptDesc = 'SCRIPT_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  TypicalSpeakersAsc = 'TYPICAL_SPEAKERS_ASC',
  TypicalSpeakersDesc = 'TYPICAL_SPEAKERS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneLevelInput {
  AbilityScoreBonusesAsc = 'ABILITY_SCORE_BONUSES_ASC',
  AbilityScoreBonusesDesc = 'ABILITY_SCORE_BONUSES_DESC',
  ClassSpecificActionSurgesAsc = 'CLASS_SPECIFIC__ACTION_SURGES_ASC',
  ClassSpecificActionSurgesDesc = 'CLASS_SPECIFIC__ACTION_SURGES_DESC',
  ClassSpecificArcaneRecoveryLevelsAsc = 'CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_ASC',
  ClassSpecificArcaneRecoveryLevelsDesc = 'CLASS_SPECIFIC__ARCANE_RECOVERY_LEVELS_DESC',
  ClassSpecificAuraRangeAsc = 'CLASS_SPECIFIC__AURA_RANGE_ASC',
  ClassSpecificAuraRangeDesc = 'CLASS_SPECIFIC__AURA_RANGE_DESC',
  ClassSpecificBardicInspirationDieAsc = 'CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_ASC',
  ClassSpecificBardicInspirationDieDesc = 'CLASS_SPECIFIC__BARDIC_INSPIRATION_DIE_DESC',
  ClassSpecificBrutalCriticalDiceAsc = 'CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_ASC',
  ClassSpecificBrutalCriticalDiceDesc = 'CLASS_SPECIFIC__BRUTAL_CRITICAL_DICE_DESC',
  ClassSpecificChannelDivinityChargesAsc = 'CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_ASC',
  ClassSpecificChannelDivinityChargesDesc = 'CLASS_SPECIFIC__CHANNEL_DIVINITY_CHARGES_DESC',
  ClassSpecificDestroyUndeadCrAsc = 'CLASS_SPECIFIC__DESTROY_UNDEAD_CR_ASC',
  ClassSpecificDestroyUndeadCrDesc = 'CLASS_SPECIFIC__DESTROY_UNDEAD_CR_DESC',
  ClassSpecificExtraAttacksAsc = 'CLASS_SPECIFIC__EXTRA_ATTACKS_ASC',
  ClassSpecificExtraAttacksDesc = 'CLASS_SPECIFIC__EXTRA_ATTACKS_DESC',
  ClassSpecificFavoredEnemiesAsc = 'CLASS_SPECIFIC__FAVORED_ENEMIES_ASC',
  ClassSpecificFavoredEnemiesDesc = 'CLASS_SPECIFIC__FAVORED_ENEMIES_DESC',
  ClassSpecificFavoredTerrainAsc = 'CLASS_SPECIFIC__FAVORED_TERRAIN_ASC',
  ClassSpecificFavoredTerrainDesc = 'CLASS_SPECIFIC__FAVORED_TERRAIN_DESC',
  ClassSpecificIndomitableUsesAsc = 'CLASS_SPECIFIC__INDOMITABLE_USES_ASC',
  ClassSpecificIndomitableUsesDesc = 'CLASS_SPECIFIC__INDOMITABLE_USES_DESC',
  ClassSpecificInvocationsKnownAsc = 'CLASS_SPECIFIC__INVOCATIONS_KNOWN_ASC',
  ClassSpecificInvocationsKnownDesc = 'CLASS_SPECIFIC__INVOCATIONS_KNOWN_DESC',
  ClassSpecificKiPointsAsc = 'CLASS_SPECIFIC__KI_POINTS_ASC',
  ClassSpecificKiPointsDesc = 'CLASS_SPECIFIC__KI_POINTS_DESC',
  ClassSpecificMagicalSecretsMax_5Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_ASC',
  ClassSpecificMagicalSecretsMax_5Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_5_DESC',
  ClassSpecificMagicalSecretsMax_7Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_ASC',
  ClassSpecificMagicalSecretsMax_7Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_7_DESC',
  ClassSpecificMagicalSecretsMax_9Asc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_ASC',
  ClassSpecificMagicalSecretsMax_9Desc = 'CLASS_SPECIFIC__MAGICAL_SECRETS_MAX_9_DESC',
  ClassSpecificMartialArtsDiceCountAsc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_ASC',
  ClassSpecificMartialArtsDiceCountDesc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_COUNT_DESC',
  ClassSpecificMartialArtsDiceValueAsc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_ASC',
  ClassSpecificMartialArtsDiceValueDesc = 'CLASS_SPECIFIC__MARTIAL_ARTS__DICE_VALUE_DESC',
  ClassSpecificMetamagicKnownAsc = 'CLASS_SPECIFIC__METAMAGIC_KNOWN_ASC',
  ClassSpecificMetamagicKnownDesc = 'CLASS_SPECIFIC__METAMAGIC_KNOWN_DESC',
  ClassSpecificMysticArcanumLevel_6Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_ASC',
  ClassSpecificMysticArcanumLevel_6Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_6_DESC',
  ClassSpecificMysticArcanumLevel_7Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_ASC',
  ClassSpecificMysticArcanumLevel_7Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_7_DESC',
  ClassSpecificMysticArcanumLevel_8Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_ASC',
  ClassSpecificMysticArcanumLevel_8Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_8_DESC',
  ClassSpecificMysticArcanumLevel_9Asc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_ASC',
  ClassSpecificMysticArcanumLevel_9Desc = 'CLASS_SPECIFIC__MYSTIC_ARCANUM_LEVEL_9_DESC',
  ClassSpecificRageCountAsc = 'CLASS_SPECIFIC__RAGE_COUNT_ASC',
  ClassSpecificRageCountDesc = 'CLASS_SPECIFIC__RAGE_COUNT_DESC',
  ClassSpecificRageDamageBonusAsc = 'CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_ASC',
  ClassSpecificRageDamageBonusDesc = 'CLASS_SPECIFIC__RAGE_DAMAGE_BONUS_DESC',
  ClassSpecificSneakAttackDiceCountAsc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_ASC',
  ClassSpecificSneakAttackDiceCountDesc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_COUNT_DESC',
  ClassSpecificSneakAttackDiceValueAsc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_ASC',
  ClassSpecificSneakAttackDiceValueDesc = 'CLASS_SPECIFIC__SNEAK_ATTACK__DICE_VALUE_DESC',
  ClassSpecificSongOfRestDieAsc = 'CLASS_SPECIFIC__SONG_OF_REST_DIE_ASC',
  ClassSpecificSongOfRestDieDesc = 'CLASS_SPECIFIC__SONG_OF_REST_DIE_DESC',
  ClassSpecificSorceryPointsAsc = 'CLASS_SPECIFIC__SORCERY_POINTS_ASC',
  ClassSpecificSorceryPointsDesc = 'CLASS_SPECIFIC__SORCERY_POINTS_DESC',
  ClassSpecificUnarmoredMovementAsc = 'CLASS_SPECIFIC__UNARMORED_MOVEMENT_ASC',
  ClassSpecificUnarmoredMovementDesc = 'CLASS_SPECIFIC__UNARMORED_MOVEMENT_DESC',
  ClassSpecificWildShapeFlyAsc = 'CLASS_SPECIFIC__WILD_SHAPE_FLY_ASC',
  ClassSpecificWildShapeFlyDesc = 'CLASS_SPECIFIC__WILD_SHAPE_FLY_DESC',
  ClassSpecificWildShapeMaxCrAsc = 'CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_ASC',
  ClassSpecificWildShapeMaxCrDesc = 'CLASS_SPECIFIC__WILD_SHAPE_MAX_CR_DESC',
  ClassSpecificWildShapeSwimAsc = 'CLASS_SPECIFIC__WILD_SHAPE_SWIM_ASC',
  ClassSpecificWildShapeSwimDesc = 'CLASS_SPECIFIC__WILD_SHAPE_SWIM_DESC',
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LevelAsc = 'LEVEL_ASC',
  LevelDesc = 'LEVEL_DESC',
  ProfBonusAsc = 'PROF_BONUS_ASC',
  ProfBonusDesc = 'PROF_BONUS_DESC',
  SpellcastingCantripsKnownAsc = 'SPELLCASTING__CANTRIPS_KNOWN_ASC',
  SpellcastingCantripsKnownDesc = 'SPELLCASTING__CANTRIPS_KNOWN_DESC',
  SpellcastingSpellsKnownAsc = 'SPELLCASTING__SPELLS_KNOWN_ASC',
  SpellcastingSpellsKnownDesc = 'SPELLCASTING__SPELLS_KNOWN_DESC',
  SpellcastingSpellSlotsLevel_1Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_1_ASC',
  SpellcastingSpellSlotsLevel_1Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_1_DESC',
  SpellcastingSpellSlotsLevel_2Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_2_ASC',
  SpellcastingSpellSlotsLevel_2Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_2_DESC',
  SpellcastingSpellSlotsLevel_3Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_3_ASC',
  SpellcastingSpellSlotsLevel_3Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_3_DESC',
  SpellcastingSpellSlotsLevel_4Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_4_ASC',
  SpellcastingSpellSlotsLevel_4Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_4_DESC',
  SpellcastingSpellSlotsLevel_5Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_5_ASC',
  SpellcastingSpellSlotsLevel_5Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_5_DESC',
  SpellcastingSpellSlotsLevel_6Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_6_ASC',
  SpellcastingSpellSlotsLevel_6Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_6_DESC',
  SpellcastingSpellSlotsLevel_7Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_7_ASC',
  SpellcastingSpellSlotsLevel_7Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_7_DESC',
  SpellcastingSpellSlotsLevel_8Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_8_ASC',
  SpellcastingSpellSlotsLevel_8Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_8_DESC',
  SpellcastingSpellSlotsLevel_9Asc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_9_ASC',
  SpellcastingSpellSlotsLevel_9Desc = 'SPELLCASTING__SPELL_SLOTS_LEVEL_9_DESC',
  SubclassSpecificAdditionalMagicalSecretsMaxLvlAsc = 'SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_ASC',
  SubclassSpecificAdditionalMagicalSecretsMaxLvlDesc = 'SUBCLASS_SPECIFIC__ADDITIONAL_MAGICAL_SECRETS_MAX_LVL_DESC',
  SubclassSpecificAuraRangeAsc = 'SUBCLASS_SPECIFIC__AURA_RANGE_ASC',
  SubclassSpecificAuraRangeDesc = 'SUBCLASS_SPECIFIC__AURA_RANGE_DESC',
  SubclassIndexAsc = 'SUBCLASS__INDEX_ASC',
  SubclassIndexDesc = 'SUBCLASS__INDEX_DESC',
  SubclassNameAsc = 'SUBCLASS__NAME_ASC',
  SubclassNameDesc = 'SUBCLASS__NAME_DESC',
  SubclassUrlAsc = 'SUBCLASS__URL_ASC',
  SubclassUrlDesc = 'SUBCLASS__URL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneMagicItemInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  EquipmentCategoryIndexAsc = 'EQUIPMENT_CATEGORY__INDEX_ASC',
  EquipmentCategoryIndexDesc = 'EQUIPMENT_CATEGORY__INDEX_DESC',
  EquipmentCategoryNameAsc = 'EQUIPMENT_CATEGORY__NAME_ASC',
  EquipmentCategoryNameDesc = 'EQUIPMENT_CATEGORY__NAME_DESC',
  EquipmentCategoryUrlAsc = 'EQUIPMENT_CATEGORY__URL_ASC',
  EquipmentCategoryUrlDesc = 'EQUIPMENT_CATEGORY__URL_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneMagicSchoolInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneMonsterInput {
  AlignmentAsc = 'ALIGNMENT_ASC',
  AlignmentDesc = 'ALIGNMENT_DESC',
  ArmorClassAsc = 'ARMOR_CLASS_ASC',
  ArmorClassDesc = 'ARMOR_CLASS_DESC',
  ChallengeRatingAsc = 'CHALLENGE_RATING_ASC',
  ChallengeRatingDesc = 'CHALLENGE_RATING_DESC',
  CharismaAsc = 'CHARISMA_ASC',
  CharismaDesc = 'CHARISMA_DESC',
  ConstitutionAsc = 'CONSTITUTION_ASC',
  ConstitutionDesc = 'CONSTITUTION_DESC',
  DexterityAsc = 'DEXTERITY_ASC',
  DexterityDesc = 'DEXTERITY_DESC',
  HitDiceAsc = 'HIT_DICE_ASC',
  HitDiceDesc = 'HIT_DICE_DESC',
  HitPointsAsc = 'HIT_POINTS_ASC',
  HitPointsDesc = 'HIT_POINTS_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  IntelligenceAsc = 'INTELLIGENCE_ASC',
  IntelligenceDesc = 'INTELLIGENCE_DESC',
  LanguagesAsc = 'LANGUAGES_ASC',
  LanguagesDesc = 'LANGUAGES_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SensesBlindsightAsc = 'SENSES__BLINDSIGHT_ASC',
  SensesBlindsightDesc = 'SENSES__BLINDSIGHT_DESC',
  SensesDarkvisionAsc = 'SENSES__DARKVISION_ASC',
  SensesDarkvisionDesc = 'SENSES__DARKVISION_DESC',
  SensesPassivePerceptionAsc = 'SENSES__PASSIVE_PERCEPTION_ASC',
  SensesPassivePerceptionDesc = 'SENSES__PASSIVE_PERCEPTION_DESC',
  SensesTremorsenseAsc = 'SENSES__TREMORSENSE_ASC',
  SensesTremorsenseDesc = 'SENSES__TREMORSENSE_DESC',
  SensesTruesightAsc = 'SENSES__TRUESIGHT_ASC',
  SensesTruesightDesc = 'SENSES__TRUESIGHT_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  SpeedBurrowAsc = 'SPEED__BURROW_ASC',
  SpeedBurrowDesc = 'SPEED__BURROW_DESC',
  SpeedClimbAsc = 'SPEED__CLIMB_ASC',
  SpeedClimbDesc = 'SPEED__CLIMB_DESC',
  SpeedFlyAsc = 'SPEED__FLY_ASC',
  SpeedFlyDesc = 'SPEED__FLY_DESC',
  SpeedHoverAsc = 'SPEED__HOVER_ASC',
  SpeedHoverDesc = 'SPEED__HOVER_DESC',
  SpeedSwimAsc = 'SPEED__SWIM_ASC',
  SpeedSwimDesc = 'SPEED__SWIM_DESC',
  SpeedWalkAsc = 'SPEED__WALK_ASC',
  SpeedWalkDesc = 'SPEED__WALK_DESC',
  StrengthAsc = 'STRENGTH_ASC',
  StrengthDesc = 'STRENGTH_DESC',
  SubtypeAsc = 'SUBTYPE_ASC',
  SubtypeDesc = 'SUBTYPE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  WisdomAsc = 'WISDOM_ASC',
  WisdomDesc = 'WISDOM_DESC',
  XpAsc = 'XP_ASC',
  XpDesc = 'XP_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneProficiencyInput {
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneRaceInput {
  AbilityBonusOptionsChooseAsc = 'ABILITY_BONUS_OPTIONS__CHOOSE_ASC',
  AbilityBonusOptionsChooseDesc = 'ABILITY_BONUS_OPTIONS__CHOOSE_DESC',
  AbilityBonusOptionsTypeAsc = 'ABILITY_BONUS_OPTIONS__TYPE_ASC',
  AbilityBonusOptionsTypeDesc = 'ABILITY_BONUS_OPTIONS__TYPE_DESC',
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  AlignmentAsc = 'ALIGNMENT_ASC',
  AlignmentDesc = 'ALIGNMENT_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageDescAsc = 'LANGUAGE_DESC_ASC',
  LanguageDescDesc = 'LANGUAGE_DESC_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SizeAsc = 'SIZE_ASC',
  SizeDesc = 'SIZE_DESC',
  SizeDescriptionAsc = 'SIZE_DESCRIPTION_ASC',
  SizeDescriptionDesc = 'SIZE_DESCRIPTION_DESC',
  SpeedAsc = 'SPEED_ASC',
  SpeedDesc = 'SPEED_DESC',
  StartingProficiencyOptionsChooseAsc = 'STARTING_PROFICIENCY_OPTIONS__CHOOSE_ASC',
  StartingProficiencyOptionsChooseDesc = 'STARTING_PROFICIENCY_OPTIONS__CHOOSE_DESC',
  StartingProficiencyOptionsTypeAsc = 'STARTING_PROFICIENCY_OPTIONS__TYPE_ASC',
  StartingProficiencyOptionsTypeDesc = 'STARTING_PROFICIENCY_OPTIONS__TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneRuleInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneRuleSectionInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneSkillInput {
  AbilityScoreIndexAsc = 'ABILITY_SCORE__INDEX_ASC',
  AbilityScoreIndexDesc = 'ABILITY_SCORE__INDEX_DESC',
  AbilityScoreNameAsc = 'ABILITY_SCORE__NAME_ASC',
  AbilityScoreNameDesc = 'ABILITY_SCORE__NAME_DESC',
  AbilityScoreUrlAsc = 'ABILITY_SCORE__URL_ASC',
  AbilityScoreUrlDesc = 'ABILITY_SCORE__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneSpellInput {
  SchoolIndexAsc = 'SCHOOL__INDEX_ASC',
  SchoolIndexDesc = 'SCHOOL__INDEX_DESC',
  SchoolNameAsc = 'SCHOOL__NAME_ASC',
  SchoolNameDesc = 'SCHOOL__NAME_DESC',
  SchoolUrlAsc = 'SCHOOL__URL_ASC',
  SchoolUrlDesc = 'SCHOOL__URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneSubclassInput {
  ClassIndexAsc = 'CLASS__INDEX_ASC',
  ClassIndexDesc = 'CLASS__INDEX_DESC',
  ClassNameAsc = 'CLASS__NAME_ASC',
  ClassNameDesc = 'CLASS__NAME_DESC',
  ClassUrlAsc = 'CLASS__URL_ASC',
  ClassUrlDesc = 'CLASS__URL_DESC',
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SubclassFlavorAsc = 'SUBCLASS_FLAVOR_ASC',
  SubclassFlavorDesc = 'SUBCLASS_FLAVOR_DESC',
  SubclassLevelsAsc = 'SUBCLASS_LEVELS_ASC',
  SubclassLevelsDesc = 'SUBCLASS_LEVELS_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneSubraceInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  LanguageOptionsChooseAsc = 'LANGUAGE_OPTIONS__CHOOSE_ASC',
  LanguageOptionsChooseDesc = 'LANGUAGE_OPTIONS__CHOOSE_DESC',
  LanguageOptionsTypeAsc = 'LANGUAGE_OPTIONS__TYPE_ASC',
  LanguageOptionsTypeDesc = 'LANGUAGE_OPTIONS__TYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  RaceIndexAsc = 'RACE__INDEX_ASC',
  RaceIndexDesc = 'RACE__INDEX_DESC',
  RaceNameAsc = 'RACE__NAME_ASC',
  RaceNameDesc = 'RACE__NAME_DESC',
  RaceUrlAsc = 'RACE__URL_ASC',
  RaceUrlDesc = 'RACE__URL_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneTraitInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ParentIndexAsc = 'PARENT__INDEX_ASC',
  ParentIndexDesc = 'PARENT__INDEX_DESC',
  ParentNameAsc = 'PARENT__NAME_ASC',
  ParentNameDesc = 'PARENT__NAME_DESC',
  ParentUrlAsc = 'PARENT__URL_ASC',
  ParentUrlDesc = 'PARENT__URL_DESC',
  ProficiencyChoicesChooseAsc = 'PROFICIENCY_CHOICES__CHOOSE_ASC',
  ProficiencyChoicesChooseDesc = 'PROFICIENCY_CHOICES__CHOOSE_DESC',
  ProficiencyChoicesTypeAsc = 'PROFICIENCY_CHOICES__TYPE_ASC',
  ProficiencyChoicesTypeDesc = 'PROFICIENCY_CHOICES__TYPE_DESC',
  TraitSpecificBreathWeaponDcDcTypeIndexAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_ASC',
  TraitSpecificBreathWeaponDcDcTypeIndexDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__INDEX_DESC',
  TraitSpecificBreathWeaponDcDcTypeNameAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_ASC',
  TraitSpecificBreathWeaponDcDcTypeNameDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__NAME_DESC',
  TraitSpecificBreathWeaponDcDcTypeUrlAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_ASC',
  TraitSpecificBreathWeaponDcDcTypeUrlDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__DC_TYPE__URL_DESC',
  TraitSpecificBreathWeaponDcSuccessTypeAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_ASC',
  TraitSpecificBreathWeaponDcSuccessTypeDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DC__SUCCESS_TYPE_DESC',
  TraitSpecificBreathWeaponDescAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DESC_ASC',
  TraitSpecificBreathWeaponDescDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__DESC_DESC',
  TraitSpecificBreathWeaponNameAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__NAME_ASC',
  TraitSpecificBreathWeaponNameDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__NAME_DESC',
  TraitSpecificBreathWeaponUsageTimesAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_ASC',
  TraitSpecificBreathWeaponUsageTimesDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TIMES_DESC',
  TraitSpecificBreathWeaponUsageTypeAsc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_ASC',
  TraitSpecificBreathWeaponUsageTypeDesc = 'TRAIT_SPECIFIC__BREATH_WEAPON__USAGE__TYPE_DESC',
  TraitSpecificDamageTypeIndexAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_ASC',
  TraitSpecificDamageTypeIndexDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__INDEX_DESC',
  TraitSpecificDamageTypeNameAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_ASC',
  TraitSpecificDamageTypeNameDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__NAME_DESC',
  TraitSpecificDamageTypeUrlAsc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__URL_ASC',
  TraitSpecificDamageTypeUrlDesc = 'TRAIT_SPECIFIC__DAMAGE_TYPE__URL_DESC',
  TraitSpecificSpellOptionsChooseAsc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_ASC',
  TraitSpecificSpellOptionsChooseDesc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__CHOOSE_DESC',
  TraitSpecificSpellOptionsTypeAsc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_ASC',
  TraitSpecificSpellOptionsTypeDesc = 'TRAIT_SPECIFIC__SPELL_OPTIONS__TYPE_DESC',
  TraitSpecificSubtraitOptionsChooseAsc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_ASC',
  TraitSpecificSubtraitOptionsChooseDesc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__CHOOSE_DESC',
  TraitSpecificSubtraitOptionsTypeAsc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_ASC',
  TraitSpecificSubtraitOptionsTypeDesc = 'TRAIT_SPECIFIC__SUBTRAIT_OPTIONS__TYPE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneWeaponPropertyInput {
  DescAsc = 'DESC_ASC',
  DescDesc = 'DESC_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type Spell = {
  __typename?: 'Spell';
  _id: Scalars['String'];
  area_of_effect?: Maybe<SpellArea_Of_Effect>;
  attack_type?: Maybe<Scalars['String']>;
  casting_time?: Maybe<Scalars['String']>;
  classes?: Maybe<Array<Maybe<SpellClasses>>>;
  components?: Maybe<Array<Maybe<Scalars['String']>>>;
  concentration?: Maybe<Scalars['Boolean']>;
  damage?: Maybe<SpellDamage>;
  dc?: Maybe<SpellDc>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  duration?: Maybe<Scalars['String']>;
  heal_at_slot_level?: Maybe<Scalars['JSON']>;
  higher_level?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Float']>;
  material?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  range?: Maybe<Scalars['String']>;
  ritual?: Maybe<Scalars['Boolean']>;
  school?: Maybe<MagicSchool>;
  subclasses?: Maybe<Array<Maybe<SpellSubclasses>>>;
  url?: Maybe<Scalars['String']>;
};


export type SpellSchoolArgs = {
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneMagicSchoolInput>;
};

export type SpellArea_Of_Effect = {
  __typename?: 'SpellArea_of_effect';
  size?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type SpellClasses = {
  __typename?: 'SpellClasses';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SpellDamage = {
  __typename?: 'SpellDamage';
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  damage_at_slot_level?: Maybe<Scalars['JSON']>;
  damage_type?: Maybe<SpellDamageDamage_Type>;
};

export type SpellDamageDamage_Type = {
  __typename?: 'SpellDamageDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SpellDc = {
  __typename?: 'SpellDc';
  dc_success?: Maybe<Scalars['String']>;
  dc_type?: Maybe<SpellDcDc_Type>;
  desc?: Maybe<Scalars['String']>;
};

export type SpellDcDc_Type = {
  __typename?: 'SpellDcDc_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SpellSubclasses = {
  __typename?: 'SpellSubclasses';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Subclass = {
  __typename?: 'Subclass';
  _id: Scalars['String'];
  class?: Maybe<SubclassClass>;
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  spells?: Maybe<Array<Maybe<SubclassSpells>>>;
  subclass_flavor?: Maybe<Scalars['String']>;
  subclass_levels: Array<Level>;
  url?: Maybe<Scalars['String']>;
};


export type SubclassSubclass_LevelsArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyLevelInput>;
};

export type SubclassClass = {
  __typename?: 'SubclassClass';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubclassSpells = {
  __typename?: 'SubclassSpells';
  _id?: Maybe<Scalars['MongoID']>;
  prerequisites?: Maybe<Array<Maybe<SubclassSpellsPrerequisites>>>;
  spell?: Maybe<SubclassSpellsSpell>;
};

export type SubclassSpellsPrerequisites = {
  __typename?: 'SubclassSpellsPrerequisites';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubclassSpellsSpell = {
  __typename?: 'SubclassSpellsSpell';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Subrace = {
  __typename?: 'Subrace';
  _id: Scalars['String'];
  ability_bonuses?: Maybe<Array<Maybe<SubraceAbility_Bonuses>>>;
  desc?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['String']>;
  language_options?: Maybe<SubraceLanguage_Options>;
  name?: Maybe<Scalars['String']>;
  race?: Maybe<SubraceRace>;
  racial_traits: Array<Trait>;
  starting_proficiencies?: Maybe<Array<Maybe<SubraceStarting_Proficiencies>>>;
  url?: Maybe<Scalars['String']>;
};


export type SubraceRacial_TraitsArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyTraitInput>;
};

export type SubraceAbility_Bonuses = {
  __typename?: 'SubraceAbility_bonuses';
  _id?: Maybe<Scalars['MongoID']>;
  ability_score?: Maybe<SubraceAbility_BonusesAbility_Score>;
  bonus?: Maybe<Scalars['Float']>;
};

export type SubraceAbility_BonusesAbility_Score = {
  __typename?: 'SubraceAbility_bonusesAbility_score';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubraceLanguage_Options = {
  __typename?: 'SubraceLanguage_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<SubraceLanguage_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type SubraceLanguage_OptionsFrom = {
  __typename?: 'SubraceLanguage_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubraceRace = {
  __typename?: 'SubraceRace';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SubraceStarting_Proficiencies = {
  __typename?: 'SubraceStarting_proficiencies';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Trait = {
  __typename?: 'Trait';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<TraitParent>;
  proficiencies: Array<Proficiency>;
  proficiency_choices?: Maybe<TraitProficiency_Choices>;
  races?: Maybe<Array<Maybe<TraitRaces>>>;
  subraces?: Maybe<Array<Maybe<TraitSubraces>>>;
  trait_specific?: Maybe<TraitTrait_Specific>;
  url?: Maybe<Scalars['String']>;
};


export type TraitProficienciesArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyProficiencyInput>;
};

export type TraitParent = {
  __typename?: 'TraitParent';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitProficiency_Choices = {
  __typename?: 'TraitProficiency_choices';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<TraitProficiency_ChoicesFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type TraitProficiency_ChoicesFrom = {
  __typename?: 'TraitProficiency_choicesFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitRaces = {
  __typename?: 'TraitRaces';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitSubraces = {
  __typename?: 'TraitSubraces';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitTrait_Specific = {
  __typename?: 'TraitTrait_specific';
  breath_weapon?: Maybe<TraitTrait_SpecificBreath_Weapon>;
  damage_type?: Maybe<TraitTrait_SpecificDamage_Type>;
  spell_options?: Maybe<TraitTrait_SpecificSpell_Options>;
  subtrait_options?: Maybe<TraitTrait_SpecificSubtrait_Options>;
};

export type TraitTrait_SpecificBreath_Weapon = {
  __typename?: 'TraitTrait_specificBreath_weapon';
  damage?: Maybe<Array<Maybe<TraitTrait_SpecificBreath_WeaponDamage>>>;
  dc?: Maybe<TraitTrait_SpecificBreath_WeaponDc>;
  desc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  usage?: Maybe<TraitTrait_SpecificBreath_WeaponUsage>;
};

export type TraitTrait_SpecificBreath_WeaponDamage = {
  __typename?: 'TraitTrait_specificBreath_weaponDamage';
  _id?: Maybe<Scalars['MongoID']>;
  damage_at_character_level?: Maybe<Scalars['JSON']>;
  damage_type?: Maybe<TraitTrait_SpecificBreath_WeaponDamageDamage_Type>;
};

export type TraitTrait_SpecificBreath_WeaponDamageDamage_Type = {
  __typename?: 'TraitTrait_specificBreath_weaponDamageDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificBreath_WeaponDc = {
  __typename?: 'TraitTrait_specificBreath_weaponDc';
  dc_type?: Maybe<TraitTrait_SpecificBreath_WeaponDcDc_Type>;
  success_type?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificBreath_WeaponDcDc_Type = {
  __typename?: 'TraitTrait_specificBreath_weaponDcDc_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificBreath_WeaponUsage = {
  __typename?: 'TraitTrait_specificBreath_weaponUsage';
  times?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificDamage_Type = {
  __typename?: 'TraitTrait_specificDamage_type';
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificSpell_Options = {
  __typename?: 'TraitTrait_specificSpell_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<TraitTrait_SpecificSpell_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificSpell_OptionsFrom = {
  __typename?: 'TraitTrait_specificSpell_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificSubtrait_Options = {
  __typename?: 'TraitTrait_specificSubtrait_options';
  choose?: Maybe<Scalars['Float']>;
  from?: Maybe<Array<Maybe<TraitTrait_SpecificSubtrait_OptionsFrom>>>;
  type?: Maybe<Scalars['String']>;
};

export type TraitTrait_SpecificSubtrait_OptionsFrom = {
  __typename?: 'TraitTrait_specificSubtrait_optionsFrom';
  _id?: Maybe<Scalars['MongoID']>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WeaponProperty = {
  __typename?: 'WeaponProperty';
  _id: Scalars['String'];
  desc?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type GetSpellsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpellsQuery = { __typename?: 'Query', spells: Array<{ __typename?: 'Spell', name?: Maybe<string>, level?: Maybe<number>, concentration?: Maybe<boolean>, desc?: Maybe<Array<Maybe<string>>>, attack_type?: Maybe<string>, material?: Maybe<string>, classes?: Maybe<Array<Maybe<{ __typename?: 'SpellClasses', name?: Maybe<string> }>>>, school?: Maybe<{ __typename?: 'MagicSchool', name?: Maybe<string>, desc?: Maybe<string> }> }> };


export const GetSpellsDocument = gql`
    query getSpells {
  spells(limit: 500) {
    name
    level
    concentration
    desc
    attack_type
    material
    classes {
      name
    }
    school {
      name
      desc
    }
  }
}
    `;

/**
 * __useGetSpellsQuery__
 *
 * To run a query within a React component, call `useGetSpellsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpellsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpellsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpellsQuery(baseOptions?: Apollo.QueryHookOptions<GetSpellsQuery, GetSpellsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpellsQuery, GetSpellsQueryVariables>(GetSpellsDocument, options);
      }
export function useGetSpellsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpellsQuery, GetSpellsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpellsQuery, GetSpellsQueryVariables>(GetSpellsDocument, options);
        }
export type GetSpellsQueryHookResult = ReturnType<typeof useGetSpellsQuery>;
export type GetSpellsLazyQueryHookResult = ReturnType<typeof useGetSpellsLazyQuery>;
export type GetSpellsQueryResult = Apollo.QueryResult<GetSpellsQuery, GetSpellsQueryVariables>;