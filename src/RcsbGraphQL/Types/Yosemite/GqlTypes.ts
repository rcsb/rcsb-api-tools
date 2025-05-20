export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  ObjectScalar: { input: any; output: any; }
}

export interface AuditAuthor {
  __typename?: 'AuditAuthor';
  /**
   * The Open Researcher and Contributor ID (ORCID).
   *
   * Examples:
   * 0000-0002-6681-547X
   *
   */
  identifier_ORCID?: Maybe<Scalars['String']['output']>;
  /**
   * The name of an author of this data block. If there are multiple
   *  authors, _audit_author.name is looped with _audit_author.address.
   *  The family name(s), followed by a comma and including any
   *  dynastic components, precedes the first name(s) or initial(s).
   *
   * Examples:
   * Jones, T.J., Bleary, Percival R., O'Neil, F.K., Van den Bossche, G., Yang, D.-L., Simonov, Yu.A
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * This data item defines the order of the author's name in the
   *  list of audit authors.
   */
  pdbx_ordinal: Scalars['Int']['output'];
}

export interface Cell {
  __typename?: 'Cell';
  /**
   * The number of the polymeric chains in a unit cell. In the case
   *  of heteropolymers, Z is the number of occurrences of the most
   *  populous chain.
   *
   *  This data item is provided for compatibility with the original
   *  Protein Data Bank format, and only for that purpose.
   */
  Z_PDB?: Maybe<Scalars['Int']['output']>;
  /** Unit-cell angle alpha of the reported structure in degrees. */
  angle_alpha?: Maybe<Scalars['Float']['output']>;
  /** Unit-cell angle beta of the reported structure in degrees. */
  angle_beta?: Maybe<Scalars['Float']['output']>;
  /** Unit-cell angle gamma of the reported structure in degrees. */
  angle_gamma?: Maybe<Scalars['Float']['output']>;
  /**
   * The number of the formula units in the unit cell as specified
   *  by _chemical_formula.structural, _chemical_formula.moiety or
   *  _chemical_formula.sum.
   */
  formula_units_Z?: Maybe<Scalars['Int']['output']>;
  /**
   * Unit-cell length a corresponding to the structure reported in
   * angstroms.
   */
  length_a?: Maybe<Scalars['Float']['output']>;
  /**
   * Unit-cell length b corresponding to the structure reported in
   *  angstroms.
   */
  length_b?: Maybe<Scalars['Float']['output']>;
  /**
   * Unit-cell length c corresponding to the structure reported in
   * angstroms.
   */
  length_c?: Maybe<Scalars['Float']['output']>;
  /**
   * To further identify unique axis if necessary.  E.g., P 21 with
   *  an unique C axis will have 'C' in this field.
   */
  pdbx_unique_axis?: Maybe<Scalars['String']['output']>;
  /**
   * Cell volume V in angstroms cubed.
   *
   *  V = a b c (1 - cos^2^~alpha~ - cos^2^~beta~ - cos^2^~gamma~
   *             + 2 cos~alpha~ cos~beta~ cos~gamma~)^1/2^
   *
   *  a     = _cell.length_a
   *  b     = _cell.length_b
   *  c     = _cell.length_c
   *  alpha = _cell.angle_alpha
   *  beta  = _cell.angle_beta
   *  gamma = _cell.angle_gamma
   */
  volume?: Maybe<Scalars['Float']['output']>;
}

export interface ChemComp {
  __typename?: 'ChemComp';
  /**
   * The formula for the chemical component. Formulae are written
   *  according to the following rules:
   *
   *  (1) Only recognized element symbols may be used.
   *
   *  (2) Each element symbol is followed by a 'count' number. A count
   *     of '1' may be omitted.
   *
   *  (3) A space or parenthesis must separate each cluster of
   *     (element symbol + count), but in general parentheses are
   *     not used.
   *
   *  (4) The order of elements depends on whether carbon is
   *     present or not. If carbon is present, the order should be:
   *     C, then H, then the other elements in alphabetical order
   *     of their symbol. If carbon is not present, the elements
   *     are listed purely in alphabetic order of their symbol. This
   *     is the 'Hill' system used by Chemical Abstracts.
   *
   * Examples:
   * C18 H19 N7 O8 S
   *
   */
  formula?: Maybe<Scalars['String']['output']>;
  /**
   * Formula mass of the chemical component.
   *
   * Examples:
   * null, null
   *
   */
  formula_weight?: Maybe<Scalars['Float']['output']>;
  /**
   * The value of _chem_comp.id must uniquely identify each item in
   *  the CHEM_COMP list.
   *
   *  For protein polymer entities, this is the three-letter code for
   *  the amino acid.
   *
   *  For nucleic acid polymer entities, this is the one-letter code
   *  for the base.
   *
   * Examples:
   * ALA, VAL, DG, C
   *
   */
  id: Scalars['String']['output'];
  /**
   * The identifier for the parent component of the nonstandard
   *  component. May be be a comma separated list if this component
   *  is derived from multiple components.
   *
   *  Items in this indirectly point to _chem_comp.id in
   *  the CHEM_COMP category.
   */
  mon_nstd_parent_comp_id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The full name of the component.
   *
   * Examples:
   * alanine, valine, adenine, cytosine
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * For standard polymer components, the one-letter code for
   *  the component.   For non-standard polymer components, the
   *  one-letter code for parent component if this exists;
   *  otherwise, the one-letter code should be given as 'X'.
   *
   *  Components that derived from multiple parents components
   *  are described by a sequence of one-letter-codes.
   *
   * Examples:
   * A, B, R, N, D, C, Q, E, Z, G, H, I, L, K, M, F, P, S, T, W, Y, V, U, O, X
   *
   */
  one_letter_code?: Maybe<Scalars['String']['output']>;
  /**
   * A preliminary classification used by PDB to indicate
   *  that the chemistry of this component while described
   *  as clearly as possible is still ambiguous.  Software
   *  tools may not be able to process this component
   *  definition.
   */
  pdbx_ambiguous_flag?: Maybe<Scalars['String']['output']>;
  /**
   * The net integer charge assigned to this component. This is the
   *  formal charge assignment normally found in chemical diagrams.
   */
  pdbx_formal_charge?: Maybe<Scalars['Int']['output']>;
  /** Date component was added to database. */
  pdbx_initial_date?: Maybe<Scalars['Date']['output']>;
  /** Date component was last modified. */
  pdbx_modified_date?: Maybe<Scalars['Date']['output']>;
  /**
   * This data item identifies the deposition site that processed
   *  this chemical component defintion.
   *
   * Allowable values:
   * EBI, PDBC, PDBE, PDBJ, RCSB
   *
   */
  pdbx_processing_site?: Maybe<Scalars['String']['output']>;
  /**
   * This data item holds the current release status for the component.
   *
   * Allowable values:
   * DEL, HOLD, HPUB, OBS, REF_ONLY, REL
   *
   */
  pdbx_release_status?: Maybe<Scalars['String']['output']>;
  /**
   * Identifies the _chem_comp.id of the component that
   *  has replaced this component.
   *
   * Examples:
   * q11, tvx
   *
   */
  pdbx_replaced_by?: Maybe<Scalars['String']['output']>;
  /**
   * Identifies the _chem_comp.id's of the components
   *  which have been replaced by this component.
   *  Multiple id codes should be separated by commas.
   *
   * Examples:
   * q11, tvx,atv
   *
   */
  pdbx_replaces?: Maybe<Scalars['String']['output']>;
  /**
   * The list of subcomponents contained in this component.
   *
   * Examples:
   * TSM DPH HIS CHF EMR
   *
   */
  pdbx_subcomponent_list?: Maybe<Scalars['String']['output']>;
  /**
   * For standard polymer components, the common three-letter code for
   *  the component.   Non-standard polymer components and non-polymer
   *  components are also assigned three-letter-codes.
   *
   *  For ambiguous polymer components three-letter code should
   *  be given as 'UNK'.  Ambiguous ions are assigned the code 'UNX'.
   *  Ambiguous non-polymer components are assigned the code 'UNL'.
   *
   * Examples:
   * ALA, ARG, ASN, ASP, ASX, CYS, GLN, GLU, GLY, GLX, HIS, ILE, LEU, LYS, MET, PHE, PRO, SER, THR, TRP, TYR, VAL, 1MA, 5MC, OMC, 1MG, 2MG, M2G, 7MG, 0MG, H2U, 5MU, PSU, ACE, FOR, HOH, UNK
   *
   */
  three_letter_code?: Maybe<Scalars['String']['output']>;
  /**
   * For standard polymer components, the type of the monomer.
   *  Note that monomers that will form polymers are of three types:
   *  linking monomers, monomers with some type of N-terminal (or 5')
   *  cap and monomers with some type of C-terminal (or 3') cap.
   *
   * Allowable values:
   * D-beta-peptide, C-gamma linking, D-gamma-peptide, C-delta linking, D-peptide COOH carboxy terminus, D-peptide NH3 amino terminus, D-peptide linking, D-saccharide, D-saccharide, alpha linking, D-saccharide, beta linking, DNA OH 3 prime terminus, DNA OH 5 prime terminus, DNA linking, L-DNA linking, L-RNA linking, L-beta-peptide, C-gamma linking, L-gamma-peptide, C-delta linking, L-peptide COOH carboxy terminus, L-peptide NH3 amino terminus, L-peptide linking, L-saccharide, L-saccharide, alpha linking, L-saccharide, beta linking, RNA OH 3 prime terminus, RNA OH 5 prime terminus, RNA linking, non-polymer, other, peptide linking, peptide-like, saccharide
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface Citation {
  __typename?: 'Citation';
  /**
   * The International Standard Book Number (ISBN) code assigned to
   *  the book cited; relevant for books or book chapters.
   */
  book_id_ISBN?: Maybe<Scalars['String']['output']>;
  /**
   * The name of the publisher of the citation; relevant
   *  for books or book chapters.
   *
   * Examples:
   * John Wiley and Sons
   *
   */
  book_publisher?: Maybe<Scalars['String']['output']>;
  /**
   * The location of the publisher of the citation; relevant
   *  for books or book chapters.
   *
   * Examples:
   * London
   *
   */
  book_publisher_city?: Maybe<Scalars['String']['output']>;
  /**
   * The title of the book in which the citation appeared; relevant
   *  for books or book chapters.
   */
  book_title?: Maybe<Scalars['String']['output']>;
  /**
   * _citation.coordinate_linkage states whether this citation
   *  is concerned with precisely the set of coordinates given in the
   *  data block. If, for instance, the publication described the same
   *  structure, but the coordinates had undergone further refinement
   *  prior to the creation of the data block, the value of this data
   *  item would be 'no'.
   *
   * Allowable values:
   * n, no, y, yes
   *
   */
  coordinate_linkage?: Maybe<Scalars['String']['output']>;
  /**
   * The country/region of publication; relevant for books
   *  and book chapters.
   */
  country?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _citation.id must uniquely identify a record in the
   *  CITATION list.
   *
   *  The _citation.id 'primary' should be used to indicate the
   *  citation that the author(s) consider to be the most pertinent to
   *  the contents of the data block.
   *
   *  Note that this item need not be a number; it can be any unique
   *  identifier.
   *
   * Examples:
   * primary, 1, 2
   *
   */
  id: Scalars['String']['output'];
  /**
   * Abbreviated name of the cited journal as given in the
   *  Chemical Abstracts Service Source Index.
   *
   * Examples:
   * J.Mol.Biol., J. Mol. Biol.
   *
   */
  journal_abbrev?: Maybe<Scalars['String']['output']>;
  /**
   * Full name of the cited journal; relevant for journal articles.
   *
   * Examples:
   * Journal of Molecular Biology
   *
   */
  journal_full?: Maybe<Scalars['String']['output']>;
  /**
   * The American Society for Testing and Materials (ASTM) code
   *  assigned to the journal cited (also referred to as the CODEN
   *  designator of the Chemical Abstracts Service); relevant for
   *  journal articles.
   */
  journal_id_ASTM?: Maybe<Scalars['String']['output']>;
  /**
   * The Cambridge Structural Database (CSD) code assigned to the
   *  journal cited; relevant for journal articles. This is also the
   *  system used at the Protein Data Bank (PDB).
   *
   * Examples:
   * 0070
   *
   */
  journal_id_CSD?: Maybe<Scalars['String']['output']>;
  /**
   * The International Standard Serial Number (ISSN) code assigned to
   *  the journal cited; relevant for journal articles.
   */
  journal_id_ISSN?: Maybe<Scalars['String']['output']>;
  /**
   * Issue number of the journal cited; relevant for journal
   *  articles.
   *
   * Examples:
   * 2
   *
   */
  journal_issue?: Maybe<Scalars['String']['output']>;
  /**
   * Volume number of the journal cited; relevant for journal
   *  articles.
   *
   * Examples:
   * 174
   *
   */
  journal_volume?: Maybe<Scalars['String']['output']>;
  /**
   * Language in which the cited article is written.
   *
   * Examples:
   * German
   *
   */
  language?: Maybe<Scalars['String']['output']>;
  /**
   * The first page of the citation; relevant for journal
   *  articles, books and book chapters.
   */
  page_first?: Maybe<Scalars['String']['output']>;
  /**
   * The last page of the citation; relevant for journal
   *  articles, books and book chapters.
   */
  page_last?: Maybe<Scalars['String']['output']>;
  /**
   * Document Object Identifier used by doi.org to uniquely
   *  specify bibliographic entry.
   *
   * Examples:
   * 10.2345/S1384107697000225
   *
   */
  pdbx_database_id_DOI?: Maybe<Scalars['String']['output']>;
  /**
   * Ascession number used by PubMed to categorize a specific
   *  bibliographic entry.
   */
  pdbx_database_id_PubMed?: Maybe<Scalars['Int']['output']>;
  /**
   * Names of the authors of the citation; relevant for journal
   *  articles, books and book chapters.  Names are separated by vertical bars.
   *
   *  The family name(s), followed by a comma and including any
   *  dynastic components, precedes the first name(s) or initial(s).
   */
  rcsb_authors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Flag to indicate a primary citation.
   *
   * Allowable values:
   * N, Y
   *
   */
  rcsb_is_primary?: Maybe<Scalars['String']['output']>;
  /**
   * Normalized journal abbreviation.
   *
   * Examples:
   * Nat Struct Mol Biol
   *
   */
  rcsb_journal_abbrev?: Maybe<Scalars['String']['output']>;
  /**
   * The title of the citation; relevant for journal articles, books
   *  and book chapters.
   *
   * Examples:
   * Structure of diferric duck ovotransferrin
   *                                   at 2.35 Angstroms resolution.
   *
   */
  title?: Maybe<Scalars['String']['output']>;
  /**
   * Flag to indicate that this citation will not be published.
   *
   * Allowable values:
   * N, Y
   *
   */
  unpublished_flag?: Maybe<Scalars['String']['output']>;
  /**
   * The year of the citation; relevant for journal articles, books
   *  and book chapters.
   */
  year?: Maybe<Scalars['Int']['output']>;
}

export interface ClustersMembers {
  __typename?: 'ClustersMembers';
  /** Internal chain ID used in mmCIF files to uniquely identify structural elements in the asymmetric unit. */
  asym_id: Scalars['String']['output'];
  /** Optional list of operator ids (pdbx_struct_oper_list.id) as appears in pdbx_struct_assembly_gen.oper_expression. One operator id per operand in the expression (most cases have only 1 operator). If it's not given then identity operator is assumed. */
  pdbx_struct_oper_list_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
}

export interface CoreAssembly {
  __typename?: 'CoreAssembly';
  /** Get a list of branched entity instances (sugars) that constitute this assembly. */
  branched_entity_instances?: Maybe<Array<Maybe<CoreBranchedEntityInstance>>>;
  /** Get entry that includes this assembly. */
  entry?: Maybe<CoreEntry>;
  /** Get all pairwise polymer interfaces for this assembly. */
  interfaces?: Maybe<Array<Maybe<CoreInterface>>>;
  /** Get a list of non-polymer entity instances (ligands) that constitute this assembly. */
  nonpolymer_entity_instances?: Maybe<Array<Maybe<CoreNonpolymerEntityInstance>>>;
  pdbx_struct_assembly?: Maybe<PdbxStructAssembly>;
  pdbx_struct_assembly_auth_evidence?: Maybe<Array<Maybe<PdbxStructAssemblyAuthEvidence>>>;
  pdbx_struct_assembly_gen?: Maybe<Array<Maybe<PdbxStructAssemblyGen>>>;
  pdbx_struct_assembly_prop?: Maybe<Array<Maybe<PdbxStructAssemblyProp>>>;
  pdbx_struct_oper_list?: Maybe<Array<Maybe<PdbxStructOperList>>>;
  /** Get a list of polymer entity instances (chains) that constitute this assembly. */
  polymer_entity_instances?: Maybe<Array<Maybe<CorePolymerEntityInstance>>>;
  rcsb_assembly_annotation?: Maybe<Array<Maybe<RcsbAssemblyAnnotation>>>;
  rcsb_assembly_container_identifiers: RcsbAssemblyContainerIdentifiers;
  rcsb_assembly_feature?: Maybe<Array<Maybe<RcsbAssemblyFeature>>>;
  rcsb_assembly_info?: Maybe<RcsbAssemblyInfo>;
  /**
   * A unique identifier for each object in this assembly container formed by
   *  a dash separated concatenation of entry and assembly identifiers.
   *
   * Examples:
   * 1KIP-1
   *
   */
  rcsb_id: Scalars['String']['output'];
  rcsb_latest_revision?: Maybe<RcsbLatestRevision>;
  rcsb_struct_symmetry?: Maybe<Array<Maybe<RcsbStructSymmetry>>>;
  rcsb_struct_symmetry_lineage?: Maybe<Array<Maybe<RcsbStructSymmetryLineage>>>;
  /** The title and version of software package used for symmetry calculations. */
  rcsb_struct_symmetry_provenance_code?: Maybe<Scalars['String']['output']>;
}

export interface CoreBranchedEntity {
  __typename?: 'CoreBranchedEntity';
  /** Get all unique branched instances (chains) for this molecular entity. */
  branched_entity_instances?: Maybe<Array<Maybe<CoreBranchedEntityInstance>>>;
  /** Get all unique monomers described in this branched entity. */
  chem_comp_monomers?: Maybe<Array<Maybe<CoreChemComp>>>;
  /** Get entry that contains this branched entity. */
  entry?: Maybe<CoreEntry>;
  pdbx_entity_branch?: Maybe<PdbxEntityBranch>;
  pdbx_entity_branch_descriptor?: Maybe<Array<Maybe<PdbxEntityBranchDescriptor>>>;
  /** Get a BIRD chemical components described in this branched entity. */
  prd?: Maybe<CoreChemComp>;
  rcsb_branched_entity?: Maybe<RcsbBranchedEntity>;
  rcsb_branched_entity_annotation?: Maybe<Array<Maybe<RcsbBranchedEntityAnnotation>>>;
  rcsb_branched_entity_container_identifiers?: Maybe<RcsbBranchedEntityContainerIdentifiers>;
  rcsb_branched_entity_feature?: Maybe<Array<Maybe<RcsbBranchedEntityFeature>>>;
  rcsb_branched_entity_feature_summary?: Maybe<Array<Maybe<RcsbBranchedEntityFeatureSummary>>>;
  rcsb_branched_entity_keywords?: Maybe<RcsbBranchedEntityKeywords>;
  rcsb_branched_entity_name_com?: Maybe<RcsbBranchedEntityNameCom>;
  rcsb_branched_entity_name_sys?: Maybe<Array<Maybe<RcsbBranchedEntityNameSys>>>;
  /**
   * A unique identifier for each object in this entity container formed by
   *  an underscore separated concatenation of entry and entity identifiers.
   *
   * Examples:
   * 2HYV_2
   *
   */
  rcsb_id: Scalars['String']['output'];
  rcsb_latest_revision?: Maybe<RcsbLatestRevision>;
}

export interface CoreBranchedEntityInstance {
  __typename?: 'CoreBranchedEntityInstance';
  /** Get branched entity for this branched entity instance. */
  branched_entity?: Maybe<CoreBranchedEntity>;
  pdbx_struct_special_symmetry?: Maybe<Array<Maybe<PdbxStructSpecialSymmetry>>>;
  rcsb_branched_entity_instance_container_identifiers?: Maybe<RcsbBranchedEntityInstanceContainerIdentifiers>;
  rcsb_branched_instance_annotation?: Maybe<Array<Maybe<RcsbBranchedInstanceAnnotation>>>;
  rcsb_branched_instance_feature?: Maybe<Array<Maybe<RcsbBranchedInstanceFeature>>>;
  rcsb_branched_instance_feature_summary?: Maybe<Array<Maybe<RcsbBranchedInstanceFeatureSummary>>>;
  rcsb_branched_struct_conn?: Maybe<Array<Maybe<RcsbBranchedStructConn>>>;
  /**
   * A unique identifier for each object in this entity instance container formed by
   *  an 'dot' (.) separated concatenation of entry and entity instance identifiers.
   *
   * Examples:
   * 1KIP.A
   *
   */
  rcsb_id: Scalars['String']['output'];
  rcsb_latest_revision?: Maybe<RcsbLatestRevision>;
  rcsb_ligand_neighbors?: Maybe<Array<Maybe<RcsbLigandNeighbors>>>;
  struct_asym?: Maybe<StructAsym>;
}

export interface CoreChemComp {
  __typename?: 'CoreChemComp';
  chem_comp?: Maybe<ChemComp>;
  /** Get DrubBank entry associated with this chemical component. */
  drugbank?: Maybe<CoreDrugbank>;
  pdbx_chem_comp_audit?: Maybe<Array<Maybe<PdbxChemCompAudit>>>;
  pdbx_chem_comp_descriptor?: Maybe<Array<Maybe<PdbxChemCompDescriptor>>>;
  pdbx_chem_comp_feature?: Maybe<Array<Maybe<PdbxChemCompFeature>>>;
  pdbx_chem_comp_identifier?: Maybe<Array<Maybe<PdbxChemCompIdentifier>>>;
  pdbx_family_prd_audit?: Maybe<Array<Maybe<PdbxFamilyPrdAudit>>>;
  pdbx_prd_audit?: Maybe<Array<Maybe<PdbxPrdAudit>>>;
  pdbx_reference_entity_list?: Maybe<Array<Maybe<PdbxReferenceEntityList>>>;
  pdbx_reference_entity_poly?: Maybe<Array<Maybe<PdbxReferenceEntityPoly>>>;
  pdbx_reference_entity_poly_link?: Maybe<Array<Maybe<PdbxReferenceEntityPolyLink>>>;
  pdbx_reference_entity_poly_seq?: Maybe<Array<Maybe<PdbxReferenceEntityPolySeq>>>;
  pdbx_reference_entity_sequence?: Maybe<Array<Maybe<PdbxReferenceEntitySequence>>>;
  pdbx_reference_entity_src_nat?: Maybe<Array<Maybe<PdbxReferenceEntitySrcNat>>>;
  pdbx_reference_molecule?: Maybe<PdbxReferenceMolecule>;
  pdbx_reference_molecule_annotation?: Maybe<Array<Maybe<PdbxReferenceMoleculeAnnotation>>>;
  pdbx_reference_molecule_details?: Maybe<Array<Maybe<PdbxReferenceMoleculeDetails>>>;
  pdbx_reference_molecule_family?: Maybe<PdbxReferenceMoleculeFamily>;
  pdbx_reference_molecule_features?: Maybe<Array<Maybe<PdbxReferenceMoleculeFeatures>>>;
  pdbx_reference_molecule_list?: Maybe<Array<Maybe<PdbxReferenceMoleculeList>>>;
  pdbx_reference_molecule_related_structures?: Maybe<Array<Maybe<PdbxReferenceMoleculeRelatedStructures>>>;
  pdbx_reference_molecule_synonyms?: Maybe<Array<Maybe<PdbxReferenceMoleculeSynonyms>>>;
  rcsb_bird_citation?: Maybe<Array<Maybe<RcsbBirdCitation>>>;
  rcsb_chem_comp_annotation?: Maybe<Array<Maybe<RcsbChemCompAnnotation>>>;
  rcsb_chem_comp_container_identifiers?: Maybe<RcsbChemCompContainerIdentifiers>;
  rcsb_chem_comp_descriptor?: Maybe<RcsbChemCompDescriptor>;
  rcsb_chem_comp_info?: Maybe<RcsbChemCompInfo>;
  rcsb_chem_comp_related?: Maybe<Array<Maybe<RcsbChemCompRelated>>>;
  rcsb_chem_comp_synonyms?: Maybe<Array<Maybe<RcsbChemCompSynonyms>>>;
  rcsb_chem_comp_target?: Maybe<Array<Maybe<RcsbChemCompTarget>>>;
  /**
   * A unique identifier for the chemical definition in this container.
   *
   * Examples:
   * ATP, PRD_000010
   *
   */
  rcsb_id: Scalars['String']['output'];
  rcsb_schema_container_identifiers?: Maybe<Array<Maybe<RcsbSchemaContainerIdentifiers>>>;
}

export interface CoreDrugbank {
  __typename?: 'CoreDrugbank';
  drugbank_container_identifiers?: Maybe<DrugbankContainerIdentifiers>;
  drugbank_info?: Maybe<DrugbankInfo>;
  drugbank_target?: Maybe<Array<Maybe<DrugbankTarget>>>;
}

export interface CoreEntityAlignmentsAlignedRegions {
  __typename?: 'CoreEntityAlignmentsAlignedRegions';
  /** Aligned region length */
  length: Scalars['Int']['output'];
  /** Entity seqeunce start position */
  query_begin: Scalars['Int']['output'];
  /** NCBI sequence start position */
  target_begin: Scalars['Int']['output'];
}

export interface CoreEntityAlignmentsCoreEntityIdentifiers {
  __typename?: 'CoreEntityAlignmentsCoreEntityIdentifiers';
  entity_id: Scalars['String']['output'];
  entry_id: Scalars['String']['output'];
}

export interface CoreEntityAlignmentsScores {
  __typename?: 'CoreEntityAlignmentsScores';
  query_coverage: Scalars['Int']['output'];
  query_length: Scalars['Int']['output'];
  target_coverage: Scalars['Int']['output'];
  target_length: Scalars['Int']['output'];
}

export interface CoreEntry {
  __typename?: 'CoreEntry';
  /** Get all assemblies for this entry. */
  assemblies?: Maybe<Array<Maybe<CoreAssembly>>>;
  audit_author?: Maybe<Array<Maybe<AuditAuthor>>>;
  /** Get all branched entities for this entry. */
  branched_entities?: Maybe<Array<Maybe<CoreBranchedEntity>>>;
  cell?: Maybe<Cell>;
  citation?: Maybe<Array<Maybe<Citation>>>;
  database_2?: Maybe<Array<Maybe<Database2>>>;
  diffrn?: Maybe<Array<Maybe<Diffrn>>>;
  diffrn_detector?: Maybe<Array<Maybe<DiffrnDetector>>>;
  diffrn_radiation?: Maybe<Array<Maybe<DiffrnRadiation>>>;
  diffrn_source?: Maybe<Array<Maybe<DiffrnSource>>>;
  em_2d_crystal_entity?: Maybe<Array<Maybe<Em2dCrystalEntity>>>;
  em_3d_crystal_entity?: Maybe<Array<Maybe<Em3dCrystalEntity>>>;
  em_3d_fitting?: Maybe<Array<Maybe<Em3dFitting>>>;
  em_3d_fitting_list?: Maybe<Array<Maybe<Em3dFittingList>>>;
  em_3d_reconstruction?: Maybe<Array<Maybe<Em3dReconstruction>>>;
  em_ctf_correction?: Maybe<Array<Maybe<EmCtfCorrection>>>;
  em_diffraction?: Maybe<Array<Maybe<EmDiffraction>>>;
  em_diffraction_shell?: Maybe<Array<Maybe<EmDiffractionShell>>>;
  em_diffraction_stats?: Maybe<Array<Maybe<EmDiffractionStats>>>;
  em_embedding?: Maybe<Array<Maybe<EmEmbedding>>>;
  em_entity_assembly?: Maybe<Array<Maybe<EmEntityAssembly>>>;
  em_experiment?: Maybe<EmExperiment>;
  em_helical_entity?: Maybe<Array<Maybe<EmHelicalEntity>>>;
  em_image_recording?: Maybe<Array<Maybe<EmImageRecording>>>;
  em_imaging?: Maybe<Array<Maybe<EmImaging>>>;
  em_particle_selection?: Maybe<Array<Maybe<EmParticleSelection>>>;
  em_single_particle_entity?: Maybe<Array<Maybe<EmSingleParticleEntity>>>;
  em_software?: Maybe<Array<Maybe<EmSoftware>>>;
  em_specimen?: Maybe<Array<Maybe<EmSpecimen>>>;
  em_staining?: Maybe<Array<Maybe<EmStaining>>>;
  em_vitrification?: Maybe<Array<Maybe<EmVitrification>>>;
  entry?: Maybe<Entry>;
  /** Get all groups for this entry. */
  entry_groups?: Maybe<Array<Maybe<GroupEntry>>>;
  exptl?: Maybe<Array<Maybe<Exptl>>>;
  exptl_crystal?: Maybe<Array<Maybe<ExptlCrystal>>>;
  exptl_crystal_grow?: Maybe<Array<Maybe<ExptlCrystalGrow>>>;
  ihm_entry_collection_mapping?: Maybe<Array<Maybe<IhmEntryCollectionMapping>>>;
  ihm_external_reference_info?: Maybe<Array<Maybe<IhmExternalReferenceInfo>>>;
  ma_data?: Maybe<Array<Maybe<MaData>>>;
  /** Get all non-polymer (non-solvent) entities for this entry. */
  nonpolymer_entities?: Maybe<Array<Maybe<CoreNonpolymerEntity>>>;
  pdbx_SG_project?: Maybe<Array<Maybe<PdbxSgProject>>>;
  pdbx_audit_revision_category?: Maybe<Array<Maybe<PdbxAuditRevisionCategory>>>;
  pdbx_audit_revision_details?: Maybe<Array<Maybe<PdbxAuditRevisionDetails>>>;
  pdbx_audit_revision_group?: Maybe<Array<Maybe<PdbxAuditRevisionGroup>>>;
  pdbx_audit_revision_history?: Maybe<Array<Maybe<PdbxAuditRevisionHistory>>>;
  pdbx_audit_revision_item?: Maybe<Array<Maybe<PdbxAuditRevisionItem>>>;
  pdbx_audit_support?: Maybe<Array<Maybe<PdbxAuditSupport>>>;
  pdbx_database_PDB_obs_spr?: Maybe<Array<Maybe<PdbxDatabasePdbObsSpr>>>;
  pdbx_database_related?: Maybe<Array<Maybe<PdbxDatabaseRelated>>>;
  pdbx_database_status?: Maybe<PdbxDatabaseStatus>;
  pdbx_deposit_group?: Maybe<Array<Maybe<PdbxDepositGroup>>>;
  pdbx_initial_refinement_model?: Maybe<Array<Maybe<PdbxInitialRefinementModel>>>;
  pdbx_molecule_features?: Maybe<Array<Maybe<PdbxMoleculeFeatures>>>;
  pdbx_nmr_details?: Maybe<PdbxNmrDetails>;
  pdbx_nmr_ensemble?: Maybe<PdbxNmrEnsemble>;
  pdbx_nmr_exptl?: Maybe<Array<Maybe<PdbxNmrExptl>>>;
  pdbx_nmr_exptl_sample_conditions?: Maybe<Array<Maybe<PdbxNmrExptlSampleConditions>>>;
  pdbx_nmr_refine?: Maybe<Array<Maybe<PdbxNmrRefine>>>;
  pdbx_nmr_representative?: Maybe<PdbxNmrRepresentative>;
  pdbx_nmr_sample_details?: Maybe<Array<Maybe<PdbxNmrSampleDetails>>>;
  pdbx_nmr_software?: Maybe<Array<Maybe<PdbxNmrSoftware>>>;
  pdbx_nmr_spectrometer?: Maybe<Array<Maybe<PdbxNmrSpectrometer>>>;
  pdbx_reflns_twin?: Maybe<Array<Maybe<PdbxReflnsTwin>>>;
  pdbx_related_exp_data_set?: Maybe<Array<Maybe<PdbxRelatedExpDataSet>>>;
  pdbx_serial_crystallography_data_reduction?: Maybe<Array<Maybe<PdbxSerialCrystallographyDataReduction>>>;
  pdbx_serial_crystallography_measurement?: Maybe<Array<Maybe<PdbxSerialCrystallographyMeasurement>>>;
  pdbx_serial_crystallography_sample_delivery?: Maybe<Array<Maybe<PdbxSerialCrystallographySampleDelivery>>>;
  pdbx_serial_crystallography_sample_delivery_fixed_target?: Maybe<Array<Maybe<PdbxSerialCrystallographySampleDeliveryFixedTarget>>>;
  pdbx_serial_crystallography_sample_delivery_injection?: Maybe<Array<Maybe<PdbxSerialCrystallographySampleDeliveryInjection>>>;
  pdbx_soln_scatter?: Maybe<Array<Maybe<PdbxSolnScatter>>>;
  pdbx_soln_scatter_model?: Maybe<Array<Maybe<PdbxSolnScatterModel>>>;
  pdbx_vrpt_summary?: Maybe<PdbxVrptSummary>;
  pdbx_vrpt_summary_diffraction?: Maybe<Array<Maybe<PdbxVrptSummaryDiffraction>>>;
  pdbx_vrpt_summary_em?: Maybe<Array<Maybe<PdbxVrptSummaryEm>>>;
  pdbx_vrpt_summary_geometry?: Maybe<Array<Maybe<PdbxVrptSummaryGeometry>>>;
  pdbx_vrpt_summary_nmr?: Maybe<Array<Maybe<PdbxVrptSummaryNmr>>>;
  /** Get all polymer entities for this entry. */
  polymer_entities?: Maybe<Array<Maybe<CorePolymerEntity>>>;
  /** Get literature information from PubMed database. */
  pubmed?: Maybe<CorePubmed>;
  rcsb_accession_info?: Maybe<RcsbAccessionInfo>;
  /** The list of content types associated with this entry. */
  rcsb_associated_holdings?: Maybe<CurrentEntry>;
  rcsb_binding_affinity?: Maybe<Array<Maybe<RcsbBindingAffinity>>>;
  rcsb_comp_model_provenance?: Maybe<RcsbCompModelProvenance>;
  rcsb_entry_container_identifiers: RcsbEntryContainerIdentifiers;
  rcsb_entry_group_membership?: Maybe<Array<Maybe<RcsbEntryGroupMembership>>>;
  rcsb_entry_info: RcsbEntryInfo;
  rcsb_external_references?: Maybe<Array<Maybe<RcsbExternalReferences>>>;
  /**
   * A unique identifier for each object in this entry container.
   *
   * Examples:
   * 1KIP
   *
   */
  rcsb_id: Scalars['String']['output'];
  rcsb_ihm_dataset_list?: Maybe<Array<Maybe<RcsbIhmDatasetList>>>;
  rcsb_ihm_dataset_source_db_reference?: Maybe<Array<Maybe<RcsbIhmDatasetSourceDbReference>>>;
  rcsb_ma_qa_metric_global?: Maybe<Array<Maybe<RcsbMaQaMetricGlobal>>>;
  rcsb_primary_citation?: Maybe<RcsbPrimaryCitation>;
  refine?: Maybe<Array<Maybe<Refine>>>;
  refine_analyze?: Maybe<Array<Maybe<RefineAnalyze>>>;
  refine_hist?: Maybe<Array<Maybe<RefineHist>>>;
  refine_ls_restr?: Maybe<Array<Maybe<RefineLsRestr>>>;
  reflns?: Maybe<Array<Maybe<Reflns>>>;
  reflns_shell?: Maybe<Array<Maybe<ReflnsShell>>>;
  software?: Maybe<Array<Maybe<Software>>>;
  struct?: Maybe<Struct>;
  struct_keywords?: Maybe<StructKeywords>;
  symmetry?: Maybe<Symmetry>;
}

export interface CoreInterface {
  __typename?: 'CoreInterface';
  rcsb_id: Scalars['String']['output'];
  rcsb_interface_container_identifiers: RcsbInterfaceContainerIdentifiers;
  rcsb_interface_info?: Maybe<RcsbInterfaceInfo>;
  /** List of operations for each interface partner. */
  rcsb_interface_operator: Array<Maybe<Array<Maybe<Array<Maybe<Scalars['String']['output']>>>>>>;
  rcsb_interface_partner: Array<Maybe<RcsbInterfacePartner>>;
  rcsb_latest_revision?: Maybe<RcsbLatestRevision>;
}

export interface CoreNonpolymerEntity {
  __typename?: 'CoreNonpolymerEntity';
  /** Get entry that contains this non-polymer entity. */
  entry?: Maybe<CoreEntry>;
  /** Get a non-polymer chemical components described in this molecular entity. */
  nonpolymer_comp?: Maybe<CoreChemComp>;
  /** Get all unique non-polymer instances (chains) for this non-polymer entity. */
  nonpolymer_entity_instances?: Maybe<Array<Maybe<CoreNonpolymerEntityInstance>>>;
  pdbx_entity_nonpoly?: Maybe<PdbxEntityNonpoly>;
  /** Get a BIRD chemical components described in this molecular entity. */
  prd?: Maybe<CoreChemComp>;
  /**
   * A unique identifier for each object in this entity container formed by
   *  an underscore separated concatenation of entry and entity identifiers.
   *
   * Examples:
   * 6EL3_1
   *
   */
  rcsb_id: Scalars['String']['output'];
  rcsb_latest_revision?: Maybe<RcsbLatestRevision>;
  rcsb_nonpolymer_entity?: Maybe<RcsbNonpolymerEntity>;
  rcsb_nonpolymer_entity_annotation?: Maybe<Array<Maybe<RcsbNonpolymerEntityAnnotation>>>;
  rcsb_nonpolymer_entity_container_identifiers?: Maybe<RcsbNonpolymerEntityContainerIdentifiers>;
  rcsb_nonpolymer_entity_feature?: Maybe<Array<Maybe<RcsbNonpolymerEntityFeature>>>;
  rcsb_nonpolymer_entity_feature_summary?: Maybe<Array<Maybe<RcsbNonpolymerEntityFeatureSummary>>>;
  rcsb_nonpolymer_entity_keywords?: Maybe<RcsbNonpolymerEntityKeywords>;
  rcsb_nonpolymer_entity_name_com?: Maybe<Array<Maybe<RcsbNonpolymerEntityNameCom>>>;
}

export interface CoreNonpolymerEntityInstance {
  __typename?: 'CoreNonpolymerEntityInstance';
  /** Get non-polymer entity for this non-polymer entity instance. */
  nonpolymer_entity?: Maybe<CoreNonpolymerEntity>;
  pdbx_struct_special_symmetry?: Maybe<Array<Maybe<PdbxStructSpecialSymmetry>>>;
  pdbx_vrpt_summary_entity_fit_to_map?: Maybe<Array<Maybe<PdbxVrptSummaryEntityFitToMap>>>;
  pdbx_vrpt_summary_entity_geometry?: Maybe<Array<Maybe<PdbxVrptSummaryEntityGeometry>>>;
  /**
   * A unique identifier for each object in this entity instance container formed by
   *  an 'dot' (.) separated concatenation of entry and entity instance identifiers.
   *
   * Examples:
   * 1KIP.A
   *
   */
  rcsb_id: Scalars['String']['output'];
  rcsb_latest_revision?: Maybe<RcsbLatestRevision>;
  rcsb_nonpolymer_entity_instance_container_identifiers?: Maybe<RcsbNonpolymerEntityInstanceContainerIdentifiers>;
  rcsb_nonpolymer_instance_annotation?: Maybe<Array<Maybe<RcsbNonpolymerInstanceAnnotation>>>;
  rcsb_nonpolymer_instance_feature?: Maybe<Array<Maybe<RcsbNonpolymerInstanceFeature>>>;
  rcsb_nonpolymer_instance_feature_summary?: Maybe<Array<Maybe<RcsbNonpolymerInstanceFeatureSummary>>>;
  rcsb_nonpolymer_instance_validation_score?: Maybe<Array<Maybe<RcsbNonpolymerInstanceValidationScore>>>;
  rcsb_nonpolymer_struct_conn?: Maybe<Array<Maybe<RcsbNonpolymerStructConn>>>;
  rcsb_target_neighbors?: Maybe<Array<Maybe<RcsbTargetNeighbors>>>;
  struct_asym?: Maybe<StructAsym>;
}

export interface CorePfam {
  __typename?: 'CorePfam';
  /** Accession number of Pfam entry. */
  rcsb_id: Scalars['String']['output'];
  /**
   * The unique accession code of protein families and domains in the Pfam database.
   *
   * Examples:
   * PF00621, PF00637, PF00656
   *
   */
  rcsb_pfam_accession: Scalars['String']['output'];
  /** Details of the Pfam clan to which the entity belongs. */
  rcsb_pfam_clan_id?: Maybe<Scalars['String']['output']>;
  /** Textual description of the family. */
  rcsb_pfam_comment?: Maybe<Scalars['String']['output']>;
  rcsb_pfam_container_identifiers: RcsbPfamContainerIdentifiers;
  /**
   * A human-readable name of protein families and domains.
   *
   * Examples:
   * Lectin like domain, Cell division control protein 24, OB domain 2, Protein of unknown function (DUF722)
   *
   */
  rcsb_pfam_description?: Maybe<Scalars['String']['output']>;
  /**
   * The unique identifier of protein families and domains in the Pfam database.
   *
   * Examples:
   * RhoGEF, Clathrin, Peptidase_C14
   *
   */
  rcsb_pfam_identifier?: Maybe<Scalars['String']['output']>;
  /**
   * Pfam-A is the manually curated portion of the Pfam database.
   *
   * Allowable values:
   * Pfam-A
   *
   */
  rcsb_pfam_provenance_code?: Maybe<Scalars['String']['output']>;
  /**
   * Pfam entries are classified into six different categories, depending on the length and nature of the sequence regions included in the entry: family, domain, repeats, motifs, coiled-coil, and disordered.
   *
   * Allowable values:
   * Family, Domain, Repeat, Motif, Disordered, Coiled-coil
   *
   */
  rcsb_pfam_seed_source?: Maybe<Scalars['String']['output']>;
}

export interface CorePolymerEntity {
  __typename?: 'CorePolymerEntity';
  /** Get all unique monomers described in this molecular entity. */
  chem_comp_monomers?: Maybe<Array<Maybe<CoreChemComp>>>;
  /** Get all unique non-standard monomers described in this molecular entity. */
  chem_comp_nstd_monomers?: Maybe<Array<Maybe<CoreChemComp>>>;
  entity_poly?: Maybe<EntityPoly>;
  entity_src_gen?: Maybe<Array<Maybe<EntitySrcGen>>>;
  entity_src_nat?: Maybe<Array<Maybe<EntitySrcNat>>>;
  /** Get entry that contains this molecular entity. */
  entry?: Maybe<CoreEntry>;
  pdbx_entity_src_syn?: Maybe<Array<Maybe<PdbxEntitySrcSyn>>>;
  /** Get all unique Pfam annotations associated with this molecular entity. */
  pfams?: Maybe<Array<Maybe<CorePfam>>>;
  /** Get all groups for this entity. */
  polymer_entity_groups?: Maybe<Array<Maybe<GroupPolymerEntity>>>;
  /** Get all unique polymer instances (chains) for this molecular entity. */
  polymer_entity_instances?: Maybe<Array<Maybe<CorePolymerEntityInstance>>>;
  /** Get a BIRD chemical components described in this molecular entity. */
  prd?: Maybe<CoreChemComp>;
  /** Indicates intrinsic flexibility of protein structures determined from structural variations between different depositions and chains in asymmetric units of the same protein in PDB (95% sequence identity). */
  rcsb_cluster_flexibility?: Maybe<RcsbClusterFlexibility>;
  rcsb_cluster_membership?: Maybe<Array<Maybe<RcsbClusterMembership>>>;
  rcsb_entity_host_organism?: Maybe<Array<Maybe<RcsbEntityHostOrganism>>>;
  rcsb_entity_source_organism?: Maybe<Array<Maybe<RcsbEntitySourceOrganism>>>;
  rcsb_genomic_lineage?: Maybe<Array<Maybe<RcsbGenomicLineage>>>;
  /**
   * A unique identifier for each object in this entity container formed by
   *  an underscore separated concatenation of entry and entity identifiers.
   *
   * Examples:
   * 6EL3_1
   *
   */
  rcsb_id: Scalars['String']['output'];
  rcsb_latest_revision?: Maybe<RcsbLatestRevision>;
  /** Members of the membrane protein classification lineage. */
  rcsb_membrane_lineage?: Maybe<Array<Maybe<RcsbMembraneLineage>>>;
  /**
   * Mpstruc keyword denotes original annotation, Homology keyword denotes annotation inferred by homology.
   *
   * Allowable values:
   * Mpstruc, Homology
   *
   */
  rcsb_membrane_lineage_provenance_code?: Maybe<Scalars['String']['output']>;
  rcsb_polymer_entity?: Maybe<RcsbPolymerEntity>;
  rcsb_polymer_entity_align?: Maybe<Array<Maybe<RcsbPolymerEntityAlign>>>;
  rcsb_polymer_entity_annotation?: Maybe<Array<Maybe<RcsbPolymerEntityAnnotation>>>;
  rcsb_polymer_entity_container_identifiers: RcsbPolymerEntityContainerIdentifiers;
  rcsb_polymer_entity_feature?: Maybe<Array<Maybe<RcsbPolymerEntityFeature>>>;
  rcsb_polymer_entity_feature_summary?: Maybe<Array<Maybe<RcsbPolymerEntityFeatureSummary>>>;
  rcsb_polymer_entity_group_membership?: Maybe<Array<Maybe<RcsbPolymerEntityGroupMembership>>>;
  rcsb_polymer_entity_keywords?: Maybe<RcsbPolymerEntityKeywords>;
  rcsb_polymer_entity_name_com?: Maybe<Array<Maybe<RcsbPolymerEntityNameCom>>>;
  rcsb_polymer_entity_name_sys?: Maybe<Array<Maybe<RcsbPolymerEntityNameSys>>>;
  rcsb_related_target_references?: Maybe<Array<Maybe<RcsbRelatedTargetReferences>>>;
  rcsb_target_cofactors?: Maybe<Array<Maybe<RcsbTargetCofactors>>>;
  /** Get all unique UniProt KB annotations associated with this molecular entity. */
  uniprots?: Maybe<Array<Maybe<CoreUniprot>>>;
}

export interface CorePolymerEntityInstance {
  __typename?: 'CorePolymerEntityInstance';
  pdbx_struct_special_symmetry?: Maybe<Array<Maybe<PdbxStructSpecialSymmetry>>>;
  pdbx_vrpt_summary_entity_fit_to_map?: Maybe<Array<Maybe<PdbxVrptSummaryEntityFitToMap>>>;
  pdbx_vrpt_summary_entity_geometry?: Maybe<Array<Maybe<PdbxVrptSummaryEntityGeometry>>>;
  /** Get polymer entity for this polymer entity instance. */
  polymer_entity?: Maybe<CorePolymerEntity>;
  /**
   * A unique identifier for each object in this entity instance container formed by
   *  an 'dot' (.) separated concatenation of entry and entity instance identifiers.
   *
   * Examples:
   * 1KIP.A
   *
   */
  rcsb_id: Scalars['String']['output'];
  rcsb_latest_revision?: Maybe<RcsbLatestRevision>;
  rcsb_ligand_neighbors?: Maybe<Array<Maybe<RcsbLigandNeighbors>>>;
  rcsb_polymer_entity_instance_container_identifiers?: Maybe<RcsbPolymerEntityInstanceContainerIdentifiers>;
  rcsb_polymer_instance_annotation?: Maybe<Array<Maybe<RcsbPolymerInstanceAnnotation>>>;
  rcsb_polymer_instance_feature?: Maybe<Array<Maybe<RcsbPolymerInstanceFeature>>>;
  rcsb_polymer_instance_feature_summary?: Maybe<Array<Maybe<RcsbPolymerInstanceFeatureSummary>>>;
  rcsb_polymer_struct_conn?: Maybe<Array<Maybe<RcsbPolymerStructConn>>>;
  struct_asym?: Maybe<StructAsym>;
}

export interface CorePubmed {
  __typename?: 'CorePubmed';
  /** Unique integer value assigned to each PubMed record. */
  rcsb_id?: Maybe<Scalars['String']['output']>;
  /** A concise, accurate and factual mini-version of the paper contents. */
  rcsb_pubmed_abstract_text?: Maybe<Scalars['String']['output']>;
  /** The institution(s) that the author is affiliated with. Multiple affiliations per author are allowed. */
  rcsb_pubmed_affiliation_info?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Unique integer value assigned to each PubMed Central record. */
  rcsb_pubmed_central_id?: Maybe<Scalars['String']['output']>;
  rcsb_pubmed_container_identifiers: RcsbPubmedContainerIdentifiers;
  /** Persistent identifier used to provide a link to an article location on the Internet. */
  rcsb_pubmed_doi?: Maybe<Scalars['String']['output']>;
  /** NLM controlled vocabulary, Medical Subject Headings (MeSH), is used to characterize the content of the articles represented by MEDLINE citations. */
  rcsb_pubmed_mesh_descriptors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Members of the MeSH classification lineage. */
  rcsb_pubmed_mesh_descriptors_lineage?: Maybe<Array<Maybe<RcsbPubmedMeshDescriptorsLineage>>>;
}

export interface CoreUniprot {
  __typename?: 'CoreUniprot';
  /** Primary accession number of a given UniProtKB entry. */
  rcsb_id?: Maybe<Scalars['String']['output']>;
  /** List of UniProtKB accession numbers where original accession numbers are retained as ‘secondary’ accession numbers. */
  rcsb_uniprot_accession?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** UniProt pairwise sequence alignments. */
  rcsb_uniprot_alignments?: Maybe<RcsbUniprotAlignments>;
  rcsb_uniprot_annotation?: Maybe<Array<Maybe<RcsbUniprotAnnotation>>>;
  rcsb_uniprot_container_identifiers: RcsbUniprotContainerIdentifiers;
  /** A list of unique identifiers (former IDs), often containing biologically relevant information. */
  rcsb_uniprot_entry_name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  rcsb_uniprot_external_reference?: Maybe<Array<Maybe<RcsbUniprotExternalReference>>>;
  rcsb_uniprot_feature?: Maybe<Array<Maybe<RcsbUniprotFeature>>>;
  /** Keywords constitute a controlled vocabulary that summarises the content of a UniProtKB entry. */
  rcsb_uniprot_keyword?: Maybe<Array<Maybe<RcsbUniprotKeyword>>>;
  rcsb_uniprot_protein?: Maybe<RcsbUniprotProtein>;
}

export interface CurrentEntry {
  __typename?: 'CurrentEntry';
  /**
   * The RCSB entry identifier.
   *
   * Examples:
   * 1KIP
   *
   */
  rcsb_id: Scalars['String']['output'];
  rcsb_repository_holdings_current?: Maybe<RcsbRepositoryHoldingsCurrent>;
  rcsb_repository_holdings_current_entry_container_identifiers?: Maybe<RcsbRepositoryHoldingsCurrentEntryContainerIdentifiers>;
}

export interface Database2 {
  __typename?: 'Database2';
  /**
   * The code assigned by the database identified in
   *  _database_2.database_id.
   *
   * Examples:
   * 1ABC, ABCDEF
   *
   */
  database_code: Scalars['String']['output'];
  /**
   * An abbreviation that identifies the database.
   *
   * Allowable values:
   * AlphaFoldDB, BMRB, EBI, EMDB, MODBASE, ModelArchive, NDB, PDB, PDB-Dev, PDBE, PDB_ACC, RCSB, SWISS-MODEL_REPOSITORY, WWPDB
   *
   */
  database_id: Scalars['String']['output'];
  /**
   * Document Object Identifier (DOI) for this entry registered
   * with http://crossref.org.
   *
   * Examples:
   * 10.2210/pdb6lu7/pdb
   *
   */
  pdbx_DOI?: Maybe<Scalars['String']['output']>;
  /**
   * Extended accession code issued for for _database_2.database_code assigned by the database identified in
   *  _database_2.database_id.
   *
   * Examples:
   * pdb_00006lu7
   *
   */
  pdbx_database_accession?: Maybe<Scalars['String']['output']>;
}

export interface Diffrn {
  __typename?: 'Diffrn';
  /**
   * The mean hydrostatic pressure in kilopascals at which the
   *  intensities were measured.
   */
  ambient_pressure?: Maybe<Scalars['Float']['output']>;
  /**
   * The mean temperature in kelvins at which the intensities were
   *  measured.
   */
  ambient_temp?: Maybe<Scalars['Float']['output']>;
  /**
   * A description of special aspects of temperature control during
   *  data collection.
   */
  ambient_temp_details?: Maybe<Scalars['String']['output']>;
  /**
   * This data item is a pointer to _exptl_crystal.id in the
   *  EXPTL_CRYSTAL category.
   */
  crystal_id?: Maybe<Scalars['String']['output']>;
  /**
   * The physical device used to support the crystal during data
   *  collection.
   *
   * Examples:
   * glass capillary, quartz capillary, fiber, metal loop
   *
   */
  crystal_support?: Maybe<Scalars['String']['output']>;
  /**
   * Special details of the diffraction measurement process. Should
   *  include information about source instability, crystal motion,
   *  degradation and so on.
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * This data item uniquely identifies a set of diffraction
   *  data.
   */
  id: Scalars['String']['output'];
  /**
   * Y/N if using serial crystallography experiment in which multiple crystals contribute to each diffraction frame in the experiment.
   *
   * Allowable values:
   * N, Y
   *
   */
  pdbx_serial_crystal_experiment?: Maybe<Scalars['String']['output']>;
}

export interface DiffrnDetector {
  __typename?: 'DiffrnDetector';
  /** A description of special aspects of the radiation detector. */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * The general class of the radiation detector.
   *
   * Examples:
   * photographic film, scintillation counter, CCD plate, BF~3~ counter
   *
   */
  detector?: Maybe<Scalars['String']['output']>;
  /**
   * This data item is a pointer to _diffrn.id in the DIFFRN
   *  category.
   */
  diffrn_id: Scalars['String']['output'];
  /**
   * The date of data collection.
   *
   * Examples:
   * 1996-12-25
   *
   */
  pdbx_collection_date?: Maybe<Scalars['Date']['output']>;
  /** The operating frequency of the detector (Hz) used in data collection. */
  pdbx_frequency?: Maybe<Scalars['Float']['output']>;
  /**
   * The make, model or name of the detector device used.
   *
   * Examples:
   * DECTRIS PILATUS 12M, RAYONIX MX-325
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface DiffrnRadiation {
  __typename?: 'DiffrnRadiation';
  /**
   * The collimation or focusing applied to the radiation.
   *
   * Examples:
   * 0.3 mm double-pinhole, 0.5 mm, focusing mirrors
   *
   */
  collimation?: Maybe<Scalars['String']['output']>;
  /**
   * This data item is a pointer to _diffrn.id in the DIFFRN
   *  category.
   */
  diffrn_id: Scalars['String']['output'];
  /**
   * The method used to obtain monochromatic radiation. If a mono-
   *  chromator crystal is used, the material and the indices of the
   *  Bragg reflection are specified.
   *
   * Examples:
   * Zr filter, Ge 220, none, equatorial mounted graphite
   *
   */
  monochromator?: Maybe<Scalars['String']['output']>;
  /**
   * SINGLE WAVELENGTH, LAUE, or MAD.
   *
   * Examples:
   * SINGLE WAVELENGTH, MONOCHROMATIC, LAUE, MAD, OTHER
   *
   */
  pdbx_diffrn_protocol?: Maybe<Scalars['String']['output']>;
  /**
   * Monochromatic or Laue.
   *
   * Allowable values:
   * L, M
   *
   */
  pdbx_monochromatic_or_laue_m_l?: Maybe<Scalars['String']['output']>;
  /**
   * The radiation scattering type for this diffraction data set.
   *
   * Allowable values:
   * electron, neutron, x-ray
   *
   */
  pdbx_scattering_type?: Maybe<Scalars['String']['output']>;
  /** Wavelength of radiation. */
  pdbx_wavelength?: Maybe<Scalars['String']['output']>;
  /** Comma separated list of wavelengths or wavelength range. */
  pdbx_wavelength_list?: Maybe<Scalars['String']['output']>;
  /**
   * The nature of the radiation. This is typically a description
   *  of the X-ray wavelength in Siegbahn notation.
   *
   * Examples:
   * CuK\a, Cu K\a~1~, Cu K-L~2,3~, white-beam
   *
   */
  type?: Maybe<Scalars['String']['output']>;
  /**
   * This data item is a pointer to _diffrn_radiation_wavelength.id
   *  in the DIFFRN_RADIATION_WAVELENGTH category.
   */
  wavelength_id?: Maybe<Scalars['String']['output']>;
}

export interface DiffrnSource {
  __typename?: 'DiffrnSource';
  /** A description of special aspects of the radiation source used. */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * This data item is a pointer to _diffrn.id in the DIFFRN
   *  category.
   */
  diffrn_id: Scalars['String']['output'];
  /**
   * Synchrotron beamline.
   *
   * Examples:
   * 17-ID-1, 19-ID
   *
   */
  pdbx_synchrotron_beamline?: Maybe<Scalars['String']['output']>;
  /**
   * Synchrotron site.
   *
   * Examples:
   * APS, NSLS-II
   *
   */
  pdbx_synchrotron_site?: Maybe<Scalars['String']['output']>;
  /** Wavelength of radiation. */
  pdbx_wavelength?: Maybe<Scalars['String']['output']>;
  /**
   * Comma separated list of wavelengths or wavelength range.
   *
   * Examples:
   * 0.987 or 0.987, 0.988, 1.0 or 0.99-1.5
   *
   */
  pdbx_wavelength_list?: Maybe<Scalars['String']['output']>;
  /**
   * The general class of the radiation source.
   *
   * Examples:
   * sealed X-ray tube, nuclear reactor, spallation source, electron microscope, rotating-anode X-ray tube, synchrotron
   *
   */
  source?: Maybe<Scalars['String']['output']>;
  /**
   * The make, model or name of the source of radiation.
   *
   * Examples:
   * NSLS beamline X8C, Rigaku RU200
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface DrugbankContainerIdentifiers {
  __typename?: 'DrugbankContainerIdentifiers';
  /** The DrugBank accession code */
  drugbank_id: Scalars['String']['output'];
}

export interface DrugbankInfo {
  __typename?: 'DrugbankInfo';
  /** The DrugBank drug affected organisms. */
  affected_organisms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The Anatomical Therapeutic Chemical Classification System (ATC) codes. */
  atc_codes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** DrugBank drug brand names. */
  brand_names?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The DrugBank assigned Chemical Abstracts Service identifier.
   *
   * Examples:
   * 56-65-5
   *
   */
  cas_number?: Maybe<Scalars['String']['output']>;
  /** The DrugBank drug description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The DrugBank drug categories. */
  drug_categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The DrugBank drug groups determine their drug development status.
   *
   * Allowable values:
   * approved, experimental, illicit, investigational, nutraceutical, vet_approved, withdrawn
   *
   */
  drug_groups?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  drug_products?: Maybe<Array<Maybe<DrugbankInfoDrugProducts>>>;
  /** The DrugBank accession code */
  drugbank_id: Scalars['String']['output'];
  /**
   * The DrugBank drug indication.
   *
   * Examples:
   * For nutritional supplementation, also for treating dietary shortage or imbalance
   *
   */
  indication?: Maybe<Scalars['String']['output']>;
  /**
   * The DrugBank drug mechanism of actions.
   *
   * Examples:
   * ATP is able to store and transport chemical energy within cells.
   *
   */
  mechanism_of_action?: Maybe<Scalars['String']['output']>;
  /** The DrugBank drug name. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The DrugBank drug pharmacology.
   *
   * Examples:
   * Adenosine triphosphate (ATP) is the nucleotide known in biochemistry as the "molecular currency" of intracellular energy transfer; that is, ATP is able to store and transport chemical energy within cells. ATP also plays an important role in the synthesis of nucleic acids. The total quantity of ATP in the human body is about 0.1 mole. The energy used by human cells requires the hydrolysis of 200 to 300 moles of ATP daily. This means that each ATP molecule is recycled 2000 to 3000 times during a single day. ATP cannot be stored, hence its consumption must closely follow its synthesis.
   *
   */
  pharmacology?: Maybe<Scalars['String']['output']>;
  /** DrugBank drug name synonyms. */
  synonyms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
}

export interface DrugbankInfoDrugProducts {
  __typename?: 'DrugbankInfoDrugProducts';
  /**
   * Indicates whether this drug has been approved by the regulating government.
   *
   * Allowable values:
   * N, Y
   *
   */
  approved?: Maybe<Scalars['String']['output']>;
  /**
   * The country where this commercially available drug has been approved.
   *
   * Allowable values:
   * Canada, EU, US
   *
   */
  country?: Maybe<Scalars['String']['output']>;
  /**
   * The ending date for market approval.
   *
   * Examples:
   * 2003-07-30
   *
   */
  ended_marketing_on?: Maybe<Scalars['Date']['output']>;
  /**
   * The proprietary name(s) provided by the manufacturer for any commercially available products containing this drug.
   *
   * Examples:
   * Hivid Tab 0.375mg
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Source of this product information. For example, a value of DPD indicates this information was retrieved from the Canadian Drug Product Database.
   *
   * Allowable values:
   * DPD, EMA, FDA NDC
   *
   */
  source?: Maybe<Scalars['String']['output']>;
  /**
   * The starting date for market approval.
   *
   * Examples:
   * 1992-12-31
   *
   */
  started_marketing_on?: Maybe<Scalars['Date']['output']>;
}

export interface DrugbankTarget {
  __typename?: 'DrugbankTarget';
  /** The type of target interaction. */
  interaction_type?: Maybe<Scalars['String']['output']>;
  /** The target name. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _drugbank_target.ordinal distinguishes
   *  related examples for each chemical component.
   */
  ordinal: Scalars['Int']['output'];
  /** The organism common name. */
  organism_common_name?: Maybe<Scalars['String']['output']>;
  /**
   * The reference identifier code for the target interaction reference.
   *
   * Examples:
   * Q9HD40
   *
   */
  reference_database_accession_code?: Maybe<Scalars['String']['output']>;
  /**
   * The reference database name for the target interaction.
   *
   * Allowable values:
   * UniProt
   *
   */
  reference_database_name?: Maybe<Scalars['String']['output']>;
  /**
   * Target sequence expressed as string of one-letter amino acid codes.
   *
   * Examples:
   * MAKQRSG...
   *
   */
  seq_one_letter_code?: Maybe<Scalars['String']['output']>;
  /** The actions of the target interaction. */
  target_actions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
}

export interface Em2dCrystalEntity {
  __typename?: 'Em2dCrystalEntity';
  /** Unit-cell angle gamma in degrees. */
  angle_gamma?: Maybe<Scalars['Float']['output']>;
  /** Length used to sample the reciprocal lattice lines in the c-direction. */
  c_sampling_length?: Maybe<Scalars['Float']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /** pointer to _em_image_processing.id in the EM_IMAGE_PROCESSING category. */
  image_processing_id: Scalars['String']['output'];
  /**
   * Unit-cell length a in angstroms.
   *
   * Examples:
   * null
   *
   */
  length_a?: Maybe<Scalars['Float']['output']>;
  /**
   * Unit-cell length b in angstroms.
   *
   * Examples:
   * null
   *
   */
  length_b?: Maybe<Scalars['Float']['output']>;
  /**
   * Thickness of 2D crystal
   *
   * Examples:
   * null
   *
   */
  length_c?: Maybe<Scalars['Float']['output']>;
  /**
   * There are 17 plane groups classified as oblique, rectangular, square, and hexagonal.
   *  To describe the symmetry of 2D crystals of biological molecules,
   *  plane groups are expanded to equivalent noncentrosymmetric space groups.
   *  The 2D crystal plane corresponds to the 'ab' plane of the space group.
   *
   *  Enumerated space group descriptions include the plane group number in parentheses,
   *  the H-M plane group symbol, and the plane group class.
   *
   * Allowable values:
   * C 1 2, C 2 2 2, P 1, P 1 2, P 1 21, P 2, P 2 2 2, P 2 2 21, P 2 21 21, P 3, P 3 1 2, P 3 2 1, P 4, P 4 2 2, P 4 21 2, P 6, P 6 2 2
   *
   */
  space_group_name_H_M?: Maybe<Scalars['String']['output']>;
}

export interface Em3dCrystalEntity {
  __typename?: 'Em3dCrystalEntity';
  /**
   * Unit-cell angle alpha in degrees.
   *
   * Examples:
   * null
   *
   */
  angle_alpha?: Maybe<Scalars['Float']['output']>;
  /**
   * Unit-cell angle beta in degrees.
   *
   * Examples:
   * null
   *
   */
  angle_beta?: Maybe<Scalars['Float']['output']>;
  /**
   * Unit-cell angle gamma in degrees.
   *
   * Examples:
   * null
   *
   */
  angle_gamma?: Maybe<Scalars['Float']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /** pointer to _em_image_processing.id in the EM_IMAGE_PROCESSING category. */
  image_processing_id: Scalars['String']['output'];
  /**
   * Unit-cell length a in angstroms.
   *
   * Examples:
   * null
   *
   */
  length_a?: Maybe<Scalars['Float']['output']>;
  /**
   * Unit-cell length b in angstroms.
   *
   * Examples:
   * null
   *
   */
  length_b?: Maybe<Scalars['Float']['output']>;
  /**
   * Unit-cell length c in angstroms.
   *
   * Examples:
   * null
   *
   */
  length_c?: Maybe<Scalars['Float']['output']>;
  /**
   * Space group name.
   *
   * Examples:
   * P 1, P 21 21 2, I 4, H 3
   *
   */
  space_group_name?: Maybe<Scalars['String']['output']>;
  /** Space group number. */
  space_group_num?: Maybe<Scalars['Int']['output']>;
}

export interface Em3dFitting {
  __typename?: 'Em3dFitting';
  /**
   * Any additional details regarding fitting of atomic coordinates into
   *  the 3DEM volume, including data and considerations from other
   *  methods used in computation of the model.
   *
   * Examples:
   * Initial local fitting was done using Chimera and then NMFF was used for flexible fitting.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _em_3d_fitting.id must uniquely identify
   *  a fitting procedure of atomic coordinates
   *  into 3dem reconstructed map volume.
   */
  id: Scalars['String']['output'];
  /**
   * The method used to fit atomic coordinates
   *  into the 3dem reconstructed map.
   */
  method?: Maybe<Scalars['String']['output']>;
  /** The overall B (temperature factor) value for the 3d-em volume. */
  overall_b_value?: Maybe<Scalars['Float']['output']>;
  /**
   * The refinement protocol used.
   *
   * Allowable values:
   * AB INITIO MODEL, BACKBONE TRACE, FLEXIBLE FIT, OTHER, RIGID BODY FIT
   *
   */
  ref_protocol?: Maybe<Scalars['String']['output']>;
  /**
   * A flag to indicate whether fitting was carried out in real
   *  or reciprocal refinement space.
   *
   * Allowable values:
   * REAL, RECIPROCAL
   *
   */
  ref_space?: Maybe<Scalars['String']['output']>;
  /**
   * The measure used to assess quality of fit of the atomic coordinates in the
   *  3DEM map volume.
   *
   * Examples:
   * Cross-correlation coefficient
   *
   */
  target_criteria?: Maybe<Scalars['String']['output']>;
}

export interface Em3dFittingList {
  __typename?: 'Em3dFittingList';
  /**
   * The value of _em_3d_fitting_list.3d_fitting_id is a pointer
   *  to  _em_3d_fitting.id in the 3d_fitting category
   */
  _3d_fitting_id: Scalars['String']['output'];
  /**
   * Details about the model used in fitting.
   *
   * Examples:
   * The initial model consisted of the complete biological assembly for PDB entry 2GTL.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /**
   * The ID of the biopolymer chain used for fitting, e.g., A.  Please note that
   * only one chain can be specified per instance.  If all chains of a particular
   * structure have been used for fitting, this field can be left blank.
   *
   * Examples:
   * The ID of the biopolymer chain used for fitting, e.g., A. Please note that only one chain can be specified per instance. If all chains of a particular structure have been used for fitting, this field can be left blank.
   *
   */
  pdb_chain_id?: Maybe<Scalars['String']['output']>;
  /** Residue range for the identified chain. */
  pdb_chain_residue_range?: Maybe<Scalars['String']['output']>;
  /**
   * The PDB code for the entry used in fitting.
   *
   * Examples:
   * 1EHZ
   *
   */
  pdb_entry_id?: Maybe<Scalars['String']['output']>;
}

export interface Em3dReconstruction {
  __typename?: 'Em3dReconstruction';
  /**
   * The actual pixel size of the projection set of images in Angstroms.
   *
   * Examples:
   * null, null
   *
   */
  actual_pixel_size?: Maybe<Scalars['Float']['output']>;
  /** The reconstruction algorithm/technique used to generate the map. */
  algorithm?: Maybe<Scalars['String']['output']>;
  /**
   * Any additional details used in the 3d reconstruction.
   *
   * Examples:
   * a modified version of SPIDER program was used for the reconstruction
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /** Foreign key to the EM_IMAGE_PROCESSING category */
  image_processing_id: Scalars['String']['output'];
  /**
   * The magnification calibration method for the 3d reconstruction.
   *
   * Examples:
   * TMV images
   *
   */
  magnification_calibration?: Maybe<Scalars['String']['output']>;
  /**
   * The algorithm method used for the 3d-reconstruction.
   *
   * Examples:
   * cross-common lines, polar Fourier transform (PFT)
   *
   */
  method?: Maybe<Scalars['String']['output']>;
  /**
   * The nominal pixel size of the projection set of images in Angstroms.
   *
   * Examples:
   * null, null
   *
   */
  nominal_pixel_size?: Maybe<Scalars['Float']['output']>;
  /** The number of classes used in the final 3d reconstruction */
  num_class_averages?: Maybe<Scalars['Int']['output']>;
  /** The number of 2D projections or 3D subtomograms used in the 3d reconstruction */
  num_particles?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates details on how the half-map used for resolution determination (usually by FSC) have been generated.
   *
   * Allowable values:
   * HALF-MAPS REFINED AGAINST SAME DATA, HALF-MAPS REFINED INDEPENDENTLY, HALF-MAPS REFINED INDEPENDENTLY WITH FREQUENCY RANGE OMITTED, HALF-MAPS REFINED WITH FREQUENCY RANGE OMITTED, OTHER
   *
   */
  refinement_type?: Maybe<Scalars['String']['output']>;
  /**
   * The final resolution (in angstroms) of the 3D reconstruction.
   *
   * Examples:
   * null, null
   *
   */
  resolution?: Maybe<Scalars['Float']['output']>;
  /**
   * The  method used to determine the final resolution
   *  of the 3d reconstruction.
   *  The Fourier Shell Correlation criterion as a measure of
   *  resolution is based on the concept of splitting the (2D)
   *  data set into two halves; averaging each and comparing them
   *  using the Fourier Ring Correlation (FRC) technique.
   *
   * Examples:
   * FSC at 0.5 cut-off
   *
   */
  resolution_method?: Maybe<Scalars['String']['output']>;
  /**
   * The type of symmetry applied to the reconstruction
   *
   * Allowable values:
   * 2D CRYSTAL, 3D CRYSTAL, HELICAL, POINT
   *
   */
  symmetry_type?: Maybe<Scalars['String']['output']>;
}

export interface EmCtfCorrection {
  __typename?: 'EmCtfCorrection';
  /**
   * Any additional details about CTF correction
   *
   * Examples:
   * CTF amplitude correction was performed following 3D reconstruction
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /** Foreign key to the EM_IMAGE_PROCESSING category */
  em_image_processing_id?: Maybe<Scalars['String']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /** Type of CTF correction applied */
  type?: Maybe<Scalars['String']['output']>;
}

export interface EmDiffraction {
  __typename?: 'EmDiffraction';
  /**
   * The camera length (in millimeters). The camera length is the
   *  product of the objective focal length and the combined magnification
   *  of the intermediate and projector lenses when the microscope is
   *  operated in the diffraction mode.
   */
  camera_length?: Maybe<Scalars['Float']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /** Foreign key to the EM_IMAGING category */
  imaging_id?: Maybe<Scalars['String']['output']>;
  /**
   * Comma-separated list of tilt angles (in degrees) used in the electron diffraction experiment.
   *
   * Examples:
   * 20,40,50,55
   *
   */
  tilt_angle_list?: Maybe<Scalars['String']['output']>;
}

export interface EmDiffractionShell {
  __typename?: 'EmDiffractionShell';
  /** Pointer to EM CRYSTALLOGRAPHY STATS */
  em_diffraction_stats_id?: Maybe<Scalars['String']['output']>;
  /**
   * Completeness of the structure factor data within this resolution shell, in percent
   *
   * Examples:
   * null
   *
   */
  fourier_space_coverage?: Maybe<Scalars['Float']['output']>;
  /**
   * High resolution limit for this shell (angstroms)
   *
   * Examples:
   * null
   *
   */
  high_resolution?: Maybe<Scalars['Float']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /**
   * Low resolution limit for this shell (angstroms)
   *
   * Examples:
   * null
   *
   */
  low_resolution?: Maybe<Scalars['Float']['output']>;
  /**
   * Multiplicity (average number of measurements) for the structure factors in this resolution shell
   *
   * Examples:
   * null
   *
   */
  multiplicity?: Maybe<Scalars['Float']['output']>;
  /** Number of measured structure factors in this resolution shell */
  num_structure_factors?: Maybe<Scalars['Int']['output']>;
  /**
   * Phase residual for this resolution shell, in degrees
   *
   * Examples:
   * null
   *
   */
  phase_residual?: Maybe<Scalars['Float']['output']>;
}

export interface EmDiffractionStats {
  __typename?: 'EmDiffractionStats';
  /**
   * Any addition details about the structure factor measurements
   *
   * Examples:
   * Phases were obtained from micrograph images of the 2D crystals
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * Completeness of the structure factor data within the defined space group
   *  at the reported resolution (percent).
   *
   * Examples:
   * null
   *
   */
  fourier_space_coverage?: Maybe<Scalars['Float']['output']>;
  /**
   * High resolution limit of the structure factor data, in angstroms
   *
   * Examples:
   * null
   *
   */
  high_resolution?: Maybe<Scalars['Float']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /** Pointer to _em_image_processing.id */
  image_processing_id?: Maybe<Scalars['String']['output']>;
  /** Total number of diffraction intensities measured (before averaging) */
  num_intensities_measured?: Maybe<Scalars['Int']['output']>;
  /** Number of structure factors obtained (merged amplitudes + phases) */
  num_structure_factors?: Maybe<Scalars['Int']['output']>;
  /**
   * Overall phase error in degrees
   *
   * Examples:
   * null
   *
   */
  overall_phase_error?: Maybe<Scalars['Float']['output']>;
  /**
   * Overall phase residual in degrees
   *
   * Examples:
   * null
   *
   */
  overall_phase_residual?: Maybe<Scalars['Float']['output']>;
  /**
   * Criteria used to reject phases
   *
   * Examples:
   * Structure factors with phase errors higher than 20 degrees were omitted from refinement
   *
   */
  phase_error_rejection_criteria?: Maybe<Scalars['String']['output']>;
  /**
   * Rmerge value (percent)
   *
   * Examples:
   * null
   *
   */
  r_merge?: Maybe<Scalars['Float']['output']>;
  /**
   * Rsym value (percent)
   *
   * Examples:
   * null
   *
   */
  r_sym?: Maybe<Scalars['Float']['output']>;
}

export interface EmEmbedding {
  __typename?: 'EmEmbedding';
  /**
   * Staining procedure used in the specimen preparation.
   *
   * Examples:
   * The crystal suspension was injected into the lens of a drop of buffer containing
   *   1 % tannin sitting on a carbon film supported by a molybdenum grid.  An equal volume
   *   of 1% glucose was then added and the solution thoroughly but gently mixed.  The grid
   *   was then blotted, air dried, and frozen in LN2.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /**
   * The embedding  material.
   *
   * Examples:
   * tannin and glucose
   *
   */
  material?: Maybe<Scalars['String']['output']>;
  /** Foreign key relationship to the EM SPECIMEN category */
  specimen_id?: Maybe<Scalars['String']['output']>;
}

export interface EmEntityAssembly {
  __typename?: 'EmEntityAssembly';
  /**
   * Additional details about the sample or sample subcomponent.
   *
   * Examples:
   * Fab fragment generated by proteolytic cleavage of LA2 IgG antibody.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * macromolecules associated with this component, if defined
   *  as comma separated list of entity ids (integers).
   */
  entity_id_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /**
   * The name of the sample or sample subcomponent.
   *
   * Examples:
   * Ternary complex of alpha-tubulin with tubulin folding cofactors TBCE and TBCB, 80S Ribosome bound to emetine, messenger RNA, initiation factor 2, GroEL, antibody Fab fragment
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /** oligomeric details */
  oligomeric_details?: Maybe<Scalars['String']['output']>;
  /**
   * The parent of this assembly.
   *  This data item is an internal category pointer to _em_entity_assembly.id.
   *  By convention, the full assembly (top of hierarchy) is assigned parent id 0 (zero).
   */
  parent_id?: Maybe<Scalars['Int']['output']>;
  /**
   * The type of source (e.g., natural source) for the component (sample or sample
   * subcomponent)
   *
   * Allowable values:
   * MULTIPLE SOURCES, NATURAL, RECOMBINANT, SYNTHETIC
   *
   */
  source?: Maybe<Scalars['String']['output']>;
  /**
   * Alternative name of the component.
   *
   * Examples:
   * FADV-1
   *
   */
  synonym?: Maybe<Scalars['String']['output']>;
  /** The general type of the sample or sample subcomponent. */
  type?: Maybe<Scalars['String']['output']>;
}

export interface EmExperiment {
  __typename?: 'EmExperiment';
  /**
   * The aggregation/assembly state of the imaged specimen.
   *
   * Allowable values:
   * 2D ARRAY, 3D ARRAY, CELL, FILAMENT, HELICAL ARRAY, PARTICLE, TISSUE
   *
   */
  aggregation_state?: Maybe<Scalars['String']['output']>;
  /** Foreign key to the EM_ENTITY_ASSEMBLY category */
  entity_assembly_id?: Maybe<Scalars['String']['output']>;
  /** PRIMARY KEY */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * The reconstruction method used in the EM experiment.
   *
   * Allowable values:
   * CRYSTALLOGRAPHY, HELICAL, SINGLE PARTICLE, SUBTOMOGRAM AVERAGING, TOMOGRAPHY
   *
   */
  reconstruction_method?: Maybe<Scalars['String']['output']>;
}

export interface EmHelicalEntity {
  __typename?: 'EmHelicalEntity';
  /**
   * The angular rotation per helical subunit in degrees. Negative values indicate left-handed helices; positive values indicate right handed helices.
   *
   * Examples:
   * null
   *
   */
  angular_rotation_per_subunit?: Maybe<Scalars['Float']['output']>;
  /**
   * The axial rise per subunit in the helical assembly.
   *
   * Examples:
   * null
   *
   */
  axial_rise_per_subunit?: Maybe<Scalars['Float']['output']>;
  /**
   * Symmetry of the helical axis, either cyclic (Cn) or dihedral (Dn), where n>=1.
   *
   * Examples:
   * C1, D2, C7
   *
   */
  axial_symmetry?: Maybe<Scalars['String']['output']>;
  /**
   * Any other details regarding the helical assembly
   *
   * Examples:
   * Dihedral symmetry
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /** This data item is a pointer to _em_image_processing.id. */
  image_processing_id: Scalars['String']['output'];
}

export interface EmImageRecording {
  __typename?: 'EmImageRecording';
  /**
   * The average exposure time for each image.
   *
   * Examples:
   * null
   *
   */
  average_exposure_time?: Maybe<Scalars['Float']['output']>;
  /**
   * The electron dose received by the specimen per image (electrons per square angstrom).
   *
   * Examples:
   * null
   *
   */
  avg_electron_dose_per_image?: Maybe<Scalars['Float']['output']>;
  /**
   * Any additional details about image recording.
   *
   * Examples:
   * Images were collected in movie-mode at 17 frames per second
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * The detector mode used during image recording.
   *
   * Allowable values:
   * COUNTING, INTEGRATING, OTHER, SUPER-RESOLUTION
   *
   */
  detector_mode?: Maybe<Scalars['String']['output']>;
  /**
   * The detector type used for recording images.
   *  Usually film , CCD camera or direct electron detector.
   */
  film_or_detector_model?: Maybe<Scalars['String']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /** This data item the id of the microscopy settings used in the imaging. */
  imaging_id: Scalars['String']['output'];
  /** The number of diffraction images collected. */
  num_diffraction_images?: Maybe<Scalars['Int']['output']>;
  /** Number of grids in the microscopy session */
  num_grids_imaged?: Maybe<Scalars['Int']['output']>;
  /** The number of micrograph images collected. */
  num_real_images?: Maybe<Scalars['Int']['output']>;
}

export interface EmImaging {
  __typename?: 'EmImaging';
  /** A value of accelerating voltage (in kV) used for imaging. */
  accelerating_voltage?: Maybe<Scalars['Int']['output']>;
  /**
   * The type of procedure used to align the microscope electron beam.
   *
   * Allowable values:
   * BASIC, COMA FREE, NONE, OTHER, ZEMLIN TABLEAU
   *
   */
  alignment_procedure?: Maybe<Scalars['String']['output']>;
  /** astigmatism */
  astigmatism?: Maybe<Scalars['String']['output']>;
  /**
   * The open diameter of the c2 condenser lens,
   *  in microns.
   */
  c2_aperture_diameter?: Maybe<Scalars['Float']['output']>;
  /**
   * The maximum calibrated defocus value of the objective lens (in nanometers) used
   *  to obtain the recorded images. Negative values refer to overfocus.
   */
  calibrated_defocus_max?: Maybe<Scalars['Float']['output']>;
  /**
   * The minimum calibrated defocus value of the objective lens (in nanometers) used
   *  to obtain the recorded images. Negative values refer to overfocus.
   */
  calibrated_defocus_min?: Maybe<Scalars['Float']['output']>;
  /**
   * The magnification value obtained for a known standard just
   *  prior to, during or just after the imaging experiment.
   */
  calibrated_magnification?: Maybe<Scalars['Int']['output']>;
  /**
   * Cryogen type used to maintain the specimen stage temperature during imaging
   *  in the microscope.
   *
   * Allowable values:
   * HELIUM, NITROGEN
   *
   */
  cryogen?: Maybe<Scalars['String']['output']>;
  /**
   * Date (YYYY-MM-DD) of imaging experiment or the date at which
   *  a series of experiments began.
   *
   * Examples:
   * 2001-05-08
   *
   */
  date?: Maybe<Scalars['Date']['output']>;
  /**
   * Any additional imaging details.
   *
   * Examples:
   * Preliminary grid screening was performed manually.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * The camera length (in millimeters). The camera length is the
   *  product of the objective focal length and the combined magnification
   *  of the intermediate and projector lenses when the microscope is
   *  operated in the diffraction mode.
   */
  detector_distance?: Maybe<Scalars['Float']['output']>;
  /** electron beam tilt params */
  electron_beam_tilt_params?: Maybe<Scalars['String']['output']>;
  /** The source of electrons. The electron gun. */
  electron_source?: Maybe<Scalars['String']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /**
   * The mode of illumination.
   *
   * Allowable values:
   * FLOOD BEAM, OTHER, SPOT SCAN
   *
   */
  illumination_mode?: Maybe<Scalars['String']['output']>;
  /**
   * The name of the model of microscope.
   *
   * Allowable values:
   * FEI MORGAGNI, FEI POLARA 300, FEI TALOS ARCTICA, FEI TECNAI 10, FEI TECNAI 12, FEI TECNAI 20, FEI TECNAI ARCTICA, FEI TECNAI F20, FEI TECNAI F30, FEI TECNAI SPHERA, FEI TECNAI SPIRIT, FEI TITAN, FEI TITAN KRIOS, FEI/PHILIPS CM10, FEI/PHILIPS CM12, FEI/PHILIPS CM120T, FEI/PHILIPS CM200FEG, FEI/PHILIPS CM200FEG/SOPHIE, FEI/PHILIPS CM200FEG/ST, FEI/PHILIPS CM200FEG/UT, FEI/PHILIPS CM200T, FEI/PHILIPS CM300FEG/HE, FEI/PHILIPS CM300FEG/ST, FEI/PHILIPS CM300FEG/T, FEI/PHILIPS EM400, FEI/PHILIPS EM420, HITACHI EF2000, HITACHI EF3000, HITACHI H-9500SD, HITACHI H3000 UHVEM, HITACHI H7600, HITACHI HF2000, HITACHI HF3000, JEOL 1000EES, JEOL 100B, JEOL 100CX, JEOL 1010, JEOL 1200, JEOL 1200EX, JEOL 1200EXII, JEOL 1230, JEOL 1400, JEOL 1400/HR + YPS FEG, JEOL 2000EX, JEOL 2000EXII, JEOL 2010, JEOL 2010F, JEOL 2010HC, JEOL 2010HT, JEOL 2010UHR, JEOL 2011, JEOL 2100, JEOL 2100F, JEOL 2200FS, JEOL 2200FSC, JEOL 3000SFF, JEOL 3100FEF, JEOL 3100FFC, JEOL 3200FS, JEOL 3200FSC, JEOL 4000, JEOL 4000EX, JEOL CRYO ARM 200, JEOL CRYO ARM 300, JEOL KYOTO-3000SFF, SIEMENS SULEIKA, TFS GLACIOS, TFS KRIOS, TFS TALOS, TFS TALOS F200C, TFS TALOS L120C, TFS TITAN THEMIS, TFS TUNDRA, ZEISS LEO912, ZEISS LIBRA120PLUS
   *
   */
  microscope_model?: Maybe<Scalars['String']['output']>;
  /**
   * The mode of imaging.
   *
   * Allowable values:
   * 4D-STEM, BRIGHT FIELD, DARK FIELD, DIFFRACTION, OTHER
   *
   */
  mode?: Maybe<Scalars['String']['output']>;
  /**
   * The spherical aberration coefficient (Cs) in millimeters,
   *  of the objective lens.
   *
   * Examples:
   * null
   *
   */
  nominal_cs?: Maybe<Scalars['Float']['output']>;
  /**
   * The maximum defocus value of the objective lens (in nanometers) used
   *  to obtain the recorded images. Negative values refer to overfocus.
   */
  nominal_defocus_max?: Maybe<Scalars['Float']['output']>;
  /**
   * The minimum defocus value of the objective lens (in nanometers) used
   *  to obtain the recorded images. Negative values refer to overfocus.
   */
  nominal_defocus_min?: Maybe<Scalars['Float']['output']>;
  /** The magnification indicated by the microscope readout. */
  nominal_magnification?: Maybe<Scalars['Int']['output']>;
  /**
   * The specimen temperature maximum (kelvin) for the duration
   *  of imaging.
   */
  recording_temperature_maximum?: Maybe<Scalars['Float']['output']>;
  /**
   * The specimen temperature minimum (kelvin) for the duration
   *  of imaging.
   */
  recording_temperature_minimum?: Maybe<Scalars['Float']['output']>;
  /** Residual tilt of the electron beam (in miliradians) */
  residual_tilt?: Maybe<Scalars['Float']['output']>;
  /**
   * The name of the model of specimen holder used during imaging.
   *
   * Allowable values:
   * FEI TITAN KRIOS AUTOGRID HOLDER, FISCHIONE 2550, FISCHIONE INSTRUMENTS DUAL AXIS TOMOGRAPHY HOLDER, GATAN 626 SINGLE TILT LIQUID NITROGEN CRYO TRANSFER HOLDER, GATAN 910 MULTI-SPECIMEN SINGLE TILT CRYO TRANSFER HOLDER, GATAN 914 HIGH TILT LIQUID NITROGEN CRYO TRANSFER TOMOGRAPHY HOLDER, GATAN 915 DOUBLE TILT LIQUID NITROGEN CRYO TRANSFER HOLDER, GATAN CHDT 3504 DOUBLE TILT HIGH RESOLUTION NITROGEN COOLING HOLDER, GATAN CT3500 SINGLE TILT LIQUID NITROGEN CRYO TRANSFER HOLDER, GATAN CT3500TR SINGLE TILT ROTATION LIQUID NITROGEN CRYO TRANSFER HOLDER, GATAN ELSA 698 SINGLE TILT LIQUID NITROGEN CRYO TRANSFER HOLDER, GATAN HC 3500 SINGLE TILT HEATING/NITROGEN COOLING HOLDER, GATAN HCHDT 3010 DOUBLE TILT HIGH RESOLUTION HELIUM COOLING HOLDER, GATAN HCHST 3008 SINGLE TILT HIGH RESOLUTION HELIUM COOLING HOLDER, GATAN HELIUM, GATAN LIQUID NITROGEN, GATAN UHRST 3500 SINGLE TILT ULTRA HIGH RESOLUTION NITROGEN COOLING HOLDER, GATAN ULTDT ULTRA LOW TEMPERATURE DOUBLE TILT HELIUM COOLING HOLDER, GATAN ULTST ULTRA LOW TEMPERATURE SINGLE TILT HELIUM COOLING HOLDER, HOME BUILD, JEOL, JEOL 3200FSC CRYOHOLDER, JEOL CRYOSPECPORTER, OTHER, PHILIPS ROTATION HOLDER, SIDE ENTRY, EUCENTRIC
   *
   */
  specimen_holder_model?: Maybe<Scalars['String']['output']>;
  /**
   * The type of specimen holder used during imaging.
   *
   * Examples:
   * cryo
   *
   */
  specimen_holder_type?: Maybe<Scalars['String']['output']>;
  /** Foreign key to the EM_SPECIMEN category */
  specimen_id?: Maybe<Scalars['String']['output']>;
  /**
   * The mean specimen stage temperature (in kelvin) during imaging
   *  in the microscope.
   */
  temperature?: Maybe<Scalars['Float']['output']>;
  /**
   * The maximum angle at which the specimen was tilted to obtain
   *  recorded images.
   */
  tilt_angle_max?: Maybe<Scalars['Float']['output']>;
  /**
   * The minimum angle at which the specimen was tilted to obtain
   *  recorded images.
   */
  tilt_angle_min?: Maybe<Scalars['Float']['output']>;
}

export interface EmParticleSelection {
  __typename?: 'EmParticleSelection';
  /**
   * Additional detail such as description of filters used, if selection was
   * manual or automated, and/or template details.
   *
   * Examples:
   * negative monitor contrast facilitated particle picking
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /**
   * The value of _em_particle_selection.image_processing_id points to
   *  the EM_IMAGE_PROCESSING category.
   */
  image_processing_id: Scalars['String']['output'];
  /** The number of particles selected from the projection set of images. */
  num_particles_selected?: Maybe<Scalars['Int']['output']>;
}

export interface EmSingleParticleEntity {
  __typename?: 'EmSingleParticleEntity';
  /** PRIMARY KEY */
  id: Scalars['Int']['output'];
  /** pointer to _em_image_processing.id. */
  image_processing_id: Scalars['String']['output'];
  /**
   * Point symmetry symbol, either Cn, Dn, T, O, or I
   *
   * Examples:
   * C1, C5, C4
   *
   */
  point_symmetry?: Maybe<Scalars['String']['output']>;
}

export interface EmSoftware {
  __typename?: 'EmSoftware';
  /**
   * The purpose of the software.
   *
   * Allowable values:
   * CLASSIFICATION, CRYSTALLOGRAPHY MERGING, CTF CORRECTION, DIFFRACTION INDEXING, EWALD SPHERE CORRECTION, FINAL EULER ASSIGNMENT, IMAGE ACQUISITION, INITIAL EULER ASSIGNMENT, LATTICE DISTORTION CORRECTION, LAYERLINE INDEXING, MASKING, MODEL FITTING, MODEL REFINEMENT, MOLECULAR REPLACEMENT, OTHER, PARTICLE SELECTION, RECONSTRUCTION, SERIES ALIGNMENT, SYMMETRY DETERMINATION, VOLUME SELECTION
   *
   */
  category?: Maybe<Scalars['String']['output']>;
  /**
   * Details about the software used.
   *
   * Examples:
   * EMAN2 e2boxer.py was used to automatically select particle images.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /** pointer to _em_3d_fitting.id in the EM_3D_FITTING category. */
  fitting_id?: Maybe<Scalars['String']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /** pointer to _em_image_processing.id in the EM_IMAGE_PROCESSING category. */
  image_processing_id?: Maybe<Scalars['String']['output']>;
  /** pointer to _em_imaging.id in the EM_IMAGING category. */
  imaging_id?: Maybe<Scalars['String']['output']>;
  /**
   * The name of the software package used, e.g., RELION.  Depositors are strongly
   *   encouraged to provide a value in this field.
   *
   * Examples:
   * EMAN, Imagic, Spider, Bsoft, UCSF-Chimera
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The version of the software.
   *
   * Examples:
   * 9.03, 2.1
   *
   */
  version?: Maybe<Scalars['String']['output']>;
}

export interface EmSpecimen {
  __typename?: 'EmSpecimen';
  /**
   * The concentration (in milligrams per milliliter, mg/ml)
   *  of the complex in the sample.
   *
   * Examples:
   * null
   *
   */
  concentration?: Maybe<Scalars['Float']['output']>;
  /**
   * A description of any additional details of the specimen preparation.
   *
   * Examples:
   * This sample was monodisperse., Au was deposited at a 30 degree angle to 15 nm thickness., Colloidal gold particles were deposited by dipping into dilute solution., The specimen was frozen at high pressure using the bal-tec hpm 010 instrument., The embedded sample was sectioned at 100 K to 50 nm final thickness.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * 'YES' indicates that the specimen has been embedded.
   *
   * Allowable values:
   * NO, YES
   *
   */
  embedding_applied?: Maybe<Scalars['String']['output']>;
  /** Pointer to _em_experiment.id. */
  experiment_id: Scalars['String']['output'];
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /**
   * 'YES' indicates that the specimen has been shadowed.
   *
   * Allowable values:
   * NO, YES
   *
   */
  shadowing_applied?: Maybe<Scalars['String']['output']>;
  /**
   * 'YES' indicates that the specimen has been stained.
   *
   * Allowable values:
   * NO, YES
   *
   */
  staining_applied?: Maybe<Scalars['String']['output']>;
  /**
   * 'YES' indicates that the specimen was vitrified by cryopreservation.
   *
   * Allowable values:
   * NO, YES
   *
   */
  vitrification_applied?: Maybe<Scalars['String']['output']>;
}

export interface EmStaining {
  __typename?: 'EmStaining';
  /**
   * Staining procedure used in the specimen preparation.
   *
   * Examples:
   * Negatively stained EM specimens were prepared using a carbon-sandwich technique
   *   and uranyl-formate stain.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /**
   * The staining  material.
   *
   * Examples:
   * Uranyl Acetate
   *
   */
  material?: Maybe<Scalars['String']['output']>;
  /** Foreign key relationship to the EM SPECIMEN category */
  specimen_id?: Maybe<Scalars['String']['output']>;
  /**
   * type of staining
   *
   * Allowable values:
   * NEGATIVE, NONE, POSITIVE
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface EmVitrification {
  __typename?: 'EmVitrification';
  /** The temperature (in kelvin) of the sample just prior to vitrification. */
  chamber_temperature?: Maybe<Scalars['Float']['output']>;
  /**
   * This is the name of the cryogen.
   *
   * Allowable values:
   * ETHANE, ETHANE-PROPANE, FREON 12, FREON 22, HELIUM, METHANE, NITROGEN, OTHER, PROPANE
   *
   */
  cryogen_name?: Maybe<Scalars['String']['output']>;
  /**
   * Any additional details relating to vitrification.
   *
   * Examples:
   * Vitrification carried out in argon atmosphere.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * Relative humidity (%) of air surrounding the specimen just prior to
   * vitrification.
   */
  humidity?: Maybe<Scalars['Float']['output']>;
  /** PRIMARY KEY */
  id: Scalars['String']['output'];
  /**
   * The type of instrument used in the vitrification process.
   *
   * Allowable values:
   * CRYOSOL VITROJET, EMS-002 RAPID IMMERSION FREEZER, FEI VITROBOT MARK I, FEI VITROBOT MARK II, FEI VITROBOT MARK III, FEI VITROBOT MARK IV, GATAN CRYOPLUNGE 3, HOMEMADE PLUNGER, LEICA EM CPC, LEICA EM GP, LEICA KF80, LEICA PLUNGER, REICHERT-JUNG PLUNGER, SPOTITON, SPT LABTECH CHAMELEON, ZEISS PLUNGE FREEZER CRYOBOX
   *
   */
  instrument?: Maybe<Scalars['String']['output']>;
  /**
   * The procedure for vitrification.
   *
   * Examples:
   * plunge freezing
   *
   */
  method?: Maybe<Scalars['String']['output']>;
  /** This data item is a pointer to _em_specimen.id */
  specimen_id: Scalars['String']['output'];
  /**
   * The vitrification temperature (in kelvin), e.g.,
   *   temperature of the plunge instrument cryogen bath.
   */
  temp?: Maybe<Scalars['Float']['output']>;
  /**
   * The length of time after an event effecting the sample that
   *  vitrification was induced and a description of the event.
   *
   * Examples:
   * plunge 30 msec after spraying with effector
   *
   */
  time_resolved_state?: Maybe<Scalars['String']['output']>;
}

export interface EntityPoly {
  __typename?: 'EntityPoly';
  /**
   * A flag to indicate whether the polymer contains at least
   *  one monomer-to-monomer link different from that implied by
   *  _entity_poly.type.
   *
   * Allowable values:
   * n, no, y, yes
   *
   */
  nstd_linkage?: Maybe<Scalars['String']['output']>;
  /**
   * A flag to indicate whether the polymer contains at least
   *  one monomer that is not considered standard.
   *
   * Allowable values:
   * n, no, y, yes
   *
   */
  nstd_monomer?: Maybe<Scalars['String']['output']>;
  /**
   * Sequence of protein or nucleic acid polymer in standard one-letter
   *                codes of amino acids or nucleotides. Non-standard amino
   *                acids/nucleotides are represented by their Chemical
   *                Component Dictionary (CCD) codes in
   *                parenthesis. Deoxynucleotides are represented by the
   *                specially-assigned 2-letter CCD codes in parenthesis,
   *                with 'D' prefix added to their ribonucleotide
   *                counterparts. For hybrid polymer, each residue is
   *                represented by the code of its individual type. A
   *                cyclic polymer is represented in linear sequence from
   *                the chosen start to end.
   *
   * A for Alanine or Adenosine-5'-monophosphate
   * C for Cysteine or Cytidine-5'-monophosphate
   * D for Aspartic acid
   * E for Glutamic acid
   * F for Phenylalanine
   * G for Glycine or Guanosine-5'-monophosphate
   * H for Histidine
   * I for Isoleucine or Inosinic Acid
   * L for Leucine
   * K for Lysine
   * M for Methionine
   * N for Asparagine  or Unknown ribonucleotide
   * O for Pyrrolysine
   * P for Proline
   * Q for Glutamine
   * R for Arginine
   * S for Serine
   * T for Threonine
   * U for Selenocysteine or Uridine-5'-monophosphate
   * V for Valine
   * W for Tryptophan
   * Y for Tyrosine
   * (DA) for 2'-deoxyadenosine-5'-monophosphate
   * (DC) for 2'-deoxycytidine-5'-monophosphate
   * (DG) for 2'-deoxyguanosine-5'-monophosphate
   * (DT) for Thymidine-5'-monophosphate
   * (MSE) for Selenomethionine
   * (SEP) for Phosphoserine
   * (TPO) for Phosphothreonine
   * (PTR) for Phosphotyrosine
   * (PCA) for Pyroglutamic acid
   * (UNK) for Unknown amino acid
   * (ACE) for Acetylation cap
   * (NH2) for Amidation cap
   *
   * Examples:
   * HHHH(MSE)AKQRSG or AUCGGAAU, (MSE)SHHWGYGKHNGPEHWHKDFPIAKGERQSPVDIDTHTAKYDPSLKPLSVSYDQATSLRILNNGAAFNVEFD
   *
   */
  pdbx_seq_one_letter_code?: Maybe<Scalars['String']['output']>;
  /**
   * Canonical sequence of protein or nucleic acid polymer in standard
   *                one-letter codes of amino acids or nucleotides,
   *                corresponding to the sequence in
   *                _entity_poly.pdbx_seq_one_letter_code. Non-standard
   *                amino acids/nucleotides are represented by the codes of
   *                their parents if parent is specified in
   *                _chem_comp.mon_nstd_parent_comp_id, or by letter 'X' if
   *                parent is not specified. Deoxynucleotides are
   *                represented by their canonical one-letter codes of A,
   *                C, G, or T.
   *
   *                For modifications with several parent amino acids,
   * 	       all corresponding parent amino acid codes will be listed
   * 	       (ex. chromophores).
   *
   * Examples:
   * MSHHWGYGKHNGPEHWHKDFPIAKGERQSPVDIDTHTAKYDPSLKPLSVSYDQATSLRILNNGAAFNVEFD
   *
   */
  pdbx_seq_one_letter_code_can?: Maybe<Scalars['String']['output']>;
  /**
   * Evidence for the assignment of the polymer sequence.
   *
   * Allowable values:
   * depositor provided, derived from coordinates
   *
   */
  pdbx_sequence_evidence_code?: Maybe<Scalars['String']['output']>;
  /**
   * The PDB strand/chain id(s) corresponding to this polymer entity.
   *
   * Examples:
   * A,B, A, B, A,B,C
   *
   */
  pdbx_strand_id?: Maybe<Scalars['String']['output']>;
  /**
   * For Structural Genomics entries, the sequence's target identifier registered at the TargetTrack database.
   *
   * Examples:
   * JCSG-11211, 356560
   *
   */
  pdbx_target_identifier?: Maybe<Scalars['String']['output']>;
  /**
   * Number of regions in the sample sequence identified as expression tags, linkers, or
   *  cloning artifacts.
   */
  rcsb_artifact_monomer_count?: Maybe<Scalars['Int']['output']>;
  /** Number of monomer conflicts relative to the reference sequence. */
  rcsb_conflict_count?: Maybe<Scalars['Int']['output']>;
  /** Number of monomer deletions relative to the reference sequence. */
  rcsb_deletion_count?: Maybe<Scalars['Int']['output']>;
  /**
   * A coarse-grained polymer entity type.
   *
   * Allowable values:
   * DNA, NA-hybrid, Other, Protein, RNA
   *
   */
  rcsb_entity_polymer_type?: Maybe<Scalars['String']['output']>;
  /** Number of monomer insertions relative to the reference sequence. */
  rcsb_insertion_count?: Maybe<Scalars['Int']['output']>;
  /** Number of engineered mutations engineered in the sample sequence. */
  rcsb_mutation_count?: Maybe<Scalars['Int']['output']>;
  /** Number of non-standard monomers in the sample sequence. */
  rcsb_non_std_monomer_count?: Maybe<Scalars['Int']['output']>;
  /** Unique list of non-standard monomer chemical component identifiers in the sample sequence. */
  rcsb_non_std_monomers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** For polymer BIRD molecules the BIRD identifier for the entity. */
  rcsb_prd_id?: Maybe<Scalars['String']['output']>;
  /** The monomer length of the sample sequence. */
  rcsb_sample_sequence_length?: Maybe<Scalars['Int']['output']>;
  /**
   * The type of the polymer.
   *
   * Allowable values:
   * cyclic-pseudo-peptide, other, peptide nucleic acid, polydeoxyribonucleotide, polydeoxyribonucleotide/polyribonucleotide hybrid, polypeptide(D), polypeptide(L), polyribonucleotide
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface EntitySrcGen {
  __typename?: 'EntitySrcGen';
  /**
   * A unique identifier for the expression system. This
   *  should be extracted from a local list of expression
   *  systems.
   */
  expression_system_id?: Maybe<Scalars['String']['output']>;
  /**
   * The common name of the natural organism from which the gene was
   *  obtained.
   *
   * Examples:
   * man, yeast, bacteria
   *
   */
  gene_src_common_name?: Maybe<Scalars['String']['output']>;
  /**
   * A description of special aspects of the natural organism from
   *  which the gene was obtained.
   */
  gene_src_details?: Maybe<Scalars['String']['output']>;
  /**
   * The genus of the natural organism from which the gene was
   *  obtained.
   *
   * Examples:
   * Homo, Saccharomyces, Escherichia
   *
   */
  gene_src_genus?: Maybe<Scalars['String']['output']>;
  /**
   * The species of the natural organism from which the gene was
   *  obtained.
   *
   * Examples:
   * sapiens, cerevisiae, coli
   *
   */
  gene_src_species?: Maybe<Scalars['String']['output']>;
  /**
   * The strain of the natural organism from which the gene was
   *  obtained, if relevant.
   *
   * Examples:
   * DH5a, BMH 71-18
   *
   */
  gene_src_strain?: Maybe<Scalars['String']['output']>;
  /**
   * The tissue of the natural organism from which the gene was
   *  obtained.
   *
   * Examples:
   * heart, liver, eye lens
   *
   */
  gene_src_tissue?: Maybe<Scalars['String']['output']>;
  /**
   * The subcellular fraction of the tissue of the natural organism
   *  from which the gene was obtained.
   *
   * Examples:
   * mitochondria, nucleus, membrane
   *
   */
  gene_src_tissue_fraction?: Maybe<Scalars['String']['output']>;
  /**
   * The common name of the organism that served as host for the
   *  production of the entity.  Where full details of the protein
   *  production are available it would be expected that this item
   *  be derived from _entity_src_gen_express.host_org_common_name
   *  or via _entity_src_gen_express.host_org_tax_id
   *
   * Examples:
   * yeast, bacteria
   *
   */
  host_org_common_name?: Maybe<Scalars['String']['output']>;
  /**
   * A description of special aspects of the organism that served as
   *  host for the production of the entity. Where full details of
   *  the protein production are available it would be expected that
   *  this item would derived from _entity_src_gen_express.host_org_details
   */
  host_org_details?: Maybe<Scalars['String']['output']>;
  /**
   * The genus of the organism that served as host for the production
   *  of the entity.
   *
   * Examples:
   * Saccharomyces, Escherichia
   *
   */
  host_org_genus?: Maybe<Scalars['String']['output']>;
  /**
   * The species of the organism that served as host for the
   *  production of the entity.
   *
   * Examples:
   * cerevisiae, coli
   *
   */
  host_org_species?: Maybe<Scalars['String']['output']>;
  /**
   * This data item identifies cases in which an alternative source
   *  modeled.
   *
   * Allowable values:
   * model, sample
   *
   */
  pdbx_alt_source_flag?: Maybe<Scalars['String']['output']>;
  /**
   * The beginning polymer sequence position for the polymer section corresponding
   *  to this source.
   *
   *  A reference to the sequence position in the entity_poly category.
   */
  pdbx_beg_seq_num?: Maybe<Scalars['Int']['output']>;
  /** Information on the source which is not given elsewhere. */
  pdbx_description?: Maybe<Scalars['String']['output']>;
  /**
   * The ending polymer sequence position for the polymer section corresponding
   *  to this source.
   *
   *  A reference to the sequence position in the entity_poly category.
   */
  pdbx_end_seq_num?: Maybe<Scalars['Int']['output']>;
  /**
   * American Type Culture Collection tissue culture number.
   *
   * Examples:
   * 6051
   *
   */
  pdbx_gene_src_atcc?: Maybe<Scalars['String']['output']>;
  /**
   * Cell type.
   *
   * Examples:
   * ENDOTHELIAL
   *
   */
  pdbx_gene_src_cell?: Maybe<Scalars['String']['output']>;
  /**
   * The specific line of cells.
   *
   * Examples:
   * HELA CELLS
   *
   */
  pdbx_gene_src_cell_line?: Maybe<Scalars['String']['output']>;
  /**
   * Identifies the location inside (or outside) the cell.
   *
   * Examples:
   * CYTOPLASM, NUCLEUS
   *
   */
  pdbx_gene_src_cellular_location?: Maybe<Scalars['String']['output']>;
  /**
   * A domain or fragment of the molecule.
   *
   * Examples:
   * CYTOPLASM, NUCLEUS
   *
   */
  pdbx_gene_src_fragment?: Maybe<Scalars['String']['output']>;
  /** Identifies the gene. */
  pdbx_gene_src_gene?: Maybe<Scalars['String']['output']>;
  /**
   * NCBI Taxonomy identifier for the gene source organism.
   *
   *  Reference:
   *
   *  Wheeler DL, Chappey C, Lash AE, Leipe DD, Madden TL, Schuler GD,
   *  Tatusova TA, Rapp BA (2000). Database resources of the National
   *  Center for Biotechnology Information. Nucleic Acids Res 2000 Jan
   *  1;28(1):10-4
   *
   *  Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Rapp BA,
   *  Wheeler DL (2000). GenBank. Nucleic Acids Res 2000 Jan 1;28(1):15-18.
   */
  pdbx_gene_src_ncbi_taxonomy_id?: Maybe<Scalars['String']['output']>;
  /**
   * Organized group of tissues that carries on a specialized function.
   *
   * Examples:
   * KIDNEY, LIVER, PANCREAS
   *
   */
  pdbx_gene_src_organ?: Maybe<Scalars['String']['output']>;
  /**
   * Organized structure within cell.
   *
   * Examples:
   * MITOCHONDRIA
   *
   */
  pdbx_gene_src_organelle?: Maybe<Scalars['String']['output']>;
  /**
   * Scientific name of the organism.
   *
   * Examples:
   * Homo sapiens, Saccharomyces Cerevisiae
   *
   */
  pdbx_gene_src_scientific_name?: Maybe<Scalars['String']['output']>;
  /**
   * Identifies the variant.
   *
   * Examples:
   * DELTAH1DELTATRP
   *
   */
  pdbx_gene_src_variant?: Maybe<Scalars['String']['output']>;
  /**
   * Americal Tissue Culture Collection of the expression system. Where
   *  full details of the protein production are available it would
   *  be expected that this item  would be derived from
   *  _entity_src_gen_express.host_org_culture_collection
   */
  pdbx_host_org_atcc?: Maybe<Scalars['String']['output']>;
  /**
   * Cell type from which the gene is derived. Where
   *  entity.target_id is provided this should be derived from
   *  details of the target.
   *
   * Examples:
   * ENDOTHELIAL
   *
   */
  pdbx_host_org_cell?: Maybe<Scalars['String']['output']>;
  /**
   * A specific line of cells used as the expression system. Where
   *  full details of the protein production are available it would
   *  be expected that this item would be derived from
   *  entity_src_gen_express.host_org_cell_line
   *
   * Examples:
   * HELA
   *
   */
  pdbx_host_org_cell_line?: Maybe<Scalars['String']['output']>;
  /**
   * Identifies the location inside (or outside) the cell which
   *  expressed the molecule.
   *
   * Examples:
   * CYTOPLASM, NUCLEUS
   *
   */
  pdbx_host_org_cellular_location?: Maybe<Scalars['String']['output']>;
  /**
   * Culture collection of the expression system. Where
   *  full details of the protein production are available it would
   *  be expected that this item  would be derived somehwere, but
   *  exactly where is not clear.
   */
  pdbx_host_org_culture_collection?: Maybe<Scalars['String']['output']>;
  /**
   * Specific gene which expressed the molecule.
   *
   * Examples:
   * HIV-1 POL, GLNS7, U1A (2-98, Y31H, Q36R)
   *
   */
  pdbx_host_org_gene?: Maybe<Scalars['String']['output']>;
  /**
   * NCBI Taxonomy identifier for the expression system organism.
   *
   *  Reference:
   *
   *  Wheeler DL, Chappey C, Lash AE, Leipe DD, Madden TL, Schuler GD,
   *  Tatusova TA, Rapp BA (2000). Database resources of the National
   *  Center for Biotechnology Information. Nucleic Acids Res 2000 Jan
   *  1;28(1):10-4
   *
   *  Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Rapp BA,
   *  Wheeler DL (2000). GenBank. Nucleic Acids Res 2000 Jan 1;28(1):15-18.
   */
  pdbx_host_org_ncbi_taxonomy_id?: Maybe<Scalars['String']['output']>;
  /**
   * Specific organ which expressed the molecule.
   *
   * Examples:
   * KIDNEY
   *
   */
  pdbx_host_org_organ?: Maybe<Scalars['String']['output']>;
  /**
   * Specific organelle which expressed the molecule.
   *
   * Examples:
   * MITOCHONDRIA
   *
   */
  pdbx_host_org_organelle?: Maybe<Scalars['String']['output']>;
  /**
   * The scientific name of the organism that served as host for the
   *  production of the entity. Where full details of the protein
   *  production are available it would be expected that this item
   *  would be derived from _entity_src_gen_express.host_org_scientific_name
   *  or via _entity_src_gen_express.host_org_tax_id
   *
   * Examples:
   * ESCHERICHIA COLI, SACCHAROMYCES CEREVISIAE
   *
   */
  pdbx_host_org_scientific_name?: Maybe<Scalars['String']['output']>;
  /**
   * The strain of the organism in which the entity was
   * expressed.
   *
   * Examples:
   * AR120
   *
   */
  pdbx_host_org_strain?: Maybe<Scalars['String']['output']>;
  /**
   * The specific tissue which expressed the molecule. Where full details
   *  of the protein production are available it would be expected that this
   *  item would be derived from _entity_src_gen_express.host_org_tissue
   *
   * Examples:
   * heart, liver, eye lens
   *
   */
  pdbx_host_org_tissue?: Maybe<Scalars['String']['output']>;
  /**
   * The fraction of the tissue which expressed the
   * molecule.
   *
   * Examples:
   * mitochondria, nucleus, membrane
   *
   */
  pdbx_host_org_tissue_fraction?: Maybe<Scalars['String']['output']>;
  /**
   * Variant of the organism used as the expression system. Where
   *  full details of the protein production are available it would
   *  be expected that this item be derived from
   *  entity_src_gen_express.host_org_variant or via
   *  _entity_src_gen_express.host_org_tax_id
   *
   * Examples:
   * TRP-LAC, LAMBDA DE3
   *
   */
  pdbx_host_org_variant?: Maybe<Scalars['String']['output']>;
  /**
   * Identifies the vector used. Where full details of the protein
   *  production are available it would be expected that this item
   *  would be derived from _entity_src_gen_clone.vector_name.
   *
   * Examples:
   * PBIT36, PET15B, PUC18
   *
   */
  pdbx_host_org_vector?: Maybe<Scalars['String']['output']>;
  /**
   * Identifies the type of vector used (plasmid, virus, or cosmid).
   *  Where full details of the protein production are available it
   *  would be expected that this item would be derived from
   *  _entity_src_gen_express.vector_type.
   *
   * Examples:
   * COSMID, PLASMID
   *
   */
  pdbx_host_org_vector_type?: Maybe<Scalars['String']['output']>;
  /**
   * This data item povides additional information about the sequence type.
   *
   * Allowable values:
   * Biological sequence, C-terminal tag, Linker, N-terminal tag
   *
   */
  pdbx_seq_type?: Maybe<Scalars['String']['output']>;
  /** This data item is an ordinal identifier for entity_src_gen data records. */
  pdbx_src_id: Scalars['Int']['output'];
  /**
   * A description of special aspects of the plasmid that produced the
   *  entity in the host organism. Where full details of the protein
   *  production are available it would be expected that this item
   *  would be derived from _pdbx_construct.details of the construct
   *  pointed to from _entity_src_gen_express.plasmid_id.
   */
  plasmid_details?: Maybe<Scalars['String']['output']>;
  /**
   * The name of the plasmid that produced the entity in the host
   *  organism. Where full details of the protein production are available
   *  it would be expected that this item would be derived from
   *  _pdbx_construct.name of the construct pointed to from
   *  _entity_src_gen_express.plasmid_id.
   *
   * Examples:
   * pET3C, pT123sab
   *
   */
  plasmid_name?: Maybe<Scalars['String']['output']>;
}

export interface EntitySrcNat {
  __typename?: 'EntitySrcNat';
  /**
   * The common name of the organism from which the entity
   *  was isolated.
   *
   * Examples:
   * man, yeast, bacteria
   *
   */
  common_name?: Maybe<Scalars['String']['output']>;
  /**
   * A description of special aspects of the organism from which the
   *  entity was isolated.
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * The genus of the organism from which the entity was isolated.
   *
   * Examples:
   * Homo, Saccharomyces, Escherichia
   *
   */
  genus?: Maybe<Scalars['String']['output']>;
  /**
   * This data item identifies cases in which an alternative source
   *  modeled.
   *
   * Allowable values:
   * model, sample
   *
   */
  pdbx_alt_source_flag?: Maybe<Scalars['String']['output']>;
  /**
   * Americal Tissue Culture Collection number.
   *
   * Examples:
   * 6051
   *
   */
  pdbx_atcc?: Maybe<Scalars['String']['output']>;
  /**
   * The beginning polymer sequence position for the polymer section corresponding
   *  to this source.
   *
   *  A reference to the sequence position in the entity_poly category.
   */
  pdbx_beg_seq_num?: Maybe<Scalars['Int']['output']>;
  /**
   * A particular cell type.
   *
   * Examples:
   * BHK-21
   *
   */
  pdbx_cell?: Maybe<Scalars['String']['output']>;
  /**
   * The specific line of cells.
   *
   * Examples:
   * HELA
   *
   */
  pdbx_cell_line?: Maybe<Scalars['String']['output']>;
  /** Identifies the location inside (or outside) the cell. */
  pdbx_cellular_location?: Maybe<Scalars['String']['output']>;
  /**
   * The ending polymer sequence position for the polymer section corresponding
   *  to this source.
   *
   *  A reference to the sequence position in the entity_poly category.
   */
  pdbx_end_seq_num?: Maybe<Scalars['Int']['output']>;
  /** A domain or fragment of the molecule. */
  pdbx_fragment?: Maybe<Scalars['String']['output']>;
  /**
   * NCBI Taxonomy identifier for the source organism.
   *
   *  Reference:
   *
   *  Wheeler DL, Chappey C, Lash AE, Leipe DD, Madden TL, Schuler GD,
   *  Tatusova TA, Rapp BA (2000). Database resources of the National
   *  Center for Biotechnology Information. Nucleic Acids Res 2000 Jan
   *  1;28(1):10-4
   *
   *  Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Rapp BA,
   *  Wheeler DL (2000). GenBank. Nucleic Acids Res 2000 Jan 1;28(1):15-18.
   */
  pdbx_ncbi_taxonomy_id?: Maybe<Scalars['String']['output']>;
  /**
   * Organized group of tissues that carries on a specialized function.
   *
   * Examples:
   * KIDNEY
   *
   */
  pdbx_organ?: Maybe<Scalars['String']['output']>;
  /**
   * Organized structure within cell.
   *
   * Examples:
   * MITOCHONDRIA
   *
   */
  pdbx_organelle?: Maybe<Scalars['String']['output']>;
  /**
   * Scientific name of the organism of the natural source.
   *
   * Examples:
   * Bos taurus, BOS TAURUS, SUS SCROFA, ASPERGILLUS ORYZAE
   *
   */
  pdbx_organism_scientific?: Maybe<Scalars['String']['output']>;
  /**
   * Details about the plasmid.
   *
   * Examples:
   * PLC28 DERIVATIVE
   *
   */
  pdbx_plasmid_details?: Maybe<Scalars['String']['output']>;
  /**
   * The plasmid containing the gene.
   *
   * Examples:
   * pB322
   *
   */
  pdbx_plasmid_name?: Maybe<Scalars['String']['output']>;
  /**
   * Identifies the secretion from which the molecule was isolated.
   *
   * Examples:
   * saliva, urine, venom
   *
   */
  pdbx_secretion?: Maybe<Scalars['String']['output']>;
  /** This data item is an ordinal identifier for entity_src_nat data records. */
  pdbx_src_id: Scalars['Int']['output'];
  /** Identifies the variant. */
  pdbx_variant?: Maybe<Scalars['String']['output']>;
  /**
   * The species of the organism from which the entity was isolated.
   *
   * Examples:
   * sapiens, cerevisiae, coli
   *
   */
  species?: Maybe<Scalars['String']['output']>;
  /**
   * The strain of the organism from which the entity was isolated.
   *
   * Examples:
   * DH5a, BMH 71-18
   *
   */
  strain?: Maybe<Scalars['String']['output']>;
  /**
   * The tissue of the organism from which the entity was isolated.
   *
   * Examples:
   * heart, liver, eye lens
   *
   */
  tissue?: Maybe<Scalars['String']['output']>;
  /**
   * The subcellular fraction of the tissue of the organism from
   *  which the entity was isolated.
   *
   * Examples:
   * mitochondria, nucleus, membrane
   *
   */
  tissue_fraction?: Maybe<Scalars['String']['output']>;
}

export interface Entry {
  __typename?: 'Entry';
  /**
   * The value of _entry.id identifies the data block.
   *
   *  Note that this item need not be a number; it can be any unique
   *  identifier.
   */
  id: Scalars['String']['output'];
  /** An identifier for the model collection associated with the entry. */
  ma_collection_id?: Maybe<Scalars['String']['output']>;
}

export interface Exptl {
  __typename?: 'Exptl';
  /**
   * The total number of crystals used in the  measurement of
   *  intensities.
   */
  crystals_number?: Maybe<Scalars['Int']['output']>;
  /**
   * Any special information about the experimental work prior to the
   *  intensity measurement. See also _exptl_crystal.preparation.
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * The method used in the experiment.
   *
   * Allowable values:
   * ELECTRON CRYSTALLOGRAPHY, ELECTRON MICROSCOPY, EPR, FIBER DIFFRACTION, FLUORESCENCE TRANSFER, INFRARED SPECTROSCOPY, NEUTRON DIFFRACTION, POWDER DIFFRACTION, SOLID-STATE NMR, SOLUTION NMR, SOLUTION SCATTERING, THEORETICAL MODEL, X-RAY DIFFRACTION
   *
   */
  method: Scalars['String']['output'];
  /**
   * A description of special aspects of the experimental method.
   *
   * Examples:
   * 29 structures, minimized average structure
   *
   */
  method_details?: Maybe<Scalars['String']['output']>;
}

export interface ExptlCrystal {
  __typename?: 'ExptlCrystal';
  /**
   * The colour of the crystal.
   *
   * Examples:
   * dark green
   *
   */
  colour?: Maybe<Scalars['String']['output']>;
  /**
   * The density of the crystal, expressed as the ratio of the
   *  volume of the asymmetric unit to the molecular mass of a
   *  monomer of the structure, in units of angstroms^3^ per dalton.
   *
   *  Ref: Matthews, B. W. (1968). J. Mol. Biol. 33, 491-497.
   *
   * Examples:
   * null
   *
   */
  density_Matthews?: Maybe<Scalars['Float']['output']>;
  /**
   * Density values measured using standard chemical and physical
   *  methods. The units are megagrams per cubic metre (grams per
   *  cubic centimetre).
   */
  density_meas?: Maybe<Scalars['Float']['output']>;
  /**
   * Density value P calculated from the crystal cell and contents,
   *  expressed as per cent solvent.
   *
   *  P = 1 - (1.23 N MMass) / V
   *
   *  N     = the number of molecules in the unit cell
   *  MMass = the molecular mass of each molecule (gm/mole)
   *  V     = the volume of the unit cell (A^3^)
   *  1.23  = a conversion factor evaluated as:
   *
   *          (0.74 cm^3^/g) (10^24^ A^3^/cm^3^)
   *          --------------------------------------
   *               (6.02*10^23^) molecules/mole
   *
   *          where 0.74 is an assumed value for the partial specific
   *          volume of the molecule
   */
  density_percent_sol?: Maybe<Scalars['Float']['output']>;
  /**
   * A description of the quality and habit of the crystal.
   *  The crystal dimensions should not normally be reported here;
   *  use instead the specific items in the EXPTL_CRYSTAL category
   *  relating to size for the gross dimensions of the crystal and
   *  data items in the EXPTL_CRYSTAL_FACE category to describe the
   *  relationship between individual faces.
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _exptl_crystal.id must uniquely identify a record in
   *  the EXPTL_CRYSTAL list.
   *
   *  Note that this item need not be a number; it can be any unique
   *  identifier.
   */
  id: Scalars['String']['output'];
  /**
   * Isotropic approximation of the distribution of mis-orientation angles
   * specified in degrees of all the mosaic domain blocks in the crystal,
   * represented as a standard deviation. Here, a mosaic block is a set of
   * contiguous unit cells assumed to be perfectly aligned. Lower mosaicity
   * indicates better ordered crystals. See for example:
   *
   * Nave, C. (1998). Acta Cryst. D54, 848-853.
   *
   * Note that many software packages estimate the mosaic rotation distribution
   * differently and may combine several physical properties of the experiment
   * into a single mosaic term. This term will help fit the modeled spots
   * to the observed spots without necessarily being directly related to the
   * physics of the crystal itself.
   */
  pdbx_mosaicity?: Maybe<Scalars['Float']['output']>;
  /** The uncertainty in the mosaicity estimate for the crystal. */
  pdbx_mosaicity_esd?: Maybe<Scalars['Float']['output']>;
  /**
   * Details of crystal growth and preparation of the crystal (e.g.
   *  mounting) prior to the intensity measurements.
   *
   * Examples:
   * mounted in an argon-filled quartz capillary
   *
   */
  preparation?: Maybe<Scalars['String']['output']>;
}

export interface ExptlCrystalGrow {
  __typename?: 'ExptlCrystalGrow';
  /**
   * This data item is a pointer to _exptl_crystal.id in the
   *  EXPTL_CRYSTAL category.
   */
  crystal_id: Scalars['String']['output'];
  /**
   * A description of special aspects of the crystal growth.
   *
   * Examples:
   * Solution 2 was prepared as a well solution and
   *                                   mixed. A droplet containing 2 \ml of solution
   *                                   1 was delivered onto a cover slip; 2 \ml of
   *                                   solution 2 was added to the droplet without
   *                                   mixing., Crystal plates were originally stored at room
   *                                   temperature for 1 week but no nucleation
   *                                   occurred. They were then transferred to 4
   *                                   degrees C, at which temperature well formed
   *                                   single crystals grew in 2 days., The dependence on pH for successful crystal
   *                                   growth is very sharp. At pH 7.4 only showers
   *                                   of tiny crystals grew, at pH 7.5 well formed
   *                                   single crystals grew, at pH 7.6 no
   *                                   crystallization occurred at all.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * The method used to grow the crystals.
   *
   * Examples:
   * MICROBATCH, VAPOR DIFFUSION, HANGING DROP
   *
   */
  method?: Maybe<Scalars['String']['output']>;
  /**
   * The pH at which the crystal was grown. If more than one pH was
   *  employed during the crystallization process, the final pH should
   *  be noted here and the protocol involving multiple pH values
   *  should be described in _exptl_crystal_grow.details.
   *
   * Examples:
   * null, null, null
   *
   */
  pH?: Maybe<Scalars['Float']['output']>;
  /**
   * Text description of crystal growth procedure.
   *
   * Examples:
   * PEG 4000, potassium phosphate, magnesium chloride, cacodylate
   *
   */
  pdbx_details?: Maybe<Scalars['String']['output']>;
  /**
   * The range of pH values at which the crystal was grown.   Used when
   *  a point estimate of pH is not appropriate.
   *
   * Examples:
   * 5.6 - 6.4
   *
   */
  pdbx_pH_range?: Maybe<Scalars['String']['output']>;
  /**
   * The temperature in kelvins at which the crystal was grown.
   *  If more than one temperature was employed during the
   *  crystallization process, the final temperature should be noted
   *  here and the protocol  involving multiple temperatures should be
   *  described in _exptl_crystal_grow.details.
   */
  temp?: Maybe<Scalars['Float']['output']>;
  /**
   * A description of special aspects of temperature control during
   *  crystal growth.
   */
  temp_details?: Maybe<Scalars['String']['output']>;
}

export interface GeneName {
  __typename?: 'GeneName';
  /** Allowable values: PRIMARY, SYNONYM, ORDERED_LOCUS, ORF. */
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
}

export interface GroupEntry {
  __typename?: 'GroupEntry';
  /** Get provenance associated with this group. */
  group_provenance?: Maybe<GroupProvenance>;
  rcsb_group_accession_info?: Maybe<RcsbGroupAccessionInfo>;
  rcsb_group_container_identifiers: RcsbGroupContainerIdentifiers;
  rcsb_group_info: RcsbGroupInfo;
  rcsb_group_related?: Maybe<Array<Maybe<RcsbGroupRelated>>>;
  rcsb_group_statistics?: Maybe<RcsbGroupStatistics>;
  /** A unique textual identifier for a group */
  rcsb_id: Scalars['String']['output'];
}

export interface GroupMembersAlignmentScores {
  __typename?: 'GroupMembersAlignmentScores';
  query_coverage: Scalars['Int']['output'];
  query_length: Scalars['Int']['output'];
  target_coverage: Scalars['Int']['output'];
  target_length: Scalars['Int']['output'];
}

export interface GroupNonPolymerEntity {
  __typename?: 'GroupNonPolymerEntity';
  rcsb_group_accession_info?: Maybe<RcsbGroupAccessionInfo>;
  rcsb_group_container_identifiers: RcsbGroupContainerIdentifiers;
  rcsb_group_info: RcsbGroupInfo;
  rcsb_group_related?: Maybe<Array<Maybe<RcsbGroupRelated>>>;
  rcsb_group_statistics?: Maybe<RcsbGroupStatistics>;
  /** A unique textual identifier for a group */
  rcsb_id: Scalars['String']['output'];
}

export interface GroupPolymerEntity {
  __typename?: 'GroupPolymerEntity';
  /** Get provenance associated with this group. */
  group_provenance?: Maybe<GroupProvenance>;
  rcsb_group_accession_info?: Maybe<RcsbGroupAccessionInfo>;
  rcsb_group_container_identifiers: RcsbGroupContainerIdentifiers;
  rcsb_group_info: RcsbGroupInfo;
  rcsb_group_related?: Maybe<Array<Maybe<RcsbGroupRelated>>>;
  rcsb_group_statistics?: Maybe<RcsbGroupStatistics>;
  /** A unique textual identifier for a group */
  rcsb_id: Scalars['String']['output'];
  rcsb_polymer_entity_group_members_rankings?: Maybe<Array<Maybe<RcsbPolymerEntityGroupMembersRankings>>>;
  rcsb_polymer_entity_group_sequence_alignment?: Maybe<RcsbPolymerEntityGroupSequenceAlignment>;
}

export interface GroupProvenance {
  __typename?: 'GroupProvenance';
  rcsb_group_aggregation_method?: Maybe<RcsbGroupAggregationMethod>;
  rcsb_group_provenance_container_identifiers?: Maybe<RcsbGroupProvenanceContainerIdentifiers>;
  /** A unique textual identifier for a group provenance */
  rcsb_id?: Maybe<Scalars['String']['output']>;
}

export interface IhmEntryCollectionMapping {
  __typename?: 'IhmEntryCollectionMapping';
  /**
   * Identifier for the entry collection.
   *  This data item is a pointer to _ihm_entry_collection.id in the
   *  IHM_ENTRY_COLLECTION category.
   */
  collection_id: Scalars['String']['output'];
}

export interface IhmExternalReferenceInfo {
  __typename?: 'IhmExternalReferenceInfo';
  /**
   * The Uniform Resource Locator (URL) corresponding to the external reference (DOI).
   *  This URL should link to the corresponding downloadable file or archive and is provided
   *  to enable automated software to download the referenced file or archive.
   */
  associated_url?: Maybe<Scalars['String']['output']>;
  /**
   * The external reference or the Digital Object Identifier (DOI).
   *  This field is not relevant for local files.
   *
   * Examples:
   * 10.5281/zenodo.46266
   *
   */
  reference?: Maybe<Scalars['String']['output']>;
  /**
   * The name of the reference provider.
   *
   * Examples:
   * Zenodo, Figshare, Crossref
   *
   */
  reference_provider?: Maybe<Scalars['String']['output']>;
}

export interface InterfacePartnerFeatureAdditionalProperties {
  __typename?: 'InterfacePartnerFeatureAdditionalProperties';
  /**
   * The additional property name.
   *
   * Allowable values:
   * TO_BE_DEFINED
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /** The value(s) of the additional property. */
  values?: Maybe<Array<Maybe<Scalars['ObjectScalar']['output']>>>;
}

export interface InterfacePartnerFeatureFeaturePositions {
  __typename?: 'InterfacePartnerFeatureFeaturePositions';
  /** An identifier for the monomer at which this segment of the feature begins. */
  beg_seq_id: Scalars['Int']['output'];
  /** An identifier for the monomer at which this segment of the feature ends. */
  end_seq_id?: Maybe<Scalars['Int']['output']>;
  /** The value(s) of the feature over the monomer segment. */
  values?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
}

export interface MaData {
  __typename?: 'MaData';
  /**
   * The type of data held in the dataset.
   *
   * Allowable values:
   * coevolution MSA, input structure, model coordinates, other, polymeric template library, reference database, spatial restraints, target, target-template alignment, template structure
   *
   */
  content_type?: Maybe<Scalars['String']['output']>;
  /** Details for other content types. */
  content_type_other_details?: Maybe<Scalars['String']['output']>;
  /** A unique identifier for the data. */
  id: Scalars['Int']['output'];
  /**
   * An author-given name for the content held in the dataset.
   *
   * Examples:
   * NMR NOE Distances, Target Template Alignment, Coevolution Data
   *
   */
  name?: Maybe<Scalars['String']['output']>;
}

export interface MethodDetails {
  __typename?: 'MethodDetails';
  /** A description of special aspects of the clustering process */
  description?: Maybe<Scalars['String']['output']>;
  /** Defines the name of the description associated with the clustering process */
  name?: Maybe<Scalars['String']['output']>;
  /** Defines the type of the description associated with the clustering process */
  type?: Maybe<Scalars['String']['output']>;
  /** Defines the value associated with the clustering process */
  value?: Maybe<Scalars['Float']['output']>;
}

export interface PdbxAuditRevisionCategory {
  __typename?: 'PdbxAuditRevisionCategory';
  /**
   * The category updated in the pdbx_audit_revision_category record.
   *
   * Examples:
   * audit_author, citation
   *
   */
  category?: Maybe<Scalars['String']['output']>;
  /**
   * The type of file that the pdbx_audit_revision_history record refers to.
   *
   * Allowable values:
   * Additional map, Chemical component, EM metadata, FSC, Half map, Image, Mask, NMR restraints, NMR shifts, Primary map, Structure factors, Structure model
   *
   */
  data_content_type: Scalars['String']['output'];
  /** A unique identifier for the pdbx_audit_revision_category record. */
  ordinal: Scalars['Int']['output'];
  /** A pointer to  _pdbx_audit_revision_history.ordinal */
  revision_ordinal: Scalars['Int']['output'];
}

export interface PdbxAuditRevisionDetails {
  __typename?: 'PdbxAuditRevisionDetails';
  /**
   * The type of file that the pdbx_audit_revision_history record refers to.
   *
   * Allowable values:
   * Additional map, Chemical component, EM metadata, FSC, Half map, Image, Mask, NMR restraints, NMR shifts, Primary map, Structure factors, Structure model
   *
   */
  data_content_type: Scalars['String']['output'];
  /** Additional details describing the revision. */
  description?: Maybe<Scalars['String']['output']>;
  /** Further details describing the revision. */
  details?: Maybe<Scalars['String']['output']>;
  /** A unique identifier for the pdbx_audit_revision_details record. */
  ordinal: Scalars['Int']['output'];
  /**
   * The provider of the revision.
   *
   * Allowable values:
   * author, repository
   *
   */
  provider?: Maybe<Scalars['String']['output']>;
  /** A pointer to  _pdbx_audit_revision_history.ordinal */
  revision_ordinal: Scalars['Int']['output'];
  /**
   * A type classification of the revision
   *
   * Allowable values:
   * Coordinate replacement, Data added, Data removed, Data updated, Initial release, Obsolete, Remediation
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface PdbxAuditRevisionGroup {
  __typename?: 'PdbxAuditRevisionGroup';
  /**
   * The type of file that the pdbx_audit_revision_history record refers to.
   *
   * Allowable values:
   * Additional map, Chemical component, EM metadata, FSC, Half map, Image, Mask, NMR restraints, NMR shifts, Primary map, Structure factors, Structure model
   *
   */
  data_content_type: Scalars['String']['output'];
  /**
   * The collection of categories updated with this revision.
   *
   * Allowable values:
   * Advisory, Atomic model, Author supporting evidence, Data collection, Data processing, Database references, Derived calculations, Experimental data, Experimental preparation, Experimental summary, Non-polymer description, Other, Polymer sequence, Refinement description, Source and taxonomy, Structure summary, Version format compliance
   *
   */
  group?: Maybe<Scalars['String']['output']>;
  /** A unique identifier for the pdbx_audit_revision_group record. */
  ordinal: Scalars['Int']['output'];
  /** A pointer to  _pdbx_audit_revision_history.ordinal */
  revision_ordinal: Scalars['Int']['output'];
}

export interface PdbxAuditRevisionHistory {
  __typename?: 'PdbxAuditRevisionHistory';
  /**
   * The type of file that the pdbx_audit_revision_history record refers to.
   *
   * Allowable values:
   * Additional map, Chemical component, EM metadata, FSC, Half map, Image, Mask, NMR restraints, NMR shifts, Primary map, Structure factors, Structure model
   *
   */
  data_content_type: Scalars['String']['output'];
  /** The major version number of deposition release. */
  major_revision?: Maybe<Scalars['Int']['output']>;
  /** The minor version number of deposition release. */
  minor_revision?: Maybe<Scalars['Int']['output']>;
  /** A unique identifier for the pdbx_audit_revision_history record. */
  ordinal: Scalars['Int']['output'];
  /**
   * The release date of the revision
   *
   * Examples:
   * 2017-03-08
   *
   */
  revision_date?: Maybe<Scalars['Date']['output']>;
}

export interface PdbxAuditRevisionItem {
  __typename?: 'PdbxAuditRevisionItem';
  /**
   * The type of file that the pdbx_audit_revision_history record refers to.
   *
   * Allowable values:
   * Additional map, Chemical component, EM metadata, FSC, Half map, Image, Mask, NMR restraints, NMR shifts, Primary map, Structure factors, Structure model
   *
   */
  data_content_type: Scalars['String']['output'];
  /**
   * A high level explanation the author has provided for submitting a revision.
   *
   * Examples:
   * _atom_site.type_symbol
   *
   */
  item?: Maybe<Scalars['String']['output']>;
  /** A unique identifier for the pdbx_audit_revision_item record. */
  ordinal: Scalars['Int']['output'];
  /** A pointer to  _pdbx_audit_revision_history.ordinal */
  revision_ordinal: Scalars['Int']['output'];
}

export interface PdbxAuditSupport {
  __typename?: 'PdbxAuditSupport';
  /**
   * The country/region providing the funding support for the entry.
   *  Funding information is optionally provided for entries after June 2016.
   */
  country?: Maybe<Scalars['String']['output']>;
  /**
   * The name of the organization providing funding support for the
   *  entry. Funding information is optionally provided for entries
   *  after June 2016.
   *
   * Examples:
   * National Institutes of Health, Wellcome Trust, National Institutes of Health/National Institute of General Medical Sciences
   *
   */
  funding_organization?: Maybe<Scalars['String']['output']>;
  /** The grant number associated with this source of support. */
  grant_number?: Maybe<Scalars['String']['output']>;
  /** A unique sequential integer identifier for each source of support for this entry. */
  ordinal: Scalars['Int']['output'];
}

export interface PdbxChemCompAudit {
  __typename?: 'PdbxChemCompAudit';
  /**
   * The action associated with this audit record.
   *
   * Allowable values:
   * Create component, Initial release, Modify PCM, Modify aromatic_flag, Modify atom id, Modify backbone, Modify charge, Modify component atom id, Modify component comp_id, Modify coordinates, Modify descriptor, Modify formal charge, Modify formula, Modify identifier, Modify internal type, Modify leaving atom flag, Modify linking type, Modify model coordinates code, Modify name, Modify one letter code, Modify parent residue, Modify processing site, Modify subcomponent list, Modify synonyms, Modify value order, Obsolete component, Other modification
   *
   */
  action_type?: Maybe<Scalars['String']['output']>;
  /**
   * This data item is a pointer to _chem_comp.id in the CHEM_COMP
   *  category.
   */
  comp_id?: Maybe<Scalars['String']['output']>;
  /** The date associated with this audit record. */
  date?: Maybe<Scalars['Date']['output']>;
  /**
   * Additional details decribing this change.
   *
   * Examples:
   * Added C14 as a leaving atom.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * This data item is an ordinal index for the
   *  PDBX_CHEM_COMP_AUDIT category.
   */
  ordinal: Scalars['Int']['output'];
}

export interface PdbxChemCompDescriptor {
  __typename?: 'PdbxChemCompDescriptor';
  /**
   * This data item is a pointer to _chem_comp.id in the CHEM_COMP
   *  category.
   */
  comp_id: Scalars['String']['output'];
  /**
   * This data item contains the descriptor value for this
   *  component.
   */
  descriptor?: Maybe<Scalars['String']['output']>;
  /**
   * This data item contains the name of the program
   *  or library used to compute the descriptor.
   *
   * Examples:
   * OPENEYE, CACTVS, DAYLIGHT, OTHER
   *
   */
  program: Scalars['String']['output'];
  /**
   * This data item contains the version of the program
   *  or library used to compute the descriptor.
   */
  program_version: Scalars['String']['output'];
  /**
   * This data item contains the descriptor type.
   *
   * Allowable values:
   * InChI, InChIKey, InChI_CHARGE, InChI_FIXEDH, InChI_ISOTOPE, InChI_MAIN, InChI_MAIN_CONNECT, InChI_MAIN_FORMULA, InChI_MAIN_HATOM, InChI_RECONNECT, InChI_STEREO, SMILES, SMILES_CANNONICAL, SMILES_CANONICAL
   *
   */
  type: Scalars['String']['output'];
}

export interface PdbxChemCompFeature {
  __typename?: 'PdbxChemCompFeature';
  /**
   * The component identifier for this feature.
   *
   * Examples:
   * ABC, ATP
   *
   */
  comp_id: Scalars['String']['output'];
  /**
   * The information source for the component feature.
   *
   * Examples:
   * PDB, CHEBI, DRUGBANK, PUBCHEM
   *
   */
  source: Scalars['String']['output'];
  /**
   * The component feature type.
   *
   * Allowable values:
   * CARBOHYDRATE ANOMER, CARBOHYDRATE ISOMER, CARBOHYDRATE PRIMARY CARBONYL GROUP, CARBOHYDRATE RING
   *
   */
  type: Scalars['String']['output'];
  /** The component feature value. */
  value: Scalars['String']['output'];
}

export interface PdbxChemCompIdentifier {
  __typename?: 'PdbxChemCompIdentifier';
  /**
   * This data item is a pointer to _chem_comp.id in the CHEM_COMP
   *  category.
   */
  comp_id: Scalars['String']['output'];
  /**
   * This data item contains the identifier value for this
   *  component.
   */
  identifier?: Maybe<Scalars['String']['output']>;
  /**
   * This data item contains the name of the program
   *  or library used to compute the identifier.
   *
   * Examples:
   * OPENEYE, DAYLIGHT, ACD, AUTONOM, PUBCHEM_CID, PUBCHEM_SID, OTHER, NONE
   *
   */
  program: Scalars['String']['output'];
  /**
   * This data item contains the version of the program
   *  or library used to compute the identifier.
   */
  program_version: Scalars['String']['output'];
  /**
   * This data item contains the identifier type.
   *
   * Allowable values:
   * CAS REGISTRY NUMBER, COMMON NAME, CONDENSED IUPAC CARB SYMBOL, CONDENSED IUPAC CARBOHYDRATE SYMBOL, IUPAC CARB SYMBOL, IUPAC CARBOHYDRATE SYMBOL, MDL Identifier, PUBCHEM Identifier, SNFG CARB SYMBOL, SNFG CARBOHYDRATE SYMBOL, SYNONYM, SYSTEMATIC NAME
   *
   */
  type: Scalars['String']['output'];
}

export interface PdbxDatabasePdbObsSpr {
  __typename?: 'PdbxDatabasePDBObsSpr';
  /**
   * The date of replacement.
   *
   * Examples:
   * 1997-03-30
   *
   */
  date?: Maybe<Scalars['Date']['output']>;
  /** Details related to the replaced or replacing entry. */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * Identifier for the type of obsolete entry to be added to this entry.
   *
   * Allowable values:
   * OBSLTE, SPRSDE
   *
   */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * The new PDB identifier for the replaced entry.
   *
   * Examples:
   * 2ABC
   *
   */
  pdb_id: Scalars['String']['output'];
  /**
   * The PDB identifier for the replaced (OLD) entry/entries.
   *
   * Examples:
   * 3ABC
   *
   */
  replace_pdb_id: Scalars['String']['output'];
}

export interface PdbxDatabaseRelated {
  __typename?: 'PdbxDatabaseRelated';
  /**
   * The identifying content type of the related entry.
   *
   * Allowable values:
   * associated EM volume, associated NMR restraints, associated SAS data, associated structure factors, complete structure, consensus EM volume, derivative structure, ensemble, focused EM volume, minimized average structure, native structure, other, other EM volume, protein target sequence and/or protocol data, re-refinement, representative structure, split, unspecified
   *
   */
  content_type: Scalars['String']['output'];
  /**
   * The identifying code in the related database.
   *
   * Examples:
   * 1ABC, BDL001
   *
   */
  db_id: Scalars['String']['output'];
  /**
   * The name of the database containing the related entry.
   *
   * Allowable values:
   * BIOISIS, BMCD, BMRB, EMDB, NDB, PDB, PDB-Dev, SASBDB, TargetDB, TargetTrack
   *
   */
  db_name: Scalars['String']['output'];
  /**
   * A description of the related entry.
   *
   * Examples:
   * 1ABC contains the same protein complexed with Netropsin.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
}

export interface PdbxDatabaseStatus {
  __typename?: 'PdbxDatabaseStatus';
  /**
   * This code indicates whether the entry belongs to
   *  Structural Genomics Project.
   *
   * Allowable values:
   * N, Y
   *
   */
  SG_entry?: Maybe<Scalars['String']['output']>;
  /**
   * The site where the file was deposited.
   *
   * Allowable values:
   * BMRB, BNL, NDB, PDBC, PDBE, PDBJ, RCSB
   *
   */
  deposit_site?: Maybe<Scalars['String']['output']>;
  /**
   * The methods development category in which this
   *  entry has been placed.
   *
   * Allowable values:
   * CAPRI, CASD-NMR, CASP, D3R, FoldIt, GPCR Dock, RNA-Puzzles
   *
   */
  methods_development_category?: Maybe<Scalars['String']['output']>;
  /**
   * A flag indicating that the entry is compatible with the PDB format.
   *
   *  A value of 'N' indicates that the no PDB format data file is
   *  corresponding to this entry is available in the PDB archive.
   *
   * Allowable values:
   * N, Y
   *
   */
  pdb_format_compatible?: Maybe<Scalars['String']['output']>;
  /**
   * The site where the file was deposited.
   *
   * Allowable values:
   * BNL, NDB, PDBC, PDBE, PDBJ, RCSB
   *
   */
  process_site?: Maybe<Scalars['String']['output']>;
  /**
   * The date of initial deposition.  (The first message for
   *  deposition has been received.)
   *
   * Examples:
   * 1983-02-21
   *
   */
  recvd_initial_deposition_date?: Maybe<Scalars['Date']['output']>;
  /**
   * Code for status of file.
   *
   * Allowable values:
   * AUCO, AUTH, BIB, DEL, HOLD, HPUB, OBS, POLC, PROC, REFI, REL, REPL, REV, RMVD, TRSF, UPD, WAIT, WDRN
   *
   */
  status_code?: Maybe<Scalars['String']['output']>;
  /**
   * Code for status of chemical shift data file.
   *
   * Allowable values:
   * AUCO, AUTH, HOLD, HPUB, OBS, POLC, PROC, REL, REPL, RMVD, WAIT, WDRN
   *
   */
  status_code_cs?: Maybe<Scalars['String']['output']>;
  /**
   * Code for status of NMR constraints file.
   *
   * Allowable values:
   * AUCO, AUTH, HOLD, HPUB, OBS, POLC, PROC, REL, REPL, RMVD, WAIT, WDRN
   *
   */
  status_code_mr?: Maybe<Scalars['String']['output']>;
  /**
   * Code for status of structure factor file.
   *
   * Allowable values:
   * AUTH, HOLD, HPUB, OBS, POLC, PROC, REL, REPL, RMVD, WAIT, WDRN
   *
   */
  status_code_sf?: Maybe<Scalars['String']['output']>;
}

export interface PdbxDepositGroup {
  __typename?: 'PdbxDepositGroup';
  /** A description of the contents of entries in the collection. */
  group_description?: Maybe<Scalars['String']['output']>;
  /**
   * A unique identifier for a group of entries deposited as a collection.
   *
   * Examples:
   * G_1002119, G_1002043
   *
   */
  group_id: Scalars['String']['output'];
  /** A title to describe the group of entries deposited in the collection. */
  group_title?: Maybe<Scalars['String']['output']>;
  /**
   * Text to describe a grouping of entries in multiple collections
   *
   * Allowable values:
   * changed state, ground state, undefined
   *
   */
  group_type?: Maybe<Scalars['String']['output']>;
}

export interface PdbxEntityBranch {
  __typename?: 'PdbxEntityBranch';
  /** Number of constituent chemical components in the branched entity. */
  rcsb_branched_component_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The type of this branched oligosaccharide.
   *
   * Allowable values:
   * oligosaccharide
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface PdbxEntityBranchDescriptor {
  __typename?: 'PdbxEntityBranchDescriptor';
  /**
   * This data item contains the descriptor value for this
   *  entity.
   */
  descriptor?: Maybe<Scalars['String']['output']>;
  /**
   * This data item contains the name of the program
   *  or library used to compute the descriptor.
   *
   * Examples:
   * PDB-CARE, OTHER, GEMS
   *
   */
  program?: Maybe<Scalars['String']['output']>;
  /**
   * This data item contains the version of the program
   *  or library used to compute the descriptor.
   */
  program_version?: Maybe<Scalars['String']['output']>;
  /**
   * This data item contains the descriptor type.
   *
   * Allowable values:
   * Glycam Condensed Core Sequence, Glycam Condensed Sequence, LINUCS, WURCS
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface PdbxEntityNonpoly {
  __typename?: 'PdbxEntityNonpoly';
  /** This data item is a pointer to _chem_comp.id in the CHEM_COMP category. */
  comp_id?: Maybe<Scalars['String']['output']>;
  /** This data item is a pointer to _entity.id in the ENTITY category. */
  entity_id: Scalars['String']['output'];
  /** A name for the non-polymer entity */
  name?: Maybe<Scalars['String']['output']>;
  /** For non-polymer BIRD molecules the BIRD identifier for the entity. */
  rcsb_prd_id?: Maybe<Scalars['String']['output']>;
}

export interface PdbxEntitySrcSyn {
  __typename?: 'PdbxEntitySrcSyn';
  /**
   * A description of special aspects of the source for the
   *  synthetic entity.
   *
   * Examples:
   * This sequence occurs naturally in humans.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * NCBI Taxonomy identifier of the organism from which the sequence of
   *  the synthetic entity was derived.
   *
   *  Reference:
   *
   *  Wheeler DL, Chappey C, Lash AE, Leipe DD, Madden TL, Schuler GD,
   *  Tatusova TA, Rapp BA (2000). Database resources of the National
   *  Center for Biotechnology Information. Nucleic Acids Res 2000 Jan
   *  1;28(1):10-4
   *
   *  Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Rapp BA,
   *  Wheeler DL (2000). GenBank. Nucleic Acids Res 2000 Jan 1;28(1):15-18.
   */
  ncbi_taxonomy_id?: Maybe<Scalars['String']['output']>;
  /**
   * The common name of the organism from which the sequence of
   *  the synthetic entity was derived.
   *
   * Examples:
   * house mouse
   *
   */
  organism_common_name?: Maybe<Scalars['String']['output']>;
  /**
   * The scientific name of the organism from which the sequence of
   *  the synthetic entity was derived.
   *
   * Examples:
   * synthetic construct, Mus musculus
   *
   */
  organism_scientific?: Maybe<Scalars['String']['output']>;
  /**
   * This data item identifies cases in which an alternative source
   *  modeled.
   *
   * Allowable values:
   * model, sample
   *
   */
  pdbx_alt_source_flag?: Maybe<Scalars['String']['output']>;
  /**
   * The beginning polymer sequence position for the polymer section corresponding
   *  to this source.
   *
   *  A reference to the sequence position in the entity_poly category.
   */
  pdbx_beg_seq_num?: Maybe<Scalars['Int']['output']>;
  /**
   * The ending polymer sequence position for the polymer section corresponding
   *  to this source.
   *
   *  A reference to the sequence position in the entity_poly category.
   */
  pdbx_end_seq_num?: Maybe<Scalars['Int']['output']>;
  /** This data item is an ordinal identifier for pdbx_entity_src_syn data records. */
  pdbx_src_id: Scalars['Int']['output'];
}

export interface PdbxFamilyPrdAudit {
  __typename?: 'PdbxFamilyPrdAudit';
  /**
   * The action associated with this audit record.
   *
   * Allowable values:
   * Add PRD, Create family, Initial release, Modify annotation, Modify citation, Modify family classification, Modify family name, Modify feature, Modify molecule details, Modify related structures, Modify sequence, Modify synonyms, Obsolete family, Obsolete familyt, Other modification, Remove PRD
   *
   */
  action_type: Scalars['String']['output'];
  /**
   * The initials of the annotator creating of modifying the family.
   *
   * Examples:
   * JO, SJ, KB
   *
   */
  annotator?: Maybe<Scalars['String']['output']>;
  /** The date associated with this audit record. */
  date: Scalars['Date']['output'];
  /**
   * Additional details decribing this change.
   *
   * Examples:
   * Revise molecule sequence.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * This data item is a pointer to _pdbx_reference_molecule_family.family_prd_id in the
   * 	       pdbx_reference_molecule category.
   */
  family_prd_id: Scalars['String']['output'];
  /**
   * An identifier for the wwPDB site creating or modifying the family.
   *
   * Examples:
   * RCSB, PDBE, PDBJ, BMRB, PDBC
   *
   */
  processing_site?: Maybe<Scalars['String']['output']>;
}

export interface PdbxInitialRefinementModel {
  __typename?: 'PdbxInitialRefinementModel';
  /**
   * This item identifies an accession code of the resource where the initial model
   *  is used
   */
  accession_code?: Maybe<Scalars['String']['output']>;
  /** A description of special aspects of the initial model */
  details?: Maybe<Scalars['String']['output']>;
  /** A comma separated list of entities reflecting the initial model used for refinement */
  entity_id_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A unique identifier for the starting model record. */
  id: Scalars['Int']['output'];
  /**
   * This item identifies the resource of initial model used for refinement
   *
   * Allowable values:
   * AlphaFold, ITasser, InsightII, ModelArchive, Modeller, Other, PDB, PDB-Dev, PHYRE, Robetta, RoseTTAFold, SwissModel
   *
   */
  source_name?: Maybe<Scalars['String']['output']>;
  /**
   * This item describes the type of the initial model was generated
   *
   * Allowable values:
   * experimental model, in silico model, integrative model, other
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface PdbxMoleculeFeatures {
  __typename?: 'PdbxMoleculeFeatures';
  /**
   * Broadly defines the function of the molecule.
   *
   * Allowable values:
   * Antagonist, Anthelmintic, Antibiotic, Antibiotic, Anthelmintic, Antibiotic, Antimicrobial, Antibiotic, Antineoplastic, Anticancer, Anticoagulant, Anticoagulant, Antithrombotic, Antifungal, Antigen, Antiinflammatory, Antimicrobial, Antimicrobial, Antiparasitic, Antibiotic, Antimicrobial, Antiretroviral, Antimicrobial, Antitumor, Antineoplastic, Antiparasitic, Antiretroviral, Antithrombotic, Antitumor, Antiviral, CASPASE inhibitor, Chaperone binding, Drug delivery, Enzyme inhibitor, Glycan component, Growth factor, Immunosuppressant, Inducer, Inhibitor, Lantibiotic, Metabolism, Metal transport, Nutrient, Oxidation-reduction, Protein binding, Receptor, Substrate analog, Synthetic opioid, Thrombin inhibitor, Thrombin inhibitor, Trypsin inhibitor, Toxin, Transition state mimetic, Transport activator, Trypsin inhibitor, Unknown, Water retention
   *
   */
  class?: Maybe<Scalars['String']['output']>;
  /** Additional details describing the molecule. */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * A name of the molecule.
   *
   * Examples:
   * thiostrepton
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_molecule_features.prd_id is the accession code for this
   *  reference molecule.
   */
  prd_id: Scalars['String']['output'];
  /**
   * Defines the structural classification of the molecule.
   *
   * Allowable values:
   * Amino acid, Aminoglycoside, Ansamycin, Anthracycline, Anthraquinone, Chalkophore, Chalkophore, Polypeptide, Chromophore, Cyclic depsipeptide, Cyclic lipopeptide, Cyclic peptide, Glycopeptide, Heterocyclic, Imino sugar, Keto acid, Lipoglycopeptide, Lipopeptide, Macrolide, Non-polymer, Nucleoside, Oligopeptide, Oligosaccharide, Peptaibol, Peptide-like, Polycyclic, Polypeptide, Polysaccharide, Quinolone, Siderophore, Thiolactone, Thiopeptide, Unknown
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface PdbxNmrDetails {
  __typename?: 'PdbxNmrDetails';
  /**
   * Additional details describing the NMR experiment.
   *
   * Examples:
   * This structure was determined using standard 2D homonuclear techniques., The structure was determined using triple-resonance NMR spectroscopy.
   *
   */
  text?: Maybe<Scalars['String']['output']>;
}

export interface PdbxNmrEnsemble {
  __typename?: 'PdbxNmrEnsemble';
  /**
   * The average number of constraint violations on a per residue basis for
   *  the ensemble.
   *
   * Examples:
   * null
   *
   */
  average_constraint_violations_per_residue?: Maybe<Scalars['Int']['output']>;
  /**
   * The average number of constraints per residue for the ensemble
   *
   * Examples:
   * null
   *
   */
  average_constraints_per_residue?: Maybe<Scalars['Int']['output']>;
  /**
   * The average distance restraint violation for the ensemble.
   *
   * Examples:
   * null
   *
   */
  average_distance_constraint_violation?: Maybe<Scalars['Float']['output']>;
  /**
   * The average torsion angle constraint violation for the ensemble.
   *
   * Examples:
   * null
   *
   */
  average_torsion_angle_constraint_violation?: Maybe<Scalars['Float']['output']>;
  /**
   * By highlighting the appropriate choice(s), describe how the submitted
   * conformer (models) were selected.
   *
   * Examples:
   * structures with the lowest energy, structures with the least restraint violations, structures with acceptable covalent geometry, structures with favorable non-bond energy, target function, back calculated data agree with experimental NOESY spectrum, all calculated structures submitted, The submitted conformer models are the 25 structures with the lowest
   *     energy., The submitted conformer models are those with the fewest number of
   *     constraint violations.
   *
   */
  conformer_selection_criteria?: Maybe<Scalars['String']['output']>;
  /** The total number of conformer (models) that were calculated in the final round. */
  conformers_calculated_total_number?: Maybe<Scalars['Int']['output']>;
  /** The number of conformer (models) that are submitted for the ensemble. */
  conformers_submitted_total_number?: Maybe<Scalars['Int']['output']>;
  /**
   * Describe the method used to calculate the distance constraint violation statistics,
   *  i.e. are they calculated over all the distance constraints or calculated for
   *  violations only?
   *
   * Examples:
   * Statistics were calculated over all of the distance constraints., Statistics were calculated for violations only
   *
   */
  distance_constraint_violation_method?: Maybe<Scalars['String']['output']>;
  /**
   * The maximum distance constraint violation for the ensemble.
   *
   * Examples:
   * null
   *
   */
  maximum_distance_constraint_violation?: Maybe<Scalars['Float']['output']>;
  /**
   * The maximum lower distance constraint violation for the ensemble.
   *
   * Examples:
   * null
   *
   */
  maximum_lower_distance_constraint_violation?: Maybe<Scalars['Float']['output']>;
  /** The maximum torsion angle constraint violation for the ensemble. */
  maximum_torsion_angle_constraint_violation?: Maybe<Scalars['Float']['output']>;
  /**
   * The maximum upper distance constraint violation for the ensemble.
   *
   * Examples:
   * null
   *
   */
  maximum_upper_distance_constraint_violation?: Maybe<Scalars['Float']['output']>;
  /** The number of the conformer identified as most representative. */
  representative_conformer?: Maybe<Scalars['Int']['output']>;
  /**
   * This item describes the method used to calculate the torsion angle constraint violation statistics.
   * i.e. are the entered values based on all torsion angle or calculated for violations only?
   *
   * Examples:
   * Statistics were calculated over all the torsion angle constraints., Statistics were calculated for torsion angle constraints violations only.
   *
   */
  torsion_angle_constraint_violation_method?: Maybe<Scalars['String']['output']>;
}

export interface PdbxNmrExptl {
  __typename?: 'PdbxNmrExptl';
  /**
   * The number to identify the set of sample conditions.
   *
   * Examples:
   * 1, 2, 3
   *
   */
  conditions_id: Scalars['String']['output'];
  /**
   * A numerical ID for each experiment.
   *
   * Examples:
   * 1, 2, 3
   *
   */
  experiment_id: Scalars['String']['output'];
  /**
   * Physical state of the sample either anisotropic or isotropic.
   *
   * Allowable values:
   * anisotropic, isotropic
   *
   */
  sample_state?: Maybe<Scalars['String']['output']>;
  /**
   * The solution_id from the Experimental Sample to identify the sample
   *  that these conditions refer to.
   *
   *  [Remember to save the entries here before returning to the
   *   Experimental Sample form]
   *
   * Examples:
   * 1, 2, 3
   *
   */
  solution_id: Scalars['String']['output'];
  /** Pointer to '_pdbx_nmr_spectrometer.spectrometer_id' */
  spectrometer_id?: Maybe<Scalars['Int']['output']>;
  /**
   * The type of NMR experiment.
   *
   * Examples:
   * 2D NOESY, 3D_15N-separated_NOESY, 3D_13C-separated_NOESY, 4D_13C-separated_NOESY, 4D_13C/15N-separated_NOESY, 3D_15N-separated_ROESY, 3D_13C-separated_ROESY, HNCA-J, HNHA, DQF-COSY, P-COSY, PE-COSY, E-COSY
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface PdbxNmrExptlSampleConditions {
  __typename?: 'PdbxNmrExptlSampleConditions';
  /**
   * The condition number as defined above.
   *
   * Examples:
   * 1, 2, 3
   *
   */
  conditions_id: Scalars['String']['output'];
  /**
   * General details describing conditions of both the sample and the environment
   * during measurements.
   *
   * Examples:
   * The high salinity of the sample may have contributed to overheating of the sample during experiments with long saturation periods like the TOCSY experiments.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * The ionic strength at which the NMR data were collected -in lieu of
   *  this enter the concentration and identity of the salt in the sample.
   */
  ionic_strength?: Maybe<Scalars['String']['output']>;
  /**
   * Estimate of the standard error for the value for the sample ionic strength.
   *
   * Examples:
   * null
   *
   */
  ionic_strength_err?: Maybe<Scalars['Float']['output']>;
  /**
   * Units for the value of the sample condition ionic strength..
   *
   * Allowable values:
   * M, Not defined, mM
   *
   */
  ionic_strength_units?: Maybe<Scalars['String']['output']>;
  /**
   * A descriptive label that uniquely identifies this set of sample conditions.
   *
   * Examples:
   * conditions_1
   *
   */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * The pH at which the NMR data were collected.
   *
   * Examples:
   * null, null
   *
   */
  pH?: Maybe<Scalars['String']['output']>;
  /**
   * Estimate of the standard error for the value for the sample pH.
   *
   * Examples:
   * null
   *
   */
  pH_err?: Maybe<Scalars['Float']['output']>;
  /**
   * Units for the value of the sample condition pH.
   *
   * Allowable values:
   * Not defined, pD, pH, pH*
   *
   */
  pH_units?: Maybe<Scalars['String']['output']>;
  /**
   * The pressure at which NMR data were collected.
   *
   * Examples:
   * 1, ambient, 1atm
   *
   */
  pressure?: Maybe<Scalars['String']['output']>;
  /**
   * Estimate of the standard error for the value for the sample pressure.
   *
   * Examples:
   * null
   *
   */
  pressure_err?: Maybe<Scalars['Float']['output']>;
  /**
   * The units of pressure at which NMR data were collected.
   *
   * Examples:
   * Pa, atm, Torr
   *
   */
  pressure_units?: Maybe<Scalars['String']['output']>;
  /**
   * The temperature (in kelvin) at which NMR data were
   *  collected.
   */
  temperature?: Maybe<Scalars['String']['output']>;
  /**
   * Estimate of the standard error for the value for the sample temperature.
   *
   * Examples:
   * null
   *
   */
  temperature_err?: Maybe<Scalars['Float']['output']>;
  /**
   * Units for the value of the sample condition temperature.
   *
   * Allowable values:
   * C, K, Not defined
   *
   */
  temperature_units?: Maybe<Scalars['String']['output']>;
}

export interface PdbxNmrRefine {
  __typename?: 'PdbxNmrRefine';
  /**
   * Additional details about the NMR refinement.
   *
   * Examples:
   * Additional comments about the NMR refinement can be placed here, e.g.
   * the structures are based on a total of 3344 restraints, 3167 are NOE-derived
   * distance constraints, 68 dihedral angle restraints,109 distance restraints
   * from hydrogen bonds.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * The method used to determine the structure.
   *
   * Examples:
   * simulated annealing, distance geometry
   *   simulated annealing
   *   molecular dynamics
   *   matrix relaxation
   *   torsion angle dynamics
   *
   */
  method?: Maybe<Scalars['String']['output']>;
  /** Pointer to _software.ordinal */
  software_ordinal: Scalars['Int']['output'];
}

export interface PdbxNmrRepresentative {
  __typename?: 'PdbxNmrRepresentative';
  /**
   * If a member of the ensemble has been selected as a representative
   *  structure, identify it by its model number.
   *
   * Examples:
   * 15
   *
   */
  conformer_id?: Maybe<Scalars['String']['output']>;
  /**
   * By highlighting the appropriate choice(s), describe the criteria used to
   * select this structure as a representative structure, or if an average
   * structure has been calculated describe how this was done.
   *
   * Examples:
   * The structure closest to the average.
   * The structure with the lowest energy was selected.
   * The structure with the fewest number of violations was selected.
   * A minimized average structure was calculated.
   *
   */
  selection_criteria?: Maybe<Scalars['String']['output']>;
}

export interface PdbxNmrSampleDetails {
  __typename?: 'PdbxNmrSampleDetails';
  /**
   * A complete description of each NMR sample. Include the concentration
   * and concentration units for each component (include buffers, etc.). For each
   * component describe the isotopic composition, including the % labeling level,
   * if known.
   *
   * For example:
   * 1. Uniform (random) labeling with 15N: U-15N
   * 2. Uniform (random) labeling with 13C, 15N at known labeling
   *    levels: U-95% 13C;U-98% 15N
   * 3. Residue selective labeling: U-95% 15N-Thymine
   * 4. Site specific labeling: 95% 13C-Ala18,
   * 5. Natural abundance labeling in an otherwise uniformly labeled
   *    biomolecule is designated by NA: U-13C; NA-K,H
   *
   * Examples:
   * 2mM Ribonuclease  U-15N,13C; 50mM phosphate buffer NA; 90% H2O, 10% D2O
   *
   */
  contents?: Maybe<Scalars['String']['output']>;
  /**
   * Brief description of the sample providing additional information not captured by other items in the category.
   *
   * Examples:
   * The added glycerol was used to raise the viscosity of the solution to 1.05 poisson.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * A value that uniquely identifies this sample from the other samples listed
   * in the entry.
   *
   * Examples:
   * 15N_sample
   *
   */
  label?: Maybe<Scalars['String']['output']>;
  /**
   * The name (number) of the sample.
   *
   * Examples:
   * 1, 2, 3
   *
   */
  solution_id: Scalars['String']['output'];
  /**
   * The solvent system used for this sample.
   *
   * Examples:
   * 90% H2O, 10% D2O
   *
   */
  solvent_system?: Maybe<Scalars['String']['output']>;
  /**
   * A descriptive term for the sample that defines the general physical properties
   * of the sample.
   *
   * Allowable values:
   * bicelle, emulsion, fiber, fibrous protein, filamentous virus, gel solid, gel solution, liposome, lyophilized powder, membrane, micelle, oriented membrane film, polycrystalline powder, reverse micelle, single crystal, solid, solution
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface PdbxNmrSoftware {
  __typename?: 'PdbxNmrSoftware';
  /**
   * The name of the authors of the software used in this
   *  procedure.
   *
   * Examples:
   * Brunger, Guentert
   *
   */
  authors?: Maybe<Scalars['String']['output']>;
  /**
   * The purpose of the software.
   *
   * Examples:
   * collection, processing, data analysis, structure solution, refinement, iterative matrix relaxation
   *
   */
  classification?: Maybe<Scalars['String']['output']>;
  /**
   * The name of the software used for the task.
   *
   * Examples:
   * ANSIG, AURELIA, AZARA, CHARMM, CoMAND, CORMA, DIANA, DYANA, DSPACE, DISGEO, DGII, DISMAN, DINOSAUR, DISCOVER, FELIX, FT_NMR, GROMOS, IRMA, MARDIGRAS, NMRPipe, SA, UXNMR, VNMR, X-PLOR, XWINNMR
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /** An ordinal index for this category */
  ordinal: Scalars['Int']['output'];
  /**
   * The version of the software.
   *
   * Examples:
   * 940501.3, 2.1
   *
   */
  version?: Maybe<Scalars['String']['output']>;
}

export interface PdbxNmrSpectrometer {
  __typename?: 'PdbxNmrSpectrometer';
  /** A text description of the NMR spectrometer. */
  details?: Maybe<Scalars['String']['output']>;
  /** The field strength in MHz of the spectrometer */
  field_strength?: Maybe<Scalars['Float']['output']>;
  /**
   * The name of the manufacturer of the spectrometer.
   *
   * Examples:
   * Varian, Bruker, JEOL, GE
   *
   */
  manufacturer?: Maybe<Scalars['String']['output']>;
  /**
   * The model of the NMR spectrometer.
   *
   * Examples:
   * AVANCE, AVANCE II, AVANCE III, AVANCE III HD, WH, WM, AC+, Alpha, AM, AMX, AMX II, DMX, DRX, DSX, MSL, OMEGA, OMEGA PSG, GX, GSX, A, AL, EC, EX, LA, ECP, Infinityplus, Mercury, VNMRS, VXR, UNITY, UNITY INOVA, UNITYPLUS, INOVA, home-built
   *
   */
  model?: Maybe<Scalars['String']['output']>;
  /**
   * Assign a numerical ID to each instrument.
   *
   * Examples:
   * 1, 2, 3
   *
   */
  spectrometer_id: Scalars['String']['output'];
  /**
   * Select the instrument manufacturer(s) and the model(s) of the NMR(s)
   * used for this work.
   *
   * Examples:
   * Bruker WH, Bruker WM, Bruker AM, Bruker AMX, Bruker DMX, Bruker DRX, Bruker MSL, Bruker AVANCE, GE Omega, GE Omega PSG, JEOL GX, JEOL GSX, JEOL A, JEOL AL, JEOL EC, JEOL EX, JEOL LA, JEOL ECP, Varian VXRS, Varian UNITY, Varian UNITYplus, Varian INOVA, other
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface PdbxPrdAudit {
  __typename?: 'PdbxPrdAudit';
  /**
   * The action associated with this audit record.
   *
   * Allowable values:
   * Create molecule, Initial release, Modify audit, Modify class, Modify linkage, Modify molecule name, Modify representation, Modify sequence, Modify taxonomy organism, Modify type, Obsolete molecule, Other modification
   *
   */
  action_type: Scalars['String']['output'];
  /**
   * The initials of the annotator creating of modifying the molecule.
   *
   * Examples:
   * JO, SJ, KB
   *
   */
  annotator?: Maybe<Scalars['String']['output']>;
  /** The date associated with this audit record. */
  date: Scalars['Date']['output'];
  /**
   * Additional details decribing this change.
   *
   * Examples:
   * Revise molecule sequence.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * This data item is a pointer to _pdbx_reference_molecule.prd_id in the
   * 	       pdbx_reference_molecule category.
   */
  prd_id: Scalars['String']['output'];
  /**
   * An identifier for the wwPDB site creating or modifying the molecule.
   *
   * Allowable values:
   * BMRB, PDBC, PDBE, PDBJ, RCSB
   *
   */
  processing_site?: Maybe<Scalars['String']['output']>;
}

export interface PdbxReferenceEntityList {
  __typename?: 'PdbxReferenceEntityList';
  /** The component number of this entity within the molecule. */
  component_id: Scalars['Int']['output'];
  /** Additional details about this entity. */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_reference_entity_list.prd_id is a reference
   *  _pdbx_reference_molecule.prd_id in the PDBX_REFERENCE_MOLECULE category.
   */
  prd_id: Scalars['String']['output'];
  /**
   * The value of _pdbx_reference_entity_list.ref_entity_id is a unique identifier
   *  the a constituent entity within this reference molecule.
   */
  ref_entity_id: Scalars['String']['output'];
  /**
   * Defines the polymer characteristic of the entity.
   *
   * Allowable values:
   * branched, non-polymer, polymer, polymer-like
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface PdbxReferenceEntityPoly {
  __typename?: 'PdbxReferenceEntityPoly';
  /** The database code for this source information */
  db_code?: Maybe<Scalars['String']['output']>;
  /** The database name for this source information */
  db_name?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_reference_entity_poly.prd_id is a reference
   * 	       _pdbx_reference_entity_list.prd_id in the  PDBX_REFERENCE_ENTITY_LIST category.
   */
  prd_id: Scalars['String']['output'];
  /**
   * The value of _pdbx_reference_entity_poly.ref_entity_id is a reference
   *  to _pdbx_reference_entity_list.ref_entity_id in PDBX_REFERENCE_ENTITY_LIST category.
   */
  ref_entity_id: Scalars['String']['output'];
  /**
   * The type of the polymer.
   *
   * Allowable values:
   * nucleic-acid-like, oligosaccharide, peptide-like, polysaccharide-like
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface PdbxReferenceEntityPolyLink {
  __typename?: 'PdbxReferenceEntityPolyLink';
  /**
   * The atom identifier/name in the first of the two components making
   *  the linkage.
   */
  atom_id_1?: Maybe<Scalars['String']['output']>;
  /**
   * The atom identifier/name in the second of the two components making
   *  the linkage.
   */
  atom_id_2?: Maybe<Scalars['String']['output']>;
  /**
   * The component identifier in the first of the two components making the
   *  linkage.
   *
   *  This data item is a pointer to _pdbx_reference_entity_poly_seq.mon_id
   *  in the PDBX_REFERENCE_ENTITY_POLY_SEQ category.
   */
  comp_id_1?: Maybe<Scalars['String']['output']>;
  /**
   * The component identifier in the second of the two components making the
   *  linkage.
   *
   *  This data item is a pointer to _pdbx_reference_entity_poly_seq.mon_id
   *  in the PDBX_REFERENCE_ENTITY_POLY_SEQ category.
   */
  comp_id_2?: Maybe<Scalars['String']['output']>;
  /** The entity component identifier entity containing the linkage. */
  component_id: Scalars['Int']['output'];
  /**
   * For a polymer entity, the sequence number in the first of
   *  the two components making the linkage.
   *
   *  This data item is a pointer to _pdbx_reference_entity_poly_seq.num
   *  in the PDBX_REFERENCE_ENTITY_POLY_SEQ category.
   */
  entity_seq_num_1?: Maybe<Scalars['Int']['output']>;
  /**
   * For a polymer entity, the sequence number in the second of
   *  the two components making the linkage.
   *
   *  This data item is a pointer to _pdbx_reference_entity_poly_seq.num
   *  in the PDBX_REFERENCE_ENTITY_POLY_SEQ category.
   */
  entity_seq_num_2?: Maybe<Scalars['Int']['output']>;
  /**
   * The value of _pdbx_reference_entity_poly_link.link_id uniquely identifies
   *  a linkage within a polymer entity.
   */
  link_id: Scalars['Int']['output'];
  /**
   * The value of _pdbx_reference_entity_poly_link.prd_id is a reference
   *  _pdbx_reference_entity_list.prd_id in the PDBX_REFERENCE_ENTITY_POLY category.
   */
  prd_id: Scalars['String']['output'];
  /**
   * The reference entity id of the polymer entity containing the linkage.
   *
   *  This data item is a pointer to _pdbx_reference_entity_poly.ref_entity_id
   *  in the PDBX_REFERENCE_ENTITY_POLY category.
   */
  ref_entity_id: Scalars['String']['output'];
  /**
   * The bond order target for the non-standard linkage.
   *
   * Allowable values:
   * arom, delo, doub, pi, poly, quad, sing, trip
   *
   */
  value_order?: Maybe<Scalars['String']['output']>;
}

export interface PdbxReferenceEntityPolySeq {
  __typename?: 'PdbxReferenceEntityPolySeq';
  /**
   * A flag to indicate that sequence heterogeneity at this monomer position.
   *
   * Allowable values:
   * N, Y
   *
   */
  hetero: Scalars['String']['output'];
  /** This data item is the chemical component identifier of monomer. */
  mon_id: Scalars['String']['output'];
  /**
   * The value of _pdbx_reference_entity_poly_seq.num must uniquely and sequentially
   *  identify a record in the PDBX_REFERENCE_ENTITY_POLY_SEQ list.
   *
   *  This value is conforms to author numbering conventions and does not map directly
   *  to the numbering conventions used for _entity_poly_seq.num.
   */
  num: Scalars['Int']['output'];
  /**
   * A flag to indicate that this monomer is observed in the instance example.
   *
   * Allowable values:
   * N, Y
   *
   */
  observed?: Maybe<Scalars['String']['output']>;
  /** This data item is the chemical component identifier for the parent component corresponding to this monomer. */
  parent_mon_id?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_reference_entity_poly_seq.prd_id is a reference
   * 	       _pdbx_reference_entity_poly.prd_id in the  PDBX_REFERENCE_ENTITY_POLY category.
   */
  prd_id: Scalars['String']['output'];
  /**
   * The value of _pdbx_reference_entity_poly_seq.ref_entity_id is a reference
   *  to _pdbx_reference_entity_poly.ref_entity_id in PDBX_REFERENCE_ENTITY_POLY category.
   */
  ref_entity_id: Scalars['String']['output'];
}

export interface PdbxReferenceEntitySequence {
  __typename?: 'PdbxReferenceEntitySequence';
  /**
   * A flag to indicate a non-ribosomal entity.
   *
   * Allowable values:
   * N, Y
   *
   */
  NRP_flag?: Maybe<Scalars['String']['output']>;
  /** The one-letter-code sequence for this entity.  Non-standard monomers are represented as 'X'. */
  one_letter_codes?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_reference_entity_sequence.prd_id is a reference
   * 	       _pdbx_reference_entity_list.prd_id in the  PDBX_REFERENCE_ENTITY_LIST category.
   */
  prd_id: Scalars['String']['output'];
  /**
   * The value of _pdbx_reference_entity_sequence.ref_entity_id is a reference
   *  to _pdbx_reference_entity_list.ref_entity_id in PDBX_REFERENCE_ENTITY_LIST category.
   */
  ref_entity_id: Scalars['String']['output'];
  /**
   * The monomer type for the sequence.
   *
   * Allowable values:
   * peptide-like, saccharide
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface PdbxReferenceEntitySrcNat {
  __typename?: 'PdbxReferenceEntitySrcNat';
  /** The Americal Tissue Culture Collection code for organism from which the entity was isolated. */
  atcc?: Maybe<Scalars['String']['output']>;
  /** The database code for this source information */
  db_code?: Maybe<Scalars['String']['output']>;
  /** The database name for this source information */
  db_name?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_reference_entity_src_nat.ordinal distinguishes
   * 	       source details for this entity.
   */
  ordinal: Scalars['Int']['output'];
  /**
   * The scientific name of the organism from which the entity was isolated.
   *
   * Examples:
   * Mus musculus
   *
   */
  organism_scientific?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_reference_entity_src_nat.prd_id is a reference
   * 	       _pdbx_reference_entity_list.prd_id in the  PDBX_REFERENCE_ENTITY_LIST category.
   */
  prd_id: Scalars['String']['output'];
  /**
   * The value of _pdbx_reference_entity_src_nat.ref_entity_id is a reference
   *  to _pdbx_reference_entity_list.ref_entity_id in PDBX_REFERENCE_ENTITY_LIST category.
   */
  ref_entity_id: Scalars['String']['output'];
  /** The data source for this information. */
  source?: Maybe<Scalars['String']['output']>;
  /** A identifier within the data source for this information. */
  source_id?: Maybe<Scalars['String']['output']>;
  /** The NCBI TaxId of the organism from which the entity was isolated. */
  taxid?: Maybe<Scalars['String']['output']>;
}

export interface PdbxReferenceMolecule {
  __typename?: 'PdbxReferenceMolecule';
  /**
   * For entities represented as single molecules, the identifier
   *  corresponding to the chemical definition for the molecule.
   *
   * Examples:
   * 0Z3, CD9
   *
   */
  chem_comp_id?: Maybe<Scalars['String']['output']>;
  /**
   * Broadly defines the function of the entity.
   *
   * Allowable values:
   * Antagonist, Anthelmintic, Antibiotic, Antibiotic, Anthelmintic, Antibiotic, Antimicrobial, Antibiotic, Antineoplastic, Anticancer, Anticoagulant, Anticoagulant, Antithrombotic, Antifungal, Antigen, Antiinflammatory, Antimicrobial, Antimicrobial, Antiparasitic, Antibiotic, Antimicrobial, Antiretroviral, Antimicrobial, Antitumor, Antineoplastic, Antiparasitic, Antiretroviral, Antithrombotic, Antitumor, Antiviral, CASPASE inhibitor, Chaperone binding, Drug delivery, Enzyme inhibitor, Glycan component, Growth factor, Immunosuppressant, Inducer, Inhibitor, Lantibiotic, Metabolism, Metal transport, Nutrient, Oxidation-reduction, Protein binding, Receptor, Substrate analog, Synthetic opioid, Thrombin inhibitor, Thrombin inhibitor, Trypsin inhibitor, Toxin, Transition state mimetic, Transport activator, Trypsin inhibitor, Unknown, Water retention
   *
   */
  class?: Maybe<Scalars['String']['output']>;
  /** Evidence for the assignment of _pdbx_reference_molecule.class */
  class_evidence_code?: Maybe<Scalars['String']['output']>;
  /** Special details about this molecule. */
  compound_details?: Maybe<Scalars['String']['output']>;
  /** Description of this molecule. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The formula for the reference entity. Formulae are written
   *  according to the rules:
   *
   *  1. Only recognised element symbols may be used.
   *
   *  2. Each element symbol is followed by a 'count' number. A count
   *     of '1' may be omitted.
   *
   *  3. A space or parenthesis must separate each element symbol and
   *     its count, but in general parentheses are not used.
   *
   *  4. The order of elements depends on whether or not carbon is
   *     present. If carbon is present, the order should be: C, then
   *     H, then the other elements in alphabetical order of their
   *     symbol. If carbon is not present, the elements are listed
   *     purely in alphabetic order of their symbol. This is the
   *     'Hill' system used by Chemical Abstracts.
   *
   * Examples:
   * C18 H19 N7 O8 S
   *
   */
  formula?: Maybe<Scalars['String']['output']>;
  /** Formula mass in daltons of the entity. */
  formula_weight?: Maybe<Scalars['Float']['output']>;
  /**
   * A name of the entity.
   *
   * Examples:
   * thiostrepton
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_reference_molecule.prd_id is the unique identifier
   *  for the reference molecule in this family.
   *
   *  By convention this ID uniquely identifies the reference molecule in
   *  in the PDB reference dictionary.
   *
   *  The ID has the template form PRD_dddddd (e.g. PRD_000001)
   *
   * Examples:
   * PRD_000001, PRD_0000010
   *
   */
  prd_id: Scalars['String']['output'];
  /**
   * Defines the current PDB release status for this molecule definition.
   *
   * Allowable values:
   * HOLD, OBS, REL, WAIT
   *
   */
  release_status?: Maybe<Scalars['String']['output']>;
  /** Assigns the identifier of the reference molecule that has replaced this molecule. */
  replaced_by?: Maybe<Scalars['String']['output']>;
  /**
   * Assigns the identifier for the reference molecule which have been replaced
   *  by this reference molecule.
   *  Multiple molecule identifier codes should be separated by commas.
   */
  replaces?: Maybe<Scalars['String']['output']>;
  /**
   * Defines how this entity is represented in PDB data files.
   *
   * Allowable values:
   * branched, polymer, single molecule
   *
   */
  represent_as?: Maybe<Scalars['String']['output']>;
  /** The PDB accession code for the entry containing a representative example of this molecule. */
  representative_PDB_id_code?: Maybe<Scalars['String']['output']>;
  /**
   * Defines the structural classification of the entity.
   *
   * Allowable values:
   * Amino acid, Aminoglycoside, Ansamycin, Anthracycline, Anthraquinone, Chalkophore, Chalkophore, Polypeptide, Chromophore, Cyclic depsipeptide, Cyclic lipopeptide, Cyclic peptide, Glycopeptide, Heterocyclic, Imino sugar, Keto acid, Lipoglycopeptide, Lipopeptide, Macrolide, Non-polymer, Nucleoside, Oligopeptide, Oligosaccharide, Peptaibol, Peptide-like, Polycyclic, Polypeptide, Polysaccharide, Quinolone, Siderophore, Thiolactone, Thiopeptide, Unknown
   *
   */
  type?: Maybe<Scalars['String']['output']>;
  /** Evidence for the assignment of _pdbx_reference_molecule.type */
  type_evidence_code?: Maybe<Scalars['String']['output']>;
}

export interface PdbxReferenceMoleculeAnnotation {
  __typename?: 'PdbxReferenceMoleculeAnnotation';
  /**
   * The value of _pdbx_reference_molecule_annotation.family_prd_id is a reference to
   *  _pdbx_reference_molecule_list.family_prd_id in category PDBX_REFERENCE_MOLECULE_FAMILY_LIST.
   */
  family_prd_id: Scalars['String']['output'];
  /** This data item distinguishes anotations for this entity. */
  ordinal: Scalars['Int']['output'];
  /**
   * This data item is a pointer to _pdbx_reference_molecule.prd_id in the
   *  PDB_REFERENCE_MOLECULE category.
   */
  prd_id?: Maybe<Scalars['String']['output']>;
  /**
   * The source of the annoation for this entity.
   *
   * Examples:
   * depositor provided, from UniProt Entry P200311
   *
   */
  source?: Maybe<Scalars['String']['output']>;
  /**
   * Text describing the annotation for this entity.
   *
   * Examples:
   * antigen binding, glucose transporter activity
   *
   */
  text?: Maybe<Scalars['String']['output']>;
  /**
   * Type of annotation for this entity.
   *
   * Examples:
   * Function, Use, Pharmacology, Mechanism_of_Action, Biological_Activity, Inhibitor_Class, Therapeutic_Category, Research_Use, Other_annotation
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface PdbxReferenceMoleculeDetails {
  __typename?: 'PdbxReferenceMoleculeDetails';
  /**
   * The value of _pdbx_reference_molecule_details.family_prd_id is a reference to
   *  _pdbx_reference_molecule_list.family_prd_id' in category PDBX_REFERENCE_MOLECULE_FAMILY.
   */
  family_prd_id: Scalars['String']['output'];
  /**
   * The value of _pdbx_reference_molecule_details.ordinal is an ordinal that
   *  distinguishes each descriptive text for this entity.
   */
  ordinal: Scalars['Int']['output'];
  /** A data source of this information (e.g. PubMed, Merck Index) */
  source?: Maybe<Scalars['String']['output']>;
  /** A identifier within the data source for this information. */
  source_id?: Maybe<Scalars['String']['output']>;
  /** The text of the description of special aspects of the entity. */
  text?: Maybe<Scalars['String']['output']>;
}

export interface PdbxReferenceMoleculeFamily {
  __typename?: 'PdbxReferenceMoleculeFamily';
  /**
   * The value of _pdbx_reference_entity.family_prd_id must uniquely identify a record in the
   *  PDBX_REFERENCE_MOLECULE_FAMILY list.
   *
   *  By convention this ID uniquely identifies the reference family in
   *  in the PDB reference dictionary.
   *
   *  The ID has the template form FAM_dddddd (e.g. FAM_000001)
   */
  family_prd_id: Scalars['String']['output'];
  /**
   * The entity family name.
   *
   * Examples:
   * actinomycin, adriamycin
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Assigns the current PDB release status for this family.
   *
   * Allowable values:
   * HOLD, OBS, REL, WAIT
   *
   */
  release_status?: Maybe<Scalars['String']['output']>;
  /** Assigns the identifier of the family that has replaced this component. */
  replaced_by?: Maybe<Scalars['String']['output']>;
  /**
   * Assigns the identifier for the family which have been replaced by this family.
   *  Multiple family identifier codes should be separated by commas.
   */
  replaces?: Maybe<Scalars['String']['output']>;
}

export interface PdbxReferenceMoleculeFeatures {
  __typename?: 'PdbxReferenceMoleculeFeatures';
  /**
   * The value of _pdbx_reference_molecule_features.family_prd_id is a reference to
   *  _pdbx_reference_molecule_list.family_prd_id in category PDBX_REFERENCE_MOLECULE_FAMILY_LIST.
   */
  family_prd_id: Scalars['String']['output'];
  /**
   * The value of _pdbx_reference_molecule_features.ordinal distinguishes
   * 	       each feature for this entity.
   */
  ordinal: Scalars['Int']['output'];
  /**
   * The value of _pdbx_reference_molecule_features.prd_id is a reference
   * 	       _pdbx_reference_molecule.prd_id in the  PDBX_REFERENCE_MOLECULE category.
   */
  prd_id: Scalars['String']['output'];
  /**
   * The information source for the component feature.
   *
   * Examples:
   * PDB, CHEBI, DRUGBANK, PUBCHEM
   *
   */
  source?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_reference_molecule_features.source_ordinal provides
   * 	       the priority order of features from a particular source or database.
   */
  source_ordinal?: Maybe<Scalars['Int']['output']>;
  /**
   * The entity feature type.
   *
   * Examples:
   * FUNCTION, ENZYME INHIBITED, STRUCTURE IMAGE URL
   *
   */
  type?: Maybe<Scalars['String']['output']>;
  /** The entity feature value. */
  value?: Maybe<Scalars['String']['output']>;
}

export interface PdbxReferenceMoleculeList {
  __typename?: 'PdbxReferenceMoleculeList';
  /**
   * The value of _pdbx_reference_molecule_list.family_prd_id is a reference to
   *  _pdbx_reference_molecule_family.family_prd_id' in category PDBX_REFERENCE_MOLECULE_FAMILY.
   */
  family_prd_id: Scalars['String']['output'];
  /**
   * The value of _pdbx_reference_molecule_list.prd_id is the unique identifier
   *  for the reference molecule in this family.
   *
   *  By convention this ID uniquely identifies the reference molecule in
   *  in the PDB reference dictionary.
   *
   *  The ID has the template form PRD_dddddd (e.g. PRD_000001)
   */
  prd_id: Scalars['String']['output'];
}

export interface PdbxReferenceMoleculeRelatedStructures {
  __typename?: 'PdbxReferenceMoleculeRelatedStructures';
  /** A link to related reference information in the citation category. */
  citation_id?: Maybe<Scalars['String']['output']>;
  /**
   * The database accession code for the related structure reference.
   *
   * Examples:
   * 143108
   *
   */
  db_accession?: Maybe<Scalars['String']['output']>;
  /**
   * The database identifier code for the related structure reference.
   *
   * Examples:
   * QEFHUE
   *
   */
  db_code?: Maybe<Scalars['String']['output']>;
  /**
   * The database name for the related structure reference.
   *
   * Examples:
   * CCDC
   *
   */
  db_name?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_reference_molecule_related_structures.family_prd_id is a reference to
   *  _pdbx_reference_molecule_list.family_prd_id in category PDBX_REFERENCE_MOLECULE_FAMILY_LIST.
   */
  family_prd_id: Scalars['String']['output'];
  /**
   * The formula for the reference entity. Formulae are written
   *  according to the rules:
   *
   *  1. Only recognised element symbols may be used.
   *
   *  2. Each element symbol is followed by a 'count' number. A count
   *     of '1' may be omitted.
   *
   *  3. A space or parenthesis must separate each element symbol and
   *     its count, but in general parentheses are not used.
   *
   *  4. The order of elements depends on whether or not carbon is
   *     present. If carbon is present, the order should be: C, then
   *     H, then the other elements in alphabetical order of their
   *     symbol. If carbon is not present, the elements are listed
   *     purely in alphabetic order of their symbol. This is the
   *     'Hill' system used by Chemical Abstracts.
   *
   * Examples:
   * C18 H19 N7 O8 S
   *
   */
  formula?: Maybe<Scalars['String']['output']>;
  /**
   * The chemical name for the structure entry in the related database
   *
   * Examples:
   * actinomycn
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_reference_molecule_related_structures.ordinal distinguishes
   *  related structural data for each entity.
   */
  ordinal: Scalars['Int']['output'];
}

export interface PdbxReferenceMoleculeSynonyms {
  __typename?: 'PdbxReferenceMoleculeSynonyms';
  /**
   * The value of _pdbx_reference_molecule_synonyms.family_prd_id is a reference to
   *  _pdbx_reference_molecule_list.family_prd_id in category PDBX_REFERENCE_MOLECULE_FAMILY_LIST.
   */
  family_prd_id: Scalars['String']['output'];
  /**
   * A synonym name for the entity.
   *
   * Examples:
   * thiostrepton
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_reference_molecule_synonyms.ordinal is an ordinal
   * 	       to distinguish synonyms for this entity.
   */
  ordinal: Scalars['Int']['output'];
  /**
   * The value of _pdbx_reference_molecule_synonyms.prd_id is a reference
   * 	       _pdbx_reference_molecule.prd_id in the  PDBX_REFERENCE_MOLECULE category.
   */
  prd_id: Scalars['String']['output'];
  /**
   * The source of this synonym name for the entity.
   *
   * Examples:
   * CAS
   *
   */
  source?: Maybe<Scalars['String']['output']>;
}

export interface PdbxReflnsTwin {
  __typename?: 'PdbxReflnsTwin';
  /**
   * The crystal identifier.  A reference to
   *  _exptl_crystal.id in category EXPTL_CRYSTAL.
   */
  crystal_id: Scalars['String']['output'];
  /**
   * The diffraction data set identifier.  A reference to
   *  _diffrn.id in category DIFFRN.
   */
  diffrn_id: Scalars['String']['output'];
  /** An identifier for the twin domain. */
  domain_id?: Maybe<Scalars['String']['output']>;
  /**
   * The twin fraction or twin factor represents a quantitative parameter for the
   * crystal twinning.  The value 0 represents no twinning, < 0.5 partial twinning,
   *  = 0.5 for perfect twinning.
   */
  fraction?: Maybe<Scalars['Float']['output']>;
  /**
   * The possible merohedral or hemihedral twinning operators for different
   * point groups are:
   *
   * True point group  	Twin operation  	hkl related to
   * 3                      	2 along a,b             h,-h-k,-l
   *                        	2 along a*,b*           h+k,-k,-l
   *                         2 along c               -h,-k,l
   * 4                       2 along a,b,a*,b*       h,-k,-l
   * 6                       2 along a,b,a*,b*       h,-h-k,-l
   * 321                     2 along a*,b*,c         -h,-k,l
   * 312                     2 along a,b,c           -h,-k,l
   * 23                      4 along a,b,c            k,-h,l
   *
   * References:
   *  Yeates, T.O. (1997) Methods in Enzymology 276, 344-358. Detecting and
   *  Overcoming Crystal Twinning.
   *
   *  and information from the following on-line sites:
   *
   *    CNS site http://cns.csb.yale.edu/v1.1/
   *    CCP4 site http://www.ccp4.ac.uk/dist/html/detwin.html
   *    SHELX site http://shelx.uni-ac.gwdg.de/~rherbst/twin.html
   *
   * Examples:
   * h,-h-k,-l, h+k,-k,-l, -h,-k,l, h,-k,-l, h,-h-k,-l, -h,-k,l, k,-h,l
   *
   */
  operator: Scalars['String']['output'];
  /**
   * There are two types of twinning: merohedral or hemihedral
   *                                  non-merohedral or epitaxial
   *
   * For merohedral twinning the diffraction patterns from the different domains are
   * completely superimposable.   Hemihedral twinning is a special case of merohedral
   * twinning. It only involves two distinct domains.  Pseudo-merohedral twinning is
   * a subclass merohedral twinning in which lattice is coincidentally superimposable.
   *
   * In the case of non-merohedral or epitaxial twinning  the reciprocal
   * lattices do not superimpose exactly. In this case the  diffraction pattern
   * consists of two (or more) interpenetrating lattices, which can in principle
   * be separated.
   *
   * Allowable values:
   * epitaxial, hemihedral, merohedral, non-merohedral, pseudo-merohedral, tetartohedral
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface PdbxRelatedExpDataSet {
  __typename?: 'PdbxRelatedExpDataSet';
  /**
   * A DOI reference to the related data set.
   *
   * Examples:
   * 10.000/10002/image_data/cif
   *
   */
  data_reference?: Maybe<Scalars['String']['output']>;
  /**
   * The type of the experimenatal data set.
   *
   * Examples:
   * diffraction image data, NMR free induction decay data
   *
   */
  data_set_type?: Maybe<Scalars['String']['output']>;
  /**
   * Additional details describing the content of the related data set and its application to
   *  the current investigation.
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * A DOI reference to the metadata decribing the related data set.
   *
   * Examples:
   * 10.000/10002/image_data/txt
   *
   */
  metadata_reference?: Maybe<Scalars['String']['output']>;
}

export interface PdbxSgProject {
  __typename?: 'PdbxSGProject';
  /**
   * The value identifies the full name of center.
   *
   * Allowable values:
   * Accelerated Technologies Center for Gene to 3D Structure, Assembly, Dynamics and Evolution of Cell-Cell and Cell-Matrix Adhesions, Atoms-to-Animals: The Immune Function Network, Bacterial targets at IGS-CNRS, France, Berkeley Structural Genomics Center, Center for Eukaryotic Structural Genomics, Center for High-Throughput Structural Biology, Center for Membrane Proteins of Infectious Diseases, Center for Structural Biology of Infectious Diseases, Center for Structural Genomics of Infectious Diseases, Center for Structures of Membrane Proteins, Center for the X-ray Structure Determination of Human Transporters, Chaperone-Enabled Studies of Epigenetic Regulation Enzymes, Enzyme Discovery for Natural Product Biosynthesis, GPCR Network, Integrated Center for Structure and Function Innovation, Israel Structural Proteomics Center, Joint Center for Structural Genomics, Marseilles Structural Genomics Program @ AFMB, Medical Structural Genomics of Pathogenic Protozoa, Membrane Protein Structural Biology Consortium, Membrane Protein Structures by Solution NMR, Midwest Center for Macromolecular Research, Midwest Center for Structural Genomics, Mitochondrial Protein Partnership, Montreal-Kingston Bacterial Structural Genomics Initiative, Mycobacterium Tuberculosis Structural Proteomics Project, New York Consortium on Membrane Protein Structure, New York SGX Research Center for Structural Genomics, New York Structural GenomiX Research Consortium, New York Structural Genomics Research Consortium, Northeast Structural Genomics Consortium, Nucleocytoplasmic Transport: a Target for Cellular Control, Ontario Centre for Structural Proteomics, Oxford Protein Production Facility, Paris-Sud Yeast Structural Genomics, Partnership for Nuclear Receptor Signaling Code Biology, Partnership for Stem Cell Biology, Partnership for T-Cell Biology, Program for the Characterization of Secreted Effector Proteins, Protein Structure Factory, RIKEN Structural Genomics/Proteomics Initiative, Scottish Structural Proteomics Facility, Seattle Structural Genomics Center for Infectious Disease, South Africa Structural Targets Annotation Database, Southeast Collaboratory for Structural Genomics, Structural Genomics Consortium, Structural Genomics Consortium for Research on Gene Expression, Structural Genomics of Pathogenic Protozoa Consortium, Structural Proteomics in Europe, Structural Proteomics in Europe 2, Structure 2 Function Project, Structure, Dynamics and Activation Mechanisms of Chemokine Receptors, Structure-Function Analysis of Polymorphic CDI Toxin-Immunity Protein Complexes, Structure-Function Studies of Tight Junction Membrane Proteins, Structures of Mtb Proteins Conferring Susceptibility to Known Mtb Inhibitors, TB Structural Genomics Consortium, Transcontinental EM Initiative for Membrane Protein Structure, Transmembrane Protein Center
   *
   */
  full_name_of_center?: Maybe<Scalars['String']['output']>;
  /**
   * A unique integer identifier for this center
   *
   * Allowable values:
   * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
   *
   */
  id: Scalars['Int']['output'];
  /**
   * The value identifies the full name of center.
   *
   * Allowable values:
   * ATCG3D, BIGS, BSGC, BSGI, CEBS, CELLMAT, CESG, CHSAM, CHTSB, CSBID, CSGID, CSMP, GPCR, IFN, ISFI, ISPC, JCSG, MCMR, MCSG, MPID, MPP, MPSBC, MPSbyNMR, MSGP, MSGPP, MTBI, NESG, NHRs, NPCXstals, NYCOMPS, NYSGRC, NYSGXRC, NatPro, OCSP, OPPF, PCSEP, PSF, RSGI, S2F, SASTAD, SECSG, SGC, SGCGES, SGPP, SPINE, SPINE-2, SSGCID, SSPF, STEMCELL, TBSGC, TCELL, TEMIMPS, TJMP, TMPC, TransportPDB, UC4CDI, XMTB, YSG
   *
   */
  initial_of_center?: Maybe<Scalars['String']['output']>;
  /**
   * The value identifies the Structural Genomics project.
   *
   * Allowable values:
   * Enzyme Function Initiative, NIAID, National Institute of Allergy and Infectious Diseases, NPPSFA, National Project on Protein Structural and Functional Analyses, PSI, Protein Structure Initiative, PSI:Biology
   *
   */
  project_name?: Maybe<Scalars['String']['output']>;
}

export interface PdbxSerialCrystallographyDataReduction {
  __typename?: 'PdbxSerialCrystallographyDataReduction';
  /**
   * For experiments in which samples are provided in a
   *  continuous stream, the total number of frames collected
   *  in which the crystal was hit.
   */
  crystal_hits?: Maybe<Scalars['Int']['output']>;
  /**
   * The data item is a pointer to _diffrn.id in the DIFFRN
   *  category.
   *
   * Examples:
   * 1
   *
   */
  diffrn_id: Scalars['String']['output'];
  /**
   * For experiments in which samples are provided in a
   *  continuous stream, the total number of frames collected
   *  in which a droplet was hit.
   */
  droplet_hits?: Maybe<Scalars['Int']['output']>;
  /**
   * For experiments in which samples are provided in a
   *  continuous stream, the total number of data frames collected
   *  in which the sample was hit.
   */
  frame_hits?: Maybe<Scalars['Int']['output']>;
  /**
   * For experiments in which samples are provided in a
   *  continuous stream, the total number of data frames collected
   *  that contained a "hit" but failed to index.
   */
  frames_failed_index?: Maybe<Scalars['Int']['output']>;
  /**
   * For experiments in which samples are provided in a
   *  continuous stream, the total number of data frames collected
   *  that were indexed.
   */
  frames_indexed?: Maybe<Scalars['Int']['output']>;
  /**
   * The total number of data frames collected for this
   *  data set.
   */
  frames_total?: Maybe<Scalars['Int']['output']>;
  /**
   * For experiments in which samples are provided in a
   *  continuous stream, the total number of lattices indexed.
   */
  lattices_indexed?: Maybe<Scalars['Int']['output']>;
  /**
   * For experiments in which samples are provided in a
   *             continuous stream, the total number of crystal lattices
   *             that were merged in the final dataset.  Can be
   *             less than frames_indexed depending on filtering during merging or
   * 	    can be more than frames_indexed if there are multiple lattices.
   * 	    per frame.
   */
  lattices_merged?: Maybe<Scalars['Int']['output']>;
  /** For FEL experiments, the number of pulse events in the dataset. */
  xfel_pulse_events?: Maybe<Scalars['Int']['output']>;
  /**
   * For FEL experiments, in which data collection was performed
   * 	       in batches, indicates which subset of the data collected
   *                were used in producing this dataset.
   */
  xfel_run_numbers?: Maybe<Scalars['String']['output']>;
}

export interface PdbxSerialCrystallographyMeasurement {
  __typename?: 'PdbxSerialCrystallographyMeasurement';
  /**
   * The total number of hours required to measure this data set.
   *
   * Examples:
   * null
   *
   */
  collection_time_total?: Maybe<Scalars['Float']['output']>;
  /**
   * The collimation or type of focusing optics applied to the radiation.
   *
   * Examples:
   * Kirkpatrick-Baez mirrors, Beryllium compound refractive lenses, Fresnel zone plates
   *
   */
  collimation?: Maybe<Scalars['String']['output']>;
  /**
   * The data item is a pointer to _diffrn.id in the DIFFRN
   *  category.
   *
   * Examples:
   * 1
   *
   */
  diffrn_id: Scalars['String']['output'];
  /**
   * The focal spot size of the beam
   *  impinging on the sample (micrometres squared).
   */
  focal_spot_size?: Maybe<Scalars['Float']['output']>;
  /** The photons per pulse measured in  (tera photons (10^(12)^)/pulse units). */
  photons_per_pulse?: Maybe<Scalars['Float']['output']>;
  /**
   * The average duration (femtoseconds)
   * 	       of the pulse energy measured at the sample.
   */
  pulse_duration?: Maybe<Scalars['Float']['output']>;
  /** The energy/pulse of the X-ray pulse impacting the sample measured in microjoules. */
  pulse_energy?: Maybe<Scalars['Float']['output']>;
  /** The photon energy of the X-ray pulse measured in KeV. */
  pulse_photon_energy?: Maybe<Scalars['Float']['output']>;
  /** The distance from source to the sample along the optical axis (metres). */
  source_distance?: Maybe<Scalars['Float']['output']>;
  /** The dimension of the source beam measured at the source (micrometres squared). */
  source_size?: Maybe<Scalars['Float']['output']>;
  /** For FEL experiments, the pulse repetition rate measured in cycles per seconds. */
  xfel_pulse_repetition_rate?: Maybe<Scalars['Float']['output']>;
}

export interface PdbxSerialCrystallographySampleDelivery {
  __typename?: 'PdbxSerialCrystallographySampleDelivery';
  /**
   * The description of the mechanism by which the specimen in placed in the path
   *  of the source.
   *
   * Examples:
   * fixed target, electrospin, MESH, CoMESH, gas dynamic virtual nozzle, LCP injector, addressable microarray
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The data item is a pointer to _diffrn.id in the DIFFRN
   *  category.
   *
   * Examples:
   * 1
   *
   */
  diffrn_id: Scalars['String']['output'];
  /**
   * The description of the mechanism by which the specimen in placed in the path
   *  of the source.
   *
   * Allowable values:
   * fixed target, injection
   *
   */
  method?: Maybe<Scalars['String']['output']>;
}

export interface PdbxSerialCrystallographySampleDeliveryFixedTarget {
  __typename?: 'PdbxSerialCrystallographySampleDeliveryFixedTarget';
  /** The number of crystals per dropplet or pore in fixed target */
  crystals_per_unit?: Maybe<Scalars['Int']['output']>;
  /** For a fixed target sample, a description of sample preparation */
  description?: Maybe<Scalars['String']['output']>;
  /** Any details pertinent to the fixed sample target */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * The data item is a pointer to _diffrn.id in the DIFFRN
   *  category.
   *
   * Examples:
   * 1
   *
   */
  diffrn_id: Scalars['String']['output'];
  /**
   * Device used to control movement of the fixed sample
   *
   * Examples:
   * DMC-4080
   *
   */
  motion_control?: Maybe<Scalars['String']['output']>;
  /**
   * Method to prevent dehydration of sample
   *
   * Examples:
   * seal, humidifed gas, flash freezing
   *
   */
  sample_dehydration_prevention?: Maybe<Scalars['String']['output']>;
  /**
   * For a fixed target sample, mechanism to hold sample in the beam
   *
   * Examples:
   * mesh, loop, grid
   *
   */
  sample_holding?: Maybe<Scalars['String']['output']>;
  /** The sample solution content and concentration */
  sample_solvent?: Maybe<Scalars['String']['output']>;
  /**
   * Size of pore in grid supporting sample. Diameter or length in micrometres,
   *  e.g. pore diameter
   */
  sample_unit_size?: Maybe<Scalars['Float']['output']>;
  /**
   * Type of base holding the support
   *
   * Examples:
   * goniometer
   *
   */
  support_base?: Maybe<Scalars['String']['output']>;
  /** Velocity of sample horizontally relative to a perpendicular beam in millimetres/second */
  velocity_horizontal?: Maybe<Scalars['Float']['output']>;
  /** Velocity of sample vertically relative to a perpendicular beam in millimetres/second */
  velocity_vertical?: Maybe<Scalars['Float']['output']>;
}

export interface PdbxSerialCrystallographySampleDeliveryInjection {
  __typename?: 'PdbxSerialCrystallographySampleDeliveryInjection';
  /**
   * For continuous sample flow experiments, the carrier buffer used
   *  to move the sample into the beam. Should include protein
   *  concentration.
   *
   * Examples:
   * LCP, grease, liquid
   *
   */
  carrier_solvent?: Maybe<Scalars['String']['output']>;
  /**
   * For continuous sample flow experiments, the concentration of
   *  crystals in the solution being injected.
   *
   *  The concentration is measured in million crystals/ml.
   */
  crystal_concentration?: Maybe<Scalars['Float']['output']>;
  /**
   * For continuous sample flow experiments, a description of the injector used
   *  to move the sample into the beam.
   *
   * Examples:
   * microextrusion injector
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The data item is a pointer to _diffrn.id in the DIFFRN
   *  category.
   *
   * Examples:
   * 1
   *
   */
  diffrn_id: Scalars['String']['output'];
  /** The size of filter in micrometres in filtering crystals */
  filter_size?: Maybe<Scalars['Float']['output']>;
  /**
   * For continuous sample flow experiments, the flow rate of
   *  solution being injected  measured in ul/min.
   */
  flow_rate?: Maybe<Scalars['Float']['output']>;
  /**
   * For continuous sample flow experiments, the diameter of the
   *  injector in micrometres.
   */
  injector_diameter?: Maybe<Scalars['Float']['output']>;
  /**
   * The type of nozzle to deliver and focus sample jet
   *
   * Examples:
   * gas, GDVN
   *
   */
  injector_nozzle?: Maybe<Scalars['String']['output']>;
  /**
   * For continuous sample flow experiments, the mean pressure
   *  in kilopascals at which the sample is injected into the beam.
   */
  injector_pressure?: Maybe<Scalars['Float']['output']>;
  /**
   * For continuous sample flow experiments, the temperature in
   *  Kelvins of the speciman injected. This may be different from
   *  the temperature of the sample.
   */
  injector_temperature?: Maybe<Scalars['Float']['output']>;
  /** Diameter in micrometres of jet stream of sample delivery */
  jet_diameter?: Maybe<Scalars['Float']['output']>;
  /**
   * Sample deliver driving force, e.g. Gas, Electronic Potential
   *
   * Examples:
   * syringe, gas, electronic potential
   *
   */
  power_by?: Maybe<Scalars['String']['output']>;
  /**
   * Details of crystal growth and preparation of the crystals
   *
   * Examples:
   * Crystals transfered to carrier solvent at room temperature
   *
   */
  preparation?: Maybe<Scalars['String']['output']>;
}

export interface PdbxSolnScatter {
  __typename?: 'PdbxSolnScatter';
  /**
   * The name of the buffer used for the sample in the solution scattering
   *  experiment.
   *
   * Examples:
   * acetic acid
   *
   */
  buffer_name?: Maybe<Scalars['String']['output']>;
  /**
   * The concentration range (mg/mL) of the complex in the
   *  sample used in the solution scattering experiment to
   *  determine the mean radius of structural elongation.
   *
   * Examples:
   * 0.7 - 14
   *
   */
  concentration_range?: Maybe<Scalars['String']['output']>;
  /**
   * A list of the software used in the data analysis
   *
   * Examples:
   * SCTPL5 GNOM
   *
   */
  data_analysis_software_list?: Maybe<Scalars['String']['output']>;
  /**
   * A list of the software used in the data reduction
   *
   * Examples:
   * OTOKO
   *
   */
  data_reduction_software_list?: Maybe<Scalars['String']['output']>;
  /**
   * The particular radiation detector. In general this will be a
   *   manufacturer, description, model number or some combination of
   *   these.
   */
  detector_specific?: Maybe<Scalars['String']['output']>;
  /** The general class of the radiation detector. */
  detector_type?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_soln_scatter.id must
   *  uniquely identify the sample in the category PDBX_SOLN_SCATTER
   */
  id: Scalars['String']['output'];
  /**
   * The maximum mean radius of structural elongation of the sample.
   *  In a given solute-solvent contrast, the radius of gyration
   *  R_G is a measure of structural elongation if the internal
   *  inhomogeneity of scattering densities has no effect. Guiner
   *  analysis at low Q give the R_G and the forward scattering at
   *  zero angle I(0).
   *
   *     lnl(Q) = lnl(0) - R_G^2Q^2/3
   *
   *  where
   *        Q = 4(pi)sin(theta/lamda)
   *        2theta = scattering angle
   *        lamda = wavelength
   *
   *  The above expression is valid in a QR_G range for extended
   *  rod-like particles. The relative I(0)/c values ( where
   *   c = sample concentration) for sample measurements in a
   *  constant buffer for a single sample data session, gives the
   *  relative masses of the protein(s) studied when referenced
   *  against a standard.
   *
   *  see:
   *      O.Glatter & O.Kratky, (1982). Editors of "Small angle
   *       X-ray Scattering, Academic Press, New York.
   *      O.Kratky. (1963). X-ray small angle scattering with
   *       substances of biological interest in diluted solutions.
   *       Prog. Biophys. Chem., 13, 105-173.
   *      G.D.Wignall & F.S.Bates, (1987). The small-angle approximation
   *       of X-ray and neutron scatter from rigid rods of non-uniform
   *       cross section and finite length. J.Appl. Crystallog., 18, 452-460.
   *
   *  If the structure is elongated, the mean radius of gyration
   *  of the cross-sectional structure R_XS  and the mean cross sectional
   *  intensity at zero angle [I(Q).Q]_Q->0 is obtained from
   *     ln[I(Q).Q] = ln[l(Q).(Q)]_Q->0 - ((R_XS)^2Q^2)/2
   */
  max_mean_cross_sectional_radii_gyration?: Maybe<Scalars['Float']['output']>;
  /**
   * The estimated standard deviation for the
   * minimum mean radius of structural elongation of the sample.
   * In a given solute-solvent contrast, the radius of gyration
   * R_G is a measure of structural elongation if the internal
   * inhomogeneity of scattering densities has no effect. Guiner
   * analysis at low Q give the R_G and the forward scattering at
   * zero angle I(0).
   *
   *     lnl(Q) = lnl(0) - R_G^2Q^2/3
   *
   * where
   *       Q = 4(pi)sin(theta/lamda)
   *       2theta = scattering angle
   *       lamda = wavelength
   *
   * The above expression is valid in a QR_G range for extended
   * rod-like particles. The relative I(0)/c values ( where
   *  c = sample concentration) for sample measurements in a
   * constant buffer for a single sample data session, gives the
   * relative masses of the protein(s) studied when referenced
   * against a standard.
   *
   * see:
   *     O.Glatter & O.Kratky, (1982). Editors of "Small angle
   *      X-ray Scattering, Academic Press, New York.
   *     O.Kratky. (1963). X-ray small angle scattering with
   *      substances of biological interest in diluted solutions.
   *      Prog. Biophys. Chem., 13, 105-173.
   *     G.D.Wignall & F.S.Bates, (1987). The small-angle approximation
   *      of X-ray and neutron scatter from rigid rods of non-uniform
   *      cross section and finite length. J.Appl. Crystallog., 18, 452-460.
   *
   * If the structure is elongated, the mean radius of gyration
   * of the cross-sectional structure R_XS  and the mean cross sectional
   * intensity at zero angle [I(Q).Q]_Q->0 is obtained from
   *    ln[I(Q).Q] = ln[l(Q).(Q)]_Q->0 - ((R_XS)^2Q^2)/2
   */
  max_mean_cross_sectional_radii_gyration_esd?: Maybe<Scalars['Float']['output']>;
  /**
   * The mean radius of structural elongation of the sample.
   *  In a given solute-solvent contrast, the radius of gyration
   *  R_G is a measure of structural elongation if the internal
   *  inhomogeneity of scattering densities has no effect. Guiner
   *  analysis at low Q gives the R_G and the forward scattering at
   *  zero angle I(0).
   *
   *      lnl(Q) = lnl(0) - R_G^2Q^2/3
   *
   *  where
   *        Q = 4(pi)sin(theta/lamda)
   *        2theta = scattering angle
   *        lamda = wavelength
   *
   *  The above expression is valid in a QR_G range for extended
   *  rod-like particles. The relative I(0)/c values ( where
   *   c = sample concentration) for sample measurements in a
   *  constant buffer for a single sample data session, gives the
   *  relative masses of the protein(s) studied when referenced
   *  against a standard.
   *
   *  see: O.Glatter & O.Kratky, (1982). Editors of "Small angle
   *       X-ray Scattering, Academic Press, New York.
   *       O.Kratky. (1963). X-ray small angle scattering with
   *       substances of biological interest in diluted solutions.
   *       Prog. Biophys. Chem., 13, 105-173.
   *
   *       G.D.Wignall & F.S.Bates, (1987). The small-angle approximation
   *       of X-ray and neutron scatter from rigid rods of non-uniform
   *       cross section and finite length. J.Appl. Crystallog., 18, 452-460.
   *
   *  If the structure is elongated, the mean radius of gyration
   *  of the cross-sectional structure R_XS  and the mean cross sectional
   *  intensity at zero angle [I(Q).Q]_Q->0 is obtained from
   *
   *     ln[I(Q).Q] = ln[l(Q).(Q)]_Q->0 - ((R_XS)^2Q^2)/2
   */
  mean_guiner_radius?: Maybe<Scalars['Float']['output']>;
  /**
   * The estimated standard deviation for the
   *  mean radius of structural elongation of the sample.
   *  In a given solute-solvent contrast, the radius of gyration
   *  R_G is a measure of structural elongation if the internal
   *  inhomogeneity of scattering densities has no effect. Guiner
   *  analysis at low Q give the R_G and the forward scattering at
   *  zero angle I(0).
   *
   *      lnl(Q) = lnl(0) - R_G^2Q^2/3
   *
   *  where
   *        Q = 4(pi)sin(theta/lamda)
   *        2theta = scattering angle
   *        lamda = wavelength
   *
   *  The above expression is valid in a QR_G range for extended
   *  rod-like particles. The relative I(0)/c values ( where
   *   c = sample concentration) for sample measurements in a
   *  constant buffer for a single sample data session, gives the
   *  relative masses of the protein(s) studied when referenced
   *  against a standard.
   *
   *  see:
   *      O.Glatter & O.Kratky, (1982). Editors of "Small angle
   *       X-ray Scattering, Academic Press, New York.
   *      O.Kratky. (1963). X-ray small angle scattering with
   *       substances of biological interest in diluted solutions.
   *       Prog. Biophys. Chem., 13, 105-173.
   *      G.D.Wignall & F.S.Bates, (1987). The small-angle approximation
   *       of X-ray and neutron scatter from rigid rods of non-uniform
   *       cross section and finite length. J.Appl. Crystallog., 18, 452-460.
   *
   *  If the structure is elongated, the mean radius of gyration
   *  of the cross-sectional structure R_XS  and the mean cross sectional
   *  intensity at zero angle [I(Q).Q]_Q->0 is obtained from
   *     ln[I(Q).Q] = ln[l(Q).(Q)]_Q->0 - ((R_XS)^2Q^2)/2
   */
  mean_guiner_radius_esd?: Maybe<Scalars['Float']['output']>;
  /**
   * The minimum mean radius of structural elongation of the sample.
   * In a given solute-solvent contrast, the radius of gyration
   * R_G is a measure of structural elongation if the internal
   * inhomogeneity of scattering densities has no effect. Guiner
   * analysis at low Q give the R_G and the forward scattering at
   * zero angle I(0).
   *
   *     lnl(Q) = lnl(0) - R_G^2Q^2/3
   *
   * where
   *       Q = 4(pi)sin(theta/lamda)
   *       2theta = scattering angle
   *       lamda = wavelength
   *
   * The above expression is valid in a QR_G range for extended
   * rod-like particles. The relative I(0)/c values ( where
   *  c = sample concentration) for sample measurements in a
   * constant buffer for a single sample data session, gives the
   * relative masses of the protein(s) studied when referenced
   * against a standard.
   *
   * see:
   *     O.Glatter & O.Kratky, (1982). Editors of "Small angle
   *      X-ray Scattering, Academic Press, New York.
   *     O.Kratky. (1963). X-ray small angle scattering with
   *      substances of biological interest in diluted solutions.
   *      Prog. Biophys. Chem., 13, 105-173.
   *     G.D.Wignall & F.S.Bates, (1987). The small-angle approximation
   *      of X-ray and neutron scatter from rigid rods of non-uniform
   *      cross section and finite length. J.Appl. Crystallog., 18, 452-460.
   *
   * If the structure is elongated, the mean radius of gyration
   * of the cross-sectional structure R_XS  and the mean cross sectional
   * intensity at zero angle [I(Q).Q]_Q->0 is obtained from
   *    ln[I(Q).Q] = ln[l(Q).(Q)]_Q->0 - ((R_XS)^2Q^2)/2
   */
  min_mean_cross_sectional_radii_gyration?: Maybe<Scalars['Float']['output']>;
  /**
   * The estimated standard deviation for the
   * minimum mean radius of structural elongation of the sample.
   * In a given solute-solvent contrast, the radius of gyration
   * R_G is a measure of structural elongation if the internal
   * inhomogeneity of scattering densities has no effect. Guiner
   * analysis at low Q give the R_G and the forward scattering at
   * zero angle I(0).
   *
   *    lnl(Q) = lnl(0) - R_G^2Q^2/3
   *
   * where
   *       Q = 4(pi)sin(theta/lamda)
   *       2theta = scattering angle
   *       lamda = wavelength
   *
   * The above expression is valid in a QR_G range for extended
   * rod-like particles. The relative I(0)/c values ( where
   *  c = sample concentration) for sample measurements in a
   * constant buffer for a single sample data session, gives the
   * relative masses of the protein(s) studied when referenced
   * against a standard.
   *
   * see:
   *     O.Glatter & O.Kratky, (1982). Editors of "Small angle
   *      X-ray Scattering, Academic Press, New York.
   *     O.Kratky. (1963). X-ray small angle scattering with
   *      substances of biological interest in diluted solutions.
   *      Prog. Biophys. Chem., 13, 105-173.
   *     G.D.Wignall & F.S.Bates, (1987). The small-angle approximation
   *      of X-ray and neutron scatter from rigid rods of non-uniform
   *      cross section and finite length. J.Appl. Crystallog., 18, 452-460.
   *
   * If the structure is elongated, the mean radius of gyration
   * of the cross-sectional structure R_XS  and the mean cross sectional
   * intensity at zero angle [I(Q).Q]_Q->0 is obtained from
   *
   *    ln[I(Q).Q] = ln[l(Q).(Q)]_Q->0 - ((R_XS)^2Q^2)/2
   */
  min_mean_cross_sectional_radii_gyration_esd?: Maybe<Scalars['Float']['output']>;
  /** The number of time frame solution scattering images used. */
  num_time_frames?: Maybe<Scalars['Int']['output']>;
  /**
   * The length (or range) of the protein sample under study.
   * If the solution structure is approximated as an elongated elliptical
   * cyclinder the length L is determined from,
   *
   *   L = sqrt [12( (R_G)^2  -  (R_XS)^2 ) ]
   *
   * The length should also be given by
   *
   *   L = pi I(0) / [ I(Q).Q]_Q->0
   */
  protein_length?: Maybe<Scalars['String']['output']>;
  /** The pH value of the buffered sample. */
  sample_pH?: Maybe<Scalars['Float']['output']>;
  /** The beamline name used for the experiment */
  source_beamline?: Maybe<Scalars['String']['output']>;
  /** The instrumentation used on the beamline */
  source_beamline_instrument?: Maybe<Scalars['String']['output']>;
  /**
   * The general class of the radiation source.
   *
   * Examples:
   * neutron source, synchrotron
   *
   */
  source_class?: Maybe<Scalars['String']['output']>;
  /** The make, model, name or beamline of the source of radiation. */
  source_type?: Maybe<Scalars['String']['output']>;
  /**
   * The temperature in kelvins at which the experiment
   *  was conducted
   */
  temperature?: Maybe<Scalars['Float']['output']>;
  /**
   * The type of solution scattering experiment carried out
   *
   * Allowable values:
   * modelling, neutron, x-ray
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface PdbxSolnScatterModel {
  __typename?: 'PdbxSolnScatterModel';
  /**
   * A description of the conformer selection criteria
   *  used.
   *
   * Examples:
   * The modelled scattering curves were assessed by calculation of the
   *    RG, RSX-1 and RXS-2 values in the same Q ranges
   *    used in the experimental Guinier fits. models were
   *    then ranked using a goodness-of-fit R-factor
   *    defined by analogy with protein crystallography
   *    and based on the experimental curves in the Q range
   *    extending to 1.4 nm-1.
   *
   */
  conformer_selection_criteria?: Maybe<Scalars['String']['output']>;
  /**
   * A description of any additional details concerning the experiment.
   *
   * Examples:
   * Homology models were built for
   *     the 17 SCR domains and energy minimisations were
   *     performed to improve the connectivity in the fh model.
   *     triantennary complex-type carbohydrate structures
   *     (MAN3GLCNAC6GAL3FUC3NEUNAC1) were added to each of the
   *     N-linked glycosylation sites. a library of linker peptide
   *     conformations was used in domain modelling constrained
   *     by the solution scattering fits. modelling with the
   *     scattering data was also carried out by rotational
   *     search methods. the x-ray and neutron scattering curve
   *     I(Q) was calculated assuming a uniform scattering density
   *     for the spheres using the debye equation as adapted to
   *     spheres. x-ray curves were calculated from the hydrated
   *     sphere models without corrections for wavelength spread or
   *     beam divergence, while these corrections were applied for
   *     the neutron curves but now using unhydrated models.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * A list of the entries used to fit the model
   *  to the scattering data
   *
   * Examples:
   * PDB CODE 1HFI, 1HCC, 1HFH, 1VCC
   *
   */
  entry_fitting_list?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_soln_scatter_model.id must
   *  uniquely identify the sample in the category PDBX_SOLN_SCATTER_MODEL
   */
  id: Scalars['String']['output'];
  /**
   * A description of the methods used in the modelling
   *
   * Examples:
   * Constrained scattering fitting of homology models
   *
   */
  method?: Maybe<Scalars['String']['output']>;
  /** The number of model conformers calculated. */
  num_conformers_calculated?: Maybe<Scalars['Int']['output']>;
  /** The number of model conformers submitted in the entry */
  num_conformers_submitted?: Maybe<Scalars['Int']['output']>;
  /** The index of the representative conformer among the submitted conformers for the entry */
  representative_conformer?: Maybe<Scalars['Int']['output']>;
  /** This data item is a pointer to  _pdbx_soln_scatter.id in the  PDBX_SOLN_SCATTER category. */
  scatter_id: Scalars['String']['output'];
  /**
   * A list of the software authors
   *
   * Examples:
   * MSI
   *
   */
  software_author_list?: Maybe<Scalars['String']['output']>;
  /**
   * A list of the software used in the modeeling
   *
   * Examples:
   * INSIGHT II, HOMOLOGY, DISCOVERY, BIOPOLYMER, DELPHI
   *
   */
  software_list?: Maybe<Scalars['String']['output']>;
}

export interface PdbxStructAssembly {
  __typename?: 'PdbxStructAssembly';
  /**
   * A description of special aspects of the macromolecular assembly.
   *
   *                In the PDB, 'representative helical assembly', 'complete point assembly',
   * 	       'complete icosahedral assembly', 'software_defined_assembly', 'author_defined_assembly',
   * 	       and 'author_and_software_defined_assembly' are considered "biologically relevant assemblies.
   *
   * Examples:
   * The icosahedral virus particle.
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_struct_assembly.id must uniquely identify a record in
   *  the PDBX_STRUCT_ASSEMBLY list.
   */
  id: Scalars['String']['output'];
  /**
   * Provides details of the method used to determine or
   *  compute the assembly.
   */
  method_details?: Maybe<Scalars['String']['output']>;
  /** The number of polymer molecules in the assembly. */
  oligomeric_count?: Maybe<Scalars['Int']['output']>;
  /**
   * Provides the details of the oligomeric state of the assembly.
   *
   * Examples:
   * monomer, octameric, tetradecameric, eicosameric, 21-meric, 60-meric, 180-meric, helical
   *
   */
  oligomeric_details?: Maybe<Scalars['String']['output']>;
  /**
   * Candidate macromolecular assembly.
   *
   *  Excludes the following cases classified in pdbx_struct_asembly.details:
   *
   *  'crystal asymmetric unit', 'crystal asymmetric unit, crystal frame', 'helical asymmetric unit',
   *  'helical asymmetric unit, std helical frame','icosahedral 23 hexamer', 'icosahedral asymmetric unit',
   *  'icosahedral asymmetric unit, std point frame','icosahedral pentamer', 'pentasymmetron capsid unit',
   *  'point asymmetric unit', 'point asymmetric unit, std point frame','trisymmetron capsid unit',
   *   and 'deposited_coordinates'.
   *
   * Allowable values:
   * N, Y
   *
   */
  rcsb_candidate_assembly?: Maybe<Scalars['String']['output']>;
  /**
   * A filtered description of the macromolecular assembly.
   *
   * Allowable values:
   * author_and_software_defined_assembly, author_defined_assembly, software_defined_assembly
   *
   */
  rcsb_details?: Maybe<Scalars['String']['output']>;
}

export interface PdbxStructAssemblyAuthEvidence {
  __typename?: 'PdbxStructAssemblyAuthEvidence';
  /** This item references an assembly in pdbx_struct_assembly */
  assembly_id: Scalars['String']['output'];
  /**
   * Provides any additional information regarding the evidence of this assembly
   *
   * Examples:
   * Homology to bacteriorhodopsin, Helical filament was observed by negative staining and Cryo-EM
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * Provides the experimental method to determine the state of this assembly
   *
   * Allowable values:
   * NMR Distance Restraints, NMR relaxation study, SAXS, assay for oligomerization, cross-linking, electron microscopy, equilibrium centrifugation, fluorescence resonance energy transfer, gel filtration, homology, immunoprecipitation, isothermal titration calorimetry, light scattering, mass spectrometry, microscopy, native gel electrophoresis, none, scanning transmission electron microscopy, surface plasmon resonance
   *
   */
  experimental_support?: Maybe<Scalars['String']['output']>;
  /** Identifies a unique record in pdbx_struct_assembly_auth_evidence. */
  id: Scalars['String']['output'];
}

export interface PdbxStructAssemblyGen {
  __typename?: 'PdbxStructAssemblyGen';
  /**
   * This data item is a pointer to _pdbx_struct_assembly.id in the
   *  PDBX_STRUCT_ASSEMBLY category.
   */
  assembly_id?: Maybe<Scalars['String']['output']>;
  /**
   * This data item is a pointer to _struct_asym.id in
   *  the STRUCT_ASYM category.
   *
   *  This item may be expressed as a comma separated list of identifiers.
   */
  asym_id_list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Identifies the operation of collection of operations
   *  from category PDBX_STRUCT_OPER_LIST.
   *
   *  Operation expressions may have the forms:
   *
   *   (1)        the single operation 1
   *   (1,2,5)    the operations 1, 2, 5
   *   (1-4)      the operations 1,2,3 and 4
   *   (1,2)(3,4) the combinations of operations
   *              3 and 4 followed by 1 and 2 (i.e.
   *              the cartesian product of parenthetical
   *              groups applied from right to left)
   *
   * Examples:
   * (1), (1,2,5), (1-60), (1-60)(61)
   *
   */
  oper_expression?: Maybe<Scalars['String']['output']>;
  /**
   * This data item is an ordinal index for the
   *  PDBX_STRUCT_ASSEMBLY category.
   */
  ordinal: Scalars['Int']['output'];
}

export interface PdbxStructAssemblyProp {
  __typename?: 'PdbxStructAssemblyProp';
  /** The identifier for the assembly used in category PDBX_STRUCT_ASSEMBLY. */
  assembly_id?: Maybe<Scalars['String']['output']>;
  /** The identifier for the assembly used in category PDBX_STRUCT_ASSEMBLY. */
  biol_id: Scalars['String']['output'];
  /**
   * The property type for the assembly.
   *
   * Allowable values:
   * ABSA (A^2), MORE, SSA (A^2)
   *
   */
  type: Scalars['String']['output'];
  /** The value of the assembly property. */
  value?: Maybe<Scalars['String']['output']>;
}

export interface PdbxStructOperList {
  __typename?: 'PdbxStructOperList';
  /**
   * This identifier code must uniquely identify a
   *  record in the PDBX_STRUCT_OPER_LIST list.
   */
  id: Scalars['String']['output'];
  /**
   * The [1][1] element of the 3x3 matrix component of the
   *  transformation operation.
   */
  matrix_1_1?: Maybe<Scalars['Float']['output']>;
  /**
   * The [1][2] element of the 3x3 matrix component of the
   *  transformation operation.
   */
  matrix_1_2?: Maybe<Scalars['Float']['output']>;
  /**
   * The [1][3] element of the 3x3 matrix component of the
   *  transformation operation.
   */
  matrix_1_3?: Maybe<Scalars['Float']['output']>;
  /**
   * The [2][1] element of the 3x3 matrix component of the
   *  transformation operation.
   */
  matrix_2_1?: Maybe<Scalars['Float']['output']>;
  /**
   * The [2][2] element of the 3x3 matrix component of the
   *  transformation operation.
   */
  matrix_2_2?: Maybe<Scalars['Float']['output']>;
  /**
   * The [2][3] element of the 3x3 matrix component of the
   *  transformation operation.
   */
  matrix_2_3?: Maybe<Scalars['Float']['output']>;
  /**
   * The [3][1] element of the 3x3 matrix component of the
   *  transformation operation.
   */
  matrix_3_1?: Maybe<Scalars['Float']['output']>;
  /**
   * The [3][2] element of the 3x3 matrix component of the
   *  transformation operation.
   */
  matrix_3_2?: Maybe<Scalars['Float']['output']>;
  /**
   * The [3][3] element of the 3x3 matrix component of the
   *  transformation operation.
   */
  matrix_3_3?: Maybe<Scalars['Float']['output']>;
  /**
   * A descriptive name for the transformation operation.
   *
   * Examples:
   * 1_555, two-fold rotation
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The symmetry operation corresponding to the transformation operation.
   *
   * Examples:
   * x,y,z, x+1/2,y,-z
   *
   */
  symmetry_operation?: Maybe<Scalars['String']['output']>;
  /**
   * A code to indicate the type of operator.
   *
   * Allowable values:
   * 2D crystal symmetry operation, 3D crystal symmetry operation, build 2D crystal asymmetric unit, build 3D crystal asymmetric unit, build helical asymmetric unit, build point asymmetric unit, crystal symmetry operation, helical symmetry operation, identity operation, point symmetry operation, transform to 2D crystal frame, transform to 3D crystal frame, transform to crystal frame, transform to helical frame, transform to point frame
   *
   */
  type?: Maybe<Scalars['String']['output']>;
  /**
   * The [1] element of the three-element vector component of the
   *  transformation operation.
   */
  vector_1?: Maybe<Scalars['Float']['output']>;
  /**
   * The [2] element of the three-element vector component of the
   *  transformation operation.
   */
  vector_2?: Maybe<Scalars['Float']['output']>;
  /**
   * The [3] element of the three-element vector component of the
   *  transformation operation.
   */
  vector_3?: Maybe<Scalars['Float']['output']>;
}

export interface PdbxStructSpecialSymmetry {
  __typename?: 'PdbxStructSpecialSymmetry';
  /**
   * Part of the identifier for the molecular component.
   *
   * This data item is a pointer to _atom_site.pdbx_PDB_model_num in the
   * ATOM_SITE category.
   */
  PDB_model_num?: Maybe<Scalars['Int']['output']>;
  /**
   * Part of the identifier for the molecular component.
   *
   *  This data item is a pointer to _atom_site.auth_seq_id in the
   *  ATOM_SITE category.
   */
  auth_seq_id?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _pdbx_struct_special_symmetry.id must uniquely identify
   *  each item in the PDBX_STRUCT_SPECIAL_SYMMETRY list.
   *
   *  This is an integer serial number.
   */
  id: Scalars['Int']['output'];
  /**
   * Part of the identifier for the molecular component.
   *
   *  This data item is a pointer to _atom_site.label_asym_id in the
   *  ATOM_SITE category.
   */
  label_asym_id?: Maybe<Scalars['String']['output']>;
  /**
   * Part of the identifier for the molecular component.
   *
   *  This data item is a pointer to _atom_site.label_comp_id in the
   *  ATOM_SITE category.
   */
  label_comp_id?: Maybe<Scalars['String']['output']>;
}

export interface PdbxVrptSummary {
  __typename?: 'PdbxVrptSummary';
  /**
   * The MolProbity conformer-match quality parameter for RNA structures.
   * Low values are worse. Specific to structures that contain RNA polymers.
   *
   * Examples:
   * null
   *
   */
  RNA_suiteness?: Maybe<Scalars['Float']['output']>;
  /**
   * The steps that were attempted by the validation pipeline software.
   * A step typically involves running a 3rd party validation tool, for instance "mogul"
   * Each step will be enumerated in _pdbx_vrpt_software category.
   */
  attempted_validation_steps?: Maybe<Scalars['String']['output']>;
  /**
   * A flag indicating if there are ligands in the model used for detailed Buster analysis.
   *
   * Allowable values:
   * N, Y
   *
   */
  ligands_for_buster_report?: Maybe<Scalars['String']['output']>;
  /**
   * The date, time and time-zone that the validation report  was created.
   * The string will be formatted like yyyy-mm-dd:hh:mm in GMT time.
   */
  report_creation_date?: Maybe<Scalars['Date']['output']>;
  /**
   * This is a comma separated list of the residue types whose bond lengths and bond angles have
   * not been checked against "standard geometry" using the MolProbity dangle program.
   * Standard geometry parameters are taken from Engh and Huber (2001) and Parkinson et al. (1996)
   */
  restypes_notchecked_for_bond_angle_geometry?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
}

export interface PdbxVrptSummaryDiffraction {
  __typename?: 'PdbxVrptSummaryDiffraction';
  /**
   * An indicator if isotropic B factors are partial or full values.
   *
   * Allowable values:
   * FULL, PARTIAL
   *
   */
  B_factor_type?: Maybe<Scalars['String']['output']>;
  /**
   * REFMAC scaling parameter as reported in log output line starting 'bulk solvent: scale'.
   * X-ray entry specific, obtained in the EDS step from REFMAC calculation.
   */
  Babinet_b?: Maybe<Scalars['Float']['output']>;
  /**
   * REFMAC scaling parameter as reported in log output line starting 'bulk solvent: scale'.
   * X-ray entry specific, obtained in the EDS step from REFMAC calculation.
   */
  Babinet_k?: Maybe<Scalars['Float']['output']>;
  /** The version of CCP4 suite used in the analysis. */
  CCP4_version?: Maybe<Scalars['String']['output']>;
  /**
   * The overall R-factor from a DCC recalculation of an electron density map.
   * Currently value is rounded to 2 decimal places.
   * X-ray entry specific, obtained from the DCC program.
   */
  DCC_R?: Maybe<Scalars['Float']['output']>;
  /** Rfree as calculated by DCC. */
  DCC_Rfree?: Maybe<Scalars['Float']['output']>;
  /**
   * The overall R factor from the EDS REFMAC calculation (no free set is used in this).
   * Currently value is rounded to 2 decimal places.
   * X-ray entry specific, obtained in the eds step from REFMAC calculation.
   */
  EDS_R?: Maybe<Scalars['Float']['output']>;
  /** Warning message when EDS calculated R vs reported R is higher than a threshold */
  EDS_R_warning?: Maybe<Scalars['String']['output']>;
  /**
   * The data high resolution diffraction limit, in Angstroms, found in the input structure factor file.
   * X-ray entry specific, obtained in the EDS step.
   */
  EDS_res_high?: Maybe<Scalars['Float']['output']>;
  /**
   * The data low resolution diffraction limit, in Angstroms, found in the input structure factor file.
   * X-ray entry specific, obtained in the EDS step.
   */
  EDS_res_low?: Maybe<Scalars['Float']['output']>;
  /**
   * Fo,Fc correlation: The difference between the observed structure factors (Fo) and the
   * calculated structure factors (Fc) measures the correlation between the model and the
   * experimental data.
   * X-ray entry specific, obtained in the eds step from REFMAC calculation.
   */
  Fo_Fc_correlation?: Maybe<Scalars['Float']['output']>;
  /**
   * Each reflection has an intensity (I) and an uncertainty in measurement
   * (sigma(I)), so I/sigma(I) is the signal-to-noise ratio. This
   * ratio decreases at higher resolution. <I/sigma(I)> is the mean of individual I/sigma(I)
   * values. Value for outer resolution shell is given in parentheses. In case
   * structure factor amplitudes are deposited, Xtriage estimates the intensities
   * first and then calculates this metric. When intensities are available in the
   * deposited file, these are converted to amplitudes and then back to intensity
   * estimate before calculating the metric.
   * X-ray entry specific, calculated by Phenix Xtriage program.
   */
  I_over_sigma?: Maybe<Scalars['String']['output']>;
  /**
   * Padilla and Yeates twinning parameter <|L**2|>.
   * Theoretical values is 0.333 in the untwinned case, and 0.2 in the perfectly twinned case.
   * X-ray entry specific, obtained from the Xtriage program.
   */
  Padilla_Yeates_L2_mean?: Maybe<Scalars['Float']['output']>;
  /**
   * Padilla and Yeates twinning parameter <|L|>.
   * Theoretical values is 0.5 in the untwinned case, and 0.375 in the perfectly twinned case.
   * X-ray entry specific, obtained from the Xtriage program.
   */
  Padilla_Yeates_L_mean?: Maybe<Scalars['Float']['output']>;
  /**
   * The overall Q-score of the fit of coordinates to the electron map.
   * The Q-score is defined in Pintilie, GH. et al., Nature Methods, 17, 328-334 (2020)
   */
  Q_score?: Maybe<Scalars['Float']['output']>;
  /**
   * Result of absolute likelihood based Wilson scaling,
   * The anisotropic B value of the data is determined using a likelihood based approach.
   * The resulting B tensor is reported, the 3 diagonal values are given first, followed
   * by the 3 off diagonal values.
   * A large spread in (especially the diagonal) values indicates anisotropy.
   * X-ray entry specific, calculated by Phenix Xtriage program.
   */
  Wilson_B_aniso?: Maybe<Scalars['String']['output']>;
  /**
   * An estimate of the overall B-value of the structure, calculated from the diffraction data.
   * Units Angstroms squared.
   * It serves as an indicator of the degree of order in the crystal and the value is usually
   * not hugely different from the average B-value calculated from the model.
   * X-ray entry specific, calculated by Phenix Xtriage program.
   */
  Wilson_B_estimate?: Maybe<Scalars['Float']['output']>;
  /**
   * The number of acentric reflections that Xtriage identifies as outliers on the basis
   * of Wilson statistics. Note that if pseudo translational symmetry is present,
   * a large number of 'outliers' will be present.
   * X-ray entry specific, calculated by Phenix Xtriage program.
   */
  acentric_outliers?: Maybe<Scalars['Int']['output']>;
  /**
   * REFMAC scaling parameter as reported in log output file.
   * X-ray entry specific, obtained in the EDS step from REFMAC calculation.
   */
  bulk_solvent_b?: Maybe<Scalars['Float']['output']>;
  /**
   * REFMAC reported scaling parameter.
   * X-ray entry specific, obtained in the EDS step from REFMAC calculation.
   */
  bulk_solvent_k?: Maybe<Scalars['Float']['output']>;
  /**
   * The number of centric reflections that Xtriage identifies as outliers.
   * X-ray entry specific, calculated by Phenix Xtriage program.
   */
  centric_outliers?: Maybe<Scalars['Int']['output']>;
  /**
   * The ratio (Bmax - Bmin) / Bmean where Bmax, Bmin and Bmean are computed from the B-values
   * associated with the principal axes of the anisotropic thermal ellipsoid.
   * This ratio is usually less than 0.5; for only 1% of PDB entries it is more than 1.0 (Read et al., 2011).
   * X-ray entry specific, obtained from the Xtriage program.
   */
  data_anisotropy?: Maybe<Scalars['Float']['output']>;
  /** The percent completeness of diffraction data. */
  data_completeness?: Maybe<Scalars['Float']['output']>;
  /** The version of density-fitness suite programs used in the analysis. */
  density_fitness_version?: Maybe<Scalars['String']['output']>;
  /** Experimental method for statistics */
  exp_method?: Maybe<Scalars['String']['output']>;
  /**
   * The number of Miller Indices reported by the Xtriage program. This should be the same as the
   * number of _refln in the input structure factor file.
   * X-ray entry specific, calculated by Phenix Xtriage program.
   */
  num_miller_indices?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of reflections in the free set as defined in the input structure factor file supplied to the validation pipeline.
   * X-ray entry specific, obtained from the DCC program.
   */
  number_reflns_R_free?: Maybe<Scalars['Int']['output']>;
  /** The percent of RSRZ outliers. */
  percent_RSRZ_outliers?: Maybe<Scalars['Float']['output']>;
  /** A percentage, Normally percent proportion of the total number. Between 0% and 100%. */
  percent_free_reflections?: Maybe<Scalars['Float']['output']>;
  /** The version of Servalcat program used in the analysis. */
  servalcat_version?: Maybe<Scalars['String']['output']>;
  /**
   * A sentence giving the result of Xtriage's analysis on translational NCS.
   * X-ray entry specific, obtained from the Xtriage program.
   *
   * Examples:
   * The largest off-origin peak in the Patterson function is 8.82% of the height of the origin peak. No significant pseudotranslation is detected.
   *
   */
  trans_NCS_details?: Maybe<Scalars['String']['output']>;
  /**
   * Estimated twinning fraction for operators as identified by Xtriage. A semicolon separated
   * list of operators with fractions is givens
   * X-ray entry specific, obtained from the Xtriage program.
   *
   * Examples:
   * h,h-k,h-l:0.477;-h,-h+k,-l:0.020;-h,-k,-h+l:0.017
   *
   */
  twin_fraction?: Maybe<Scalars['String']['output']>;
}

export interface PdbxVrptSummaryEm {
  __typename?: 'PdbxVrptSummaryEm';
  /**
   * The overall Q-score of the fit of coordinates to the electron map.
   * The Q-score is defined in Pintilie, GH. et al., Nature Methods, 17, 328-334 (2020)
   */
  Q_score?: Maybe<Scalars['Float']['output']>;
  /** The proportion of all non hydrogen atoms within density. */
  atom_inclusion_all_atoms?: Maybe<Scalars['Float']['output']>;
  /** The proportion of backbone atoms within density. */
  atom_inclusion_backbone?: Maybe<Scalars['Float']['output']>;
  /** The resolution from the intersection of the author provided fsc and the indicator curve halfbit. */
  author_provided_fsc_resolution_by_cutoff_halfbit?: Maybe<Scalars['Float']['output']>;
  /** The resolution from the intersection of the author provided fsc and the indicator curve onebit. */
  author_provided_fsc_resolution_by_cutoff_onebit?: Maybe<Scalars['Float']['output']>;
  /** The resolution from the intersection of the author provided fsc and the indicator curve 0.5. */
  author_provided_fsc_resolution_by_cutoff_pt_5?: Maybe<Scalars['Float']['output']>;
  /** The resolution from the intersection of the author provided fsc and the indicator curve 0.143. */
  author_provided_fsc_resolution_by_cutoff_pt_143?: Maybe<Scalars['Float']['output']>;
  /** The resolution from the intersection of the author provided fsc and the indicator curve 0.333. */
  author_provided_fsc_resolution_by_cutoff_pt_333?: Maybe<Scalars['Float']['output']>;
  /** The resolution from the intersection of the author provided fsc and the indicator curve threesigma. */
  author_provided_fsc_resolution_by_cutoff_threesigma?: Maybe<Scalars['Float']['output']>;
  /** The resolution from the intersection of the fsc curve generated by from the provided halfmaps and the indicator curve halfbit. */
  calculated_fsc_resolution_by_cutoff_halfbit?: Maybe<Scalars['Float']['output']>;
  /** The resolution from the intersection of the fsc curve generated by from the provided halfmaps and the indicator curve onebit. */
  calculated_fsc_resolution_by_cutoff_onebit?: Maybe<Scalars['Float']['output']>;
  /** The resolution from the intersection of the fsc curve generated by from the provided halfmaps and the indicator curve 0.5. */
  calculated_fsc_resolution_by_cutoff_pt_5?: Maybe<Scalars['Float']['output']>;
  /** The resolution from the intersection of the fsc curve generated by from the provided halfmaps and the indicator curve 0.143. */
  calculated_fsc_resolution_by_cutoff_pt_143?: Maybe<Scalars['Float']['output']>;
  /** The resolution from the intersection of the fsc curve generated by from the provided halfmaps and the indicator curve 0.333. */
  calculated_fsc_resolution_by_cutoff_pt_333?: Maybe<Scalars['Float']['output']>;
  /** The resolution from the intersection of the fsc curve generated by from the provided halfmaps and the indicator curve threesigma. */
  calculated_fsc_resolution_by_cutoff_threesigma?: Maybe<Scalars['Float']['output']>;
  /** The recommended contour level for the primary map of this deposition. */
  contour_level_primary_map?: Maybe<Scalars['Float']['output']>;
  /** Experimental method for statistics */
  exp_method?: Maybe<Scalars['String']['output']>;
}

export interface PdbxVrptSummaryEntityFitToMap {
  __typename?: 'PdbxVrptSummaryEntityFitToMap';
  /** The unique model number from _atom_site.pdbx_PDB_model_num. */
  PDB_model_num?: Maybe<Scalars['Int']['output']>;
  /** The calculated average Q-score. */
  Q_score?: Maybe<Scalars['Float']['output']>;
  /** The average of the residue inclusions for all residues in this instance */
  average_residue_inclusion?: Maybe<Scalars['Float']['output']>;
}

export interface PdbxVrptSummaryEntityGeometry {
  __typename?: 'PdbxVrptSummaryEntityGeometry';
  /** The unique model number from _atom_site.pdbx_PDB_model_num. */
  PDB_model_num?: Maybe<Scalars['Int']['output']>;
  /**
   * The overall root mean square of the Z-score for deviations of bond angles in comparison to
   * "standard geometry" made using the MolProbity dangle program.
   * Standard geometry parameters are taken from Engh and Huber (2001) and Parkinson et al. (1996).
   */
  angles_RMSZ?: Maybe<Scalars['Float']['output']>;
  /** The average of the residue inclusions for all residues in this instance */
  average_residue_inclusion?: Maybe<Scalars['Float']['output']>;
  /**
   * The overall root mean square of the Z-score for deviations of bond lengths in comparison to
   * "standard geometry" made using the MolProbity dangle program.
   * Standard geometry parameters are taken from Engh and Huber (2001) and Parkinson et al. (1996).
   */
  bonds_RMSZ?: Maybe<Scalars['Float']['output']>;
  /**
   * The number of bond angles compared to "standard geometry" made using the MolProbity dangle program.
   * Standard geometry parameters are taken from Engh and Huber (2001) and Parkinson et al. (1996).
   */
  num_angles_RMSZ?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of bond lengths compared to "standard geometry" made using the MolProbity dangle program.
   * Standard geometry parameters are taken from Engh and Huber (2001) and Parkinson et al. (1996).
   */
  num_bonds_RMSZ?: Maybe<Scalars['Int']['output']>;
}

export interface PdbxVrptSummaryGeometry {
  __typename?: 'PdbxVrptSummaryGeometry';
  /**
   * The overall root mean square of the Z-score for deviations of bond angles in comparison to
   * "standard geometry" made using the MolProbity dangle program.
   * Standard geometry parameters are taken from Engh and Huber (2001) and Parkinson et al. (1996).
   * This value is for all chains in the structure.
   */
  angles_RMSZ?: Maybe<Scalars['Float']['output']>;
  /**
   * The overall root mean square of the Z-score for deviations of bond lengths in comparison to
   * "standard geometry" made using the MolProbity dangle program.
   * Standard geometry parameters are taken from Engh and Huber (2001) and Parkinson et al. (1996).
   * This value is for all chains in the structure.
   */
  bonds_RMSZ?: Maybe<Scalars['Float']['output']>;
  /**
   * This score is derived from the number of pairs of atoms in the PDB_model_num that are unusually close to each other.
   * It is calculated by the MolProbity pdbx_vrpt_software and expressed as the number or such clashes per thousand atoms.
   * For structures determined by NMR the clashscore value here will only consider label_atom_id pairs in the
   * well-defined (core) residues from ensemble analysis.
   */
  clashscore?: Maybe<Scalars['Float']['output']>;
  /** Only given for structures determined by NMR. The MolProbity pdbx_vrpt_instance_clashes score for all label_atom_id pairs. */
  clashscore_full_length?: Maybe<Scalars['Float']['output']>;
  /**
   * This is the number of hydrogen atoms added and optimized by the MolProbity reduce pdbx_vrpt_software as part of the
   * all-atom clashscore.
   */
  num_H_reduce?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of bond angles compared to "standard geometry" made using the MolProbity dangle program.
   * Standard geometry parameters are taken from Engh and Huber (2001) and Parkinson et al. (1996).
   * This value is for all chains in the structure.
   */
  num_angles_RMSZ?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of bond lengths compared to "standard geometry" made using the MolProbity dangle program.
   * Standard geometry parameters are taken from Engh and Huber (2001) and Parkinson et al. (1996).
   * This value is for all chains in the structure.
   */
  num_bonds_RMSZ?: Maybe<Scalars['Int']['output']>;
  /** The percentage of residues with Ramachandran outliers. */
  percent_ramachandran_outliers?: Maybe<Scalars['Float']['output']>;
  /**
   * Only given for structures determined by NMR. The MolProbity Ramachandran outlier score
   * for all atoms in the structure rather than just the well-defined (core) residues.
   */
  percent_ramachandran_outliers_full_length?: Maybe<Scalars['Float']['output']>;
  /**
   * The MolProbity sidechain outlier score (a percentage).
   * Protein sidechains mostly adopt certain (combinations of) preferred torsion angle values
   * (called rotamers or rotameric conformers), much like their backbone torsion angles
   * (as assessed in the Ramachandran analysis). MolProbity considers the sidechain conformation
   * of a residue to be an outlier if its set of torsion angles is not similar to any preferred
   * combination. The sidechain outlier score is calculated as the percentage of residues
   * with an unusual sidechain conformation with respect to the total number of residues for
   * which the assessment is available.
   * Example: percent-rota-outliers="2.44".
   * Specific to structure that contain protein chains and have sidechains modelled.
   * For NMR structures only the  well-defined (core) residues from ensemble analysis will be considered.
   * The percentage of residues with rotamer outliers.
   */
  percent_rotamer_outliers?: Maybe<Scalars['Float']['output']>;
  /**
   * Only given for structures determined by NMR. The MolProbity sidechain outlier score
   * for all atoms in the structure rather than just the well-defined (core) residues.
   */
  percent_rotamer_outliers_full_length?: Maybe<Scalars['Float']['output']>;
}

export interface PdbxVrptSummaryNmr {
  __typename?: 'PdbxVrptSummaryNmr';
  /**
   * Overall completeness of the chemical shift assignments for the well-defined
   * regions of the structure.
   */
  chemical_shift_completeness?: Maybe<Scalars['Float']['output']>;
  /**
   * Overall completeness of the chemical shift assignments for the full
   * macromolecule or complex as suggested by the molecular description of an entry
   * (whether some portion of it is modelled or not).
   */
  chemical_shift_completeness_full_length?: Maybe<Scalars['Float']['output']>;
  /**
   * Diagnostic message from the wrapper of Cyrange software which identifies the
   * well-defined cores (domains) of NMR protein structures.
   */
  cyrange_error?: Maybe<Scalars['String']['output']>;
  /** Total number of well-defined cores (domains) identified by Cyrange */
  cyrange_number_of_domains?: Maybe<Scalars['Int']['output']>;
  /** Experimental method for statistics */
  exp_method?: Maybe<Scalars['String']['output']>;
  /**
   * For each Cyrange well-defined core ("cyrange_domain") the id of the PDB_model_num which is most
   * similar to other models as measured by pairwise RMSDs over the domain.
   * For the whole entry ("Entry"), the medoid PDB_model_num of the largest core is taken as an overall
   * representative of the structure.
   */
  medoid_model?: Maybe<Scalars['Int']['output']>;
  /**
   * A flag indicating if all models in the NMR ensemble contain the exact
   * same atoms ("True") or if the models differ in this respect ("False").
   */
  nmr_models_consistency_flag?: Maybe<Scalars['String']['output']>;
  /** Diagnostic message from the wrapper of NMRClust software which clusters NMR models. */
  nmrclust_error?: Maybe<Scalars['String']['output']>;
  /** Total number of clusters in the NMR ensemble identified by NMRClust. */
  nmrclust_number_of_clusters?: Maybe<Scalars['Int']['output']>;
  /**
   * Number of models analysed by NMRClust - should in almost all cases be the
   * same as the number of models in the NMR ensemble.
   */
  nmrclust_number_of_models?: Maybe<Scalars['Int']['output']>;
  /** Number of models that do not belong to any cluster as deemed by NMRClust. */
  nmrclust_number_of_outliers?: Maybe<Scalars['Int']['output']>;
  /** Overall representative PDB_model_num of the NMR ensemble as identified by NMRClust. */
  nmrclust_representative_model?: Maybe<Scalars['Int']['output']>;
}

/** Query root */
export interface Query {
  __typename?: 'Query';
  /** Get a list of assemblies given the list of ASSEMBLY IDs. Here an ASSEMBLY ID is a compound identifier that includes entry_id and assembly_id separated by '-', e.g. 1XXX-1. */
  assemblies?: Maybe<Array<Maybe<CoreAssembly>>>;
  /** Get an assembly given the ENTRY ID and ASSEMBLY ID. Here ASSEMBLY ID is '1', '2', '3', etc. or 'deposited' for deposited coordinates. */
  assembly?: Maybe<CoreAssembly>;
  /** Get a list of branched entities given a list of ENTITY IDs. Here ENTITY ID is a compound identifier that includes entry_id and entity_id separated by '_', e.g. 1XXX_1. Note that the ENTRY ID part must be upper case. */
  branched_entities?: Maybe<Array<Maybe<CoreBranchedEntity>>>;
  /** Get a branched entity, given the ENTRY ID and ENTITY ID. Here ENTITY ID is a '1', '2', '3', etc. */
  branched_entity?: Maybe<CoreBranchedEntity>;
  /** Get a branched entity instance (chain), given the ENTRY ID and ENTITY INSTANCE ID. Here ENTITY INSTANCE ID identifies structural element in the asymmetric unit, e.g. 'A', 'B', etc. */
  branched_entity_instance?: Maybe<CoreBranchedEntityInstance>;
  /** Get a list of branched entity instances (chains), given the list of ENTITY INSTANCE IDs. Here ENTITY INSTANCE ID identifies structural element in the asymmetric unit, e.g. 'A', 'B', etc. */
  branched_entity_instances?: Maybe<Array<Maybe<CoreBranchedEntityInstance>>>;
  /** Get a chemical component given the CHEMICAL COMPONENT ID, e.g. 'CFF', 'HEM', 'FE'.For nucleic acid polymer entities, use the one-letter code for the base. */
  chem_comp?: Maybe<CoreChemComp>;
  /** Get a list of chemical components given the list of CHEMICAL COMPONENT ID, e.g. 'CFF', 'HEM', 'FE'.For nucleic acid polymer entities, use the one-letter code for the base. */
  chem_comps?: Maybe<Array<Maybe<CoreChemComp>>>;
  /** Get a list of entries given a list of IDs. */
  entries?: Maybe<Array<Maybe<CoreEntry>>>;
  /** Get entry given the id. */
  entry?: Maybe<CoreEntry>;
  /** Given a group ID get a group object formed by aggregating individual structures that share a degree of similarity */
  entry_group?: Maybe<GroupEntry>;
  /** Given a list of group IDs get a list of group objects formed by aggregating structures that share a degree of similarity */
  entry_groups?: Maybe<Array<Maybe<GroupEntry>>>;
  /** Given a group provenance ID get an object that describes aggregation method used to create groups */
  group_provenance?: Maybe<GroupProvenance>;
  /** Get a pairwise polymeric interface given the ENTRY ID, ASSEMBLY ID and INTERFACE ID. */
  interface?: Maybe<CoreInterface>;
  /** Get a list of pairwise polymeric interfaces given a list of INTERFACE IDs. Here INTERFACE ID is a compound identifier that includes entry_id, assembly_id and interface_id e.g. 1XXX-1.1. Note that the ENTRY ID part must be upper case. */
  interfaces?: Maybe<Array<Maybe<CoreInterface>>>;
  /** Get a list of non-polymer entities given a list of ENTITY IDs. Here ENTITY ID is a compound identifier that includes entry_id and entity_id separated by '_', e.g. 1XXX_1. Note that the ENTRY ID part must be upper case. */
  nonpolymer_entities?: Maybe<Array<Maybe<CoreNonpolymerEntity>>>;
  /** Get a non-polymer entity, given the ENTRY ID and ENTITY ID. Here ENTITY ID is a '1', '2', '3', etc. */
  nonpolymer_entity?: Maybe<CoreNonpolymerEntity>;
  /** Given a group ID get a group object formed by aggregating non-polymer entities that share a degree of similarity */
  nonpolymer_entity_group?: Maybe<GroupNonPolymerEntity>;
  /** Given a list of group IDs get a list of group objects formed by aggregating non-polymer entities that share a degree of similarity */
  nonpolymer_entity_groups?: Maybe<Array<Maybe<GroupNonPolymerEntity>>>;
  /** Get a non-polymer entity instance (chain), given the ENTRY ID and ENTITY INSTANCE ID. Here ENTITY INSTANCE ID identifies structural element in the asymmetric unit, e.g. 'A', 'B', etc. */
  nonpolymer_entity_instance?: Maybe<CoreNonpolymerEntityInstance>;
  /** Get a list of non-polymer entity instances (chains), given the list of ENTITY INSTANCE IDs. Here ENTITY INSTANCE ID identifies structural element in the asymmetric unit, e.g. 'A', 'B', etc. */
  nonpolymer_entity_instances?: Maybe<Array<Maybe<CoreNonpolymerEntityInstance>>>;
  /** Get a list of polymer entities given a list of ENTITY IDs. Here ENTITY ID is a compound identifier that includes entry_id and entity_id separated by '_', e.g. 1XXX_1. Note that the ENTRY ID part must be upper case. */
  polymer_entities?: Maybe<Array<Maybe<CorePolymerEntity>>>;
  /** Get a polymer entity, given the ENTRY ID and ENTITY ID. Here ENTITY ID is a '1', '2', '3', etc. */
  polymer_entity?: Maybe<CorePolymerEntity>;
  /** Given a group ID get a group object formed by aggregating polymer entities that share a degree of similarity */
  polymer_entity_group?: Maybe<GroupPolymerEntity>;
  /** Given a list of group IDs get a list of group objects formed by aggregating polymer entities that share a degree of similarity */
  polymer_entity_groups?: Maybe<Array<Maybe<GroupPolymerEntity>>>;
  /** Get a polymer entity instance (chain), given the ENTRY ID and ENTITY INSTANCE ID. Here ENTITY INSTANCE ID identifies structural element in the asymmetric unit, e.g. 'A', 'B', etc. */
  polymer_entity_instance?: Maybe<CorePolymerEntityInstance>;
  /** Get a list of polymer entity instances (chains), given the list of ENTITY INSTANCE IDs. Here ENTITY INSTANCE ID identifies structural element in the asymmetric unit, e.g. 'A', 'B', etc. */
  polymer_entity_instances?: Maybe<Array<Maybe<CorePolymerEntityInstance>>>;
  /** Get literature information from PubMed database given the PubMed identifier. */
  pubmed?: Maybe<CorePubmed>;
  /** Get UniProt KB entry given the UniProt primary accession. */
  uniprot?: Maybe<CoreUniprot>;
}


/** Query root */
export interface QueryAssembliesArgs {
  assembly_ids: Array<InputMaybe<Scalars['String']['input']>>;
}


/** Query root */
export interface QueryAssemblyArgs {
  assembly_id: Scalars['String']['input'];
  entry_id: Scalars['String']['input'];
}


/** Query root */
export interface QueryBranched_EntitiesArgs {
  entity_ids: Array<Scalars['String']['input']>;
}


/** Query root */
export interface QueryBranched_EntityArgs {
  entity_id: Scalars['String']['input'];
  entry_id: Scalars['String']['input'];
}


/** Query root */
export interface QueryBranched_Entity_InstanceArgs {
  asym_id: Scalars['String']['input'];
  entry_id: Scalars['String']['input'];
}


/** Query root */
export interface QueryBranched_Entity_InstancesArgs {
  instance_ids: Array<InputMaybe<Scalars['String']['input']>>;
}


/** Query root */
export interface QueryChem_CompArgs {
  comp_id: Scalars['String']['input'];
}


/** Query root */
export interface QueryChem_CompsArgs {
  comp_ids: Array<InputMaybe<Scalars['String']['input']>>;
}


/** Query root */
export interface QueryEntriesArgs {
  entry_ids: Array<Scalars['String']['input']>;
}


/** Query root */
export interface QueryEntryArgs {
  entry_id: Scalars['String']['input'];
}


/** Query root */
export interface QueryEntry_GroupArgs {
  group_id: Scalars['String']['input'];
}


/** Query root */
export interface QueryEntry_GroupsArgs {
  group_ids: Array<InputMaybe<Scalars['String']['input']>>;
}


/** Query root */
export interface QueryGroup_ProvenanceArgs {
  group_provenance_id: Scalars['String']['input'];
}


/** Query root */
export interface QueryInterfaceArgs {
  assembly_id: Scalars['String']['input'];
  entry_id: Scalars['String']['input'];
  interface_id: Scalars['String']['input'];
}


/** Query root */
export interface QueryInterfacesArgs {
  interface_ids: Array<Scalars['String']['input']>;
}


/** Query root */
export interface QueryNonpolymer_EntitiesArgs {
  entity_ids: Array<Scalars['String']['input']>;
}


/** Query root */
export interface QueryNonpolymer_EntityArgs {
  entity_id: Scalars['String']['input'];
  entry_id: Scalars['String']['input'];
}


/** Query root */
export interface QueryNonpolymer_Entity_GroupArgs {
  group_id: Scalars['String']['input'];
}


/** Query root */
export interface QueryNonpolymer_Entity_GroupsArgs {
  group_ids: Array<InputMaybe<Scalars['String']['input']>>;
}


/** Query root */
export interface QueryNonpolymer_Entity_InstanceArgs {
  asym_id: Scalars['String']['input'];
  entry_id: Scalars['String']['input'];
}


/** Query root */
export interface QueryNonpolymer_Entity_InstancesArgs {
  instance_ids: Array<InputMaybe<Scalars['String']['input']>>;
}


/** Query root */
export interface QueryPolymer_EntitiesArgs {
  entity_ids: Array<Scalars['String']['input']>;
}


/** Query root */
export interface QueryPolymer_EntityArgs {
  entity_id: Scalars['String']['input'];
  entry_id: Scalars['String']['input'];
}


/** Query root */
export interface QueryPolymer_Entity_GroupArgs {
  group_id: Scalars['String']['input'];
}


/** Query root */
export interface QueryPolymer_Entity_GroupsArgs {
  group_ids: Array<InputMaybe<Scalars['String']['input']>>;
}


/** Query root */
export interface QueryPolymer_Entity_InstanceArgs {
  asym_id: Scalars['String']['input'];
  entry_id: Scalars['String']['input'];
}


/** Query root */
export interface QueryPolymer_Entity_InstancesArgs {
  instance_ids: Array<InputMaybe<Scalars['String']['input']>>;
}


/** Query root */
export interface QueryPubmedArgs {
  pubmed_id: Scalars['Int']['input'];
}


/** Query root */
export interface QueryUniprotArgs {
  uniprot_id: Scalars['String']['input'];
}

export interface RcsbAccessionInfo {
  __typename?: 'RcsbAccessionInfo';
  /**
   * The entry deposition date.
   *
   * Examples:
   * 2020-07-11, 2013-10-01
   *
   */
  deposit_date?: Maybe<Scalars['Date']['output']>;
  /**
   * A code indicating the current availibility of experimental data in the repository.
   *
   * Allowable values:
   * N, Y
   *
   */
  has_released_experimental_data?: Maybe<Scalars['String']['output']>;
  /**
   * The entry initial release date.
   *
   * Examples:
   * 2020-01-10, 2018-01-23
   *
   */
  initial_release_date?: Maybe<Scalars['Date']['output']>;
  /** The latest entry major revision number. */
  major_revision?: Maybe<Scalars['Int']['output']>;
  /** The latest entry minor revision number. */
  minor_revision?: Maybe<Scalars['Int']['output']>;
  /**
   * The latest entry revision date.
   *
   * Examples:
   * 2020-02-11, 2018-10-23
   *
   */
  revision_date?: Maybe<Scalars['Date']['output']>;
  /**
   * The release status for the entry.
   *
   * Allowable values:
   * AUCO, AUTH, HOLD, HPUB, POLC, PROC, REFI, REL, REPL, WAIT, WDRN
   *
   */
  status_code?: Maybe<Scalars['String']['output']>;
}

export interface RcsbAssemblyAnnotation {
  __typename?: 'RcsbAssemblyAnnotation';
  additional_properties?: Maybe<Array<Maybe<RcsbAssemblyAnnotationAdditionalProperties>>>;
  /** An identifier for the annotation. */
  annotation_id?: Maybe<Scalars['String']['output']>;
  /** Identifies the version of the annotation assignment. */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /** A description for the annotation. */
  description?: Maybe<Scalars['String']['output']>;
  /** A name for the annotation. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Code identifying the individual, organization or program that
   *  assigned the annotation.
   *
   * Examples:
   * MCSA
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the annotation.
   *
   * Allowable values:
   * MCSA
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbAssemblyAnnotationAdditionalProperties {
  __typename?: 'RcsbAssemblyAnnotationAdditionalProperties';
  /**
   * The additional property name.
   *
   * Allowable values:
   * MCSA_MOTIF_COMPATIBILITY
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /** The value(s) of the additional property. */
  values?: Maybe<Array<Maybe<Scalars['ObjectScalar']['output']>>>;
}

export interface RcsbAssemblyContainerIdentifiers {
  __typename?: 'RcsbAssemblyContainerIdentifiers';
  /**
   * Assembly identifier for the container.
   *
   * Examples:
   * 1, 5
   *
   */
  assembly_id: Scalars['String']['output'];
  /** Entry identifier for the container. */
  entry_id: Scalars['String']['output'];
  /** List of binary interface Ids within the assembly (it points to interface id collection). */
  interface_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * A unique identifier for each object in this assembly container formed by
   *  a dash separated concatenation of entry and assembly identifiers.
   *
   * Examples:
   * 1KIP-1
   *
   */
  rcsb_id?: Maybe<Scalars['String']['output']>;
}

export interface RcsbAssemblyFeature {
  __typename?: 'RcsbAssemblyFeature';
  additional_properties?: Maybe<Array<Maybe<RcsbAssemblyFeatureAdditionalProperties>>>;
  /** Identifies the version of the feature assignment. */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /** A description for the feature. */
  description?: Maybe<Scalars['String']['output']>;
  /** An identifier for the feature. */
  feature_id?: Maybe<Scalars['String']['output']>;
  /** This container groups together chain-level identifiers of the assigned features. */
  feature_positions?: Maybe<Array<Maybe<RcsbAssemblyFeatureFeaturePositions>>>;
  /** A name for the feature. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Code identifying the individual, organization or program that
   *  assigned the feature.
   *
   * Examples:
   * MCSA
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the feature.
   *
   * Allowable values:
   * MCSA
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbAssemblyFeatureAdditionalProperties {
  __typename?: 'RcsbAssemblyFeatureAdditionalProperties';
  /**
   * The additional property name.
   *
   * Allowable values:
   * MCSA_MOTIF_COMPATIBILITY
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /** The value(s) of the additional property. */
  values?: Maybe<Array<Maybe<Scalars['ObjectScalar']['output']>>>;
}

export interface RcsbAssemblyFeatureFeaturePositions {
  __typename?: 'RcsbAssemblyFeatureFeaturePositions';
  /**
   * An identifier of polymer chain (label_asym_id) corresponding to the feature assignment.
   *
   * Examples:
   * A, B
   *
   */
  asym_id: Scalars['String']['output'];
  /** An identifier for the monomer at which this segment of the feature begins. */
  beg_seq_id: Scalars['Int']['output'];
  /** An identifier for the monomer at which this segment of the feature ends. */
  end_seq_id?: Maybe<Scalars['Int']['output']>;
  /** Identifies the list of operations from the category pdbx_struct_oper_list. One item in array per operator applied. The order follows how operators are applied. */
  struct_oper_list: Array<Maybe<Scalars['String']['output']>>;
  /** The value(s) of the feature over the monomer segment. */
  values?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
}

export interface RcsbAssemblyInfo {
  __typename?: 'RcsbAssemblyInfo';
  /** Entity identifier for the container. */
  assembly_id?: Maybe<Scalars['String']['output']>;
  /** The assembly non-hydrogen atomic coordinate count. */
  atom_count?: Maybe<Scalars['Int']['output']>;
  /** The assembly non-hydrogen branched entity atomic coordinate count. */
  branched_atom_count?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct branched entities in the generated assembly. */
  branched_entity_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of branched instances in the generated assembly data set.
   *  This is the total count of branched entity instances generated in the assembly coordinate data.
   */
  branched_entity_instance_count?: Maybe<Scalars['Int']['output']>;
  /** The assembly deuterated water molecule count. */
  deuterated_water_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The PDB entry accession code.
   *
   * Examples:
   * 1KIP
   *
   */
  entry_id: Scalars['String']['output'];
  /** The assembly hydrogen atomic coordinate count. */
  hydrogen_atom_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of modeled polymer monomers in the assembly coordinate data.
   *  This is the total count of monomers with reported coordinate data for all polymer
   *  entity instances in the generated assembly coordinate data.
   */
  modeled_polymer_monomer_count?: Maybe<Scalars['Int']['output']>;
  /**
   * Nucleic acid polymer entity type categories describing the generated assembly.
   *
   * Allowable values:
   * DNA (only), DNA/RNA (only), NA-hybrid (only), Other, RNA (only)
   *
   */
  na_polymer_entity_types?: Maybe<Scalars['String']['output']>;
  /** The assembly non-hydrogen non-polymer entity atomic coordinate count. */
  nonpolymer_atom_count?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct non-polymer entities in the generated assembly exclusive of solvent. */
  nonpolymer_entity_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of non-polymer instances in the generated assembly data set exclusive of solvent.
   *  This is the total count of non-polymer entity instances generated in the assembly coordinate data.
   */
  nonpolymer_entity_instance_count?: Maybe<Scalars['Int']['output']>;
  /** Number of heterologous (both binding sites are different) interface entities */
  num_heterologous_interface_entities?: Maybe<Scalars['Int']['output']>;
  /** Number of heteromeric (both partners are different polymeric entities) interface entities */
  num_heteromeric_interface_entities?: Maybe<Scalars['Int']['output']>;
  /** Number of homomeric (both partners are the same polymeric entity) interface entities */
  num_homomeric_interface_entities?: Maybe<Scalars['Int']['output']>;
  /** Number of polymer-polymer interface entities, grouping equivalent interfaces at the entity level (i.e. same entity_ids on either side, with similar but not identical binding sites) */
  num_interface_entities?: Maybe<Scalars['Int']['output']>;
  /** Number of geometrically equivalent (i.e. same asym_ids on either side) polymer-polymer interfaces in the assembly */
  num_interfaces?: Maybe<Scalars['Int']['output']>;
  /** Number of isologous (both binding sites are same, i.e. interface is symmetric) interface entities */
  num_isologous_interface_entities?: Maybe<Scalars['Int']['output']>;
  /** Number of nucleic acid-nucleic acid interface entities */
  num_na_interface_entities?: Maybe<Scalars['Int']['output']>;
  /** Number of protein-nucleic acid interface entities */
  num_prot_na_interface_entities?: Maybe<Scalars['Int']['output']>;
  /** Number of protein-protein interface entities */
  num_protein_interface_entities?: Maybe<Scalars['Int']['output']>;
  /** The assembly non-hydrogen polymer entity atomic coordinate count. */
  polymer_atom_count?: Maybe<Scalars['Int']['output']>;
  /**
   * Categories describing the polymer entity composition for the generated assembly.
   *
   * Allowable values:
   * DNA, DNA/RNA, NA-hybrid, NA/oligosaccharide, RNA, heteromeric protein, homomeric protein, oligosaccharide, other, other type composition, other type pair, protein/NA, protein/NA/oligosaccharide, protein/oligosaccharide
   *
   */
  polymer_composition?: Maybe<Scalars['String']['output']>;
  /** The number of distinct polymer entities in the generated assembly. */
  polymer_entity_count?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct DNA polymer entities in the generated assembly. */
  polymer_entity_count_DNA?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct RNA polymer entities in the generated assembly. */
  polymer_entity_count_RNA?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct nucleic acid polymer entities (DNA or RNA) in the generated assembly. */
  polymer_entity_count_nucleic_acid?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct hybrid nucleic acid polymer entities in the generated assembly. */
  polymer_entity_count_nucleic_acid_hybrid?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct protein polymer entities in the generated assembly. */
  polymer_entity_count_protein?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of polymer instances in the generated assembly data set.
   *  This is the total count of polymer entity instances generated in the assembly coordinate data.
   */
  polymer_entity_instance_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of DNA polymer instances in the generated assembly data set.
   *  This is the total count of DNA polymer entity instances generated in the assembly coordinate data.
   */
  polymer_entity_instance_count_DNA?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of RNA polymer instances in the generated assembly data set.
   *  This is the total count of RNA polymer entity instances generated in the assembly coordinate data.
   */
  polymer_entity_instance_count_RNA?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of nucleic acid polymer instances in the generated assembly data set.
   *  This is the total count of nucleic acid polymer entity instances generated in the assembly coordinate data.
   */
  polymer_entity_instance_count_nucleic_acid?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of hybrid nucleic acide polymer instances in the generated assembly data set.
   *  This is the total count of hybrid nucleic acid polymer entity instances generated in the assembly coordinate data.
   */
  polymer_entity_instance_count_nucleic_acid_hybrid?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of protein polymer instances in the generated assembly data set.
   *  This is the total count of protein polymer entity instances generated in the assembly coordinate data.
   */
  polymer_entity_instance_count_protein?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of polymer monomers in sample entity instances comprising the assembly data set.
   *  This is the total count of monomers for all polymer entity instances
   *  in the generated assembly coordinate data.
   */
  polymer_monomer_count?: Maybe<Scalars['Int']['output']>;
  /**
   * Selected polymer entity type categories describing the generated assembly.
   *
   * Allowable values:
   * Nucleic acid (only), Other, Protein (only), Protein/NA
   *
   */
  selected_polymer_entity_types?: Maybe<Scalars['String']['output']>;
  /** The assembly non-hydrogen solvent atomic coordinate count. */
  solvent_atom_count?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct solvent entities in the generated assembly. */
  solvent_entity_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of solvent instances in the generated assembly data set.
   *  This is the total count of solvent entity instances generated in the assembly coordinate data.
   */
  solvent_entity_instance_count?: Maybe<Scalars['Int']['output']>;
  /** Total buried surface area calculated as the sum of buried surface areas over all interfaces */
  total_assembly_buried_surface_area?: Maybe<Scalars['Float']['output']>;
  /** Total number of interfacing residues in the assembly, calculated as the sum of interfacing residues over all interfaces */
  total_number_interface_residues?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of unmodeled polymer monomers in the assembly coordinate data. This is
   *  the total count of monomers with unreported coordinate data for all polymer
   *  entity instances in the generated assembly coordinate data.
   */
  unmodeled_polymer_monomer_count?: Maybe<Scalars['Int']['output']>;
}

export interface RcsbBindingAffinity {
  __typename?: 'RcsbBindingAffinity';
  /**
   * Ligand identifier.
   *
   * Examples:
   * 0WE, SPE, CL
   *
   */
  comp_id: Scalars['String']['output'];
  /** Link to external resource referencing the data. */
  link: Scalars['String']['output'];
  /**
   * The resource name for the related binding affinity reference.
   *
   * Allowable values:
   * PDBBind, Binding MOAD, BindingDB
   *
   */
  provenance_code: Scalars['String']['output'];
  /**
   * Data point provided by BindingDB. Percent identity between PDB sequence and reference sequence.
   *
   * Examples:
   * null, null, null
   *
   */
  reference_sequence_identity?: Maybe<Scalars['Int']['output']>;
  /**
   * Binding affinity symbol indicating approximate or precise strength of the binding.
   *
   * Examples:
   * ~, =, >, <, >=, <=
   *
   */
  symbol?: Maybe<Scalars['String']['output']>;
  /**
   * Binding affinity measurement given in one of the following types:  The concentration constants: IC50: the concentration of ligand that reduces enzyme activity by 50%;  EC50: the concentration of compound that generates a half-maximal response;  The binding constant:  Kd: dissociation constant;  Ka: association constant;  Ki: enzyme inhibition constant;  The thermodynamic parameters:  delta G: Gibbs free energy of binding (for association reaction);  delta H: change in enthalpy associated with a chemical reaction;  delta S: change in entropy associated with a chemical reaction.
   *
   * Allowable values:
   * IC50, EC50, Kd, Ka, Ki, &Delta;G, &Delta;H, -T&Delta;S
   *
   */
  type: Scalars['String']['output'];
  /**
   * Binding affinity unit.  Dissociation constant Kd is normally in molar units (or millimolar , micromolar, nanomolar, etc).  Association constant Ka is normally expressed in inverse molar units (e.g. M-1).
   *
   * Examples:
   * nM, kJ/mol
   *
   */
  unit: Scalars['String']['output'];
  /** Binding affinity value between a ligand and its target molecule. */
  value: Scalars['Float']['output'];
}

export interface RcsbBirdCitation {
  __typename?: 'RcsbBirdCitation';
  /**
   * The value of _rcsb_bird_citation.id must uniquely identify a record in the
   *  rcsb_bird_citation list.
   *
   * Examples:
   * 1, 2
   *
   */
  id: Scalars['String']['output'];
  /**
   * Abbreviated name of the cited journal as given in the
   *  Chemical Abstracts Service Source Index.
   *
   * Examples:
   * J.Mol.Biol., J. Mol. Biol.
   *
   */
  journal_abbrev?: Maybe<Scalars['String']['output']>;
  /**
   * Volume number of the journal cited; relevant for journal
   *  articles.
   *
   * Examples:
   * 174
   *
   */
  journal_volume?: Maybe<Scalars['String']['output']>;
  /**
   * The first page of the rcsb_bird_citation; relevant for journal
   *  articles, books and book chapters.
   */
  page_first?: Maybe<Scalars['String']['output']>;
  /**
   * The last page of the rcsb_bird_citation; relevant for journal
   *  articles, books and book chapters.
   */
  page_last?: Maybe<Scalars['String']['output']>;
  /**
   * Document Object Identifier used by doi.org to uniquely
   *  specify bibliographic entry.
   *
   * Examples:
   * 10.2345/S1384107697000225
   *
   */
  pdbx_database_id_DOI?: Maybe<Scalars['String']['output']>;
  /**
   * Ascession number used by PubMed to categorize a specific
   *  bibliographic entry.
   */
  pdbx_database_id_PubMed?: Maybe<Scalars['Int']['output']>;
  /**
   * Names of the authors of the citation; relevant for journal
   *  articles, books and book chapters.  Names are separated by vertical bars.
   *
   *  The family name(s), followed by a comma and including any
   *  dynastic components, precedes the first name(s) or initial(s).
   */
  rcsb_authors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The title of the rcsb_bird_citation; relevant for journal articles, books
   *  and book chapters.
   *
   * Examples:
   * Structure of diferric duck ovotransferrin
   *                                   at 2.35 Angstroms resolution.
   *
   */
  title?: Maybe<Scalars['String']['output']>;
  /**
   * The year of the rcsb_bird_citation; relevant for journal articles, books
   *  and book chapters.
   */
  year?: Maybe<Scalars['Int']['output']>;
}

export interface RcsbBranchedEntity {
  __typename?: 'RcsbBranchedEntity';
  /** A description of special aspects of the branched entity. */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * Formula mass (KDa) of the branched entity.
   *
   * Examples:
   * null, null
   *
   */
  formula_weight?: Maybe<Scalars['Float']['output']>;
  /**
   * A description of the branched entity.
   *
   * Examples:
   * alpha-D-glucopyranose-(1-6)-beta-D-glucopyranose, beta-D-xylopyranose-(1-4)-beta-D-xylopyranose
   *
   */
  pdbx_description?: Maybe<Scalars['String']['output']>;
  /** The number of molecules of the branched entity in the entry. */
  pdbx_number_of_molecules?: Maybe<Scalars['Int']['output']>;
}

export interface RcsbBranchedEntityAnnotation {
  __typename?: 'RcsbBranchedEntityAnnotation';
  /** An identifier for the annotation. */
  annotation_id?: Maybe<Scalars['String']['output']>;
  annotation_lineage?: Maybe<Array<Maybe<RcsbBranchedEntityAnnotationAnnotationLineage>>>;
  /**
   * Identifies the version of the annotation assignment.
   *
   * Examples:
   * V4_0_2
   *
   */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /** A description for the annotation. */
  description?: Maybe<Scalars['String']['output']>;
  /** A name for the annotation. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Code identifying the individual, organization or program that
   *  assigned the annotation.
   *
   * Examples:
   * PDB
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /** A type or category of the annotation. */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedEntityAnnotationAnnotationLineage {
  __typename?: 'RcsbBranchedEntityAnnotationAnnotationLineage';
  /** Members of the annotation lineage as parent lineage depth (1-N) */
  depth?: Maybe<Scalars['Int']['output']>;
  /** Members of the annotation lineage as parent class identifiers. */
  id?: Maybe<Scalars['String']['output']>;
  /** Members of the annotation lineage as parent class names. */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedEntityContainerIdentifiers {
  __typename?: 'RcsbBranchedEntityContainerIdentifiers';
  /** Instance identifiers corresponding to copies of the entity in this container. */
  asym_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Author instance identifiers corresponding to copies of the entity in this container. */
  auth_asym_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Unique list of monomer chemical component identifiers in the entity in this container. */
  chem_comp_monomers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The chemical reference definition identifier for the entity in this container.
   *
   * Examples:
   * PRD_000010
   *
   */
  chem_ref_def_id?: Maybe<Scalars['String']['output']>;
  /**
   * Entity identifier for the container.
   *
   * Examples:
   * 1, 2
   *
   */
  entity_id: Scalars['String']['output'];
  /**
   * Entry identifier for the container.
   *
   * Examples:
   * 1B5F, 2HYV
   *
   */
  entry_id: Scalars['String']['output'];
  /**
   * The BIRD identifier for the entity in this container.
   *
   * Examples:
   * PRD_000010
   *
   */
  prd_id?: Maybe<Scalars['String']['output']>;
  /**
   * A unique identifier for each object in this entity container formed by
   *  an underscore separated concatenation of entry and entity identifiers.
   *
   * Examples:
   * 2HYV_2
   *
   */
  rcsb_id?: Maybe<Scalars['String']['output']>;
  reference_identifiers?: Maybe<Array<Maybe<RcsbBranchedEntityContainerIdentifiersReferenceIdentifiers>>>;
}

export interface RcsbBranchedEntityContainerIdentifiersReferenceIdentifiers {
  __typename?: 'RcsbBranchedEntityContainerIdentifiersReferenceIdentifiers';
  /**
   * Source of the reference resource assignment
   *
   * Allowable values:
   * PDB, RCSB
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * Reference resource accession code
   *
   * Examples:
   * G07411ON, G42666HT
   *
   */
  resource_accession?: Maybe<Scalars['String']['output']>;
  /**
   * Reference resource name
   *
   * Allowable values:
   * GlyCosmos, GlyGen, GlyTouCan
   *
   */
  resource_name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedEntityFeature {
  __typename?: 'RcsbBranchedEntityFeature';
  additional_properties?: Maybe<Array<Maybe<RcsbBranchedEntityFeatureAdditionalProperties>>>;
  /**
   * Identifies the version of the feature assignment.
   *
   * Examples:
   * V4_0_2
   *
   */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /** A description for the feature. */
  description?: Maybe<Scalars['String']['output']>;
  /** An identifier for the feature. */
  feature_id?: Maybe<Scalars['String']['output']>;
  feature_positions?: Maybe<Array<Maybe<RcsbBranchedEntityFeatureFeaturePositions>>>;
  /** A name for the feature. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Code identifying the individual, organization or program that
   *  assigned the feature.
   *
   * Examples:
   * PDB
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * Code residue coordinate system for the assigned feature.
   *
   * Allowable values:
   * PDB entity
   *
   */
  reference_scheme?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the feature.
   *
   * Allowable values:
   * mutation
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedEntityFeatureAdditionalProperties {
  __typename?: 'RcsbBranchedEntityFeatureAdditionalProperties';
  /** The additional property name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The value(s) of the additional property. */
  values?: Maybe<Array<Maybe<Scalars['ObjectScalar']['output']>>>;
}

export interface RcsbBranchedEntityFeatureFeaturePositions {
  __typename?: 'RcsbBranchedEntityFeatureFeaturePositions';
  /**
   * An identifier for the leading monomer corresponding to the feature assignment.
   *
   * Examples:
   * NAG, MAN
   *
   */
  beg_comp_id?: Maybe<Scalars['String']['output']>;
  /** An identifier for the leading monomer position of the feature. */
  beg_seq_id: Scalars['Int']['output'];
  /** An identifier for the leading monomer position of the feature. */
  end_seq_id?: Maybe<Scalars['Int']['output']>;
  /**
   * The value for the feature at this monomer.
   *
   * Examples:
   * null, null
   *
   */
  value?: Maybe<Scalars['Float']['output']>;
}

export interface RcsbBranchedEntityFeatureSummary {
  __typename?: 'RcsbBranchedEntityFeatureSummary';
  /** The feature count. */
  count?: Maybe<Scalars['Int']['output']>;
  /**
   * The fractional feature coverage relative to the full branched entity.
   *
   * Examples:
   * null, null
   *
   */
  coverage?: Maybe<Scalars['Float']['output']>;
  /** The maximum feature length. */
  maximum_length?: Maybe<Scalars['Int']['output']>;
  /**
   * The maximum feature value.
   *
   * Examples:
   * null, null
   *
   */
  maximum_value?: Maybe<Scalars['Float']['output']>;
  /** The minimum feature length. */
  minimum_length?: Maybe<Scalars['Int']['output']>;
  /**
   * The minimum feature value.
   *
   * Examples:
   * null, null
   *
   */
  minimum_value?: Maybe<Scalars['Float']['output']>;
  /**
   * Type or category of the feature.
   *
   * Allowable values:
   * mutation
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedEntityInstanceContainerIdentifiers {
  __typename?: 'RcsbBranchedEntityInstanceContainerIdentifiers';
  /** Instance identifier for this container. */
  asym_id: Scalars['String']['output'];
  /** Author instance identifier for this container. */
  auth_asym_id?: Maybe<Scalars['String']['output']>;
  /** Entity identifier for the container. */
  entity_id?: Maybe<Scalars['String']['output']>;
  /** Entry identifier for the container. */
  entry_id: Scalars['String']['output'];
  /**
   * A unique identifier for each object in this entity instance container formed by
   *  an 'dot' (.) separated concatenation of entry and entity instance identifiers.
   *
   * Examples:
   * 1KIP.A
   *
   */
  rcsb_id?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedEntityKeywords {
  __typename?: 'RcsbBranchedEntityKeywords';
  /** Keywords describing this branched entity. */
  text?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedEntityNameCom {
  __typename?: 'RcsbBranchedEntityNameCom';
  /**
   * A common name for the branched entity.
   *
   * Examples:
   * HIV protease monomer, hemoglobin alpha chain
   *
   */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedEntityNameSys {
  __typename?: 'RcsbBranchedEntityNameSys';
  /** The systematic name for the branched entity. */
  name: Scalars['String']['output'];
  /** The system used to generate the systematic name of the branched entity. */
  system?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedInstanceAnnotation {
  __typename?: 'RcsbBranchedInstanceAnnotation';
  /** An identifier for the annotation. */
  annotation_id?: Maybe<Scalars['String']['output']>;
  annotation_lineage?: Maybe<Array<Maybe<RcsbBranchedInstanceAnnotationAnnotationLineage>>>;
  /**
   * Identifies the version of the annotation assignment.
   *
   * Examples:
   * V4_0_2
   *
   */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /**
   * Chemical component identifier.
   *
   * Examples:
   * ATP
   *
   */
  comp_id?: Maybe<Scalars['String']['output']>;
  /** A description for the annotation. */
  description?: Maybe<Scalars['String']['output']>;
  /** A name for the annotation. */
  name?: Maybe<Scalars['String']['output']>;
  /** Ordinal identifier for this category */
  ordinal: Scalars['Int']['output'];
  /**
   * Code identifying the individual, organization or program that
   *  assigned the annotation.
   *
   * Examples:
   * PDB
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the annotation.
   *
   * Allowable values:
   * CATH, SCOP
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedInstanceAnnotationAnnotationLineage {
  __typename?: 'RcsbBranchedInstanceAnnotationAnnotationLineage';
  /** Members of the annotation lineage as parent lineage depth (1-N) */
  depth?: Maybe<Scalars['Int']['output']>;
  /** Members of the annotation lineage as parent class identifiers. */
  id?: Maybe<Scalars['String']['output']>;
  /** Members of the annotation lineage as parent class names. */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedInstanceFeature {
  __typename?: 'RcsbBranchedInstanceFeature';
  additional_properties?: Maybe<Array<Maybe<RcsbBranchedInstanceFeatureAdditionalProperties>>>;
  /**
   * Identifies the version of the feature assignment.
   *
   * Examples:
   * V4_0_2
   *
   */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /** A description for the feature. */
  description?: Maybe<Scalars['String']['output']>;
  /** An identifier for the feature. */
  feature_id?: Maybe<Scalars['String']['output']>;
  feature_positions?: Maybe<Array<Maybe<RcsbBranchedInstanceFeatureFeaturePositions>>>;
  feature_value?: Maybe<Array<Maybe<RcsbBranchedInstanceFeatureFeatureValue>>>;
  /** A name for the feature. */
  name?: Maybe<Scalars['String']['output']>;
  /** Ordinal identifier for this category */
  ordinal: Scalars['Int']['output'];
  /**
   * Code identifying the individual, organization or program that
   *  assigned the feature.
   *
   * Examples:
   * PDB
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * Code residue coordinate system for the assigned feature.
   *
   * Allowable values:
   * PDB entity, PDB entry
   *
   */
  reference_scheme?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the feature.
   *
   * Allowable values:
   * BINDING_SITE, CATH, ECOD, MOGUL_ANGLE_OUTLIER, MOGUL_BOND_OUTLIER, RSCC_OUTLIER, RSRZ_OUTLIER, SCOP, STEREO_OUTLIER, UNOBSERVED_ATOM_XYZ, UNOBSERVED_RESIDUE_XYZ, ZERO_OCCUPANCY_ATOM_XYZ, ZERO_OCCUPANCY_RESIDUE_XYZ
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedInstanceFeatureAdditionalProperties {
  __typename?: 'RcsbBranchedInstanceFeatureAdditionalProperties';
  /**
   * The additional property name.
   *
   * Examples:
   * bond_distance, bond_angle
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /** The value(s) of the additional property. */
  values?: Maybe<Array<Maybe<Scalars['ObjectScalar']['output']>>>;
}

export interface RcsbBranchedInstanceFeatureFeaturePositions {
  __typename?: 'RcsbBranchedInstanceFeatureFeaturePositions';
  /**
   * An identifier for the monomer(s) corresponding to the feature assignment.
   *
   * Examples:
   * NAG, MAN
   *
   */
  beg_comp_id?: Maybe<Scalars['String']['output']>;
  /** An identifier for the leading monomer feature position. */
  beg_seq_id: Scalars['Int']['output'];
  /** An identifier for the terminal monomer feature position. */
  end_seq_id?: Maybe<Scalars['Int']['output']>;
  /**
   * The value of the feature at the monomer position.
   *
   * Examples:
   * null, null
   *
   */
  value?: Maybe<Scalars['Float']['output']>;
  /** The value(s) of the feature at the monomer position. */
  values?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
}

export interface RcsbBranchedInstanceFeatureFeatureValue {
  __typename?: 'RcsbBranchedInstanceFeatureFeatureValue';
  /**
   * The chemical component identifier for the instance of the feature value.
   *
   * Examples:
   * ATP,, STN
   *
   */
  comp_id?: Maybe<Scalars['String']['output']>;
  /**
   * Specific details about the feature.
   *
   * Examples:
   * C1,C2, C1,C2,C3
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * The reference value of the feature.
   *
   * Examples:
   * null, null
   *
   */
  reference?: Maybe<Scalars['Float']['output']>;
  /**
   * The reported value of the feature.
   *
   * Examples:
   * null, null
   *
   */
  reported?: Maybe<Scalars['Float']['output']>;
  /**
   * The estimated uncertainty of the reported feature value.
   *
   * Examples:
   * null, null
   *
   */
  uncertainty_estimate?: Maybe<Scalars['Float']['output']>;
  /**
   * The type of estimated uncertainty for the reported feature value.
   *
   * Allowable values:
   * Z-Score
   *
   */
  uncertainty_estimate_type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedInstanceFeatureSummary {
  __typename?: 'RcsbBranchedInstanceFeatureSummary';
  /** The feature count. */
  count?: Maybe<Scalars['Int']['output']>;
  /**
   * The fractional feature coverage relative to the full branched entity.
   *
   * Examples:
   * null, null
   *
   */
  coverage?: Maybe<Scalars['Float']['output']>;
  /** The maximum feature length. */
  maximum_length?: Maybe<Scalars['Int']['output']>;
  /**
   * The maximum feature value.
   *
   * Examples:
   * null, null
   *
   */
  maximum_value?: Maybe<Scalars['Float']['output']>;
  /** The minimum feature length. */
  minimum_length?: Maybe<Scalars['Int']['output']>;
  /**
   * The minimum feature value.
   *
   * Examples:
   * null, null
   *
   */
  minimum_value?: Maybe<Scalars['Float']['output']>;
  /**
   * Type or category of the feature.
   *
   * Allowable values:
   * BINDING_SITE, CATH, MOGUL_ANGLE_OUTLIER, MOGUL_BOND_OUTLIER, RSCC_OUTLIER, RSRZ_OUTLIER, SCOP, STEREO_OUTLIER, UNOBSERVED_ATOM_XYZ, UNOBSERVED_RESIDUE_XYZ, ZERO_OCCUPANCY_ATOM_XYZ, ZERO_OCCUPANCY_RESIDUE_XYZ
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedStructConn {
  __typename?: 'RcsbBranchedStructConn';
  connect_partner?: Maybe<RcsbBranchedStructConnConnectPartner>;
  connect_target?: Maybe<RcsbBranchedStructConnConnectTarget>;
  /**
   * The connection type.
   *
   * Allowable values:
   * covalent bond, hydrogen bond, ionic interaction, metal coordination, mismatched base pairs
   *
   */
  connect_type?: Maybe<Scalars['String']['output']>;
  /**
   * A description of special details of the connection.
   *
   * Examples:
   * Watson-Crick base pair
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /** Distance value for this contact. */
  dist_value?: Maybe<Scalars['Float']['output']>;
  /** The value of _rcsb_branched_struct_conn.id is an identifier for connection. */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _rcsb_branched_struct_conn.id must uniquely identify a record in
   *  the rcsb_branched_struct_conn list.
   */
  ordinal_id: Scalars['Int']['output'];
  /**
   * The chemical or structural role of the interaction
   *
   * Allowable values:
   * C-Mannosylation, N-Glycosylation, O-Glycosylation
   *
   */
  role?: Maybe<Scalars['String']['output']>;
  /**
   * The chemical bond order associated with the specified atoms in
   *  this contact.
   *
   * Allowable values:
   * doub, quad, sing, trip
   *
   */
  value_order?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedStructConnConnectPartner {
  __typename?: 'RcsbBranchedStructConnConnectPartner';
  /**
   * A component of the identifier for the partner in the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_alt_id in the
   *  ATOM_SITE category.
   */
  label_alt_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the partner in the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_asym_id in the
   *  ATOM_SITE category.
   */
  label_asym_id: Scalars['String']['output'];
  /**
   * A component of the identifier for the partner in the structure
   *  connection.
   *
   *  This data item is a pointer to _chem_comp_atom.atom_id in the
   *  CHEM_COMP_ATOM category.
   */
  label_atom_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the partner in the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_comp_id in the
   *  ATOM_SITE category.
   */
  label_comp_id: Scalars['String']['output'];
  /**
   * A component of the identifier for the partner in the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_seq_id in the
   *  ATOM_SITE category.
   */
  label_seq_id?: Maybe<Scalars['Int']['output']>;
  /**
   * Describes the symmetry operation that should be applied to the
   *  atom set specified by _rcsb_branched_struct_conn.connect_partner_label* to generate the
   *  partner in the structure connection.
   *
   * Examples:
   * 1_555, 7_645
   *
   */
  symmetry?: Maybe<Scalars['String']['output']>;
}

export interface RcsbBranchedStructConnConnectTarget {
  __typename?: 'RcsbBranchedStructConnConnectTarget';
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.auth_asym_id in the
   *  ATOM_SITE category.
   */
  auth_asym_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.auth_seq_id in the
   *  ATOM_SITE category.
   */
  auth_seq_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_alt_id in the
   *  ATOM_SITE category.
   */
  label_alt_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_asym_id in the
   *  ATOM_SITE category.
   */
  label_asym_id: Scalars['String']['output'];
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_atom_id in the
   *  ATOM_SITE category.
   */
  label_atom_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_comp_id in the
   *  ATOM_SITE category.
   */
  label_comp_id: Scalars['String']['output'];
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.connect_target_label_seq_id in the
   *  ATOM_SITE category.
   */
  label_seq_id?: Maybe<Scalars['Int']['output']>;
  /**
   * Describes the symmetry operation that should be applied to the
   *  atom set specified by _rcsb_branched_struct_conn.label* to generate the
   *  target of the structure connection.
   *
   * Examples:
   * 1_555, 7_645
   *
   */
  symmetry?: Maybe<Scalars['String']['output']>;
}

export interface RcsbChemCompAnnotation {
  __typename?: 'RcsbChemCompAnnotation';
  /** An identifier for the annotation. */
  annotation_id?: Maybe<Scalars['String']['output']>;
  annotation_lineage?: Maybe<Array<Maybe<RcsbChemCompAnnotationAnnotationLineage>>>;
  /**
   * Identifies the version of the annotation assignment.
   *
   * Examples:
   * V4_0_2
   *
   */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /** A description for the annotation. */
  description?: Maybe<Scalars['String']['output']>;
  /** A name for the annotation. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Code identifying the individual, organization or program that
   *  assigned the annotation.
   *
   * Examples:
   * RESID, UniProt, PDB
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the annotation.
   *
   * Allowable values:
   * ATC, Carbohydrate Anomer, Carbohydrate Isomer, Carbohydrate Primary Carbonyl Group, Carbohydrate Ring, Generating Enzyme, Modification Type, PSI-MOD
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbChemCompAnnotationAnnotationLineage {
  __typename?: 'RcsbChemCompAnnotationAnnotationLineage';
  /** Members of the annotation lineage as parent lineage depth (1-N) */
  depth?: Maybe<Scalars['Int']['output']>;
  /** Members of the annotation lineage as parent class identifiers. */
  id?: Maybe<Scalars['String']['output']>;
  /** Members of the annotation lineage as parent class names. */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbChemCompContainerIdentifiers {
  __typename?: 'RcsbChemCompContainerIdentifiers';
  /**
   * The Anatomical Therapeutic Chemical (ATC) Classification System identifiers corresponding
   *  to the chemical component.
   */
  atc_codes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The chemical component identifier.
   *
   * Examples:
   * ATP, STI
   *
   */
  comp_id: Scalars['String']['output'];
  /**
   * The DrugBank identifier corresponding to the chemical component.
   *
   * Examples:
   * DB00781, DB15263
   *
   */
  drugbank_id?: Maybe<Scalars['String']['output']>;
  /**
   * The BIRD definition identifier.
   *
   * Examples:
   * PRD_000010
   *
   */
  prd_id?: Maybe<Scalars['String']['output']>;
  /**
   * A unique identifier for the chemical definition in this container.
   *
   * Examples:
   * ATP, PRD_000010
   *
   */
  rcsb_id?: Maybe<Scalars['String']['output']>;
  /** The list of subcomponents contained in this component. */
  subcomponent_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
}

export interface RcsbChemCompDescriptor {
  __typename?: 'RcsbChemCompDescriptor';
  /**
   * Standard IUPAC International Chemical Identifier (InChI) descriptor for the chemical component.
   *
   *    InChI, the IUPAC International Chemical Identifier,
   *    by Stephen R Heller, Alan McNaught, Igor Pletnev, Stephen Stein and Dmitrii Tchekhovskoi,
   *    Journal of Cheminformatics, 2015, 7:23;
   *
   * Examples:
   * InChI=1S/C3H6FO6P/c4-1-2(3(5)6)10-11(7,8)9/h2H,1H2,(H,5,6)(H2,7,8,9)/t2-/m0/s1
   *
   */
  InChI?: Maybe<Scalars['String']['output']>;
  /**
   * Standard IUPAC International Chemical Identifier (InChI) descriptor key
   *  for the chemical component
   *
   *  InChI, the IUPAC International Chemical Identifier,
   *  by Stephen R Heller, Alan McNaught, Igor Pletnev, Stephen Stein and Dmitrii Tchekhovskoi,
   *  Journal of Cheminformatics, 2015, 7:23
   *
   * Examples:
   * BNOCDEBUFVJMQI-REOHCLBHSA-N
   *
   */
  InChIKey?: Maybe<Scalars['String']['output']>;
  /**
   * Simplified molecular-input line-entry system (SMILES) descriptor for the chemical component.
   *
   *    Weininger D (February 1988). "SMILES, a chemical language and information system. 1.
   *    Introduction to methodology and encoding rules". Journal of Chemical Information and Modeling. 28 (1): 31-6.
   *
   *    Weininger D, Weininger A, Weininger JL (May 1989).
   *    "SMILES. 2. Algorithm for generation of unique SMILES notation",
   *    Journal of Chemical Information and Modeling. 29 (2): 97-101.
   *
   * Examples:
   * OC(=O)[CH](CF)O[P](O)(O)=O
   *
   */
  SMILES?: Maybe<Scalars['String']['output']>;
  /**
   * Simplified molecular-input line-entry system (SMILES) descriptor for the chemical
   *  component including stereochemical features.
   *
   *  Weininger D (February 1988). "SMILES, a chemical language and information system. 1.
   *  Introduction to methodology and encoding rules".
   *  Journal of Chemical Information and Modeling. 28 (1): 31-6.
   *
   *  Weininger D, Weininger A, Weininger JL (May 1989).
   *  "SMILES. 2. Algorithm for generation of unique SMILES notation".
   *  Journal of Chemical Information and Modeling. 29 (2): 97-101.
   *
   * Examples:
   * OC(=O)[C@H](CF)O[P](O)(O)=O
   *
   */
  SMILES_stereo?: Maybe<Scalars['String']['output']>;
  /** The chemical component identifier. */
  comp_id: Scalars['String']['output'];
}

export interface RcsbChemCompInfo {
  __typename?: 'RcsbChemCompInfo';
  /** Chemical component total atom count */
  atom_count?: Maybe<Scalars['Int']['output']>;
  /** Chemical component chiral atom count */
  atom_count_chiral?: Maybe<Scalars['Int']['output']>;
  /** Chemical component heavy atom count */
  atom_count_heavy?: Maybe<Scalars['Int']['output']>;
  /** Chemical component total bond count */
  bond_count?: Maybe<Scalars['Int']['output']>;
  /** Chemical component aromatic bond count */
  bond_count_aromatic?: Maybe<Scalars['Int']['output']>;
  /** The chemical component identifier. */
  comp_id: Scalars['String']['output'];
  /**
   * The date the chemical definition was first deposited in the PDB repository.
   *
   * Examples:
   * 2016-09-11
   *
   */
  initial_deposition_date?: Maybe<Scalars['Date']['output']>;
  /**
   * The initial date the chemical definition was released in the PDB repository.
   *
   * Examples:
   * 2016-09-11
   *
   */
  initial_release_date?: Maybe<Scalars['Date']['output']>;
  /**
   * The release status of the chemical definition.
   *
   * Allowable values:
   * DEL, HOLD, HPUB, OBS, REF_ONLY, REL
   *
   */
  release_status?: Maybe<Scalars['String']['output']>;
  /**
   * The date of last revision of the chemical definition.
   *
   * Examples:
   * 2016-10-12
   *
   */
  revision_date?: Maybe<Scalars['Date']['output']>;
}

export interface RcsbChemCompRelated {
  __typename?: 'RcsbChemCompRelated';
  /**
   * The value of _rcsb_chem_comp_related.comp_id is a reference to
   *  a chemical component definition.
   */
  comp_id: Scalars['String']['output'];
  /**
   * The value of _rcsb_chem_comp_related.ordinal distinguishes
   *  related examples for each chemical component.
   */
  ordinal: Scalars['Int']['output'];
  /**
   * The method used to establish the resource correspondence.
   *
   * Allowable values:
   * assigned by DrugBank resource, assigned by PDB, assigned by PubChem resource, matching ChEMBL ID in Pharos, matching InChIKey in DrugBank, matching InChIKey in PubChem, matching InChIKey-prefix in DrugBank, matching by RESID resource
   *
   */
  related_mapping_method?: Maybe<Scalars['String']['output']>;
  /**
   * The resource identifier code for the related chemical reference.
   *
   * Examples:
   * 124832
   *
   */
  resource_accession_code?: Maybe<Scalars['String']['output']>;
  /**
   * The resource name for the related chemical reference.
   *
   * Allowable values:
   * CAS, CCDC/CSD, COD, ChEBI, ChEMBL, DrugBank, Pharos, PubChem, RESID
   *
   */
  resource_name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbChemCompSynonyms {
  __typename?: 'RcsbChemCompSynonyms';
  /** The chemical component to which this synonym applies. */
  comp_id: Scalars['String']['output'];
  /**
   * The synonym of this particular chemical component.
   *
   * Examples:
   * Ursonic acid, Talotrexin, 4-oxodecanedioic acid
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * This data item is an ordinal index for the
   *  RCSB_CHEM_COMP_SYNONYMS category.
   */
  ordinal: Scalars['Int']['output'];
  /**
   * The provenance of this synonym.
   *
   * Allowable values:
   * ACDLabs, Author, ChEBI, ChEMBL, DrugBank, GMML, Lexichem, OpenEye OEToolkits, OpenEye/Lexichem, PDB Reference Data, PDB Reference Data (Preferred), PDB-CARE, PubChem, RESID
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * This data item contains the synonym type.
   *
   * Allowable values:
   * Brand Name, Common Name, Condensed IUPAC Carbohydrate Symbol, IUPAC Carbohydrate Symbol, Preferred Common Name, Preferred Name, Preferred Synonym, SNFG Carbohydrate Symbol, Synonym, Systematic Name
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbChemCompTarget {
  __typename?: 'RcsbChemCompTarget';
  /**
   * The value of _rcsb_chem_comp_target.comp_id is a reference to
   *  a chemical component definition.
   */
  comp_id: Scalars['String']['output'];
  /** The type of target interaction. */
  interaction_type?: Maybe<Scalars['String']['output']>;
  /** The chemical component target name. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _rcsb_chem_comp_target.ordinal distinguishes
   *  related examples for each chemical component.
   */
  ordinal: Scalars['Int']['output'];
  /**
   * A code indicating the provenance of the target interaction assignment
   *
   * Allowable values:
   * DrugBank, PDB Primary Data
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * The reference identifier code for the target interaction reference.
   *
   * Examples:
   * Q9HD40
   *
   */
  reference_database_accession_code?: Maybe<Scalars['String']['output']>;
  /**
   * The reference database name for the target interaction.
   *
   * Allowable values:
   * UniProt
   *
   */
  reference_database_name?: Maybe<Scalars['String']['output']>;
  /** The mechanism of action of the chemical component - target interaction. */
  target_actions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
}

export interface RcsbClusterFlexibility {
  __typename?: 'RcsbClusterFlexibility';
  /** Average RMSD refer to average pairwise RMSD (Root Mean Square Deviation of C-alpha atoms) between structures in the cluster (95% sequence identity) where a given entity belongs. */
  avg_rmsd?: Maybe<Scalars['Float']['output']>;
  /** Structural flexibility in the cluster (95% sequence identity) where a given entity belongs. */
  label?: Maybe<Scalars['String']['output']>;
  /** Link to the associated PDBFlex database entry. */
  link?: Maybe<Scalars['String']['output']>;
  /** Maximal RMSD refer to maximal pairwise RMSD (Root Mean Square Deviation of C-alpha atoms) between structures in the cluster (95% sequence identity) where a given entity belongs. */
  max_rmsd?: Maybe<Scalars['Float']['output']>;
  /** Allowable values: PDBFlex. */
  provenance_code?: Maybe<Scalars['String']['output']>;
}

export interface RcsbClusterMembership {
  __typename?: 'RcsbClusterMembership';
  /** Identifier for a cluster at the specified level of sequence identity within the cluster data set. */
  cluster_id?: Maybe<Scalars['Int']['output']>;
  /** Sequence identity expressed as an integer percent value. */
  identity?: Maybe<Scalars['Int']['output']>;
}

export interface RcsbCompModelProvenance {
  __typename?: 'RcsbCompModelProvenance';
  /**
   * Entry identifier corresponding to the computed structure model.
   *
   * Examples:
   * AF-P60325-F1, ma-bak-cepc-0019
   *
   */
  entry_id: Scalars['String']['output'];
  /**
   * Source database for the computed structure model.
   *
   * Allowable values:
   * AlphaFoldDB, ModelArchive
   *
   */
  source_db?: Maybe<Scalars['String']['output']>;
  /** Source filename for the computed structure model. */
  source_filename?: Maybe<Scalars['String']['output']>;
  /** Source URL for computed structure model predicted aligned error (PAE) json file. */
  source_pae_url?: Maybe<Scalars['String']['output']>;
  /** Source URL for computed structure model file. */
  source_url?: Maybe<Scalars['String']['output']>;
}

export interface RcsbEntityHostOrganism {
  __typename?: 'RcsbEntityHostOrganism';
  /**
   * The beginning polymer sequence position for the polymer section corresponding
   *  to this host organism.
   *
   *  A reference to the sequence position in the entity_poly category.
   */
  beg_seq_num?: Maybe<Scalars['Int']['output']>;
  /** The common name of the host organism */
  common_name?: Maybe<Scalars['String']['output']>;
  /**
   * The ending polymer sequence position for the polymer section corresponding
   *  to this host organism.
   *
   *  A reference to the sequence position in the entity_poly category.
   */
  end_seq_num?: Maybe<Scalars['Int']['output']>;
  /**
   * Common names associated with this taxonomy code obtained from NCBI Taxonomy Database.
   *
   *   These names correspond to the taxonomy identifier assigned by the PDB depositor.
   *
   * References:
   *
   * Sayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V,
   * Church DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY,
   * Helmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR,
   * Miller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E,
   * Sherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G,
   * Tatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources
   * of the National Center for Biotechnology Information. Nucleic Acids
   * Res. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.
   *
   * Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009).
   * GenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31.
   * Epub 2008 Oct 21.
   */
  ncbi_common_names?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The parent scientific name in the NCBI taxonomy hierarchy (depth=1) associated with this taxonomy code.
   *
   * References:
   *
   * Sayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V,
   * Church DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY,
   * Helmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR,
   * Miller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E,
   * Sherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G,
   * Tatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources
   * of the National Center for Biotechnology Information. Nucleic Acids
   * Res. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.
   *
   * Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009).
   * GenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31.
   * Epub 2008 Oct 21.
   */
  ncbi_parent_scientific_name?: Maybe<Scalars['String']['output']>;
  /**
   * The scientific name associated with this taxonomy code aggregated by the NCBI Taxonomy Database.
   *
   *   This name corresponds to the taxonomy identifier assigned by the PDB depositor.
   *
   *
   * References:
   *
   * Sayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V,
   * Church DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY,
   * Helmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR,
   * Miller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E,
   * Sherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G,
   * Tatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources
   * of the National Center for Biotechnology Information. Nucleic Acids
   * Res. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.
   *
   * Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009).
   * GenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31.
   * Epub 2008 Oct 21.
   */
  ncbi_scientific_name?: Maybe<Scalars['String']['output']>;
  /**
   * NCBI Taxonomy identifier for the host organism.
   *
   *
   *  Reference:
   *
   *  Wheeler DL, Chappey C, Lash AE, Leipe DD, Madden TL, Schuler GD,
   *  Tatusova TA, Rapp BA (2000). Database resources of the National
   *  Center for Biotechnology Information. Nucleic Acids Res 2000 Jan
   *  1;28(1):10-4
   *
   *  Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Rapp BA,
   *  Wheeler DL (2000). GenBank. Nucleic Acids Res 2000 Jan 1;28(1):15-18.
   */
  ncbi_taxonomy_id?: Maybe<Scalars['Int']['output']>;
  /** An identifier for an entity segment. */
  pdbx_src_id: Scalars['Int']['output'];
  /**
   * A code indicating the provenance of the host organism.
   *
   * Allowable values:
   * PDB Primary Data, Primary Data
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /** The scientific name of the host organism */
  scientific_name?: Maybe<Scalars['String']['output']>;
  taxonomy_lineage?: Maybe<Array<Maybe<RcsbEntityHostOrganismTaxonomyLineage>>>;
}

export interface RcsbEntityHostOrganismTaxonomyLineage {
  __typename?: 'RcsbEntityHostOrganismTaxonomyLineage';
  /** Members of the NCBI Taxonomy lineage as parent taxonomy lineage depth (1-N) */
  depth?: Maybe<Scalars['Int']['output']>;
  /**
   * Members of the NCBI Taxonomy lineage as parent taxonomy idcodes.
   *
   * Examples:
   * 469008, 10469
   *
   */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Members of the NCBI Taxonomy lineage as parent taxonomy names.
   *
   * Examples:
   * Escherichia coli BL21(DE3), Baculovirus
   *
   */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbEntitySourceOrganism {
  __typename?: 'RcsbEntitySourceOrganism';
  /**
   * The beginning polymer sequence position for the polymer section corresponding
   *  to this source.
   *
   *  A reference to the sequence position in the entity_poly category.
   */
  beg_seq_num?: Maybe<Scalars['Int']['output']>;
  /** The common name for the source organism assigned by the PDB depositor. */
  common_name?: Maybe<Scalars['String']['output']>;
  /**
   * The ending polymer sequence position for the polymer section corresponding
   *  to this source.
   *
   *  A reference to the sequence position in the entity_poly category.
   */
  end_seq_num?: Maybe<Scalars['Int']['output']>;
  /**
   * Common names associated with this taxonomy code aggregated by the NCBI Taxonomy Database.
   *
   *   These name correspond to the taxonomy identifier assigned by the PDB depositor.
   *
   * References:
   *
   * Sayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V,
   * Church DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY,
   * Helmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR,
   * Miller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E,
   * Sherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G,
   * Tatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources
   * of the National Center for Biotechnology Information. Nucleic Acids
   * Res. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.
   *
   * Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009).
   * GenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31.
   * Epub 2008 Oct 21.
   */
  ncbi_common_names?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * A parent scientific name in the NCBI taxonomy hierarchy of the source organism assigned by the PDB depositor.
   *   For cellular organism this corresponds to a superkingdom (e.g., Archaea, Bacteria, Eukaryota).  For viruses this
   *   corresponds to a clade (e.g.  Adnaviria, Bicaudaviridae, Clavaviridae). For other and unclassified entries this
   *   corresponds to the first level of any taxonomic rank below the root level.
   *
   * References:
   *
   * Sayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V,
   * Church DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY,
   * Helmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR,
   * Miller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E,
   * Sherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G,
   * Tatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources
   * of the National Center for Biotechnology Information. Nucleic Acids
   * Res. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.
   *
   * Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009).
   * GenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31.
   * Epub 2008 Oct 21.
   *
   * Examples:
   * Archaea, Bacteria, Eukaryota, Adnaviria, Bicaudaviridae, Clavaviridae, Duplodnaviria
   *
   */
  ncbi_parent_scientific_name?: Maybe<Scalars['String']['output']>;
  /**
   * The scientific name associated with this taxonomy code aggregated by the NCBI Taxonomy Database.
   *
   *   This name corresponds to the taxonomy identifier assigned by the PDB depositor.
   *
   *
   * References:
   *
   * Sayers EW, Barrett T, Benson DA, Bryant SH, Canese K, Chetvernin V,
   * Church DM, DiCuccio M, Edgar R, Federhen S, Feolo M, Geer LY,
   * Helmberg W, Kapustin Y, Landsman D, Lipman DJ, Madden TL, Maglott DR,
   * Miller V, Mizrachi I, Ostell J, Pruitt KD, Schuler GD, Sequeira E,
   * Sherry ST, Shumway M, Sirotkin K, Souvorov A, Starchenko G,
   * Tatusova TA, Wagner L, Yaschenko E, Ye J (2009). Database resources
   * of the National Center for Biotechnology Information. Nucleic Acids
   * Res. 2009 Jan;37(Database issue):D5-15. Epub 2008 Oct 21.
   *
   * Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Sayers EW (2009).
   * GenBank. Nucleic Acids Res. 2009 Jan;37(Database issue):D26-31.
   * Epub 2008 Oct 21.
   */
  ncbi_scientific_name?: Maybe<Scalars['String']['output']>;
  /**
   * NCBI Taxonomy identifier for the gene source organism assigned by the PDB depositor.
   *
   *  Reference:
   *
   *  Wheeler DL, Chappey C, Lash AE, Leipe DD, Madden TL, Schuler GD,
   *  Tatusova TA, Rapp BA (2000). Database resources of the National
   *  Center for Biotechnology Information. Nucleic Acids Res 2000 Jan
   *  1;28(1):10-4
   *
   *  Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Rapp BA,
   *  Wheeler DL (2000). GenBank. Nucleic Acids Res 2000 Jan 1;28(1):15-18.
   */
  ncbi_taxonomy_id?: Maybe<Scalars['Int']['output']>;
  /** An identifier for the entity segment. */
  pdbx_src_id: Scalars['Int']['output'];
  /**
   * Reference to the provenance of the source organism details for the entity.
   *  Primary data indicates information obtained from the same source as the structural model.
   *  UniProt and NCBI are provided as alternate sources of provenance for organism details.
   *
   * Allowable values:
   * NCBI, PDB Primary Data, Primary Data, UniProt
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  rcsb_gene_name?: Maybe<Array<Maybe<RcsbEntitySourceOrganismRcsbGeneName>>>;
  /** The scientific name of the source organism assigned by the PDB depositor. */
  scientific_name?: Maybe<Scalars['String']['output']>;
  /**
   * The source type for the entity
   *
   * Allowable values:
   * genetically engineered, natural, synthetic
   *
   */
  source_type?: Maybe<Scalars['String']['output']>;
  taxonomy_lineage?: Maybe<Array<Maybe<RcsbEntitySourceOrganismTaxonomyLineage>>>;
}

export interface RcsbEntitySourceOrganismRcsbGeneName {
  __typename?: 'RcsbEntitySourceOrganismRcsbGeneName';
  /**
   * A code indicating the provenance of the source organism details for the entity
   *
   * Allowable values:
   * NCBI, PDB Primary Data, Primary Data, UniProt
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * Gene name.
   *
   * Examples:
   * lacA, hemH
   *
   */
  value?: Maybe<Scalars['String']['output']>;
}

export interface RcsbEntitySourceOrganismTaxonomyLineage {
  __typename?: 'RcsbEntitySourceOrganismTaxonomyLineage';
  /** Members of the NCBI Taxonomy lineage as parent taxonomy lineage depth (1-N) */
  depth?: Maybe<Scalars['Int']['output']>;
  /**
   * Members of the NCBI Taxonomy lineage as parent taxonomy idcodes.
   *
   * Examples:
   * 9606, 10090
   *
   */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Memebers of the NCBI Taxonomy lineage as parent taxonomy names.
   *
   * Examples:
   * Homo sapiens, Mus musculus
   *
   */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbEntryContainerIdentifiers {
  __typename?: 'RcsbEntryContainerIdentifiers';
  /** List of identifiers for assemblies generated from the entry. */
  assembly_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** List of identifiers for the branched entity constituents for the entry. */
  branched_entity_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * List of EMDB identifiers for the 3D electron microscopy density maps
   *  used in the production of the structure model.
   */
  emdb_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** List of identifiers or the entity constituents for the entry. */
  entity_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Entry identifier for the container.
   *
   * Examples:
   * 4HHB, AF_AFP60325F1, MA_MABAKCEPC0019
   *
   */
  entry_id: Scalars['String']['output'];
  /** List of PDB model identifiers for the entry. */
  model_ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** List of identifiers for the non-polymer entity constituents for the entry. */
  non_polymer_entity_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** List of identifiers for the polymer entity constituents for the entry. */
  polymer_entity_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Unique integer value assigned to each PubMed record. */
  pubmed_id?: Maybe<Scalars['Int']['output']>;
  /**
   * A unique identifier for each object in this entry container.
   *
   * Examples:
   * 1KIP
   *
   */
  rcsb_id?: Maybe<Scalars['String']['output']>;
  /**
   * List of EMDB identifiers for the 3D electron microscopy density maps
   *  related to the structure model.
   */
  related_emdb_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** List of identifiers for the solvent/water entity constituents for the entry. */
  water_entity_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
}

export interface RcsbEntryGroupMembership {
  __typename?: 'RcsbEntryGroupMembership';
  /**
   * Method used to establish group membership
   *
   * Allowable values:
   * matching_deposit_group_id
   *
   */
  aggregation_method: Scalars['String']['output'];
  /**
   * A unique identifier for a group of entries
   *
   * Examples:
   * G_1001001
   *
   */
  group_id: Scalars['String']['output'];
}

export interface RcsbEntryInfo {
  __typename?: 'RcsbEntryInfo';
  /** The number of assemblies defined for this entry including the deposited assembly. */
  assembly_count?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct branched entities in the structure entry. */
  branched_entity_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The maximum molecular mass (KDa) of a branched entity in the deposited structure entry.
   *
   * Examples:
   * null, null
   *
   */
  branched_molecular_weight_maximum?: Maybe<Scalars['Float']['output']>;
  /**
   * The minimum molecular mass (KDa) of a branched entity in the deposited structure entry.
   *
   * Examples:
   * null, null
   *
   */
  branched_molecular_weight_minimum?: Maybe<Scalars['Float']['output']>;
  /** The number of cis-peptide linkages per deposited structure model. */
  cis_peptide_count?: Maybe<Scalars['Int']['output']>;
  /** The number of heavy atom coordinates records per deposited structure model. */
  deposited_atom_count?: Maybe<Scalars['Int']['output']>;
  /** The number of deuterated water molecules per deposited structure model. */
  deposited_deuterated_water_count?: Maybe<Scalars['Int']['output']>;
  /** The number of hydrogen atom coordinates records per deposited structure model. */
  deposited_hydrogen_atom_count?: Maybe<Scalars['Int']['output']>;
  /** The number of model structures deposited. */
  deposited_model_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of modeled polymer monomers in the deposited coordinate data.
   *  This is the total count of monomers with reported coordinate data for all polymer
   *  entity instances in the deposited coordinate data.
   */
  deposited_modeled_polymer_monomer_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of non-polymer instances in the deposited data set.
   *  This is the total count of non-polymer entity instances reported
   *  per deposited structure model.
   */
  deposited_nonpolymer_entity_instance_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of polymer instances in the deposited data set.
   *  This is the total count of polymer entity instances reported
   *  per deposited structure model.
   */
  deposited_polymer_entity_instance_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of polymer monomers in sample entity instances in the deposited data set.
   *  This is the total count of monomers for all polymer entity instances reported
   *  per deposited structure model.
   */
  deposited_polymer_monomer_count?: Maybe<Scalars['Int']['output']>;
  /** The number of heavy solvent atom coordinates records per deposited structure model. */
  deposited_solvent_atom_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of unmodeled polymer monomers in the deposited coordinate data. This is
   *  the total count of monomers with unreported coordinate data for all polymer
   *  entity instances per deposited structure model.
   */
  deposited_unmodeled_polymer_monomer_count?: Maybe<Scalars['Int']['output']>;
  /** The maximum radiation wavelength in angstroms. */
  diffrn_radiation_wavelength_maximum?: Maybe<Scalars['Float']['output']>;
  /** The minimum radiation wavelength in angstroms. */
  diffrn_radiation_wavelength_minimum?: Maybe<Scalars['Float']['output']>;
  diffrn_resolution_high?: Maybe<RcsbEntryInfoDiffrnResolutionHigh>;
  /** The number of disulfide bonds per deposited structure model. */
  disulfide_bond_count?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct polymer, non-polymer, branched molecular, and solvent entities per deposited structure model. */
  entity_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The category of experimental method(s) used to determine the structure entry.
   *
   * Allowable values:
   * EM, Integrative, Multiple methods, NMR, Neutron, Other, X-ray
   *
   */
  experimental_method?: Maybe<Scalars['String']['output']>;
  /** The number of experimental methods contributing data to the structure determination. */
  experimental_method_count?: Maybe<Scalars['Int']['output']>;
  /**
   * Multi-scale modeling flag for integrative structures.
   *
   * Allowable values:
   * N, Y
   *
   */
  ihm_multi_scale_flag?: Maybe<Scalars['String']['output']>;
  /**
   * Multi-state modeling flag for integrative structures.
   *
   * Allowable values:
   * N, Y
   *
   */
  ihm_multi_state_flag?: Maybe<Scalars['String']['output']>;
  /**
   * Ordered-state modeling flag for integrative structures.
   *
   * Allowable values:
   * N, Y
   *
   */
  ihm_ordered_state_flag?: Maybe<Scalars['String']['output']>;
  /** Description of the integrative structure. */
  ihm_structure_description?: Maybe<Scalars['String']['output']>;
  /** The number of intermolecular covalent bonds. */
  inter_mol_covalent_bond_count?: Maybe<Scalars['Int']['output']>;
  /** The number of intermolecular metalic bonds. */
  inter_mol_metalic_bond_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The molecular mass (KDa) of polymer and non-polymer entities (exclusive of solvent) in the deposited structure entry.
   *
   * Examples:
   * null, null
   *
   */
  molecular_weight?: Maybe<Scalars['Float']['output']>;
  /**
   * Nucleic acid polymer entity type categories describing the entry.
   *
   * Allowable values:
   * DNA (only), DNA/RNA (only), NA-hybrid (only), Other, RNA (only)
   *
   */
  na_polymer_entity_types?: Maybe<Scalars['String']['output']>;
  /**
   * This data item identifies secondary structure
   *  features of nucleic acids in the entry.
   *
   * Allowable values:
   * a-form double helix, b-form double helix, bulge loop, double helix, four-way junction, hairpin loop, internal loop, mismatched base pair, other right-handed double helix, parallel strands, quadruple helix, tetraloop, three-way junction, triple helix, two-way junction, z-form double helix
   *
   */
  ndb_struct_conf_na_feature_combined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Bound nonpolymer components in this entry. */
  nonpolymer_bound_components?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The number of distinct non-polymer entities in the structure entry exclusive of solvent. */
  nonpolymer_entity_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The maximum molecular mass (KDa) of a non-polymer entity in the deposited structure entry.
   *
   * Examples:
   * null, null
   *
   */
  nonpolymer_molecular_weight_maximum?: Maybe<Scalars['Float']['output']>;
  /**
   * The minimum molecular mass (KDa) of a non-polymer entity in the deposited structure entry.
   *
   * Examples:
   * null, null
   *
   */
  nonpolymer_molecular_weight_minimum?: Maybe<Scalars['Float']['output']>;
  /**
   * Categories describing the polymer entity composition for the entry.
   *
   * Allowable values:
   * DNA, DNA/RNA, NA-hybrid, NA/oligosaccharide, RNA, heteromeric protein, homomeric protein, oligosaccharide, other, other type composition, other type pair, protein/NA, protein/NA/oligosaccharide, protein/oligosaccharide
   *
   */
  polymer_composition?: Maybe<Scalars['String']['output']>;
  /** The number of distinct polymer entities in the structure entry. */
  polymer_entity_count?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct DNA polymer entities. */
  polymer_entity_count_DNA?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct RNA polymer entities. */
  polymer_entity_count_RNA?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct nucleic acid polymer entities (DNA or RNA). */
  polymer_entity_count_nucleic_acid?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct hybrid nucleic acid polymer entities. */
  polymer_entity_count_nucleic_acid_hybrid?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct protein polymer entities. */
  polymer_entity_count_protein?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct taxonomies represented among the polymer entities in the entry. */
  polymer_entity_taxonomy_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The maximum molecular mass (KDa) of a polymer entity in the deposited structure entry.
   *
   * Examples:
   * null, null
   *
   */
  polymer_molecular_weight_maximum?: Maybe<Scalars['Float']['output']>;
  /**
   * The minimum molecular mass (KDa) of a polymer entity in the deposited structure entry.
   *
   * Examples:
   * null, null
   *
   */
  polymer_molecular_weight_minimum?: Maybe<Scalars['Float']['output']>;
  /** The maximum monomer count of a polymer entity per deposited structure model. */
  polymer_monomer_count_maximum?: Maybe<Scalars['Int']['output']>;
  /** The minimum monomer count of a polymer entity per deposited structure model. */
  polymer_monomer_count_minimum?: Maybe<Scalars['Int']['output']>;
  /** The chosen representative model. */
  representative_model?: Maybe<Scalars['Int']['output']>;
  /**
   * Combined estimates of experimental resolution contributing to the refined structural model.
   *  Resolution reported in "refine.ls_d_res_high" is used for X-RAY DIFFRACTION, FIBER DIFFRACTION,
   *  POWDER DIFFRACTION, ELECTRON CRYSTALLOGRAPHY, and NEUTRON DIFFRACTION as identified in
   *  "refine.pdbx_refine_id".
   *  Resolution reported in "em_3d_reconstruction.resolution" is used for ELECTRON MICROSCOPY.
   *  The best value corresponding to "em_3d_reconstruction.resolution_method" == "FSC 0.143 CUT-OFF"
   *  is used, if available. If not, the best "em_3d_reconstruction.resolution" value is used.
   *  For structures that are not obtained from diffraction-based methods, the resolution values in
   *  "refine.ls_d_res_high" are ignored.
   *  Multiple values are reported only if multiple methods are used in the structure determination.
   */
  resolution_combined?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /**
   * Selected polymer entity type categories describing the entry.
   *
   * Allowable values:
   * Nucleic acid (only), Oligosaccharide (only), Other, Protein (only), Protein/NA, Protein/Oligosaccharide
   *
   */
  selected_polymer_entity_types?: Maybe<Scalars['String']['output']>;
  /** Combined list of software programs names reported in connection with the production of this entry. */
  software_programs_combined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The number of distinct solvent entities per deposited structure model. */
  solvent_entity_count?: Maybe<Scalars['Int']['output']>;
  /**
   * Indicates if the structure was determined using experimental or computational methods.
   *
   * Allowable values:
   * computational, experimental, integrative
   *
   */
  structure_determination_methodology: Scalars['String']['output'];
  /**
   * Indicates the priority of the value in _rcsb_entry_info.structure_determination_methodology.
   *  The lower the number the higher the priority.
   *  Priority values for "experimental" structures is currently set to 10 and
   *  the values for "computational" structures is set to 100.
   */
  structure_determination_methodology_priority?: Maybe<Scalars['Int']['output']>;
}

export interface RcsbEntryInfoDiffrnResolutionHigh {
  __typename?: 'RcsbEntryInfoDiffrnResolutionHigh';
  /**
   * The provenence source for the high resolution limit of data collection.
   *
   * Allowable values:
   * Depositor assigned, From refinement resolution cutoff, From the high resolution shell
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /** The high resolution limit of data collection. */
  value?: Maybe<Scalars['Float']['output']>;
}

export interface RcsbExternalReferences {
  __typename?: 'RcsbExternalReferences';
  /** ID (accession) from external resource linked to this entry. */
  id: Scalars['String']['output'];
  /** Link to this entry in external resource. */
  link: Scalars['String']['output'];
  /**
   * Internal identifier for external resource.
   *
   * Allowable values:
   * OLDERADO, BMRB, NDB, NAKB, SB GRID, PROTEIN DIFFRACTION, EM DATA RESOURCE
   *
   */
  type: Scalars['String']['output'];
}

export interface RcsbGenomicLineage {
  __typename?: 'RcsbGenomicLineage';
  /** Classification hierarchy depth. */
  depth?: Maybe<Scalars['Int']['output']>;
  /**
   * Automatically assigned ID that uniquely identifies taxonomy, chromosome or gene in the Genome Location Browser.
   *
   * Examples:
   * 9606, 568815441, 414325
   *
   */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * A human-readable term name.
   *
   * Examples:
   * Homo sapiens, 8, defensin beta 103A
   *
   */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbGroupAccessionInfo {
  __typename?: 'RcsbGroupAccessionInfo';
  /** Identifies the version of the groups solution */
  version: Scalars['Int']['output'];
}

export interface RcsbGroupAggregationMethod {
  __typename?: 'RcsbGroupAggregationMethod';
  /** The details on a method used to calculate cluster solutions */
  method: RcsbGroupAggregationMethodMethod;
  similarity_criteria?: Maybe<RcsbGroupAggregationMethodSimilarityCriteria>;
  /**
   * Specifies the type of similarity criteria used to aggregate members into higher levels in the hierarchy
   *
   * Allowable values:
   * sequence_identity, matching_uniprot_accession, matching_deposit_group_id, matching_chemical_component_id
   *
   */
  type: Scalars['String']['output'];
}

export interface RcsbGroupAggregationMethodMethod {
  __typename?: 'RcsbGroupAggregationMethodMethod';
  /** Additional details describing the clustering process */
  details?: Maybe<Array<Maybe<MethodDetails>>>;
  /**
   * The name of the software or the method used to calculate cluster solutions
   *
   * Allowable values:
   * mmseqs2, matching_reference_identity
   *
   */
  name: Scalars['String']['output'];
  /**
   * The version of the software.
   *
   * Examples:
   * v1.0, 3.1-2, unknown
   *
   */
  version?: Maybe<Scalars['String']['output']>;
}

export interface RcsbGroupAggregationMethodSimilarityCriteria {
  __typename?: 'RcsbGroupAggregationMethodSimilarityCriteria';
  /**
   * A function or similarity measure that quantifies the similarity between two members
   *
   * Allowable values:
   * rmsd, sequence_identity
   *
   */
  similarity_function?: Maybe<Scalars['String']['output']>;
}

export interface RcsbGroupContainerIdentifiers {
  __typename?: 'RcsbGroupContainerIdentifiers';
  /** A unique textual identifier for a group */
  group_id: Scalars['String']['output'];
  /** Member identifiers representing a group */
  group_member_ids: Array<Maybe<Scalars['String']['output']>>;
  /**
   * A unique group provenance identifier
   *
   * Allowable values:
   * provenance_sequence_identity, provenance_matching_uniprot_accession, provenance_matching_deposit_group_id, provenance_matching_chemical_component_id
   *
   */
  group_provenance_id: Scalars['String']['output'];
  /** Member identifiers representing a higher level in the groping hierarchy that has parent-child relationship */
  parent_member_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
}

export interface RcsbGroupInfo {
  __typename?: 'RcsbGroupInfo';
  group_description?: Maybe<Scalars['String']['output']>;
  group_members_count: Scalars['Int']['output'];
  /**
   * Granularity of group members identifiers
   *
   * Allowable values:
   * assembly, entry, polymer_entity, non_polymer_entity, polymer_entity_instance
   *
   */
  group_members_granularity: Scalars['String']['output'];
  group_name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbGroupProvenanceContainerIdentifiers {
  __typename?: 'RcsbGroupProvenanceContainerIdentifiers';
  /**
   * A unique group provenance identifier
   *
   * Allowable values:
   * provenance_sequence_identity, provenance_matching_uniprot_accession, provenance_matching_deposit_group_id, provenance_matching_chemical_component_id
   *
   */
  group_provenance_id: Scalars['String']['output'];
}

export interface RcsbGroupRelated {
  __typename?: 'RcsbGroupRelated';
  /**
   * A unique code assigned to a reference related the group
   *
   * Examples:
   * P69905
   *
   */
  resource_accession_code?: Maybe<Scalars['String']['output']>;
  /**
   * Defines the type of the resource describing related references
   *
   * Examples:
   * UniProt
   *
   */
  resource_name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbGroupStatistics {
  __typename?: 'RcsbGroupStatistics';
  /** The desired lower limit for the similarity between two members that belong to the same group */
  similarity_cutoff?: Maybe<Scalars['Float']['output']>;
  /** Similarity score between two most similar group members */
  similarity_score_max?: Maybe<Scalars['Float']['output']>;
  /** Similarity score between two least similar group members */
  similarity_score_min?: Maybe<Scalars['Float']['output']>;
}

export interface RcsbIhmDatasetList {
  __typename?: 'RcsbIhmDatasetList';
  /** Number of input datasets used in integrative modeling. */
  count?: Maybe<Scalars['Int']['output']>;
  /**
   * Name of input dataset used in integrative modeling.
   *
   * Allowable values:
   * 2DEM class average, 3DEM volume, CX-MS data, Comparative model, Crosslinking-MS data, DNA footprinting data, De Novo model, EM raw micrographs, EPR data, Ensemble FRET data, Experimental model, H/D exchange data, Hydroxyl radical footprinting data, Integrative model, Mass Spectrometry data, Mutagenesis data, NMR data, Other, Predicted contacts, Quantitative measurements of genetic interactions, SAS data, Single molecule FRET data, X-ray diffraction data, Yeast two-hybrid screening data
   *
   */
  name: Scalars['String']['output'];
  /**
   * Type of input dataset used in integrative modeling.
   *
   * Allowable values:
   * Computed restraints, Experimental data, Other, Starting model
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbIhmDatasetSourceDbReference {
  __typename?: 'RcsbIhmDatasetSourceDbReference';
  /**
   * Accession code for the input dataset.
   *
   * Examples:
   * 5FM1, EMD-2799, SASDA82, PXD003381, MA-CO2KC
   *
   */
  accession_code: Scalars['String']['output'];
  /**
   * Name of the source database for the input dataset.
   *
   * Allowable values:
   * AlphaFoldDB, BMRB, BMRbig, BioGRID, EMDB, EMPIAR, MASSIVE, ModelArchive, Other, PDB, PDB-Dev, PRIDE, ProXL, ProteomeXchange, SASBDB, iProX, jPOSTrepo
   *
   */
  db_name: Scalars['String']['output'];
}

export interface RcsbInterfaceContainerIdentifiers {
  __typename?: 'RcsbInterfaceContainerIdentifiers';
  /** This item references an assembly in pdbx_struct_assembly */
  assembly_id: Scalars['String']['output'];
  /** Entry identifier for the container. */
  entry_id: Scalars['String']['output'];
  /**
   * Identifier for NCS-equivalent interfaces within the assembly (same entity_ids on both sides)
   *
   * Examples:
   * 1, 2
   *
   */
  interface_entity_id?: Maybe<Scalars['String']['output']>;
  /**
   * Identifier for the geometrically equivalent (same asym_ids on either side) interfaces within the assembly
   *
   * Examples:
   * 1, 2
   *
   */
  interface_id: Scalars['String']['output'];
  /**
   * Unique identifier for the document
   *
   * Examples:
   * 2UZI-1.A.B?1
   *
   */
  rcsb_id: Scalars['String']['output'];
}

export interface RcsbInterfaceInfo {
  __typename?: 'RcsbInterfaceInfo';
  /** Total interface buried surface area */
  interface_area?: Maybe<Scalars['Float']['output']>;
  /** Allowable values: homo, hetero. */
  interface_character?: Maybe<Scalars['String']['output']>;
  /** Number of core interface residues, defined as those that bury >90% accessible surface area with respect to the unbound state */
  num_core_interface_residues?: Maybe<Scalars['Int']['output']>;
  /** Number of interface residues, defined as those with burial fraction > 0 */
  num_interface_residues?: Maybe<Scalars['Int']['output']>;
  /** Allowable values: Nucleic acid (only), Protein (only), Protein/NA. */
  polymer_composition?: Maybe<Scalars['String']['output']>;
  /** The Jaccard score (intersection over union) of interface contacts in homomeric interfaces, comparing contact sets left-right vs right-left. High values indicate isologous (symmetric) interfaces, with value=1 if perfectly symmetric (e.g. crystallographic symmetry) */
  self_jaccard_contact_score?: Maybe<Scalars['Float']['output']>;
}

export interface RcsbInterfacePartner {
  __typename?: 'RcsbInterfacePartner';
  interface_partner_feature?: Maybe<Array<Maybe<RcsbInterfacePartnerInterfacePartnerFeature>>>;
  interface_partner_identifier?: Maybe<RcsbInterfacePartnerInterfacePartnerIdentifier>;
}

export interface RcsbInterfacePartnerInterfacePartnerFeature {
  __typename?: 'RcsbInterfacePartnerInterfacePartnerFeature';
  additional_properties?: Maybe<Array<Maybe<InterfacePartnerFeatureAdditionalProperties>>>;
  /**
   * Identifies the version of the feature assignment.
   *
   * Examples:
   * V4_0_2
   *
   */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /** A description for the feature. */
  description?: Maybe<Scalars['String']['output']>;
  /** An identifier for the feature. */
  feature_id?: Maybe<Scalars['String']['output']>;
  feature_positions?: Maybe<Array<Maybe<InterfacePartnerFeatureFeaturePositions>>>;
  /** A name for the feature. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Code identifying the individual, organization or program that assigned the feature.
   *
   * Examples:
   * NACCESS
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the feature.
   *
   * Allowable values:
   * ASA_UNBOUND, ASA_BOUND
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbInterfacePartnerInterfacePartnerIdentifier {
  __typename?: 'RcsbInterfacePartnerInterfacePartnerIdentifier';
  /** Instance identifier for this container. */
  asym_id: Scalars['String']['output'];
  /** Polymer entity identifier for the container. */
  entity_id: Scalars['String']['output'];
}

export interface RcsbLatestRevision {
  __typename?: 'RcsbLatestRevision';
  /** The major version number of the latest revision. */
  major_revision?: Maybe<Scalars['Int']['output']>;
  /** The minor version number of the latest revision. */
  minor_revision?: Maybe<Scalars['Int']['output']>;
  /** The release date of the latest revision item. */
  revision_date?: Maybe<Scalars['Date']['output']>;
}

export interface RcsbLigandNeighbors {
  __typename?: 'RcsbLigandNeighbors';
  /** Alternate conformer identifier for the target instance. */
  alt_id?: Maybe<Scalars['String']['output']>;
  /**
   * The atom identifier for the target instance.
   *
   * Examples:
   * O1, N1, C1
   *
   */
  atom_id?: Maybe<Scalars['String']['output']>;
  /** The author residue index for the target instance. */
  auth_seq_id?: Maybe<Scalars['Int']['output']>;
  /** Component identifier for the target instance. */
  comp_id?: Maybe<Scalars['String']['output']>;
  /** Distance value for this ligand interaction. */
  distance?: Maybe<Scalars['Float']['output']>;
  /** Alternate conformer identifier for the ligand interaction. */
  ligand_alt_id?: Maybe<Scalars['String']['output']>;
  /**
   * The entity instance identifier for the ligand interaction.
   *
   * Examples:
   * A, B
   *
   */
  ligand_asym_id?: Maybe<Scalars['String']['output']>;
  /**
   * The atom identifier for the ligand interaction.
   *
   * Examples:
   * OG, OE1, CD1
   *
   */
  ligand_atom_id?: Maybe<Scalars['String']['output']>;
  /**
   * The chemical component identifier for the ligand interaction.
   *
   * Examples:
   * ASN, TRP, SER
   *
   */
  ligand_comp_id?: Maybe<Scalars['String']['output']>;
  /**
   * The entity identifier for the ligand of interaction.
   *
   * Examples:
   * 1, 2
   *
   */
  ligand_entity_id?: Maybe<Scalars['String']['output']>;
  /**
   * A flag to indicate the nature of the ligand interaction is covalent or metal-coordination.
   *
   * Allowable values:
   * N, Y
   *
   */
  ligand_is_bound?: Maybe<Scalars['String']['output']>;
  /** Model identifier for the ligand interaction. */
  ligand_model_id?: Maybe<Scalars['Int']['output']>;
  /** The sequence position for the target instance. */
  seq_id?: Maybe<Scalars['Int']['output']>;
}

export interface RcsbMaQaMetricGlobal {
  __typename?: 'RcsbMaQaMetricGlobal';
  ma_qa_metric_global?: Maybe<Array<Maybe<RcsbMaQaMetricGlobalMaQaMetricGlobal>>>;
  /** The model identifier. */
  model_id: Scalars['Int']['output'];
}

export interface RcsbMaQaMetricGlobalMaQaMetricGlobal {
  __typename?: 'RcsbMaQaMetricGlobalMaQaMetricGlobal';
  /**
   * Description of the global QA metric.
   *
   * Examples:
   * confidence score predicting accuracy according to the CA-only Local Distance Difference Test (lDDT-CA) in [0,100]
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * Name of the global QA metric.
   *
   * Examples:
   * pLDDT
   *
   */
  name: Scalars['String']['output'];
  /**
   * The type of global QA metric.
   *
   * Allowable values:
   * PAE, contact probability, distance, energy, ipTM, normalized score, other, pLDDT, pLDDT all-atom, pLDDT all-atom in [0,1], pLDDT in [0,1], pTM, zscore
   *
   */
  type: Scalars['String']['output'];
  /** Details for other type of global QA metric. */
  type_other_details?: Maybe<Scalars['String']['output']>;
  /**
   * Value of the global QA metric.
   *
   * Examples:
   * null
   *
   */
  value: Scalars['Float']['output'];
}

export interface RcsbMembraneLineage {
  __typename?: 'RcsbMembraneLineage';
  /** Hierarchy depth. */
  depth?: Maybe<Scalars['Int']['output']>;
  /**
   * Automatically assigned ID for membrane classification term in the Membrane Protein Browser.
   *
   * Examples:
   * MONOTOPIC MEMBRANE PROTEINS.Oxidases.Monoamine Oxidase A
   *
   */
  id?: Maybe<Scalars['String']['output']>;
  /** Membrane protein classification term. */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbNonpolymerEntity {
  __typename?: 'RcsbNonpolymerEntity';
  /** A description of special aspects of the entity. */
  details?: Maybe<Scalars['String']['output']>;
  /** Formula mass (KDa) of the entity. */
  formula_weight?: Maybe<Scalars['Float']['output']>;
  /** A description of the nonpolymer entity. */
  pdbx_description?: Maybe<Scalars['String']['output']>;
  /** The number of molecules of the nonpolymer entity in the entry. */
  pdbx_number_of_molecules?: Maybe<Scalars['Int']['output']>;
}

export interface RcsbNonpolymerEntityAnnotation {
  __typename?: 'RcsbNonpolymerEntityAnnotation';
  /** An identifier for the annotation. */
  annotation_id?: Maybe<Scalars['String']['output']>;
  annotation_lineage?: Maybe<Array<Maybe<RcsbNonpolymerEntityAnnotationAnnotationLineage>>>;
  /**
   * Identifies the version of the annotation assignment.
   *
   * Examples:
   * V4_0_2
   *
   */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /**
   * Non-polymer(ligand) chemical component identifier for the entity.
   *
   * Examples:
   * GTP, STN
   *
   */
  comp_id?: Maybe<Scalars['String']['output']>;
  /** A description for the annotation. */
  description?: Maybe<Scalars['String']['output']>;
  /** A name for the annotation. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Code identifying the individual, organization or program that
   *  assigned the annotation.
   *
   * Examples:
   * PDB
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the annotation.
   *
   * Allowable values:
   * SUBJECT_OF_INVESTIGATION
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbNonpolymerEntityAnnotationAnnotationLineage {
  __typename?: 'RcsbNonpolymerEntityAnnotationAnnotationLineage';
  /** Members of the annotation lineage as parent lineage depth (1-N) */
  depth?: Maybe<Scalars['Int']['output']>;
  /** Members of the annotation lineage as parent class identifiers. */
  id?: Maybe<Scalars['String']['output']>;
  /** Members of the annotation lineage as parent class names. */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbNonpolymerEntityContainerIdentifiers {
  __typename?: 'RcsbNonpolymerEntityContainerIdentifiers';
  /** Instance identifiers corresponding to copies of the entity in this container. */
  asym_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Author instance identifiers corresponding to copies of the entity in this container. */
  auth_asym_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The chemical reference definition identifier for the entity in this container.
   *
   * Examples:
   * PRD_000010
   *
   */
  chem_ref_def_id?: Maybe<Scalars['String']['output']>;
  /**
   * Entity identifier for the container.
   *
   * Examples:
   * 1, 2
   *
   */
  entity_id: Scalars['String']['output'];
  /**
   * Entry identifier for the container.
   *
   * Examples:
   * 4HHB, 1KIP
   *
   */
  entry_id: Scalars['String']['output'];
  /**
   * Non-polymer(ligand) chemical component identifier for the entity in this container.
   *
   * Examples:
   * GTP, STN
   *
   */
  nonpolymer_comp_id?: Maybe<Scalars['String']['output']>;
  /**
   * The BIRD identifier for the entity in this container.
   *
   * Examples:
   * PRD_000010
   *
   */
  prd_id?: Maybe<Scalars['String']['output']>;
  /**
   * A unique identifier for each object in this entity container formed by
   *  an underscore separated concatenation of entry and entity identifiers.
   *
   * Examples:
   * 6EL3_1
   *
   */
  rcsb_id?: Maybe<Scalars['String']['output']>;
  /**
   * Source of the reference database assignment
   *
   * Allowable values:
   * PDB, RCSB
   *
   */
  reference_chemical_identifiers_provenance_source?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Reference resource accession code */
  reference_chemical_identifiers_resource_accession?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Reference resource name
   *
   * Allowable values:
   * ChEBI, ChEMBL, DrugBank, PubChem
   *
   */
  reference_chemical_identifiers_resource_name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
}

export interface RcsbNonpolymerEntityFeature {
  __typename?: 'RcsbNonpolymerEntityFeature';
  additional_properties?: Maybe<Array<Maybe<RcsbNonpolymerEntityFeatureAdditionalProperties>>>;
  /**
   * Identifies the version of the feature assignment.
   *
   * Examples:
   * V4_0_2
   *
   */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /**
   * Non-polymer(ligand) chemical component identifier for the entity.
   *
   * Examples:
   * GTP, STN
   *
   */
  comp_id?: Maybe<Scalars['String']['output']>;
  /** A description for the feature. */
  description?: Maybe<Scalars['String']['output']>;
  /** An identifier for the feature. */
  feature_id?: Maybe<Scalars['String']['output']>;
  /** A name for the feature. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Code identifying the individual, organization or program that
   *  assigned the feature.
   *
   * Examples:
   * PDB
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the feature.
   *
   * Allowable values:
   * SUBJECT_OF_INVESTIGATION
   *
   */
  type?: Maybe<Scalars['String']['output']>;
  /** The feature value. */
  value?: Maybe<Scalars['Float']['output']>;
}

export interface RcsbNonpolymerEntityFeatureAdditionalProperties {
  __typename?: 'RcsbNonpolymerEntityFeatureAdditionalProperties';
  /** The additional property name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The value(s) of the additional property. */
  values?: Maybe<Array<Maybe<Scalars['ObjectScalar']['output']>>>;
}

export interface RcsbNonpolymerEntityFeatureSummary {
  __typename?: 'RcsbNonpolymerEntityFeatureSummary';
  /**
   * Non-polymer(ligand) chemical component identifier for the entity.
   *
   * Examples:
   * GTP, STN
   *
   */
  comp_id?: Maybe<Scalars['String']['output']>;
  /** The feature count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** The maximum feature length. */
  maximum_length?: Maybe<Scalars['Int']['output']>;
  /**
   * The maximum feature value.
   *
   * Examples:
   * null, null
   *
   */
  maximum_value?: Maybe<Scalars['Float']['output']>;
  /** The minimum feature length. */
  minimum_length?: Maybe<Scalars['Int']['output']>;
  /**
   * The minimum feature value.
   *
   * Examples:
   * null, null
   *
   */
  minimum_value?: Maybe<Scalars['Float']['output']>;
  /**
   * Type or category of the feature.
   *
   * Allowable values:
   * SUBJECT_OF_INVESTIGATION
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbNonpolymerEntityInstanceContainerIdentifiers {
  __typename?: 'RcsbNonpolymerEntityInstanceContainerIdentifiers';
  /** Instance identifier for this container. */
  asym_id: Scalars['String']['output'];
  /** Author instance identifier for this container. */
  auth_asym_id?: Maybe<Scalars['String']['output']>;
  /** Residue number for non-polymer entity instance. */
  auth_seq_id?: Maybe<Scalars['String']['output']>;
  /** Component identifier for non-polymer entity instance. */
  comp_id?: Maybe<Scalars['String']['output']>;
  /** Entity identifier for the container. */
  entity_id?: Maybe<Scalars['String']['output']>;
  /** Entry identifier for the container. */
  entry_id: Scalars['String']['output'];
  /**
   * A unique identifier for each object in this entity instance container formed by
   *  an 'dot' (.) separated concatenation of entry and entity instance identifiers.
   *
   * Examples:
   * 1KIP.A
   *
   */
  rcsb_id?: Maybe<Scalars['String']['output']>;
}

export interface RcsbNonpolymerEntityKeywords {
  __typename?: 'RcsbNonpolymerEntityKeywords';
  /** Keywords describing this non-polymer entity. */
  text?: Maybe<Scalars['String']['output']>;
}

export interface RcsbNonpolymerEntityNameCom {
  __typename?: 'RcsbNonpolymerEntityNameCom';
  /** A common name for the nonpolymer entity. */
  name: Scalars['String']['output'];
}

export interface RcsbNonpolymerInstanceAnnotation {
  __typename?: 'RcsbNonpolymerInstanceAnnotation';
  /** An identifier for the annotation. */
  annotation_id?: Maybe<Scalars['String']['output']>;
  annotation_lineage?: Maybe<Array<Maybe<RcsbNonpolymerInstanceAnnotationAnnotationLineage>>>;
  /**
   * Identifies the version of the annotation assignment.
   *
   * Examples:
   * V4_0_2
   *
   */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /**
   * Non-polymer (ligand) chemical component identifier.
   *
   * Examples:
   * ATP
   *
   */
  comp_id?: Maybe<Scalars['String']['output']>;
  /** A description for the annotation. */
  description?: Maybe<Scalars['String']['output']>;
  /** A name for the annotation. */
  name?: Maybe<Scalars['String']['output']>;
  /** Ordinal identifier for this category */
  ordinal: Scalars['Int']['output'];
  /**
   * Code identifying the individual, organization or program that
   *  assigned the annotation.
   *
   * Examples:
   * PDB
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the annotation.
   *
   * Allowable values:
   * HAS_COVALENT_LINKAGE, HAS_METAL_COORDINATION_LINKAGE, HAS_NO_COVALENT_LINKAGE, IS_RSCC_OUTLIER, IS_RSRZ_OUTLIER
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbNonpolymerInstanceAnnotationAnnotationLineage {
  __typename?: 'RcsbNonpolymerInstanceAnnotationAnnotationLineage';
  /** Members of the annotation lineage as parent lineage depth (1-N) */
  depth?: Maybe<Scalars['Int']['output']>;
  /** Members of the annotation lineage as parent class identifiers. */
  id?: Maybe<Scalars['String']['output']>;
  /** Members of the annotation lineage as parent class names. */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbNonpolymerInstanceFeature {
  __typename?: 'RcsbNonpolymerInstanceFeature';
  additional_properties?: Maybe<Array<Maybe<RcsbNonpolymerInstanceFeatureAdditionalProperties>>>;
  /**
   * Identifies the version of the feature assignment.
   *
   * Examples:
   * V4_0_2
   *
   */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /** Component identifier for non-polymer entity instance. */
  comp_id?: Maybe<Scalars['String']['output']>;
  /** A description for the feature. */
  description?: Maybe<Scalars['String']['output']>;
  /** An identifier for the feature. */
  feature_id?: Maybe<Scalars['String']['output']>;
  feature_value?: Maybe<Array<Maybe<RcsbNonpolymerInstanceFeatureFeatureValue>>>;
  /** A name for the feature. */
  name?: Maybe<Scalars['String']['output']>;
  /** Ordinal identifier for this category */
  ordinal: Scalars['Int']['output'];
  /**
   * Code identifying the individual, organization or program that
   *  assigned the feature.
   *
   * Examples:
   * PDB
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the feature.
   *
   * Allowable values:
   * HAS_COVALENT_LINKAGE, HAS_METAL_COORDINATION_LINKAGE, MODELED_ATOMS, MOGUL_ANGLE_OUTLIER, MOGUL_ANGLE_OUTLIERS, MOGUL_BOND_OUTLIER, MOGUL_BOND_OUTLIERS, MOGUL_RING_OUTLIERS, MOGUL_TORSION_OUTLIERS, RSCC_OUTLIER, RSRZ_OUTLIER, STEREO_OUTLIER, STEREO_OUTLIERS
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbNonpolymerInstanceFeatureAdditionalProperties {
  __typename?: 'RcsbNonpolymerInstanceFeatureAdditionalProperties';
  /**
   * The additional property name.
   *
   * Examples:
   * bond_distance, bond_angle
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /** The value(s) of the additional property. */
  values?: Maybe<Array<Maybe<Scalars['ObjectScalar']['output']>>>;
}

export interface RcsbNonpolymerInstanceFeatureFeatureValue {
  __typename?: 'RcsbNonpolymerInstanceFeatureFeatureValue';
  /**
   * The chemical component identifier for the instance of the feature value.
   *
   * Examples:
   * ATP,, STN
   *
   */
  comp_id?: Maybe<Scalars['String']['output']>;
  /**
   * Specific details about the feature.
   *
   * Examples:
   * C1,C2, C1,C2,C3
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * The reference value of the feature.
   *
   * Examples:
   * null, null
   *
   */
  reference?: Maybe<Scalars['Float']['output']>;
  /**
   * The reported value of the feature.
   *
   * Examples:
   * null, null
   *
   */
  reported?: Maybe<Scalars['Float']['output']>;
  /**
   * The estimated uncertainty of the reported feature value.
   *
   * Examples:
   * null, null
   *
   */
  uncertainty_estimate?: Maybe<Scalars['Float']['output']>;
  /**
   * The type of estimated uncertainty for the reported feature value.
   *
   * Allowable values:
   * Z-Score
   *
   */
  uncertainty_estimate_type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbNonpolymerInstanceFeatureSummary {
  __typename?: 'RcsbNonpolymerInstanceFeatureSummary';
  /** Component identifier for non-polymer entity instance. */
  comp_id?: Maybe<Scalars['String']['output']>;
  /** The feature count. */
  count?: Maybe<Scalars['Int']['output']>;
  /**
   * The fractional feature coverage relative to the full entity sequence.
   *
   * Examples:
   * null, null
   *
   */
  coverage?: Maybe<Scalars['Float']['output']>;
  /** The maximum feature length. */
  maximum_length?: Maybe<Scalars['Int']['output']>;
  /**
   * The maximum feature value.
   *
   * Examples:
   * null, null
   *
   */
  maximum_value?: Maybe<Scalars['Float']['output']>;
  /** The minimum feature length. */
  minimum_length?: Maybe<Scalars['Int']['output']>;
  /**
   * The minimum feature value.
   *
   * Examples:
   * null, null
   *
   */
  minimum_value?: Maybe<Scalars['Float']['output']>;
  /**
   * Type or category of the feature.
   *
   * Allowable values:
   * HAS_COVALENT_LINKAGE, HAS_METAL_COORDINATION_LINKAGE, MODELED_ATOMS, MOGUL_ANGLE_OUTLIER, MOGUL_ANGLE_OUTLIERS, MOGUL_BOND_OUTLIER, MOGUL_BOND_OUTLIERS, MOGUL_RING_OUTLIERS, MOGUL_TORSION_OUTLIERS, RSCC_OUTLIER, RSRZ_OUTLIER, STEREO_OUTLIER, STEREO_OUTLIERS
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbNonpolymerInstanceValidationScore {
  __typename?: 'RcsbNonpolymerInstanceValidationScore';
  /**
   * The real space correlation coefficient (RSCC) for the non-polymer entity instance.
   *
   * Examples:
   * null, null
   *
   */
  RSCC?: Maybe<Scalars['Float']['output']>;
  /**
   * The real space R-value (RSR) for the non-polymer entity instance.
   *
   * Examples:
   * null, null
   *
   */
  RSR?: Maybe<Scalars['Float']['output']>;
  /** Alternate conformer identifier for the non-polymer entity instance. */
  alt_id?: Maybe<Scalars['String']['output']>;
  /**
   * The average heavy atom occupancy for coordinate records for the non-polymer entity instance.
   *
   * Examples:
   * null, null
   *
   */
  average_occupancy?: Maybe<Scalars['Float']['output']>;
  /**
   * The reported fraction of atomic coordinate records for the non-polymer entity instance.
   *
   * Examples:
   * null, null
   *
   */
  completeness?: Maybe<Scalars['Float']['output']>;
  /** The number of intermolecular MolProbity clashes cacluated for reported atomic coordinate records. */
  intermolecular_clashes?: Maybe<Scalars['Int']['output']>;
  /**
   * This molecular instance is ranked as the best quality instance of this nonpolymer entity.
   *
   * Allowable values:
   * N, Y
   *
   */
  is_best_instance?: Maybe<Scalars['String']['output']>;
  /**
   * This molecular entity is identified as the subject of the current study.
   *
   * Allowable values:
   * N, Y
   *
   */
  is_subject_of_investigation?: Maybe<Scalars['String']['output']>;
  /**
   * The provenance for the selection of the molecular entity identified as the subject of the current study.
   *
   * Allowable values:
   * Author, RCSB
   *
   */
  is_subject_of_investigation_provenance?: Maybe<Scalars['String']['output']>;
  /**
   * Number of bond angle outliers obtained from a CCDC Mogul survey of bond angles  in the CSD small
   *    molecule crystal structure database. Outliers are defined as bond angles that have a Z-score
   *    less than -2 or greater than 2.
   */
  mogul_angle_outliers?: Maybe<Scalars['Int']['output']>;
  /**
   * The root-mean-square value of the Z-scores of bond angles for the non-polymer instance in degrees
   * obtained from a CCDC Mogul survey of bond angles in the CSD small molecule crystal structure database.
   *
   * Examples:
   * null, null
   *
   */
  mogul_angles_RMSZ?: Maybe<Scalars['Float']['output']>;
  /**
   * Number of bond distance outliers obtained from a CCDC Mogul survey of bond lengths in the CSD small
   *    molecule crystal structure database.  Outliers are defined as bond distances that have a Z-score
   *    less than -2 or greater than 2.
   */
  mogul_bond_outliers?: Maybe<Scalars['Int']['output']>;
  /**
   * The root-mean-square value of the Z-scores of bond lengths for the nonpolymer instance in Angstroms
   * obtained from a CCDC Mogul survey of bond lengths in the CSD small molecule crystal structure database.
   *
   * Examples:
   * null, null
   *
   */
  mogul_bonds_RMSZ?: Maybe<Scalars['Float']['output']>;
  /** The number of atoms in the non-polymer instance returned by the EDS software. */
  natoms_eds?: Maybe<Scalars['Int']['output']>;
  /** The number of bond angles compared to "standard geometry" made using the Mogul program. */
  num_mogul_angles_RMSZ?: Maybe<Scalars['Int']['output']>;
  /** The number of bond lengths compared to "standard geometry" made using the Mogul program. */
  num_mogul_bonds_RMSZ?: Maybe<Scalars['Int']['output']>;
  /**
   * The ranking of the model fit score component.
   *
   * Examples:
   * null, null
   *
   */
  ranking_model_fit?: Maybe<Scalars['Float']['output']>;
  /**
   * The ranking of the model geometry score component.
   *
   * Examples:
   * null, null
   *
   */
  ranking_model_geometry?: Maybe<Scalars['Float']['output']>;
  /**
   * The value of the model fit score component.
   *
   * Examples:
   * null, null
   *
   */
  score_model_fit?: Maybe<Scalars['Float']['output']>;
  /**
   * The value of the model geometry score component.
   *
   * Examples:
   * null, null
   *
   */
  score_model_geometry?: Maybe<Scalars['Float']['output']>;
  /** Number of stereochemical/chirality errors. */
  stereo_outliers?: Maybe<Scalars['Int']['output']>;
  /**
   * Score type.
   *
   * Allowable values:
   * RCSB_LIGAND_QUALITY_SCORE_2021
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbNonpolymerStructConn {
  __typename?: 'RcsbNonpolymerStructConn';
  connect_partner?: Maybe<RcsbNonpolymerStructConnConnectPartner>;
  connect_target?: Maybe<RcsbNonpolymerStructConnConnectTarget>;
  /**
   * The connection type.
   *
   * Allowable values:
   * covalent bond, disulfide bridge, hydrogen bond, ionic interaction, metal coordination, mismatched base pairs
   *
   */
  connect_type?: Maybe<Scalars['String']['output']>;
  /**
   * A description of special details of the connection.
   *
   * Examples:
   * Watson-Crick base pair
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /** Distance value for this contact. */
  dist_value?: Maybe<Scalars['Float']['output']>;
  /**
   * The value of _rcsb_nonpolymer_struct_conn.id is an identifier for connection.
   *
   *  Note that this item need not be a number; it can be any unique
   *  identifier.
   */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _rcsb_nonpolymer_struct_conn.id must uniquely identify a record in
   *  the rcsb_nonpolymer_struct_conn list.
   */
  ordinal_id: Scalars['Int']['output'];
  /**
   * The chemical or structural role of the interaction
   *
   * Allowable values:
   * C-Mannosylation, N-Glycosylation, O-Glycosylation, S-Glycosylation
   *
   */
  role?: Maybe<Scalars['String']['output']>;
  /**
   * The chemical bond order associated with the specified atoms in
   *  this contact.
   *
   * Allowable values:
   * doub, quad, sing, trip
   *
   */
  value_order?: Maybe<Scalars['String']['output']>;
}

export interface RcsbNonpolymerStructConnConnectPartner {
  __typename?: 'RcsbNonpolymerStructConnConnectPartner';
  /**
   * A component of the identifier for the partner in the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_alt_id in the
   *  ATOM_SITE category.
   */
  label_alt_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the partner in the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_asym_id in the
   *  ATOM_SITE category.
   */
  label_asym_id: Scalars['String']['output'];
  /**
   * A component of the identifier for the partner in the structure
   *  connection.
   *
   *  This data item is a pointer to _chem_comp_atom.atom_id in the
   *  CHEM_COMP_ATOM category.
   */
  label_atom_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the partner in the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_comp_id in the
   *  ATOM_SITE category.
   */
  label_comp_id: Scalars['String']['output'];
  /**
   * A component of the identifier for the partner in the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_seq_id in the
   *  ATOM_SITE category.
   */
  label_seq_id?: Maybe<Scalars['Int']['output']>;
  /**
   * Describes the symmetry operation that should be applied to the
   *  atom set specified by _rcsb_nonpolymer_struct_conn.connect_partner_label* to generate the
   *  partner in the structure connection.
   *
   * Examples:
   * 1_555, 7_645
   *
   */
  symmetry?: Maybe<Scalars['String']['output']>;
}

export interface RcsbNonpolymerStructConnConnectTarget {
  __typename?: 'RcsbNonpolymerStructConnConnectTarget';
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.auth_asym_id in the
   *  ATOM_SITE category.
   */
  auth_asym_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.auth_seq_id in the
   *  ATOM_SITE category.
   */
  auth_seq_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_alt_id in the
   *  ATOM_SITE category.
   */
  label_alt_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_asym_id in the
   *  ATOM_SITE category.
   */
  label_asym_id: Scalars['String']['output'];
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_atom_id in the
   *  ATOM_SITE category.
   */
  label_atom_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_comp_id in the
   *  ATOM_SITE category.
   */
  label_comp_id: Scalars['String']['output'];
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.connect_target_label_seq_id in the
   *  ATOM_SITE category.
   */
  label_seq_id?: Maybe<Scalars['Int']['output']>;
  /**
   * Describes the symmetry operation that should be applied to the
   *  atom set specified by _rcsb_nonpolymer_struct_conn.label* to generate the
   *  target of the structure connection.
   *
   * Examples:
   * 1_555, 7_645
   *
   */
  symmetry?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPfamContainerIdentifiers {
  __typename?: 'RcsbPfamContainerIdentifiers';
  /** Accession number of Pfam entry. */
  pfam_id?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerEntity {
  __typename?: 'RcsbPolymerEntity';
  /** A description of special aspects of the entity. */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * Formula mass (KDa) of the entity.
   *
   * Examples:
   * null, null
   *
   */
  formula_weight?: Maybe<Scalars['Float']['output']>;
  /**
   * A description of the polymer entity.
   *
   * Examples:
   * Green fluorescent protein, 23S ribosomal RNA, NAD-dependent protein deacylase sirtuin-5, mitochondrial
   *
   */
  pdbx_description?: Maybe<Scalars['String']['output']>;
  /**
   * Enzyme Commission (EC) number(s)
   *
   * Examples:
   * 2.7.7.7
   *
   */
  pdbx_ec?: Maybe<Scalars['String']['output']>;
  /**
   * Polymer entity fragment description(s).
   *
   * Examples:
   * KLENOW FRAGMENT, REPLICASE OPERATOR HAIRPIN, C-TERMINAL DOMAIN
   *
   */
  pdbx_fragment?: Maybe<Scalars['String']['output']>;
  /**
   * Details about any polymer entity mutation(s).
   *
   * Examples:
   * Y31H, DEL(298-323)
   *
   */
  pdbx_mutation?: Maybe<Scalars['String']['output']>;
  /** The number of molecules of the entity in the entry. */
  pdbx_number_of_molecules?: Maybe<Scalars['Int']['output']>;
  rcsb_ec_lineage?: Maybe<Array<Maybe<RcsbPolymerEntityRcsbEcLineage>>>;
  rcsb_enzyme_class_combined?: Maybe<Array<Maybe<RcsbPolymerEntityRcsbEnzymeClassCombined>>>;
  rcsb_macromolecular_names_combined?: Maybe<Array<Maybe<RcsbPolymerEntityRcsbMacromolecularNamesCombined>>>;
  /**
   * A code indicating the entity has multiple biological sources.
   *
   * Allowable values:
   * N, Y
   *
   */
  rcsb_multiple_source_flag?: Maybe<Scalars['String']['output']>;
  rcsb_polymer_name_combined?: Maybe<RcsbPolymerEntityRcsbPolymerNameCombined>;
  /**
   * The number of biological sources for the polymer entity. Multiple source contributions
   *  may come from the same organism (taxonomy).
   */
  rcsb_source_part_count?: Maybe<Scalars['Int']['output']>;
  /** The number of distinct source taxonomies for the polymer entity. Commonly used to identify chimeric polymers. */
  rcsb_source_taxonomy_count?: Maybe<Scalars['Int']['output']>;
  /**
   * The method by which the sample for the polymer entity was produced.
   *  Entities isolated directly from natural sources (tissues, soil
   *  samples etc.) are expected to have further information in the
   *  ENTITY_SRC_NAT category. Entities isolated from genetically
   *  manipulated sources are expected to have further information in
   *  the ENTITY_SRC_GEN category.
   *
   * Allowable values:
   * man, nat, syn
   *
   */
  src_method?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerEntityAlign {
  __typename?: 'RcsbPolymerEntityAlign';
  aligned_regions?: Maybe<Array<Maybe<RcsbPolymerEntityAlignAlignedRegions>>>;
  /**
   * Code identifying the individual, organization or program that
   *  assigned the reference sequence.
   *
   * Examples:
   * PDB, SIFTS, RCSB
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * Reference sequence accession code.
   *
   * Examples:
   * Q9HD40
   *
   */
  reference_database_accession?: Maybe<Scalars['String']['output']>;
  /**
   * Reference sequence isoform identifier.
   *
   * Examples:
   * P01116-2
   *
   */
  reference_database_isoform?: Maybe<Scalars['String']['output']>;
  /**
   * Reference sequence database name.
   *
   * Allowable values:
   * EMBL, GenBank, NDB, NORINE, PDB, PIR, PRF, RefSeq, UniProt
   *
   */
  reference_database_name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerEntityAlignAlignedRegions {
  __typename?: 'RcsbPolymerEntityAlignAlignedRegions';
  /** An identifier for the monomer in the entity sequence at which this segment of the alignment begins. */
  entity_beg_seq_id?: Maybe<Scalars['Int']['output']>;
  /** An length of the this segment of the alignment. */
  length?: Maybe<Scalars['Int']['output']>;
  /** An identifier for the monomer in the reference sequence at which this segment of the alignment begins. */
  ref_beg_seq_id?: Maybe<Scalars['Int']['output']>;
}

export interface RcsbPolymerEntityAnnotation {
  __typename?: 'RcsbPolymerEntityAnnotation';
  additional_properties?: Maybe<Array<Maybe<RcsbPolymerEntityAnnotationAdditionalProperties>>>;
  /** An identifier for the annotation. */
  annotation_id?: Maybe<Scalars['String']['output']>;
  annotation_lineage?: Maybe<Array<Maybe<RcsbPolymerEntityAnnotationAnnotationLineage>>>;
  /**
   * Identifies the version of the annotation assignment.
   *
   * Examples:
   * V4_0_2
   *
   */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /** A description for the annotation. */
  description?: Maybe<Scalars['String']['output']>;
  /** A name for the annotation. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Code identifying the individual, organization or program that
   *  assigned the annotation.
   *
   * Examples:
   * PDB, UniProt
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the annotation.
   *
   * Allowable values:
   * CARD, GO, GlyCosmos, GlyGen, InterPro, MemProtMD, OPM, PDBTM, Pfam, mpstruc
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerEntityAnnotationAdditionalProperties {
  __typename?: 'RcsbPolymerEntityAnnotationAdditionalProperties';
  /**
   * The additional property name.
   *
   * Allowable values:
   * CARD_ARO_CATEGORY, CARD_ARO_CVTERM_ID, CARD_ARO_DRUG_CLASS, CARD_ARO_RESISTANCE_MECHANISM
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /** The value(s) of the additional property. */
  values?: Maybe<Array<Maybe<Scalars['ObjectScalar']['output']>>>;
}

export interface RcsbPolymerEntityAnnotationAnnotationLineage {
  __typename?: 'RcsbPolymerEntityAnnotationAnnotationLineage';
  /** Members of the annotation lineage as parent lineage depth (1-N) */
  depth?: Maybe<Scalars['Int']['output']>;
  /** Members of the annotation lineage as parent class identifiers. */
  id?: Maybe<Scalars['String']['output']>;
  /** Members of the annotation lineage as parent class names. */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerEntityContainerIdentifiers {
  __typename?: 'RcsbPolymerEntityContainerIdentifiers';
  /** Instance identifiers corresponding to copies of the entity in this container. */
  asym_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Author instance identifiers corresponding to copies of the entity in this container. */
  auth_asym_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Unique list of monomer chemical component identifiers in the polymer entity in this container. */
  chem_comp_monomers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Unique list of non-standard monomer chemical component identifiers in the polymer entity in this container. */
  chem_comp_nstd_monomers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The chemical reference definition identifier for the entity in this container.
   *
   * Examples:
   * PRD_000010
   *
   */
  chem_ref_def_id?: Maybe<Scalars['String']['output']>;
  /**
   * Entity identifier for the container.
   *
   * Examples:
   * 1, 2
   *
   */
  entity_id: Scalars['String']['output'];
  /**
   * Entry identifier for the container.
   *
   * Examples:
   * 4HHB, 1KIP
   *
   */
  entry_id: Scalars['String']['output'];
  /**
   * The BIRD identifier for the entity in this container.
   *
   * Examples:
   * PRD_000010
   *
   */
  prd_id?: Maybe<Scalars['String']['output']>;
  /**
   * A unique identifier for each object in this entity container formed by
   *  an underscore separated concatenation of entry and entity identifiers.
   *
   * Examples:
   * 6EL3_1
   *
   */
  rcsb_id?: Maybe<Scalars['String']['output']>;
  reference_sequence_identifiers?: Maybe<Array<Maybe<RcsbPolymerEntityContainerIdentifiersReferenceSequenceIdentifiers>>>;
  uniprot_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
}

export interface RcsbPolymerEntityContainerIdentifiersReferenceSequenceIdentifiers {
  __typename?: 'RcsbPolymerEntityContainerIdentifiersReferenceSequenceIdentifiers';
  /**
   * Reference database accession code
   *
   * Examples:
   * P01116, 55771382
   *
   */
  database_accession?: Maybe<Scalars['String']['output']>;
  /**
   * Reference database identifier for the sequence isoform
   *
   * Examples:
   * P01116-2
   *
   */
  database_isoform?: Maybe<Scalars['String']['output']>;
  /**
   * Reference database name
   *
   * Allowable values:
   * EMBL, GenBank, NDB, NORINE, PDB, PIR, PRF, RefSeq, UniProt
   *
   */
  database_name?: Maybe<Scalars['String']['output']>;
  /**
   * Indicates what fraction of this polymer entity sequence is covered by the reference sequence.
   *
   * Examples:
   * null, null
   *
   */
  entity_sequence_coverage?: Maybe<Scalars['Float']['output']>;
  /**
   * Source of the reference database assignment
   *
   * Allowable values:
   * PDB, RCSB, SIFTS, UniProt
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * Indicates what fraction of the reference sequence is covered by this polymer entity sequence.
   *
   * Examples:
   * null, null
   *
   */
  reference_sequence_coverage?: Maybe<Scalars['Float']['output']>;
}

export interface RcsbPolymerEntityFeature {
  __typename?: 'RcsbPolymerEntityFeature';
  additional_properties?: Maybe<Array<Maybe<RcsbPolymerEntityFeatureAdditionalProperties>>>;
  /**
   * Identifies the version of the feature assignment.
   *
   * Examples:
   * V4_0_2
   *
   */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /** A description for the feature. */
  description?: Maybe<Scalars['String']['output']>;
  /** An identifier for the feature. */
  feature_id?: Maybe<Scalars['String']['output']>;
  feature_positions?: Maybe<Array<Maybe<RcsbPolymerEntityFeatureFeaturePositions>>>;
  /** A name for the feature. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Code identifying the individual, organization or program that
   *  assigned the feature.
   *
   * Examples:
   * PDB
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * Code residue coordinate system for the assigned feature.
   *
   * Allowable values:
   * NCBI, PDB entity, UniProt
   *
   */
  reference_scheme?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the feature.
   *
   * Allowable values:
   * CARD_MODEL, IMGT_ANTIBODY_DESCRIPTION, IMGT_ANTIBODY_DOMAIN_NAME, IMGT_ANTIBODY_GENE_ALLELE_NAME, IMGT_ANTIBODY_ORGANISM_NAME, IMGT_ANTIBODY_PROTEIN_NAME, IMGT_ANTIBODY_RECEPTOR_DESCRIPTION, IMGT_ANTIBODY_RECEPTOR_TYPE, Pfam, SABDAB_ANTIBODY_ANTIGEN_NAME, SABDAB_ANTIBODY_NAME, SABDAB_ANTIBODY_TARGET, artifact, modified_monomer, mutation, hydropathy, disorder, disorder_binding
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerEntityFeatureAdditionalProperties {
  __typename?: 'RcsbPolymerEntityFeatureAdditionalProperties';
  /**
   * The additional property name.
   *
   * Allowable values:
   * CARD_MODEL_DESCRIPTION, CARD_MODEL_ORGANISM, PARENT_COMP_ID
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /** The value(s) of the additional property. */
  values?: Maybe<Array<Maybe<Scalars['ObjectScalar']['output']>>>;
}

export interface RcsbPolymerEntityFeatureFeaturePositions {
  __typename?: 'RcsbPolymerEntityFeatureFeaturePositions';
  /**
   * An identifier for the leading monomer corresponding to the feature assignment.
   *
   * Examples:
   * TRP, VAL
   *
   */
  beg_comp_id?: Maybe<Scalars['String']['output']>;
  /** An identifier for the monomer at which this segment of the feature begins. */
  beg_seq_id: Scalars['Int']['output'];
  /** An identifier for the monomer at which this segment of the feature ends. */
  end_seq_id?: Maybe<Scalars['Int']['output']>;
  /**
   * The value for the feature over this monomer segment.
   *
   * Examples:
   * null, null
   *
   */
  value?: Maybe<Scalars['Float']['output']>;
  /** The value(s) for the feature over this monomer segment. */
  values?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
}

export interface RcsbPolymerEntityFeatureSummary {
  __typename?: 'RcsbPolymerEntityFeatureSummary';
  /** The feature count. */
  count?: Maybe<Scalars['Int']['output']>;
  /**
   * The fractional feature coverage relative to the full entity sequence.
   *  For instance, the fraction of features such as mutations, artifacts or modified monomers
   *  relative to the length of the entity sequence.
   *
   * Examples:
   * null, null
   *
   */
  coverage?: Maybe<Scalars['Float']['output']>;
  /** The maximum feature length. */
  maximum_length?: Maybe<Scalars['Int']['output']>;
  /**
   * The maximum feature value.
   *
   * Examples:
   * null, null
   *
   */
  maximum_value?: Maybe<Scalars['Float']['output']>;
  /** The minimum feature length. */
  minimum_length?: Maybe<Scalars['Int']['output']>;
  /**
   * The minimum feature value.
   *
   * Examples:
   * null, null
   *
   */
  minimum_value?: Maybe<Scalars['Float']['output']>;
  /**
   * Type or category of the feature.
   *
   * Allowable values:
   * CARD_MODEL, IMGT_ANTIBODY_DESCRIPTION, IMGT_ANTIBODY_DOMAIN_NAME, IMGT_ANTIBODY_GENE_ALLELE_NAME, IMGT_ANTIBODY_ORGANISM_NAME, IMGT_ANTIBODY_PROTEIN_NAME, IMGT_ANTIBODY_RECEPTOR_DESCRIPTION, IMGT_ANTIBODY_RECEPTOR_TYPE, Pfam, SABDAB_ANTIBODY_ANTIGEN_NAME, SABDAB_ANTIBODY_NAME, SABDAB_ANTIBODY_TARGET, artifact, modified_monomer, mutation
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerEntityGroupMembersRankings {
  __typename?: 'RcsbPolymerEntityGroupMembersRankings';
  group_members: Array<Maybe<RcsbPolymerEntityGroupMembersRankingsGroupMembers>>;
  /**
   * Defines ranking option applicable to group members
   *
   * Allowable values:
   * coverage
   *
   */
  ranking_criteria_type: Scalars['String']['output'];
}

export interface RcsbPolymerEntityGroupMembersRankingsGroupMembers {
  __typename?: 'RcsbPolymerEntityGroupMembersRankingsGroupMembers';
  member_id: Scalars['String']['output'];
  /** Quantifies the criteria used for ranking */
  original_score?: Maybe<Scalars['Float']['output']>;
  /** Reflects a relationship between group members such that, for any two members the first is ranked higher (smaller rank value) than the second */
  rank: Scalars['Int']['output'];
}

export interface RcsbPolymerEntityGroupMembership {
  __typename?: 'RcsbPolymerEntityGroupMembership';
  /**
   * Method used to establish group membership
   *
   * Allowable values:
   * sequence_identity, matching_uniprot_accession
   *
   */
  aggregation_method: Scalars['String']['output'];
  aligned_regions?: Maybe<Array<Maybe<RcsbPolymerEntityGroupMembershipAlignedRegions>>>;
  /**
   * A unique identifier for a group of entities
   *
   * Examples:
   * 1_100, P00003
   *
   */
  group_id: Scalars['String']['output'];
  /** Degree of similarity expressed as a floating-point number */
  similarity_cutoff?: Maybe<Scalars['Float']['output']>;
}

export interface RcsbPolymerEntityGroupMembershipAlignedRegions {
  __typename?: 'RcsbPolymerEntityGroupMembershipAlignedRegions';
  /** An identifier for the monomer in the entity sequence at which this segment of the alignment begins. */
  entity_beg_seq_id?: Maybe<Scalars['Int']['output']>;
  /** An length of the this segment of the alignment. */
  length?: Maybe<Scalars['Int']['output']>;
  /** An identifier for the monomer in the reference sequence at which this segment of the alignment begins. */
  ref_beg_seq_id?: Maybe<Scalars['Int']['output']>;
}

export interface RcsbPolymerEntityGroupSequenceAlignment {
  __typename?: 'RcsbPolymerEntityGroupSequenceAlignment';
  /** Abstract reference where group members can be aligned to generate a MSA */
  abstract_reference: RcsbPolymerEntityGroupSequenceAlignmentAbstractReference;
  /** Alignment with a core_entity canonical sequence */
  group_members_alignment: Array<Maybe<RcsbPolymerEntityGroupSequenceAlignmentGroupMembersAlignment>>;
}

export interface RcsbPolymerEntityGroupSequenceAlignmentAbstractReference {
  __typename?: 'RcsbPolymerEntityGroupSequenceAlignmentAbstractReference';
  /** Abstract reference length */
  length: Scalars['Int']['output'];
  /** Sequence that represents the abstract reference */
  sequence?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerEntityGroupSequenceAlignmentGroupMembersAlignment {
  __typename?: 'RcsbPolymerEntityGroupSequenceAlignmentGroupMembersAlignment';
  /** Alignment region encoded as a triplet [query_begin, target_begin, length] */
  aligned_regions: Array<Maybe<Array<Maybe<Scalars['Int']['output']>>>>;
  member_id: Scalars['String']['output'];
  /** Alignment scores */
  scores: GroupMembersAlignmentScores;
}

export interface RcsbPolymerEntityInstanceContainerIdentifiers {
  __typename?: 'RcsbPolymerEntityInstanceContainerIdentifiers';
  /** Instance identifier for this container. */
  asym_id: Scalars['String']['output'];
  /** Author instance identifier for this container. */
  auth_asym_id?: Maybe<Scalars['String']['output']>;
  /**
   * Residue index mappings between author provided and entity polymer sequence positions.
   *
   *  Author residue indices (auth_seq_num) include insertion codes when present.
   *  The array indices correspond to the indices (1-based) of the deposited sample
   *  sequence (entity_poly_seq). Unmodelled residues are represented with a "?" value.
   */
  auth_to_entity_poly_seq_mapping?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Entity identifier for the container. */
  entity_id?: Maybe<Scalars['String']['output']>;
  /** Entry identifier for the container. */
  entry_id: Scalars['String']['output'];
  /**
   * A unique identifier for each object in this entity instance container formed by
   *  an 'dot' (.) separated concatenation of entry and entity instance identifiers.
   *
   * Examples:
   * 1KIP.A
   *
   */
  rcsb_id?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerEntityKeywords {
  __typename?: 'RcsbPolymerEntityKeywords';
  /** Keywords describing this polymer entity. */
  text?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerEntityNameCom {
  __typename?: 'RcsbPolymerEntityNameCom';
  /**
   * A common name for the polymer entity.
   *
   * Examples:
   * HIV protease monomer, hemoglobin alpha chain
   *
   */
  name: Scalars['String']['output'];
}

export interface RcsbPolymerEntityNameSys {
  __typename?: 'RcsbPolymerEntityNameSys';
  /** The systematic name for the polymer entity. */
  name: Scalars['String']['output'];
  /**
   * The system used to generate the systematic name of the polymer entity.
   *
   * Examples:
   * Chemical Abstracts conventions
   *
   */
  system?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerEntityRcsbEcLineage {
  __typename?: 'RcsbPolymerEntityRcsbEcLineage';
  /** Members of the enzyme classification lineage as parent classification hierarchy depth (1-N). */
  depth?: Maybe<Scalars['Int']['output']>;
  /**
   * Members of the enzyme classification lineage as parent classification codes.
   *
   * Examples:
   * 2, 2.7.1.153
   *
   */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Members of the enzyme classification lineage as parent classification names.
   *
   * Examples:
   * Transferases, phosphatidylinositol-4,5-bisphosphate 3-kinase
   *
   */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerEntityRcsbEnzymeClassCombined {
  __typename?: 'RcsbPolymerEntityRcsbEnzymeClassCombined';
  /** The enzyme classification hierarchy depth (1-N). */
  depth?: Maybe<Scalars['Int']['output']>;
  /** Combined list of enzyme class assignments. */
  ec?: Maybe<Scalars['String']['output']>;
  /**
   * Combined list of enzyme class associated provenance sources.
   *
   * Allowable values:
   * PDB Primary Data, UniProt
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerEntityRcsbMacromolecularNamesCombined {
  __typename?: 'RcsbPolymerEntityRcsbMacromolecularNamesCombined';
  /**
   * Combined list of macromolecular names.
   *
   * Examples:
   * Lysozyme C, Plasmid recombination enzyme, Pyruvate carboxylase
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Combined list of macromolecular names associated provenance code.
   *
   *  ECO (https://github.com/evidenceontology/evidenceontology)
   */
  provenance_code?: Maybe<Scalars['String']['output']>;
  /**
   * Combined list of macromolecular names associated name source.
   *
   * Allowable values:
   * PDB Preferred Name, PDB Synonym
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerEntityRcsbPolymerNameCombined {
  __typename?: 'RcsbPolymerEntityRcsbPolymerNameCombined';
  /** Protein name annotated by the UniProtKB or macromolecular name assigned by the PDB */
  names?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Allowable values: PDB Preferred Name, PDB Description, UniProt Name. */
  provenance_source?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerInstanceAnnotation {
  __typename?: 'RcsbPolymerInstanceAnnotation';
  /** An identifier for the annotation. */
  annotation_id?: Maybe<Scalars['String']['output']>;
  annotation_lineage?: Maybe<Array<Maybe<RcsbPolymerInstanceAnnotationAnnotationLineage>>>;
  /**
   * Identifies the version of the annotation assignment.
   *
   * Examples:
   * V4_0_2
   *
   */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /** A description for the annotation. */
  description?: Maybe<Scalars['String']['output']>;
  /** A name for the annotation. */
  name?: Maybe<Scalars['String']['output']>;
  /** Ordinal identifier for this category */
  ordinal: Scalars['Int']['output'];
  /**
   * Code identifying the individual, organization or program that
   *  assigned the annotation.
   *
   * Examples:
   * PDB
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the annotation.
   *
   * Allowable values:
   * CATH, ECOD, GlyGen, SCOP, SCOP2
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerInstanceAnnotationAnnotationLineage {
  __typename?: 'RcsbPolymerInstanceAnnotationAnnotationLineage';
  /** Members of the annotation lineage as parent lineage depth (1-N) */
  depth?: Maybe<Scalars['Int']['output']>;
  /** Members of the annotation lineage as parent class identifiers. */
  id?: Maybe<Scalars['String']['output']>;
  /** Members of the annotation lineage as parent class names. */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerInstanceFeature {
  __typename?: 'RcsbPolymerInstanceFeature';
  additional_properties?: Maybe<Array<Maybe<RcsbPolymerInstanceFeatureAdditionalProperties>>>;
  /**
   * Identifies the version of the feature assignment.
   *
   * Examples:
   * V4_0_2
   *
   */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /** A description for the feature. */
  description?: Maybe<Scalars['String']['output']>;
  /** An identifier for the feature. */
  feature_id?: Maybe<Scalars['String']['output']>;
  feature_positions?: Maybe<Array<Maybe<RcsbPolymerInstanceFeatureFeaturePositions>>>;
  /** A name for the feature. */
  name?: Maybe<Scalars['String']['output']>;
  /** Ordinal identifier for this category */
  ordinal: Scalars['Int']['output'];
  /**
   * Code identifying the individual, organization or program that
   *  assigned the feature.
   *
   * Examples:
   * CATH, SCOP
   *
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * Code residue coordinate system for the assigned feature.
   *
   * Allowable values:
   * NCBI, PDB entity, PDB entry, UniProt
   *
   */
  reference_scheme?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the feature.
   *
   * Allowable values:
   * ANGLE_OUTLIER, ANGLE_OUTLIERS, AVERAGE_OCCUPANCY, BEND, BINDING_SITE, BOND_OUTLIER, BOND_OUTLIERS, C-MANNOSYLATION_SITE, CATH, CHIRAL_OUTLIERS, CIS-PEPTIDE, CLASHES, ECOD, HELIX_P, HELX_LH_PP_P, HELX_RH_3T_P, HELX_RH_AL_P, HELX_RH_PI_P, LIGAND_COVALENT_LINKAGE, LIGAND_INTERACTION, LIGAND_METAL_COORDINATION_LINKAGE, MA_QA_METRIC_LOCAL_TYPE_CONTACT_PROBABILITY, MA_QA_METRIC_LOCAL_TYPE_DISTANCE, MA_QA_METRIC_LOCAL_TYPE_ENERGY, MA_QA_METRIC_LOCAL_TYPE_IPTM, MA_QA_METRIC_LOCAL_TYPE_NORMALIZED_SCORE, MA_QA_METRIC_LOCAL_TYPE_OTHER, MA_QA_METRIC_LOCAL_TYPE_PAE, MA_QA_METRIC_LOCAL_TYPE_PLDDT, MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM, MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM_[0,1], MA_QA_METRIC_LOCAL_TYPE_PLDDT_[0,1], MA_QA_METRIC_LOCAL_TYPE_PTM, MA_QA_METRIC_LOCAL_TYPE_ZSCORE, MEMBRANE_SEGMENT, MOGUL_ANGLE_OUTLIER, MOGUL_ANGLE_OUTLIERS, MOGUL_BOND_OUTLIER, MOGUL_BOND_OUTLIERS, MOGUL_RING_OUTLIERS, MOGUL_TORSION_OUTLIERS, N-GLYCOSYLATION_SITE, NATOMS_EDS, O-GLYCOSYLATION_SITE, OWAB, PLANE_OUTLIERS, Q_SCORE, RAMACHANDRAN_OUTLIER, ROTAMER_OUTLIER, RSCC, RSCC_OUTLIER, RSR, RSRZ, RSRZ_OUTLIER, S-GLYCOSYLATION_SITE, SABDAB_ANTIBODY_HEAVY_CHAIN_SUBCLASS, SABDAB_ANTIBODY_LIGHT_CHAIN_SUBCLASS, SABDAB_ANTIBODY_LIGHT_CHAIN_TYPE, SCOP, SCOP2B_SUPERFAMILY, SCOP2_FAMILY, SCOP2_SUPERFAMILY, SHEET, STEREO_OUTLIER, STRN, SYMM_CLASHES, TURN_TY1_P, UNASSIGNED_SEC_STRUCT, UNOBSERVED_ATOM_XYZ, UNOBSERVED_RESIDUE_XYZ, ZERO_OCCUPANCY_ATOM_XYZ, ZERO_OCCUPANCY_RESIDUE_XYZ, ASA
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerInstanceFeatureAdditionalProperties {
  __typename?: 'RcsbPolymerInstanceFeatureAdditionalProperties';
  /**
   * The additional property name.
   *
   * Allowable values:
   * CATH_DOMAIN_ID, CATH_NAME, ECOD_DOMAIN_ID, ECOD_FAMILY_NAME, MODELCIF_MODEL_ID, OMEGA_ANGLE, PARTNER_ASYM_ID, PARTNER_BOND_DISTANCE, PARTNER_COMP_ID, PDB_MODEL_NUM, SCOP2_DOMAIN_ID, SCOP2_FAMILY_ID, SCOP2_FAMILY_NAME, SCOP2_SUPERFAMILY_ID, SCOP2_SUPERFAMILY_NAME, SCOP_DOMAIN_ID, SCOP_NAME, SCOP_SUN_ID, SHEET_SENSE
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /** The value(s) of the additional property. */
  values?: Maybe<Array<Maybe<Scalars['ObjectScalar']['output']>>>;
}

export interface RcsbPolymerInstanceFeatureFeaturePositions {
  __typename?: 'RcsbPolymerInstanceFeatureFeaturePositions';
  /**
   * An identifier for the monomer(s) corresponding to the feature assignment.
   *
   * Examples:
   * TRP, VAL
   *
   */
  beg_comp_id?: Maybe<Scalars['String']['output']>;
  /** An identifier for the monomer at which this segment of the feature begins. */
  beg_seq_id: Scalars['Int']['output'];
  /** An identifier for the monomer at which this segment of the feature ends. */
  end_seq_id?: Maybe<Scalars['Int']['output']>;
  /**
   * The value of the feature over the monomer segment.
   *
   * Examples:
   * null, null
   *
   */
  value?: Maybe<Scalars['Float']['output']>;
  /** The value(s) of the feature over the monomer segment. */
  values?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
}

export interface RcsbPolymerInstanceFeatureSummary {
  __typename?: 'RcsbPolymerInstanceFeatureSummary';
  /** The feature count per polymer chain. */
  count?: Maybe<Scalars['Int']['output']>;
  /**
   * The fractional feature coverage relative to the full entity sequence.
   *
   * Examples:
   * null, null
   *
   */
  coverage?: Maybe<Scalars['Float']['output']>;
  /** The maximum feature length. */
  maximum_length?: Maybe<Scalars['Int']['output']>;
  /**
   * The maximum feature value.
   *
   * Examples:
   * null, null
   *
   */
  maximum_value?: Maybe<Scalars['Float']['output']>;
  /** The minimum feature length. */
  minimum_length?: Maybe<Scalars['Int']['output']>;
  /**
   * The minimum feature value.
   *
   * Examples:
   * null, null
   *
   */
  minimum_value?: Maybe<Scalars['Float']['output']>;
  /**
   * Type or category of the feature.
   *
   * Allowable values:
   * ANGLE_OUTLIER, ANGLE_OUTLIERS, AVERAGE_OCCUPANCY, BEND, BINDING_SITE, BOND_OUTLIER, BOND_OUTLIERS, C-MANNOSYLATION_SITE, CATH, CHIRAL_OUTLIERS, CIS-PEPTIDE, CLASHES, ECOD, HELIX_P, HELX_LH_PP_P, HELX_RH_3T_P, HELX_RH_AL_P, HELX_RH_PI_P, LIGAND_COVALENT_LINKAGE, LIGAND_INTERACTION, LIGAND_METAL_COORDINATION_LINKAGE, MA_QA_METRIC_LOCAL_TYPE_CONTACT_PROBABILITY, MA_QA_METRIC_LOCAL_TYPE_DISTANCE, MA_QA_METRIC_LOCAL_TYPE_ENERGY, MA_QA_METRIC_LOCAL_TYPE_IPTM, MA_QA_METRIC_LOCAL_TYPE_NORMALIZED_SCORE, MA_QA_METRIC_LOCAL_TYPE_OTHER, MA_QA_METRIC_LOCAL_TYPE_PAE, MA_QA_METRIC_LOCAL_TYPE_PLDDT, MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM, MA_QA_METRIC_LOCAL_TYPE_PLDDT_ALL-ATOM_[0,1], MA_QA_METRIC_LOCAL_TYPE_PLDDT_[0,1], MA_QA_METRIC_LOCAL_TYPE_PTM, MA_QA_METRIC_LOCAL_TYPE_ZSCORE, MEMBRANE_SEGMENT, MOGUL_ANGLE_OUTLIER, MOGUL_ANGLE_OUTLIERS, MOGUL_BOND_OUTLIER, MOGUL_BOND_OUTLIERS, MOGUL_RING_OUTLIERS, MOGUL_TORSION_OUTLIERS, N-GLYCOSYLATION_SITE, NATOMS_EDS, O-GLYCOSYLATION_SITE, OWAB, PLANE_OUTLIERS, Q_SCORE, RAMACHANDRAN_OUTLIER, ROTAMER_OUTLIER, RSCC, RSCC_OUTLIER, RSR, RSRZ, RSRZ_OUTLIER, S-GLYCOSYLATION_SITE, SABDAB_ANTIBODY_HEAVY_CHAIN_SUBCLASS, SABDAB_ANTIBODY_LIGHT_CHAIN_SUBCLASS, SABDAB_ANTIBODY_LIGHT_CHAIN_TYPE, SCOP, SCOP2B_SUPERFAMILY, SCOP2_FAMILY, SCOP2_SUPERFAMILY, SHEET, STEREO_OUTLIER, STRN, SYMM_CLASHES, TURN_TY1_P, UNASSIGNED_SEC_STRUCT, UNOBSERVED_ATOM_XYZ, UNOBSERVED_RESIDUE_XYZ, ZERO_OCCUPANCY_ATOM_XYZ, ZERO_OCCUPANCY_RESIDUE_XYZ
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerStructConn {
  __typename?: 'RcsbPolymerStructConn';
  connect_partner?: Maybe<RcsbPolymerStructConnConnectPartner>;
  connect_target?: Maybe<RcsbPolymerStructConnConnectTarget>;
  /**
   * The connection type.
   *
   * Allowable values:
   * covalent bond, covalent modification of a nucleotide base, covalent modification of a nucleotide phosphate, covalent modification of a nucleotide sugar, covalent residue modification, disulfide bridge, hydrogen bond, ionic interaction, metal coordination, mismatched base pairs
   *
   */
  connect_type?: Maybe<Scalars['String']['output']>;
  /**
   * A description of special details of the connection.
   *
   * Examples:
   * Watson-Crick base pair
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /** Distance value for this contact. */
  dist_value?: Maybe<Scalars['Float']['output']>;
  /**
   * The value of _rcsb_polymer_struct_conn.id is an identifier for connection.
   *
   *  Note that this item need not be a number; it can be any unique
   *  identifier.
   */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _rcsb_polymer_struct_conn.id must uniquely identify a record in
   *  the rcsb_polymer_struct_conn list.
   */
  ordinal_id: Scalars['Int']['output'];
  /**
   * The chemical or structural role of the interaction
   *
   * Allowable values:
   * C-Mannosylation, N-Glycosylation, O-Glycosylation, S-Glycosylation
   *
   */
  role?: Maybe<Scalars['String']['output']>;
  /**
   * The chemical bond order associated with the specified atoms in
   *  this contact.
   *
   * Allowable values:
   * doub, quad, sing, trip
   *
   */
  value_order?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerStructConnConnectPartner {
  __typename?: 'RcsbPolymerStructConnConnectPartner';
  /**
   * A component of the identifier for the partner in the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_alt_id in the
   *  ATOM_SITE category.
   */
  label_alt_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the partner in the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_asym_id in the
   *  ATOM_SITE category.
   */
  label_asym_id: Scalars['String']['output'];
  /**
   * A component of the identifier for the partner in the structure
   *  connection.
   *
   *  This data item is a pointer to _chem_comp_atom.atom_id in the
   *  CHEM_COMP_ATOM category.
   */
  label_atom_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the partner in the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_comp_id in the
   *  ATOM_SITE category.
   */
  label_comp_id: Scalars['String']['output'];
  /**
   * A component of the identifier for the partner in the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_seq_id in the
   *  ATOM_SITE category.
   */
  label_seq_id?: Maybe<Scalars['Int']['output']>;
  /**
   * Describes the symmetry operation that should be applied to the
   *  atom set specified by _rcsb_polymer_struct_conn.connect_partner_label* to generate the
   *  partner in the structure connection.
   *
   * Examples:
   * 1_555, 7_645
   *
   */
  symmetry?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPolymerStructConnConnectTarget {
  __typename?: 'RcsbPolymerStructConnConnectTarget';
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.auth_asym_id in the
   *  ATOM_SITE category.
   */
  auth_asym_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.auth_seq_id in the
   *  ATOM_SITE category.
   */
  auth_seq_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_alt_id in the
   *  ATOM_SITE category.
   */
  label_alt_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_asym_id in the
   *  ATOM_SITE category.
   */
  label_asym_id: Scalars['String']['output'];
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_atom_id in the
   *  ATOM_SITE category.
   */
  label_atom_id?: Maybe<Scalars['String']['output']>;
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.label_comp_id in the
   *  ATOM_SITE category.
   */
  label_comp_id: Scalars['String']['output'];
  /**
   * A component of the identifier for the target of the structure
   *  connection.
   *
   *  This data item is a pointer to _atom_site.connect_target_label_seq_id in the
   *  ATOM_SITE category.
   */
  label_seq_id?: Maybe<Scalars['Int']['output']>;
  /**
   * Describes the symmetry operation that should be applied to the
   *  atom set specified by _rcsb_polymer_struct_conn.label* to generate the
   *  target of the structure connection.
   *
   * Examples:
   * 1_555, 7_645
   *
   */
  symmetry?: Maybe<Scalars['String']['output']>;
}

export interface RcsbPrimaryCitation {
  __typename?: 'RcsbPrimaryCitation';
  /**
   * The International Standard Book Number (ISBN) code assigned to
   *  the book cited; relevant for books or book chapters.
   */
  book_id_ISBN?: Maybe<Scalars['String']['output']>;
  /**
   * The name of the publisher of the citation; relevant
   *  for books or book chapters.
   *
   * Examples:
   * John Wiley and Sons
   *
   */
  book_publisher?: Maybe<Scalars['String']['output']>;
  /**
   * The location of the publisher of the citation; relevant
   *  for books or book chapters.
   *
   * Examples:
   * London
   *
   */
  book_publisher_city?: Maybe<Scalars['String']['output']>;
  /**
   * The title of the book in which the citation appeared; relevant
   *  for books or book chapters.
   */
  book_title?: Maybe<Scalars['String']['output']>;
  /**
   * _rcsb_primary_citation.coordinate_linkage states whether this citation
   *  is concerned with precisely the set of coordinates given in the
   *  data block. If, for instance, the publication described the same
   *  structure, but the coordinates had undergone further refinement
   *  prior to the creation of the data block, the value of this data
   *  item would be 'no'.
   *
   * Allowable values:
   * n, no, y, yes
   *
   */
  coordinate_linkage?: Maybe<Scalars['String']['output']>;
  /**
   * The country/region of publication; relevant for books
   *  and book chapters.
   */
  country?: Maybe<Scalars['String']['output']>;
  /**
   * The value of _rcsb_primary_citation.id must uniquely identify a record in the
   *  CITATION list.
   *
   *  The _rcsb_primary_citation.id 'primary' should be used to indicate the
   *  citation that the author(s) consider to be the most pertinent to
   *  the contents of the data block.
   *
   *  Note that this item need not be a number; it can be any unique
   *  identifier.
   *
   * Examples:
   * primary
   *
   */
  id: Scalars['String']['output'];
  /**
   * Abbreviated name of the cited journal as given in the
   *  Chemical Abstracts Service Source Index.
   *
   * Examples:
   * J.Mol.Biol., J. Mol. Biol.
   *
   */
  journal_abbrev?: Maybe<Scalars['String']['output']>;
  /**
   * The American Society for Testing and Materials (ASTM) code
   *  assigned to the journal cited (also referred to as the CODEN
   *  designator of the Chemical Abstracts Service); relevant for
   *  journal articles.
   */
  journal_id_ASTM?: Maybe<Scalars['String']['output']>;
  /**
   * The Cambridge Structural Database (CSD) code assigned to the
   *  journal cited; relevant for journal articles. This is also the
   *  system used at the Protein Data Bank (PDB).
   *
   * Examples:
   * 0070
   *
   */
  journal_id_CSD?: Maybe<Scalars['String']['output']>;
  /**
   * The International Standard Serial Number (ISSN) code assigned to
   *  the journal cited; relevant for journal articles.
   */
  journal_id_ISSN?: Maybe<Scalars['String']['output']>;
  /**
   * Issue number of the journal cited; relevant for journal
   *  articles.
   *
   * Examples:
   * 2
   *
   */
  journal_issue?: Maybe<Scalars['String']['output']>;
  /**
   * Volume number of the journal cited; relevant for journal
   *  articles.
   *
   * Examples:
   * 174
   *
   */
  journal_volume?: Maybe<Scalars['String']['output']>;
  /**
   * Language in which the cited article is written.
   *
   * Examples:
   * German
   *
   */
  language?: Maybe<Scalars['String']['output']>;
  /**
   * The first page of the citation; relevant for journal
   *  articles, books and book chapters.
   */
  page_first?: Maybe<Scalars['String']['output']>;
  /**
   * The last page of the citation; relevant for journal
   *  articles, books and book chapters.
   */
  page_last?: Maybe<Scalars['String']['output']>;
  /**
   * Document Object Identifier used by doi.org to uniquely
   *  specify bibliographic entry.
   *
   * Examples:
   * 10.2345/S1384107697000225
   *
   */
  pdbx_database_id_DOI?: Maybe<Scalars['String']['output']>;
  /**
   * Ascession number used by PubMed to categorize a specific
   *  bibliographic entry.
   */
  pdbx_database_id_PubMed?: Maybe<Scalars['Int']['output']>;
  /** The Open Researcher and Contributor ID (ORCID) identifiers for the citation authors. */
  rcsb_ORCID_identifiers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Names of the authors of the citation; relevant for journal
   *  articles, books and book chapters.  Names are separated by vertical bars.
   *
   *  The family name(s), followed by a comma and including any
   *  dynastic components, precedes the first name(s) or initial(s).
   */
  rcsb_authors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Normalized journal abbreviation.
   *
   * Examples:
   * Nat Struct Mol Biol
   *
   */
  rcsb_journal_abbrev?: Maybe<Scalars['String']['output']>;
  /**
   * The title of the citation; relevant for journal articles, books
   *  and book chapters.
   *
   * Examples:
   * Structure of diferric duck ovotransferrin
   *                                   at 2.35 Angstroms resolution.
   *
   */
  title?: Maybe<Scalars['String']['output']>;
  /**
   * The year of the citation; relevant for journal articles, books
   *  and book chapters.
   */
  year?: Maybe<Scalars['Int']['output']>;
}

export interface RcsbPubmedContainerIdentifiers {
  __typename?: 'RcsbPubmedContainerIdentifiers';
  /**
   * UID assigned to each PubMed record.
   *
   * Examples:
   * null
   *
   */
  pubmed_id?: Maybe<Scalars['Int']['output']>;
}

export interface RcsbPubmedMeshDescriptorsLineage {
  __typename?: 'RcsbPubmedMeshDescriptorsLineage';
  /** Hierarchy depth. */
  depth?: Maybe<Scalars['Int']['output']>;
  /**
   * Identifier for MeSH classification term.
   *
   * Examples:
   * E01.370.225.500.388, H01.181
   *
   */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * MeSH classification term.
   *
   * Examples:
   * Chemistry, Mammals, Therapeutic Uses
   *
   */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbRelatedTargetReferences {
  __typename?: 'RcsbRelatedTargetReferences';
  aligned_target?: Maybe<Array<Maybe<RcsbRelatedTargetReferencesAlignedTarget>>>;
  /**
   * The related target data resource name.
   *
   * Allowable values:
   * ChEMBL, DrugBank, Pharos
   *
   */
  related_resource_name?: Maybe<Scalars['String']['output']>;
  /**
   * The version of the target data resource.
   *
   * Examples:
   * 6.11.0
   *
   */
  related_resource_version?: Maybe<Scalars['String']['output']>;
  /** An identifier for the target sequence in the related data resource. */
  related_target_id?: Maybe<Scalars['String']['output']>;
  /**
   * NCBI Taxonomy identifier for the target organism.
   *
   *  Reference:
   *
   *  Wheeler DL, Chappey C, Lash AE, Leipe DD, Madden TL, Schuler GD,
   *  Tatusova TA, Rapp BA (2000). Database resources of the National
   *  Center for Biotechnology Information. Nucleic Acids Res 2000 Jan
   *  1;28(1):10-4
   *
   *  Benson DA, Karsch-Mizrachi I, Lipman DJ, Ostell J, Rapp BA,
   *  Wheeler DL (2000). GenBank. Nucleic Acids Res 2000 Jan 1;28(1):15-18.
   */
  target_taxonomy_id?: Maybe<Scalars['Int']['output']>;
}

export interface RcsbRelatedTargetReferencesAlignedTarget {
  __typename?: 'RcsbRelatedTargetReferencesAlignedTarget';
  /** The position of the monomer in the entity sequence at which the alignment begins. */
  entity_beg_seq_id?: Maybe<Scalars['Int']['output']>;
  /** The length of the alignment. */
  length?: Maybe<Scalars['Int']['output']>;
  /** The position of the monomer in the target sequence at which the alignment begins. */
  target_beg_seq_id?: Maybe<Scalars['Int']['output']>;
}

export interface RcsbRepositoryHoldingsCurrent {
  __typename?: 'RcsbRepositoryHoldingsCurrent';
  /**
   * The list of content types associated with this entry.
   *
   * Allowable values:
   * 2fo-fc Map, Combined NMR data (NEF), Combined NMR data (NMR-STAR), FASTA sequence, Map Coefficients, NMR chemical shifts, NMR restraints V1, NMR restraints V2, assembly PDB, assembly mmCIF, entry PDB, entry PDB bundle, entry PDBML, entry mmCIF, fo-fc Map, structure factors, validation 2fo-fc coefficients, validation data mmCIF, validation fo-fc coefficients, validation report, validation slider image
   *
   */
  repository_content_types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
}

export interface RcsbRepositoryHoldingsCurrentEntryContainerIdentifiers {
  __typename?: 'RcsbRepositoryHoldingsCurrentEntryContainerIdentifiers';
  /** The assembly id codes. */
  assembly_ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The PDB entry accession code.
   *
   * Examples:
   * 1KIP
   *
   */
  entry_id: Scalars['String']['output'];
  /**
   * The RCSB entry identifier.
   *
   * Examples:
   * 1KIP
   *
   */
  rcsb_id?: Maybe<Scalars['String']['output']>;
  /**
   * Identifier for the current data exchange status record.
   *
   * Examples:
   * 2018_23
   *
   */
  update_id?: Maybe<Scalars['String']['output']>;
}

export interface RcsbSchemaContainerIdentifiers {
  __typename?: 'RcsbSchemaContainerIdentifiers';
  /** Collection name associated with the data in the container. */
  collection_name: Scalars['String']['output'];
  /** Version string for the schema and collection. */
  collection_schema_version?: Maybe<Scalars['String']['output']>;
  /** Schema name associated with the data in the container. */
  schema_name: Scalars['String']['output'];
}

export interface RcsbStructSymmetry {
  __typename?: 'RcsbStructSymmetry';
  /** Clusters describe grouping of 'identical' subunits. */
  clusters: Array<Maybe<RcsbStructSymmetryClusters>>;
  /**
   * The granularity at which the symmetry calculation is performed. In 'Global Symmetry' all polymeric subunits in assembly are used. In 'Local Symmetry' only a subset of polymeric subunits is considered. In 'Pseudo Symmetry' the threshold for subunits similarity is relaxed.
   *
   * Allowable values:
   * Global Symmetry, Pseudo Symmetry, Local Symmetry
   *
   */
  kind: Scalars['String']['output'];
  /**
   * Oligomeric state refers to a composition of polymeric subunits in quaternary structure. Quaternary structure may be composed either exclusively of several copies of identical subunits, in which case they are termed homo-oligomers, or alternatively by at least one copy of different subunits (hetero-oligomers). Quaternary structure composed of a single subunit is denoted as 'Monomer'.
   *
   * Examples:
   * Monomer, Homo 2-mer, Hetero 3-mer
   *
   */
  oligomeric_state: Scalars['String']['output'];
  /** The orientation of the principal rotation (symmetry) axis. */
  rotation_axes?: Maybe<Array<Maybe<RcsbStructSymmetryRotationAxes>>>;
  /** Each type of different subunits is assigned a latter. The number of equivalent subunits is added as a coefficient after each letter (except 1 which is not added explicitly). */
  stoichiometry: Array<Maybe<Scalars['String']['output']>>;
  /**
   * Symmetry symbol refers to point group or helical symmetry of identical polymeric subunits in Schönflies notation. Contains point group symbol (e.g., C2, C5, D2, T, O, I) or H for helical symmetry.
   *
   * Examples:
   * C1, D3, H
   *
   */
  symbol: Scalars['String']['output'];
  /**
   * Symmetry type refers to point group or helical symmetry of identical polymeric subunits. Contains point group types (e.g. Cyclic, Dihedral) or Helical for helical symmetry.
   *
   * Allowable values:
   * Asymmetric, Cyclic, Dihedral, Tetrahedral, Octahedral, Icosahedral, Helical
   *
   */
  type: Scalars['String']['output'];
}

export interface RcsbStructSymmetryClusters {
  __typename?: 'RcsbStructSymmetryClusters';
  /** Average RMSD between members of a given cluster. */
  avg_rmsd?: Maybe<Scalars['Float']['output']>;
  /** Subunits that belong to the cluster, identified by asym_id and optionally by assembly operator id(s). */
  members: Array<Maybe<ClustersMembers>>;
}

export interface RcsbStructSymmetryLineage {
  __typename?: 'RcsbStructSymmetryLineage';
  /** Hierarchy depth. */
  depth?: Maybe<Scalars['Int']['output']>;
  /**
   * Automatically assigned ID to uniquely identify the symmetry term in the Protein Symmetry Browser.
   *
   * Examples:
   * Global Symmetry.Cyclic.C2.Homo 2-mer
   *
   */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * A human-readable term describing protein symmetry.
   *
   * Examples:
   * Asymmetric, Global Symmetry, C1, Hetero 3-mer
   *
   */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbStructSymmetryRotationAxes {
  __typename?: 'RcsbStructSymmetryRotationAxes';
  /** coordinate */
  end: Array<Maybe<Scalars['Float']['output']>>;
  /** The number of times (order of rotation) that a subunit can be repeated by a rotation operation, being transformed into a new state indistinguishable from its starting state. */
  order?: Maybe<Scalars['Int']['output']>;
  /** coordinate */
  start: Array<Maybe<Scalars['Float']['output']>>;
}

export interface RcsbTargetCofactors {
  __typename?: 'RcsbTargetCofactors';
  /**
   * The value measured or determined by the assay.
   *
   * Examples:
   * null
   *
   */
  binding_assay_value?: Maybe<Scalars['Float']['output']>;
  /**
   * The type of measurement or value determined by the assay.
   *
   * Allowable values:
   * pAC50, pEC50, pIC50, pKd, pKi
   *
   */
  binding_assay_value_type?: Maybe<Scalars['String']['output']>;
  /**
   * Standard IUPAC International Chemical Identifier (InChI) descriptor key
   *  for the cofactor.
   *
   *  InChI, the IUPAC International Chemical Identifier,
   *  by Stephen R Heller, Alan McNaught, Igor Pletnev, Stephen Stein and Dmitrii Tchekhovskoi,
   *  Journal of Cheminformatics, 2015, 7:23
   *
   * Examples:
   * BNOCDEBUFVJMQI-REOHCLBHSA-N
   *
   */
  cofactor_InChIKey?: Maybe<Scalars['String']['output']>;
  /**
   * Simplified molecular-input line-entry system (SMILES) descriptor for the cofactor.
   *
   *    Weininger D (February 1988). "SMILES, a chemical language and information system. 1.
   *    Introduction to methodology and encoding rules". Journal of Chemical Information and Modeling. 28 (1): 31-6.
   *
   *    Weininger D, Weininger A, Weininger JL (May 1989).
   *    "SMILES. 2. Algorithm for generation of unique SMILES notation",
   *    Journal of Chemical Information and Modeling. 29 (2): 97-101.
   *
   * Examples:
   * OC(=O)[CH](CF)O[P](O)(O)=O
   *
   */
  cofactor_SMILES?: Maybe<Scalars['String']['output']>;
  /**
   * The chemical component definition identifier for the cofactor.
   *
   * Examples:
   * 0Z3, CD9
   *
   */
  cofactor_chem_comp_id?: Maybe<Scalars['String']['output']>;
  /**
   * The cofactor description.
   *
   * Examples:
   * A synthetic naphthoquinone without the isoprenoid side chain and biological activity,
   *   but can be converted to active vitamin K2, menaquinone, after alkylation in vivo.
   *
   */
  cofactor_description?: Maybe<Scalars['String']['output']>;
  /**
   * The cofactor name.
   *
   * Examples:
   * Menadione
   *
   */
  cofactor_name?: Maybe<Scalars['String']['output']>;
  /**
   * The BIRD definition identifier for the cofactor.
   *
   * Examples:
   * PRD_000010
   *
   */
  cofactor_prd_id?: Maybe<Scalars['String']['output']>;
  /**
   * Identifier for the cofactor assigned by the resource.
   *
   * Examples:
   * CHEMBL1987, DB00170
   *
   */
  cofactor_resource_id?: Maybe<Scalars['String']['output']>;
  /**
   * Mechanism of action describes the biochemical interaction through which the
   *  cofactor produces a pharmacological effect.
   *
   * Examples:
   * Menadione (vitamin K3) is involved as a cofactor in the posttranslational gamma-carboxylation of glutamic acid residues of certain proteins i
   * n the body. These proteins include the vitamin K-dependent coagulation factors II (prothrombin), VII (proconvertin), IX (Christmas factor), X (Stuart factor), protein
   * C, protein S, protein Zv and a growth-arrest-specific factor (Gas6).
   *
   */
  mechanism_of_action?: Maybe<Scalars['String']['output']>;
  /**
   * A flag to indicate the cofactor is a structural neighbor of this
   *  entity.
   *
   * Allowable values:
   * N, Y
   *
   */
  neighbor_flag?: Maybe<Scalars['String']['output']>;
  /** Patent numbers reporting the pharmacology or activity data. */
  patent_nos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** PubMed identifiers for literature supporting the pharmacology or activity data. */
  pubmed_ids?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /**
   * Resource providing target and cofactor data.
   *
   * Allowable values:
   * ChEMBL, DrugBank, Pharos
   *
   */
  resource_name?: Maybe<Scalars['String']['output']>;
  /**
   * Version of the information distributed by the data resource.
   *
   * Examples:
   * V4_0_2
   *
   */
  resource_version?: Maybe<Scalars['String']['output']>;
  /**
   * Identifier for the target assigned by the resource.
   *
   * Examples:
   * P00734, CHEMBL2242
   *
   */
  target_resource_id?: Maybe<Scalars['String']['output']>;
}

export interface RcsbTargetNeighbors {
  __typename?: 'RcsbTargetNeighbors';
  /** Alternate conformer identifier for the non-polymer entity instance. */
  alt_id?: Maybe<Scalars['String']['output']>;
  /**
   * The atom identifier for the non-polymer entity instance.
   *
   * Examples:
   * O1, N1, C1
   *
   */
  atom_id?: Maybe<Scalars['String']['output']>;
  /** Component identifier for the non-polymer entity instance. */
  comp_id?: Maybe<Scalars['String']['output']>;
  /** Distance value for this target interaction. */
  distance?: Maybe<Scalars['Float']['output']>;
  /**
   * The entity instance identifier for the target of interaction.
   *
   * Examples:
   * A, B
   *
   */
  target_asym_id?: Maybe<Scalars['String']['output']>;
  /**
   * The atom identifier for the target of interaction.
   *
   * Examples:
   * OG, OE1, CD1
   *
   */
  target_atom_id?: Maybe<Scalars['String']['output']>;
  /** The author residue index for the target of interaction. */
  target_auth_seq_id?: Maybe<Scalars['Int']['output']>;
  /**
   * The chemical component identifier for the target of interaction.
   *
   * Examples:
   * ASN, TRP, SER
   *
   */
  target_comp_id?: Maybe<Scalars['String']['output']>;
  /**
   * The entity identifier for the target of interaction.
   *
   * Examples:
   * 1, 2
   *
   */
  target_entity_id?: Maybe<Scalars['String']['output']>;
  /**
   * A flag to indicate the nature of the target interaction is covalent or metal-coordination.
   *
   * Allowable values:
   * N, Y
   *
   */
  target_is_bound?: Maybe<Scalars['String']['output']>;
  /** Model identifier for the target of interaction. */
  target_model_id?: Maybe<Scalars['Int']['output']>;
  /** The sequence position for the target of interaction. */
  target_seq_id?: Maybe<Scalars['Int']['output']>;
}

export interface RcsbUniprotAlignments {
  __typename?: 'RcsbUniprotAlignments';
  /** List of alignments with core_entity canonical sequences */
  core_entity_alignments?: Maybe<Array<Maybe<RcsbUniprotAlignmentsCoreEntityAlignments>>>;
}

export interface RcsbUniprotAlignmentsCoreEntityAlignments {
  __typename?: 'RcsbUniprotAlignmentsCoreEntityAlignments';
  /** Aligned region */
  aligned_regions: Array<Maybe<CoreEntityAlignmentsAlignedRegions>>;
  /** core_entity identifiers */
  core_entity_identifiers?: Maybe<CoreEntityAlignmentsCoreEntityIdentifiers>;
  /** Alignment scores */
  scores: CoreEntityAlignmentsScores;
}

export interface RcsbUniprotAnnotation {
  __typename?: 'RcsbUniprotAnnotation';
  additional_properties?: Maybe<Array<Maybe<RcsbUniprotAnnotationAdditionalProperties>>>;
  /** An identifier for the annotation. */
  annotation_id?: Maybe<Scalars['String']['output']>;
  annotation_lineage?: Maybe<Array<Maybe<RcsbUniprotAnnotationAnnotationLineage>>>;
  /** Identifies the version of the annotation assignment. */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /** A description for the annotation. */
  description?: Maybe<Scalars['String']['output']>;
  /** A name for the annotation. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Code identifying the individual, organization or program that
   *  assigned the annotation.
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the annotation.
   *
   * Allowable values:
   * disease, phenotype, GO, InterPro
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbUniprotAnnotationAdditionalProperties {
  __typename?: 'RcsbUniprotAnnotationAdditionalProperties';
  /**
   * The additional property name
   *
   * Allowable values:
   * INTERPRO_TYPE
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /** The value(s) of the additional property */
  values?: Maybe<Array<Maybe<Scalars['ObjectScalar']['output']>>>;
}

export interface RcsbUniprotAnnotationAnnotationLineage {
  __typename?: 'RcsbUniprotAnnotationAnnotationLineage';
  /** Members of the annotation lineage as parent lineage depth (1-N) */
  depth?: Maybe<Scalars['Int']['output']>;
  /** Members of the annotation lineage as parent class identifiers. */
  id?: Maybe<Scalars['String']['output']>;
  /** Members of the annotation lineage as parent class names. */
  name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbUniprotContainerIdentifiers {
  __typename?: 'RcsbUniprotContainerIdentifiers';
  reference_sequence_identifiers?: Maybe<Array<Maybe<RcsbUniprotContainerIdentifiersReferenceSequenceIdentifiers>>>;
  /** Primary accession number of a given UniProtKB entry. */
  uniprot_id?: Maybe<Scalars['String']['output']>;
}

export interface RcsbUniprotContainerIdentifiersReferenceSequenceIdentifiers {
  __typename?: 'RcsbUniprotContainerIdentifiersReferenceSequenceIdentifiers';
  /** Reference database accession code */
  database_accession?: Maybe<Scalars['String']['output']>;
  /** Reference database identifier for the sequence isoform */
  database_isoform?: Maybe<Scalars['String']['output']>;
  /** Reference database name */
  database_name?: Maybe<Scalars['String']['output']>;
  /** Source of the reference database assignment */
  provenance_source?: Maybe<Scalars['String']['output']>;
}

export interface RcsbUniprotExternalReference {
  __typename?: 'RcsbUniprotExternalReference';
  provenance_source?: Maybe<Scalars['String']['output']>;
  reference_id?: Maybe<Scalars['String']['output']>;
  /** Allowable values: IMPC, GTEX, PHAROS. */
  reference_name?: Maybe<Scalars['String']['output']>;
}

export interface RcsbUniprotFeature {
  __typename?: 'RcsbUniprotFeature';
  /** Identifies the version of the feature assignment. */
  assignment_version?: Maybe<Scalars['String']['output']>;
  /** A description for the feature. */
  description?: Maybe<Scalars['String']['output']>;
  /** An identifier for the feature. */
  feature_id?: Maybe<Scalars['String']['output']>;
  feature_positions?: Maybe<Array<Maybe<RcsbUniprotFeatureFeaturePositions>>>;
  /** A name for the feature. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * Code identifying the individual, organization or program that
   *  assigned the feature.
   */
  provenance_source?: Maybe<Scalars['String']['output']>;
  /** Code residue coordinate system for the assigned feature. */
  reference_scheme?: Maybe<Scalars['String']['output']>;
  /**
   * A type or category of the feature.
   *
   * Allowable values:
   * ACTIVE_SITE, BINDING_SITE, CALCIUM_BINDING_REGION, CHAIN, COMPOSITIONALLY_BIASED_REGION, CROSS_LINK, DNA_BINDING_REGION, DOMAIN, GLYCOSYLATION_SITE, INITIATOR_METHIONINE, LIPID_MOIETY_BINDING_REGION, METAL_ION_BINDING_SITE, MODIFIED_RESIDUE, MUTAGENESIS_SITE, NON_CONSECUTIVE_RESIDUES, NON_TERMINAL_RESIDUE, NUCLEOTIDE_PHOSPHATE_BINDING_REGION, PEPTIDE, PROPEPTIDE, REGION_OF_INTEREST, REPEAT, NON_STANDARD_AMINO_ACID, SEQUENCE_CONFLICT, SEQUENCE_VARIANT, SHORT_SEQUENCE_MOTIF, SIGNAL_PEPTIDE, SITE, SPLICE_VARIANT, TOPOLOGICAL_DOMAIN, TRANSIT_PEPTIDE, TRANSMEMBRANE_REGION, UNSURE_RESIDUE, ZINC_FINGER_REGION, INTRAMEMBRANE_REGION
   *
   */
  type?: Maybe<Scalars['String']['output']>;
}

export interface RcsbUniprotFeatureFeaturePositions {
  __typename?: 'RcsbUniprotFeatureFeaturePositions';
  /** An identifier for the monomer(s) corresponding to the feature assignment. */
  beg_comp_id?: Maybe<Scalars['String']['output']>;
  /** An identifier for the monomer at which this segment of the feature begins. */
  beg_seq_id: Scalars['Int']['output'];
  /** An identifier for the monomer at which this segment of the feature ends. */
  end_seq_id?: Maybe<Scalars['Int']['output']>;
  /** The value for the feature over this monomer segment. */
  value?: Maybe<Scalars['Float']['output']>;
  /** The value(s) for the feature over this monomer segment. */
  values?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
}

export interface RcsbUniprotKeyword {
  __typename?: 'RcsbUniprotKeyword';
  /**
   * A unique keyword identifier.
   *
   * Examples:
   * KW-0275, KW-0597
   *
   */
  id?: Maybe<Scalars['String']['output']>;
  /**
   * Human-readable keyword term.
   *
   * Examples:
   * Lipid metabolism, Phosphoprotein, Fatty acid biosynthesis
   *
   */
  value?: Maybe<Scalars['String']['output']>;
}

export interface RcsbUniprotProtein {
  __typename?: 'RcsbUniprotProtein';
  /** Enzyme Commission (EC) number(s). */
  ec?: Maybe<Array<Maybe<RcsbUniprotProteinEc>>>;
  function?: Maybe<RcsbUniprotProteinFunction>;
  /** The name(s) of the gene(s) that code for the protein sequence(s) described in the entry. */
  gene?: Maybe<Array<Maybe<RcsbUniprotProteinGene>>>;
  name?: Maybe<RcsbUniprotProteinName>;
  /** Protein sequence data for canonical protein sequence. */
  sequence?: Maybe<Scalars['String']['output']>;
  /** Taxonomy information on the organism that is the source of the protein sequence. */
  source_organism?: Maybe<RcsbUniprotProteinSourceOrganism>;
}

export interface RcsbUniprotProteinEc {
  __typename?: 'RcsbUniprotProteinEc';
  number?: Maybe<Scalars['String']['output']>;
  /** Historical record of the data attribute. */
  provenance_code?: Maybe<Scalars['String']['output']>;
}

export interface RcsbUniprotProteinFunction {
  __typename?: 'RcsbUniprotProteinFunction';
  /** General function(s) of a protein. */
  details?: Maybe<Scalars['String']['output']>;
  /** Historical record of the data attribute. */
  provenance_code?: Maybe<Scalars['String']['output']>;
}

export interface RcsbUniprotProteinGene {
  __typename?: 'RcsbUniprotProteinGene';
  name?: Maybe<Array<Maybe<GeneName>>>;
}

export interface RcsbUniprotProteinName {
  __typename?: 'RcsbUniprotProteinName';
  /** Historical record of the data attribute. */
  provenance_code: Scalars['String']['output'];
  /**
   * Name that allows to unambiguously identify a protein.
   *
   * Examples:
   * Hemoglobin alpha
   *
   */
  value: Scalars['String']['output'];
}

export interface RcsbUniprotProteinSourceOrganism {
  __typename?: 'RcsbUniprotProteinSourceOrganism';
  /** Historical record of the data attribute. */
  provenance_code: Scalars['String']['output'];
  /** The scientific name of the organism in which a protein occurs. */
  scientific_name: Scalars['String']['output'];
  /** NCBI Taxonomy identifier for the organism in which a protein occurs. */
  taxonomy_id?: Maybe<Scalars['Int']['output']>;
}

export interface Refine {
  __typename?: 'Refine';
  /**
   * The maximum isotropic displacement parameter (B value)
   *  found in the coordinate set.
   */
  B_iso_max?: Maybe<Scalars['Float']['output']>;
  /**
   * The mean isotropic displacement parameter (B value)
   *  for the coordinate set.
   */
  B_iso_mean?: Maybe<Scalars['Float']['output']>;
  /**
   * The minimum isotropic displacement parameter (B value)
   *  found in the coordinate set.
   */
  B_iso_min?: Maybe<Scalars['Float']['output']>;
  /**
   * The [1][1] element of the matrix that defines the overall
   *  anisotropic displacement model if one was refined for this
   *  structure.
   */
  aniso_B_1_1?: Maybe<Scalars['Float']['output']>;
  /**
   * The [1][2] element of the matrix that defines the overall
   *  anisotropic displacement model if one was refined for this
   *  structure.
   */
  aniso_B_1_2?: Maybe<Scalars['Float']['output']>;
  /**
   * The [1][3] element of the matrix that defines the overall
   *  anisotropic displacement model if one was refined for this
   *  structure.
   */
  aniso_B_1_3?: Maybe<Scalars['Float']['output']>;
  /**
   * The [2][2] element of the matrix that defines the overall
   *  anisotropic displacement model if one was refined for this
   *  structure.
   */
  aniso_B_2_2?: Maybe<Scalars['Float']['output']>;
  /**
   * The [2][3] element of the matrix that defines the overall
   *  anisotropic displacement model if one was refined for this
   *  structure.
   */
  aniso_B_2_3?: Maybe<Scalars['Float']['output']>;
  /**
   * The [3][3] element of the matrix that defines the overall
   *  anisotropic displacement model if one was refined for this
   *  structure.
   */
  aniso_B_3_3?: Maybe<Scalars['Float']['output']>;
  /**
   * The correlation coefficient between the observed and
   *              calculated structure factors for reflections included in
   *              the refinement.
   *
   *              The correlation coefficient is scale-independent and gives
   *              an idea of the quality of the refined model.
   *
   *                           sum~i~(Fo~i~ Fc~i~ - <Fo><Fc>)
   * R~corr~ = ------------------------------------------------------------
   *           SQRT{sum~i~(Fo~i~)^2^-<Fo>^2^} SQRT{sum~i~(Fc~i~)^2^-<Fc>^2^}
   *
   *              Fo = observed structure factors
   *              Fc = calculated structure factors
   *              <>   denotes average value
   *
   *              summation is over reflections included in the refinement
   */
  correlation_coeff_Fo_to_Fc?: Maybe<Scalars['Float']['output']>;
  /**
   * The correlation coefficient between the observed and
   *              calculated structure factors for reflections not included
   *              in the refinement (free reflections).
   *
   *               The correlation coefficient is scale-independent and gives
   *               an idea of the quality of the refined model.
   *
   *                           sum~i~(Fo~i~ Fc~i~ - <Fo><Fc>)
   * R~corr~ = ------------------------------------------------------------
   *           SQRT{sum~i~(Fo~i~)^2^-<Fo>^2^} SQRT{sum~i~(Fc~i~)^2^-<Fc>^2^}
   *
   *               Fo  = observed structure factors
   *               Fc  = calculated structure factors
   *               <>    denotes average value
   *
   *               summation is over reflections not included
   *               in the refinement (free reflections)
   */
  correlation_coeff_Fo_to_Fc_free?: Maybe<Scalars['Float']['output']>;
  /**
   * Description of special aspects of the refinement process.
   *
   * Examples:
   * HYDROGENS HAVE BEEN ADDED IN THE RIDING POSITIONS
   *
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * Residual factor R for reflections that satisfy the resolution
   *  limits established by _refine.ls_d_res_high and
   *  _refine.ls_d_res_low and the observation limit established by
   *  _reflns.observed_criterion, and that were used as the test
   *  reflections (i.e. were excluded from the refinement) when the
   *  refinement included the calculation of a 'free' R factor.
   *  Details of how reflections were assigned to the working and
   *  test sets are given in _reflns.R_free_details.
   *
   *      sum|F~obs~ - F~calc~|
   *  R = ---------------------
   *           sum|F~obs~|
   *
   *  F~obs~  = the observed structure-factor amplitudes
   *  F~calc~ = the calculated structure-factor amplitudes
   *
   *  sum is taken over the specified reflections
   */
  ls_R_factor_R_free?: Maybe<Scalars['Float']['output']>;
  /**
   * The estimated error in _refine.ls_R_factor_R_free.
   *  The method used to estimate the error is described in the
   *  item _refine.ls_R_factor_R_free_error_details.
   */
  ls_R_factor_R_free_error?: Maybe<Scalars['Float']['output']>;
  /**
   * Special aspects of the method used to estimated the error in
   *  _refine.ls_R_factor_R_free.
   */
  ls_R_factor_R_free_error_details?: Maybe<Scalars['String']['output']>;
  /**
   * Residual factor R for reflections that satisfy the resolution
   *  limits established by _refine.ls_d_res_high and
   *  _refine.ls_d_res_low and the observation limit established by
   *  _reflns.observed_criterion, and that were used as the working
   *  reflections (i.e. were included in the refinement)  when the
   *  refinement included the calculation of a 'free' R factor.
   *  Details of how reflections were assigned to the working and
   *  test sets are given in _reflns.R_free_details.
   *
   *  _refine.ls_R_factor_obs should not be confused with
   *  _refine.ls_R_factor_R_work; the former reports the results of a
   *  refinement in which all observed reflections were used, the
   *  latter a refinement in which a subset of the observed
   *  reflections were excluded from refinement for the calculation
   *  of a 'free' R factor. However, it would be meaningful to quote
   *  both values if a 'free' R factor were calculated for most of
   *  the refinement, but all of the observed reflections were used
   *  in the final rounds of refinement; such a protocol should be
   *  explained in _refine.details.
   *
   *      sum|F~obs~ - F~calc~|
   *  R = ---------------------
   *           sum|F~obs~|
   *
   *  F~obs~  = the observed structure-factor amplitudes
   *  F~calc~ = the calculated structure-factor amplitudes
   *
   *  sum is taken over the specified reflections
   */
  ls_R_factor_R_work?: Maybe<Scalars['Float']['output']>;
  /**
   * Residual factor R for all reflections that satisfy the resolution
   *  limits established by _refine.ls_d_res_high and
   *  _refine.ls_d_res_low.
   *
   *      sum|F~obs~ - F~calc~|
   *  R = ---------------------
   *           sum|F~obs~|
   *
   *  F~obs~  = the observed structure-factor amplitudes
   *  F~calc~ = the calculated structure-factor amplitudes
   *
   *  sum is taken over the specified reflections
   */
  ls_R_factor_all?: Maybe<Scalars['Float']['output']>;
  /**
   * Residual factor R for reflections that satisfy the resolution
   *  limits established by _refine.ls_d_res_high and
   *  _refine.ls_d_res_low and the observation limit established by
   *  _reflns.observed_criterion.
   *
   *  _refine.ls_R_factor_obs should not be confused with
   *  _refine.ls_R_factor_R_work; the former reports the results of a
   *  refinement in which all observed reflections were used, the
   *  latter a refinement in which a subset of the observed
   *  reflections were excluded from refinement for the calculation
   *  of a 'free' R factor. However, it would be meaningful to quote
   *  both values if a 'free' R factor were calculated for most of
   *  the refinement, but all of the observed reflections were used
   *  in the final rounds of refinement; such a protocol should be
   *  explained in _refine.details.
   *
   *      sum|F~obs~ - F~calc~|
   *  R = ---------------------
   *           sum|F~obs~|
   *
   *  F~obs~  = the observed structure-factor amplitudes
   *  F~calc~ = the calculated structure-factor amplitudes
   *
   *  sum is taken over the specified reflections
   */
  ls_R_factor_obs?: Maybe<Scalars['Float']['output']>;
  /**
   * The smallest value for the interplanar spacings for the
   *  reflection data used in the refinement in angstroms. This is
   *  called the highest resolution.
   */
  ls_d_res_high?: Maybe<Scalars['Float']['output']>;
  /**
   * The largest value for the interplanar spacings for
   *  the reflection data used in the refinement in angstroms.
   *  This is called the lowest resolution.
   */
  ls_d_res_low?: Maybe<Scalars['Float']['output']>;
  /**
   * Type of matrix used to accumulate the least-squares derivatives.
   *
   * Allowable values:
   * atomblock, diagonal, full, fullcycle, sparse, userblock
   *
   */
  ls_matrix_type?: Maybe<Scalars['String']['output']>;
  /**
   * The number of parameters refined in the least-squares process.
   *  If possible, this number should include some contribution from
   *  the restrained parameters. The restrained parameters are
   *  distinct from the constrained parameters (where one or more
   *  parameters are linearly dependent on the refined value of
   *  another). Least-squares restraints often depend on geometry or
   *  energy considerations and this makes their direct contribution
   *  to this number, and to the goodness-of-fit calculation,
   *  difficult to assess.
   */
  ls_number_parameters?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of reflections that satisfy the resolution limits
   *  established by _refine.ls_d_res_high and _refine.ls_d_res_low
   *  and the observation limit established by
   *  _reflns.observed_criterion, and that were used as the test
   *  reflections (i.e. were excluded from the refinement) when the
   *  refinement included the calculation of a 'free' R factor.
   *  Details of how reflections were assigned to the working and
   *  test sets are given in _reflns.R_free_details.
   */
  ls_number_reflns_R_free?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of reflections that satisfy the resolution limits
   *  established by _refine.ls_d_res_high and _refine.ls_d_res_low
   *  and the observation limit established by
   *  _reflns.observed_criterion, and that were used as the working
   *  reflections (i.e. were included in the refinement) when the
   *  refinement included the calculation of a 'free' R factor.
   *  Details of how reflections were assigned to the working and
   *  test sets are given in _reflns.R_free_details.
   */
  ls_number_reflns_R_work?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of reflections that satisfy the resolution limits
   *  established by _refine.ls_d_res_high and _refine.ls_d_res_low.
   */
  ls_number_reflns_all?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of reflections that satisfy the resolution limits
   *  established by _refine.ls_d_res_high and _refine.ls_d_res_low
   *  and the observation limit established by
   *  _reflns.observed_criterion.
   */
  ls_number_reflns_obs?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of restrained parameters. These are parameters which
   *  are not directly dependent on another refined parameter.
   *  Restrained parameters often involve geometry or energy
   *  dependencies.
   *  See also _atom_site.constraints and _atom_site.refinement_flags.
   *  A general description of refinement constraints may appear in
   *  _refine.details.
   */
  ls_number_restraints?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of reflections that satisfy the resolution limits
   *  established by _refine.ls_d_res_high and _refine.ls_d_res_low
   *  and the observation limit established by
   *  _reflns.observed_criterion, and that were used as the test
   *  reflections (i.e. were excluded from the refinement) when the
   *  refinement included the calculation of a 'free' R factor,
   *  expressed as a percentage of the number of geometrically
   *  observable reflections that satisfy the resolution limits.
   */
  ls_percent_reflns_R_free?: Maybe<Scalars['Float']['output']>;
  /**
   * The number of reflections that satisfy the resolution limits
   *  established by _refine.ls_d_res_high and _refine.ls_d_res_low
   *  and the observation limit established by
   *  _reflns.observed_criterion, expressed as a percentage of the
   *  number of geometrically observable reflections that satisfy
   *  the resolution limits.
   */
  ls_percent_reflns_obs?: Maybe<Scalars['Float']['output']>;
  /**
   * The ratio of the total number of observations of the
   *  reflections that satisfy the resolution limits established by
   *  _refine.ls_d_res_high and _refine.ls_d_res_low to the number
   *  of crystallographically unique reflections that satisfy the
   *  same limits.
   */
  ls_redundancy_reflns_all?: Maybe<Scalars['Float']['output']>;
  /**
   * The ratio of the total number of observations of the
   *  reflections that satisfy the resolution limits established by
   *  _refine.ls_d_res_high and _refine.ls_d_res_low and the
   *  observation limit established by _reflns.observed_criterion to
   *  the number of crystallographically unique reflections that
   *  satisfy the same limits.
   */
  ls_redundancy_reflns_obs?: Maybe<Scalars['Float']['output']>;
  /**
   * Weighted residual factor wR for reflections that satisfy the
   *  resolution limits established by _refine.ls_d_res_high and
   *  _refine.ls_d_res_low and the observation limit established by
   *  _reflns.observed_criterion, and that were used as the test
   *  reflections (i.e. were excluded from the refinement) when the
   *  refinement included the calculation of a 'free' R factor.
   *  Details of how reflections were assigned to the working and
   *  test sets are given in _reflns.R_free_details.
   *
   *       ( sum|w |Y~obs~ - Y~calc~|^2^| )^1/2^
   *  wR = ( ---------------------------- )
   *       (        sum|w Y~obs~^2^|      )
   *
   *  Y~obs~  = the observed amplitude specified by
   *            _refine.ls_structure_factor_coef
   *  Y~calc~ = the calculated amplitude specified by
   *            _refine.ls_structure_factor_coef
   *  w       = the least-squares weight
   *
   *  sum is taken over the specified reflections
   */
  ls_wR_factor_R_free?: Maybe<Scalars['Float']['output']>;
  /**
   * Weighted residual factor wR for reflections that satisfy the
   *  resolution limits established by _refine.ls_d_res_high and
   *  _refine.ls_d_res_low and the observation limit established by
   *  _reflns.observed_criterion, and that were used as the working
   *  reflections (i.e. were included in the refinement) when the
   *  refinement included the calculation of a 'free' R factor.
   *  Details of how reflections were assigned to the working and
   *  test sets are given in _reflns.R_free_details.
   *
   *       ( sum|w |Y~obs~ - Y~calc~|^2^| )^1/2^
   *  wR = ( ---------------------------- )
   *       (        sum|w Y~obs~^2^|      )
   *
   *  Y~obs~  = the observed amplitude specified by
   *            _refine.ls_structure_factor_coef
   *  Y~calc~ = the calculated amplitude specified by
   *            _refine.ls_structure_factor_coef
   *  w       = the least-squares weight
   *
   *  sum is taken over the specified reflections
   */
  ls_wR_factor_R_work?: Maybe<Scalars['Float']['output']>;
  /** The maximum value for occupancy found in the coordinate set. */
  occupancy_max?: Maybe<Scalars['Float']['output']>;
  /** The minimum value for occupancy found in the coordinate set. */
  occupancy_min?: Maybe<Scalars['Float']['output']>;
  /**
   * Average figure of merit of phases of reflections not included
   *  in the refinement.
   *
   *  This value is derived from the likelihood function.
   *
   *  FOM           = I~1~(X)/I~0~(X)
   *
   *  I~0~, I~1~     = zero- and first-order modified Bessel functions
   *                  of the first kind
   *  X              = sigma~A~ |E~o~| |E~c~|/SIGMA
   *  E~o~, E~c~     = normalized observed and calculated structure
   *                  factors
   *  sigma~A~       = <cos 2 pi s delta~x~> SQRT(Sigma~P~/Sigma~N~)
   *                  estimated using maximum likelihood
   *  Sigma~P~       = sum~{atoms in model}~ f^2^
   *  Sigma~N~       = sum~{atoms in crystal}~ f^2^
   *  f              = form factor of atoms
   *  delta~x~       = expected error
   *  SIGMA          = (sigma~{E;exp}~)^2^ + epsilon [1-(sigma~A~)^2^]
   *  sigma~{E;exp}~ = uncertainties of normalized observed
   *                  structure factors
   *  epsilon       = multiplicity of the diffracting plane
   *
   *  Ref: Murshudov, G. N., Vagin, A. A. & Dodson, E. J. (1997).
   *       Acta Cryst. D53, 240-255.
   */
  overall_FOM_free_R_set?: Maybe<Scalars['Float']['output']>;
  /**
   * Average figure of merit of phases of reflections included in
   *  the refinement.
   *
   *  This value is derived from the likelihood function.
   *
   *  FOM           = I~1~(X)/I~0~(X)
   *
   *  I~0~, I~1~     = zero- and first-order modified Bessel functions
   *                  of the first kind
   *  X              = sigma~A~ |E~o~| |E~c~|/SIGMA
   *  E~o~, E~c~     = normalized observed and calculated structure
   *                  factors
   *  sigma~A~       = <cos 2 pi s delta~x~> SQRT(Sigma~P~/Sigma~N~)
   *                  estimated using maximum likelihood
   *  Sigma~P~       = sum~{atoms in model}~ f^2^
   *  Sigma~N~       = sum~{atoms in crystal}~ f^2^
   *  f              = form factor of atoms
   *  delta~x~       = expected error
   *  SIGMA          = (sigma~{E;exp}~)^2^ + epsilon [1-(sigma~A~)^2^]
   *  sigma~{E;exp}~ = uncertainties of normalized observed
   *                  structure factors
   *  epsilon       = multiplicity of the diffracting plane
   *
   *  Ref: Murshudov, G. N., Vagin, A. A. & Dodson, E. J. (1997).
   *       Acta Cryst. D53, 240-255.
   */
  overall_FOM_work_R_set?: Maybe<Scalars['Float']['output']>;
  /**
   * The overall standard uncertainty (estimated standard deviation)
   *            of the displacement parameters based on a maximum-likelihood
   *            residual.
   *
   *            The overall standard uncertainty (sigma~B~)^2^ gives an idea
   *            of the uncertainty in the B values of averagely defined
   *            atoms (atoms with B values equal to the average B value).
   *
   *                                          N~a~
   * (sigma~B~)^2^ = 8 ----------------------------------------------
   *                   sum~i~ {[1/Sigma - (E~o~)^2^ (1-m^2^)](SUM_AS)s^4^}
   *
   *            N~a~           = number of atoms
   *            E~o~           = normalized structure factors
   *            m              = figure of merit of phases of reflections
   *                             included in the summation
   *            s              = reciprocal-space vector
   *
   *            SUM_AS         = (sigma~A~)^2^/Sigma^2^
   *            Sigma          = (sigma~{E;exp}~)^2^ + epsilon [1-(sigma~A~)^2^]
   *            sigma~{E;exp}~  = experimental uncertainties of normalized
   *                             structure factors
   *            sigma~A~        = <cos 2 pi s delta~x~> SQRT(Sigma~P~/Sigma~N~)
   *                             estimated using maximum likelihood
   *            Sigma~P~        = sum~{atoms in model}~ f^2^
   *            Sigma~N~        = sum~{atoms in crystal}~ f^2^
   *            f               = atom form factor
   *            delta~x~        = expected error
   *            epsilon         = multiplicity of diffracting plane
   *
   *            summation is over all reflections included in refinement
   *
   *            Ref: (sigma~A~ estimation) "Refinement of macromolecular
   *                 structures by the maximum-likelihood method",
   *                 Murshudov, G. N., Vagin, A. A. & Dodson, E. J. (1997).
   *                 Acta Cryst. D53, 240-255.
   *
   *                 (SU B estimation) Murshudov, G. N. & Dodson,
   *                 E. J. (1997). Simplified error estimation a la
   *                 Cruickshank in macromolecular crystallography.
   *                 CCP4 Newsletter on Protein Crystallography, No. 33,
   *                 January 1997, pp. 31-39.
   *
   *                http://www.ccp4.ac.uk/newsletters/newsletter33/murshudov.html
   */
  overall_SU_B?: Maybe<Scalars['Float']['output']>;
  /**
   * The overall standard uncertainty (estimated standard deviation)
   *            of the positional parameters based on a maximum likelihood
   *            residual.
   *
   *            The overall standard uncertainty (sigma~X~)^2^ gives an
   *            idea of the uncertainty in the position of averagely
   *            defined atoms (atoms with B values equal to average B value)
   *
   *                  3                         N~a~
   * (sigma~X~)^2^  = ---------------------------------------------------------
   *                  8 pi^2^ sum~i~ {[1/Sigma - (E~o~)^2^ (1-m^2^)](SUM_AS)s^2^}
   *
   *            N~a~           = number of atoms
   *            E~o~           = normalized structure factors
   *            m              = figure of merit of phases of reflections
   *                             included in the summation
   *            s              = reciprocal-space vector
   *
   *            SUM_AS         = (sigma~A~)^2^/Sigma^2^
   *            Sigma          = (sigma~{E;exp}~)^2^ + epsilon [1-(sigma~A~)^2^]
   *            sigma~{E;exp}~  = experimental uncertainties of normalized
   *                             structure factors
   *            sigma~A~        = <cos 2 pi s delta~x~> SQRT(Sigma~P~/Sigma~N~)
   *                             estimated using maximum likelihood
   *            Sigma~P~        = sum~{atoms in model}~ f^2^
   *            Sigma~N~        = sum~{atoms in crystal}~ f^2^
   *            f               = atom form factor
   *            delta~x~        = expected error
   *            epsilon         = multiplicity of diffracting plane
   *
   *            summation is over all reflections included in refinement
   *
   *            Ref: (sigma_A estimation) "Refinement of macromolecular
   *                 structures by the maximum-likelihood method",
   *                 Murshudov, G. N., Vagin, A. A. & Dodson, E. J. (1997).
   *                 Acta Cryst. D53, 240-255.
   *
   *                 (SU ML estimation) Murshudov, G. N. & Dodson,
   *                 E. J. (1997). Simplified error estimation a la
   *                 Cruickshank in macromolecular crystallography.
   *                 CCP4 Newsletter on Protein Crystallography, No. 33,
   *                 January 1997, pp. 31-39.
   *
   *                http://www.ccp4.ac.uk/newsletters/newsletter33/murshudov.html
   */
  overall_SU_ML?: Maybe<Scalars['Float']['output']>;
  /**
   * The overall standard uncertainty (estimated standard deviation)
   *  of the displacement parameters based on the crystallographic
   *  R value, expressed in a formalism known as the dispersion
   *  precision indicator (DPI).
   *
   *  The overall standard uncertainty (sigma~B~) gives an idea
   *  of the uncertainty in the B values of averagely defined
   *  atoms (atoms with B values equal to the average B value).
   *
   *                         N~a~
   *  (sigma~B~)^2^ = 0.65 ---------- (R~value~)^2^ (D~min~)^2^ C^-2/3^
   *                       (N~o~-N~p~)
   *
   *
   *  N~a~     = number of atoms included in refinement
   *  N~o~     = number of observations
   *  N~p~     = number of parameters refined
   *  R~value~ = conventional crystallographic R value
   *  D~min~   = maximum resolution
   *  C        = completeness of data
   *
   *  Ref: Cruickshank, D. W. J. (1999). Acta Cryst. D55, 583-601.
   *
   *       Murshudov, G. N. & Dodson,
   *       E. J. (1997). Simplified error estimation a la
   *       Cruickshank in macromolecular crystallography.
   *       CCP4 Newsletter on Protein Crystallography, No. 33,
   *       January 1997, pp. 31-39.
   *
   *      http://www.ccp4.ac.uk/newsletters/newsletter33/murshudov.html
   */
  overall_SU_R_Cruickshank_DPI?: Maybe<Scalars['Float']['output']>;
  /**
   * The overall standard uncertainty (estimated standard deviation)
   *  of the displacement parameters based on the free R value.
   *
   *  The overall standard uncertainty (sigma~B~) gives an idea
   *  of the uncertainty in the B values of averagely defined
   *  atoms (atoms with B values equal to the average B value).
   *
   *                         N~a~
   *  (sigma~B~)^2^ = 0.65 ---------- (R~free~)^2^ (D~min~)^2^ C^-2/3^
   *                       (N~o~-N~p~)
   *
   *
   *  N~a~     = number of atoms included in refinement
   *  N~o~     = number of observations
   *  N~p~     = number of parameters refined
   *  R~free~  = conventional free crystallographic R value calculated
   *           using reflections not included in refinement
   *  D~min~   = maximum resolution
   *  C        = completeness of data
   *
   *  Ref: Cruickshank, D. W. J. (1999). Acta Cryst. D55, 583-601.
   *
   *       Murshudov, G. N. & Dodson,
   *       E. J. (1997). Simplified error estimation a la
   *       Cruickshank in macromolecular crystallography.
   *       CCP4 Newsletter on Protein Crystallography, No. 33,
   *       January 1997, pp. 31-39.
   *
   *      http://www.ccp4.ac.uk/newsletters/newsletter33/murshudov.html
   */
  overall_SU_R_free?: Maybe<Scalars['Float']['output']>;
  /**
   * Details of the manner in which the cross validation
   *  reflections were selected.
   *
   * Examples:
   * Random selection
   *
   */
  pdbx_R_Free_selection_details?: Maybe<Scalars['String']['output']>;
  /**
   * A flag for TLS refinements identifying the type of atomic displacement parameters stored
   *  in _atom_site.B_iso_or_equiv.
   *
   * Allowable values:
   * LIKELY RESIDUAL, UNVERIFIED
   *
   */
  pdbx_TLS_residual_ADP_flag?: Maybe<Scalars['String']['output']>;
  /**
   * Average Fourier Shell Correlation (avgFSC) between model and
   *  observed structure factors for reflections not included in refinement.
   *
   *  The average FSC is a measure of the agreement between observed
   *  and calculated structure factors.
   *
   *                   sum(N~i~ FSC~free-i~)
   *  avgFSC~free~   = ---------------------
   *                   sum(N~i~)
   *
   *
   *  N~i~          = the number of free reflections in the resolution shell i
   *  FSC~free-i~   = FSC for free reflections in the i-th resolution shell calculated as:
   *
   *                 (sum(|F~o~| |F~c~| fom cos(phi~c~-phi~o~)))
   *  FSC~free-i~  = -------------------------------------------
   *                 (sum(|F~o~|^2^) (sum(|F~c~|^2^)))^1/2^
   *
   *  |F~o~|   = amplitude of observed structure factor
   *  |F~c~|   = amplitude of calculated structure factor
   *  phi~o~   = phase of observed structure factor
   *  phi~c~   = phase of calculated structure factor
   *  fom      = figure of merit of the experimental phases.
   *
   *  Summation of FSC~free-i~ is carried over all free reflections in the resolution shell.
   *
   *  Summation of avgFSC~free~ is carried over all resolution shells.
   *
   *
   *  Ref:  Rosenthal P.B., Henderson R.
   *        "Optimal determination of particle orientation, absolute hand,
   *        and contrast loss in single-particle electron cryomicroscopy.
   *        Journal of Molecular Biology. 2003;333(4):721-745, equation (A6).
   */
  pdbx_average_fsc_free?: Maybe<Scalars['Float']['output']>;
  /**
   * Overall average Fourier Shell Correlation (avgFSC) between model and
   *  observed structure factors for all reflections.
   *
   *  The average FSC is a measure of the agreement between observed
   *  and calculated structure factors.
   *
   *             sum(N~i~ FSC~i~)
   *  avgFSC   = ----------------
   *             sum(N~i~)
   *
   *
   *  N~i~     = the number of all reflections in the resolution shell i
   *  FSC~i~   = FSC for all reflections in the i-th resolution shell calculated as:
   *
   *            (sum(|F~o~| |F~c~| fom cos(phi~c~-phi~o~)))
   *  FSC~i~  = -------------------------------------------
   *            (sum(|F~o~|^2^) (sum(|F~c~|^2^)))^1/2^
   *
   *  |F~o~|   = amplitude of observed structure factor
   *  |F~c~|   = amplitude of calculated structure factor
   *  phi~o~   = phase of observed structure factor
   *  phi~c~   = phase of calculated structure factor
   *  fom      = figure of merit of the experimental phases.
   *
   *  Summation of FSC~i~ is carried over all reflections in the resolution shell.
   *
   *  Summation of avgFSC is carried over all resolution shells.
   *
   *
   *  Ref:  Rosenthal P.B., Henderson R.
   *        "Optimal determination of particle orientation, absolute hand,
   *        and contrast loss in single-particle electron cryomicroscopy.
   *        Journal of Molecular Biology. 2003;333(4):721-745, equation (A6).
   */
  pdbx_average_fsc_overall?: Maybe<Scalars['Float']['output']>;
  /**
   * Average Fourier Shell Correlation (avgFSC) between model and
   *  observed structure factors for reflections included in refinement.
   *
   *  The average FSC is a measure of the agreement between observed
   *  and calculated structure factors.
   *
   *                   sum(N~i~ FSC~work-i~)
   *  avgFSC~work~   = ---------------------
   *                   sum(N~i~)
   *
   *
   *  N~i~          = the number of working reflections in the resolution shell i
   *  FSC~work-i~   = FSC for working reflections in the i-th resolution shell calculated as:
   *
   *                 (sum(|F~o~| |F~c~| fom cos(phi~c~-phi~o~)))
   *  FSC~work-i~  = -------------------------------------------
   *                 (sum(|F~o~|^2^) (sum(|F~c~|^2^)))^1/2^
   *
   *  |F~o~|   = amplitude of observed structure factor
   *  |F~c~|   = amplitude of calculated structure factor
   *  phi~o~   = phase of observed structure factor
   *  phi~c~   = phase of calculated structure factor
   *  fom      = figure of merit of the experimental phases.
   *
   *  Summation of FSC~work-i~ is carried over all working reflections in the resolution shell.
   *
   *  Summation of avgFSC~work~ is carried over all resolution shells.
   *
   *
   *  Ref:  Rosenthal P.B., Henderson R.
   *        "Optimal determination of particle orientation, absolute hand,
   *        and contrast loss in single-particle electron cryomicroscopy.
   *        Journal of Molecular Biology. 2003;333(4):721-745, equation (A6).
   */
  pdbx_average_fsc_work?: Maybe<Scalars['Float']['output']>;
  /** Value of F at "high end" of data cutoff. */
  pdbx_data_cutoff_high_absF?: Maybe<Scalars['Float']['output']>;
  /**
   * Value of RMS |F| used as high data cutoff.
   *
   * Examples:
   * null
   *
   */
  pdbx_data_cutoff_high_rms_absF?: Maybe<Scalars['Float']['output']>;
  /**
   * Value of F at "low end" of data cutoff.
   *
   * Examples:
   * null
   *
   */
  pdbx_data_cutoff_low_absF?: Maybe<Scalars['Float']['output']>;
  /**
   * An identifier for the diffraction data set used in this refinement.
   *
   *  Multiple diffraction data sets specified as a comma separated list.
   */
  pdbx_diffrn_id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Whether the structure was refined with indvidual
   * isotropic, anisotropic or overall temperature factor.
   *
   * Examples:
   * Isotropic, Overall
   *
   */
  pdbx_isotropic_thermal_model?: Maybe<Scalars['String']['output']>;
  /**
   * Whether the cross validataion method was used through
   * out or only at the end.
   *
   * Examples:
   * FREE R-VALUE
   *
   */
  pdbx_ls_cross_valid_method?: Maybe<Scalars['String']['output']>;
  /** Data cutoff (SIGMA(F)) */
  pdbx_ls_sigma_F?: Maybe<Scalars['Float']['output']>;
  /** Data cutoff (SIGMA(F^2)) */
  pdbx_ls_sigma_Fsqd?: Maybe<Scalars['Float']['output']>;
  /** Data cutoff (SIGMA(I)) */
  pdbx_ls_sigma_I?: Maybe<Scalars['Float']['output']>;
  /**
   * Method(s) used to determine the structure.
   *
   * Examples:
   * AB INITIO PHASING, DM, ISAS, ISIR, ISIRAS, MAD, MIR, MIRAS, MR, SIR, SIRAS
   *
   */
  pdbx_method_to_determine_struct?: Maybe<Scalars['String']['output']>;
  /**
   * Overall estimated standard uncertainties of positional
   *  parameters based on R value.
   */
  pdbx_overall_ESU_R?: Maybe<Scalars['Float']['output']>;
  /** Overall estimated standard uncertainties of positional parameters based on R free value. */
  pdbx_overall_ESU_R_Free?: Maybe<Scalars['Float']['output']>;
  /**
   * The overall standard uncertainty (estimated standard deviation)
   *  of the displacement parameters based on the crystallographic
   *  R value, expressed in a formalism known as the dispersion
   *  precision indicator (DPI).
   *
   *  Ref: Blow, D (2002) Acta Cryst. D58, 792-797
   */
  pdbx_overall_SU_R_Blow_DPI?: Maybe<Scalars['Float']['output']>;
  /**
   * The overall standard uncertainty (estimated standard deviation)
   *  of the displacement parameters based on the crystallographic
   *  R-free value, expressed in a formalism known as the dispersion
   *  precision indicator (DPI).
   *
   *  Ref: Blow, D (2002) Acta Cryst. D58, 792-797
   */
  pdbx_overall_SU_R_free_Blow_DPI?: Maybe<Scalars['Float']['output']>;
  /**
   * The overall standard uncertainty (estimated standard deviation)
   *  of the displacement parameters based on the crystallographic
   *  R-free value, expressed in a formalism known as the dispersion
   *  precision indicator (DPI).
   *
   *  Ref: Cruickshank, D. W. J. (1999). Acta Cryst. D55, 583-601.
   */
  pdbx_overall_SU_R_free_Cruickshank_DPI?: Maybe<Scalars['Float']['output']>;
  /**
   * The overall phase error for all reflections after refinement using
   *  the current refinement target.
   *
   * Examples:
   * null
   *
   */
  pdbx_overall_phase_error?: Maybe<Scalars['Float']['output']>;
  /**
   * This data item uniquely identifies a refinement within an entry.
   *  _refine.pdbx_refine_id can be used to distinguish the results of
   *  joint refinements.
   */
  pdbx_refine_id: Scalars['String']['output'];
  /** For bulk solvent mask calculation, the amount that the ionic radii of atoms, which can be ions, are increased used. */
  pdbx_solvent_ion_probe_radii?: Maybe<Scalars['Float']['output']>;
  /** For bulk solvent mask calculation, amount mask is shrunk after taking away atoms with new radii and a constant value assigned to this new region. */
  pdbx_solvent_shrinkage_radii?: Maybe<Scalars['Float']['output']>;
  /** For bulk solvent mask calculation, the value by which the vdw radii of non-ion atoms (like carbon) are increased and used. */
  pdbx_solvent_vdw_probe_radii?: Maybe<Scalars['Float']['output']>;
  /**
   * Starting model for refinement.  Starting model for
   *  molecular replacement should refer to a previous
   *  structure or experiment.
   *
   * Examples:
   * 1XYZ, 2XYZ, BDL001
   *
   */
  pdbx_starting_model?: Maybe<Scalars['String']['output']>;
  /**
   * Special case of stereochemistry target values used
   * in SHELXL refinement.
   */
  pdbx_stereochem_target_val_spec_case?: Maybe<Scalars['String']['output']>;
  /** Stereochemistry target values used in refinement. */
  pdbx_stereochemistry_target_values?: Maybe<Scalars['String']['output']>;
  /** Special aspects of the solvent model used during refinement. */
  solvent_model_details?: Maybe<Scalars['String']['output']>;
  /**
   * The value of the BSOL solvent-model parameter describing
   *  the average isotropic displacement parameter of disordered
   *  solvent atoms.
   *
   *  This is one of the two parameters (the other is
   *  _refine.solvent_model_param_ksol) in Tronrud's method of
   *  modelling the contribution of bulk solvent to the
   *  scattering. The standard scale factor is modified according
   *  to the expression
   *
   *      k0 exp(-B0 * s^2^)[1-KSOL * exp(-BSOL * s^2^)]
   *
   *  where k0 and B0 are the scale factors for the protein.
   *
   *  Ref: Tronrud, D. E. (1997). Methods Enzymol. 277, 243-268.
   */
  solvent_model_param_bsol?: Maybe<Scalars['Float']['output']>;
  /**
   * The value of the KSOL solvent-model parameter describing
   *  the ratio of the electron density in the bulk solvent to the
   *  electron density in the molecular solute.
   *
   *  This is one of the two parameters (the other is
   *  _refine.solvent_model_param_bsol) in Tronrud's method of
   *  modelling the contribution of bulk solvent to the
   *  scattering. The standard scale factor is modified according
   *  to the expression
   *
   *      k0 exp(-B0 * s^2^)[1-KSOL * exp(-BSOL * s^2^)]
   *
   *  where k0 and B0 are the scale factors for the protein.
   *
   *  Ref: Tronrud, D. E. (1997). Methods Enzymol. 277, 243-268.
   */
  solvent_model_param_ksol?: Maybe<Scalars['Float']['output']>;
}

export interface RefineAnalyze {
  __typename?: 'RefineAnalyze';
  /**
   * The estimated coordinate error obtained from the plot of
   *  the R value versus sin(theta)/lambda for the reflections
   *  treated as a test set during refinement.
   *
   *  Ref:  Luzzati, V. (1952). Traitement statistique des erreurs
   *  dans la determination des structures cristallines. Acta
   *  Cryst. 5, 802-810.
   */
  Luzzati_coordinate_error_free?: Maybe<Scalars['Float']['output']>;
  /**
   * The estimated coordinate error obtained from the plot of
   *  the R value versus sin(theta)/lambda for reflections classified
   *  as observed.
   *
   *  Ref:  Luzzati, V. (1952). Traitement statistique des erreurs
   *  dans la determination des structures cristallines. Acta
   *  Cryst. 5, 802-810.
   */
  Luzzati_coordinate_error_obs?: Maybe<Scalars['Float']['output']>;
  /**
   * The value of the low-resolution cutoff used in constructing the
   *  Luzzati plot for reflections treated as a test set during
   *  refinement.
   *
   *  Ref:  Luzzati, V. (1952). Traitement statistique des erreurs
   *  dans la determination des structures cristallines. Acta
   *  Cryst. 5, 802-810.
   */
  Luzzati_d_res_low_free?: Maybe<Scalars['Float']['output']>;
  /**
   * The value of the low-resolution cutoff used in
   *  constructing the Luzzati plot for reflections classified as
   *  observed.
   *
   *  Ref:  Luzzati, V. (1952). Traitement statistique des erreurs
   *  dans la determination des structures cristallines. Acta
   *  Cryst. 5, 802-810.
   */
  Luzzati_d_res_low_obs?: Maybe<Scalars['Float']['output']>;
  /**
   * The value of sigma~a~ used in constructing the Luzzati plot for
   *  the reflections treated as a test set during refinement.
   *  Details of the estimation of sigma~a~ can be specified
   *  in _refine_analyze.Luzzati_sigma_a_free_details.
   *
   *  Ref:  Luzzati, V. (1952). Traitement statistique des erreurs
   *  dans la determination des structures cristallines. Acta
   *  Cryst. 5, 802-810.
   */
  Luzzati_sigma_a_free?: Maybe<Scalars['Float']['output']>;
  /**
   * The value of sigma~a~ used in constructing the Luzzati plot for
   *  reflections classified as observed. Details of the
   *  estimation of sigma~a~ can be specified in
   *  _refine_analyze.Luzzati_sigma_a_obs_details.
   *
   *  Ref:  Luzzati, V. (1952). Traitement statistique des erreurs
   *  dans la determination des structures cristallines. Acta
   *  Cryst. 5, 802-810.
   */
  Luzzati_sigma_a_obs?: Maybe<Scalars['Float']['output']>;
  /**
   * The number of discretely disordered residues in the refined
   *  model.
   */
  number_disordered_residues?: Maybe<Scalars['Float']['output']>;
  /**
   * The sum of the occupancies of the hydrogen atoms in the refined
   *  model.
   */
  occupancy_sum_hydrogen?: Maybe<Scalars['Float']['output']>;
  /**
   * The sum of the occupancies of the non-hydrogen atoms in the
   *   refined model.
   */
  occupancy_sum_non_hydrogen?: Maybe<Scalars['Float']['output']>;
  /** record the high resolution for calculating Luzzati statistics. */
  pdbx_Luzzati_d_res_high_obs?: Maybe<Scalars['Float']['output']>;
  /**
   * This data item uniquely identifies a refinement within an entry.
   *  _refine_analyze.pdbx_refine_id can be used to distinguish the results
   *  of joint refinements.
   */
  pdbx_refine_id: Scalars['String']['output'];
}

export interface RefineHist {
  __typename?: 'RefineHist';
  /**
   * The value of _refine_hist.cycle_id must uniquely identify a
   *  record in the REFINE_HIST list.
   *
   *  Note that this item need not be a number; it can be any unique
   *  identifier.
   */
  cycle_id: Scalars['String']['output'];
  /**
   * The lowest value for the interplanar spacings for the
   *  reflection data for this cycle of refinement. This is called
   *  the highest resolution.
   */
  d_res_high?: Maybe<Scalars['Float']['output']>;
  /**
   * The highest value for the interplanar spacings for the
   *  reflection data for this cycle of refinement. This is
   *  called the lowest resolution.
   */
  d_res_low?: Maybe<Scalars['Float']['output']>;
  /**
   * The number of solvent atoms that were included in the model at
   *  this cycle of the refinement.
   */
  number_atoms_solvent?: Maybe<Scalars['Int']['output']>;
  /**
   * The total number of atoms that were included in the model at
   *  this cycle of the refinement.
   */
  number_atoms_total?: Maybe<Scalars['Int']['output']>;
  /** Mean isotropic B-value for ligand molecules included in refinement. */
  pdbx_B_iso_mean_ligand?: Maybe<Scalars['Float']['output']>;
  /** Mean isotropic B-value for solvent molecules included in refinement. */
  pdbx_B_iso_mean_solvent?: Maybe<Scalars['Float']['output']>;
  /** Number of ligand atoms included in refinement */
  pdbx_number_atoms_ligand?: Maybe<Scalars['Int']['output']>;
  /** Number of nucleic atoms included in refinement */
  pdbx_number_atoms_nucleic_acid?: Maybe<Scalars['Int']['output']>;
  /** Number of protein atoms included in refinement */
  pdbx_number_atoms_protein?: Maybe<Scalars['Int']['output']>;
  /** Total number of polymer residues included in refinement. */
  pdbx_number_residues_total?: Maybe<Scalars['Int']['output']>;
  /**
   * This data item uniquely identifies a refinement within an entry.
   *  _refine_hist.pdbx_refine_id can be used to distinguish the results
   *  of joint refinements.
   */
  pdbx_refine_id: Scalars['String']['output'];
}

export interface RefineLsRestr {
  __typename?: 'RefineLsRestr';
  /**
   * For the given parameter type, the root-mean-square deviation
   *  between the ideal values used as restraints in the least-squares
   *  refinement and the values obtained by refinement. For instance,
   *  bond distances may deviate by 0.018 \%A (r.m.s.) from ideal
   *  values in the current model.
   */
  dev_ideal?: Maybe<Scalars['Float']['output']>;
  /**
   * For the given parameter type, the target root-mean-square
   *  deviation between the ideal values used as restraints in the
   *  least-squares refinement and the values obtained by refinement.
   */
  dev_ideal_target?: Maybe<Scalars['Float']['output']>;
  /**
   * The number of parameters of this type subjected to restraint in
   *  least-squares refinement.
   */
  number?: Maybe<Scalars['Int']['output']>;
  /**
   * This data item uniquely identifies a refinement within an entry.
   *  _refine_ls_restr.pdbx_refine_id can be used to distinguish the results
   *  of joint refinements.
   */
  pdbx_refine_id: Scalars['String']['output'];
  /**
   * The functional form of the restraint function used in the least-squares
   *  refinement.
   *
   * Examples:
   * SINUSOIDAL, HARMONIC, SEMIHARMONIC
   *
   */
  pdbx_restraint_function?: Maybe<Scalars['String']['output']>;
  /**
   * The type of the parameter being restrained.
   *  Explicit sets of data values are provided for the programs
   *  PROTIN/PROLSQ (beginning with p_) and RESTRAIN (beginning with
   *  RESTRAIN_). As computer programs change, these data values
   *  are given as examples, not as an enumeration list. Computer
   *  programs that convert a data block to a refinement table will
   *  expect the exact form of the data values given here to be used.
   *
   * Examples:
   * p_bond_d, p_angle_d, p_planar_d, p_xhbond_d, p_xhangle_d, p_hydrog_d, p_special_d, p_planar, p_chiral, p_singtor_nbd, p_multtor_nbd, p_xyhbond_nbd, p_xhyhbond_nbd, p_special_tor, p_planar_tor, p_staggered_tor, p_orthonormal_tor, p_mcbond_it, p_mcangle_it, p_scbond_it, p_scangle_it, p_xhbond_it, p_xhangle_it, p_special_it, RESTRAIN_Distances < 2.12, RESTRAIN_Distances 2.12 < D < 2.625, RESTRAIN_Distances > 2.625, RESTRAIN_Peptide Planes, RESTRAIN_Ring and other planes, RESTRAIN_rms diffs for Uiso atoms at dist 1.2-1.4, RESTRAIN_rms diffs for Uiso atoms at dist 1.4-1.6, RESTRAIN_rms diffs for Uiso atoms at dist 1.8-2.0, RESTRAIN_rms diffs for Uiso atoms at dist 2.0-2.2, RESTRAIN_rms diffs for Uiso atoms at dist 2.2-2.4, RESTRAIN_rms diffs for Uiso atoms at dist >2.4
   *
   */
  type: Scalars['String']['output'];
  /**
   * The weighting value applied to this type of restraint in
   *  the least-squares refinement.
   */
  weight?: Maybe<Scalars['Float']['output']>;
}

export interface Reflns {
  __typename?: 'Reflns';
  /**
   * The value of the overall isotropic displacement parameter
   *  estimated from the slope of the Wilson plot.
   */
  B_iso_Wilson_estimate?: Maybe<Scalars['Float']['output']>;
  /**
   * A description of the method by which a subset of reflections was
   *  selected for exclusion from refinement so as to be used in the
   *  calculation of a 'free' R factor.
   *
   * Examples:
   * The data set was sorted with l varying most
   *                                   rapidly and h varying least rapidly. Every
   *                                   10th reflection in this sorted list was
   *                                   excluded from refinement and included in the
   *                                   calculation of a 'free' R factor.
   *
   */
  R_free_details?: Maybe<Scalars['String']['output']>;
  /**
   * Residual factor Rmerge for all reflections that satisfy the
   *  resolution limits established by _reflns.d_resolution_high
   *  and _reflns.d_resolution_low.
   *
   *              sum~i~(sum~j~|F~j~ - <F>|)
   *  Rmerge(F) = --------------------------
   *                   sum~i~(sum~j~<F>)
   *
   *  F~j~ = the amplitude of the jth observation of reflection i
   *  <F>  = the mean of the amplitudes of all observations of
   *         reflection i
   *
   *  sum~i~ is taken over all reflections
   *  sum~j~ is taken over all observations of each reflection
   */
  Rmerge_F_all?: Maybe<Scalars['Float']['output']>;
  /**
   * Residual factor Rmerge for reflections that satisfy the
   *  resolution limits established by _reflns.d_resolution_high
   *  and _reflns.d_resolution_low and the observation limit
   *  established by _reflns.observed_criterion.
   *
   *              sum~i~(sum~j~|F~j~ - <F>|)
   *  Rmerge(F) = --------------------------
   *                   sum~i~(sum~j~<F>)
   *
   *  F~j~ = the amplitude of the jth observation of reflection i
   *  <F>  = the mean of the amplitudes of all observations of
   *         reflection i
   *
   *  sum~i~ is taken over all reflections
   *  sum~j~ is taken over all observations of each reflection
   */
  Rmerge_F_obs?: Maybe<Scalars['Float']['output']>;
  /**
   * The smallest value in angstroms for the interplanar spacings
   *  for the reflection data. This is called the highest resolution.
   */
  d_resolution_high?: Maybe<Scalars['Float']['output']>;
  /**
   * The largest value in angstroms for the interplanar spacings
   *  for the reflection data. This is called the lowest resolution.
   */
  d_resolution_low?: Maybe<Scalars['Float']['output']>;
  /**
   * A description of special aspects of the data-reduction
   *  procedures.
   *
   * Examples:
   * Merging and scaling based on only those
   *                                   reflections with I > sig(I).
   *
   */
  data_reduction_details?: Maybe<Scalars['String']['output']>;
  /**
   * The method used for data reduction.
   *
   *  Note that this is not the computer program used, which is
   *  described in the SOFTWARE category, but the method
   *  itself.
   *
   *  This data item should be used to describe significant
   *  methodological options used within the data-reduction programs.
   *
   * Examples:
   * Profile fitting by method of Kabsch (1987).
   *                                   Scaling used spherical harmonic coefficients.
   *
   */
  data_reduction_method?: Maybe<Scalars['String']['output']>;
  /**
   * A description of reflection data not covered by other data
   *  names. This should include details of the Friedel pairs.
   */
  details?: Maybe<Scalars['String']['output']>;
  /**
   * Maximum value of the Miller index h for the reflection data. This
   *  need not have the same value as _diffrn_reflns.limit_h_max.
   */
  limit_h_max?: Maybe<Scalars['Int']['output']>;
  /**
   * Minimum value of the Miller index h for the reflection data. This
   *  need not have the same value as _diffrn_reflns.limit_h_min.
   */
  limit_h_min?: Maybe<Scalars['Int']['output']>;
  /**
   * Maximum value of the Miller index k for the reflection data. This
   *  need not have the same value as _diffrn_reflns.limit_k_max.
   */
  limit_k_max?: Maybe<Scalars['Int']['output']>;
  /**
   * Minimum value of the Miller index k for the reflection data. This
   *  need not have the same value as _diffrn_reflns.limit_k_min.
   */
  limit_k_min?: Maybe<Scalars['Int']['output']>;
  /**
   * Maximum value of the Miller index l for the reflection data. This
   *  need not have the same value as _diffrn_reflns.limit_l_max.
   */
  limit_l_max?: Maybe<Scalars['Int']['output']>;
  /**
   * Minimum value of the Miller index l for the reflection data. This
   *  need not have the same value as _diffrn_reflns.limit_l_min.
   */
  limit_l_min?: Maybe<Scalars['Int']['output']>;
  /**
   * The total number of reflections in the REFLN list (not the
   *  DIFFRN_REFLN list). This number may contain Friedel-equivalent
   *  reflections according to the nature of the structure and the
   *  procedures used. The item _reflns.details describes the
   *  reflection data.
   */
  number_all?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of reflections in the REFLN list (not the DIFFRN_REFLN
   *  list) classified as observed (see _reflns.observed_criterion).
   *  This number may contain Friedel-equivalent reflections according
   *  to the nature of the structure and the procedures used.
   */
  number_obs?: Maybe<Scalars['Int']['output']>;
  /**
   * The criterion used to classify a reflection as 'observed'. This
   *  criterion is usually expressed in terms of a sigma(I) or
   *  sigma(F) threshold.
   *
   * Examples:
   * >2sigma(I)
   *
   */
  observed_criterion?: Maybe<Scalars['String']['output']>;
  /**
   * The criterion used to classify a reflection as 'observed'
   *  expressed as an upper limit for the value of F.
   */
  observed_criterion_F_max?: Maybe<Scalars['Float']['output']>;
  /**
   * The criterion used to classify a reflection as 'observed'
   *  expressed as a lower limit for the value of F.
   */
  observed_criterion_F_min?: Maybe<Scalars['Float']['output']>;
  /**
   * The criterion used to classify a reflection as 'observed'
   *  expressed as an upper limit for the value of I.
   */
  observed_criterion_I_max?: Maybe<Scalars['Float']['output']>;
  /**
   * The criterion used to classify a reflection as 'observed'
   *  expressed as a lower limit for the value of I.
   */
  observed_criterion_I_min?: Maybe<Scalars['Float']['output']>;
  /**
   * The criterion used to classify a reflection as 'observed'
   *  expressed as a multiple of the value of sigma(F).
   */
  observed_criterion_sigma_F?: Maybe<Scalars['Float']['output']>;
  /**
   * The criterion used to classify a reflection as 'observed'
   *  expressed as a multiple of the value of sigma(I).
   */
  observed_criterion_sigma_I?: Maybe<Scalars['Float']['output']>;
  /**
   * The Pearson's correlation coefficient expressed as a decimal value
   *               between the average intensities from randomly selected
   *               half-datasets.
   *
   * 	      Ref: Karplus & Diederichs (2012), Science 336, 1030-33
   */
  pdbx_CC_half?: Maybe<Scalars['Float']['output']>;
  /**
   * R split measures the agreement between the sets of intensities created by merging
   *               odd- and even-numbered images  from the overall data.
   *
   * 	      Ref: T. A. White, R. A. Kirian, A. V. Martin, A. Aquila, K. Nass, A. Barty
   *               and H. N. Chapman (2012), J. Appl. Cryst. 45, 335-341
   */
  pdbx_R_split?: Maybe<Scalars['Float']['output']>;
  /**
   * The R value for merging intensities satisfying the observed
   *  criteria in this data set.
   */
  pdbx_Rmerge_I_obs?: Maybe<Scalars['Float']['output']>;
  /**
   * The precision-indicating merging R factor value Rpim,
   *  for merging all intensities in this data set.
   *
   *         sum~i~ [1/(N~i~ - 1)]1/2^ sum~j~ | I~j~ - <I~i~> |
   *  Rpim = --------------------------------------------------
   *                       sum~i~ ( sum~j~ I~j~ )
   *
   *  I~j~   = the intensity of the jth observation of reflection i
   *  <I~i~> = the mean of the intensities of all observations
   *           of reflection i
   *  N~i~   = the redundancy (the number of times reflection i
   *           has been measured).
   *
   *  sum~i~ is taken over all reflections
   *  sum~j~ is taken over all observations of each reflection.
   *
   *  Ref: Diederichs, K. & Karplus, P. A. (1997). Nature Struct.
   *       Biol. 4, 269-275.
   *       Weiss, M. S. & Hilgenfeld, R. (1997). J. Appl. Cryst.
   *       30, 203-205.
   *       Weiss, M. S. (2001). J. Appl. Cryst. 34, 130-135.
   */
  pdbx_Rpim_I_all?: Maybe<Scalars['Float']['output']>;
  /**
   * The redundancy-independent merging R factor value Rrim,
   *               also denoted Rmeas, for merging all intensities in this
   *               data set.
   *
   *                      sum~i~ [N~i~/(N~i~ - 1)]1/2^ sum~j~ | I~j~ - <I~i~> |
   *               Rrim = ----------------------------------------------------
   *                                   sum~i~ ( sum~j~ I~j~ )
   *
   *               I~j~   = the intensity of the jth observation of reflection i
   *               <I~i~> = the mean of the intensities of all observations of
   *                        reflection i
   * 	       N~i~   = the redundancy (the number of times reflection i
   *                        has been measured).
   *
   *               sum~i~ is taken over all reflections
   *               sum~j~ is taken over all observations of each reflection.
   *
   *               Ref: Diederichs, K. & Karplus, P. A. (1997). Nature Struct.
   *                    Biol. 4, 269-275.
   *                    Weiss, M. S. & Hilgenfeld, R. (1997). J. Appl. Cryst.
   *                    30, 203-205.
   *                    Weiss, M. S. (2001). J. Appl. Cryst. 34, 130-135.
   */
  pdbx_Rrim_I_all?: Maybe<Scalars['Float']['output']>;
  /**
   * The R sym value as a decimal number.
   *
   * Examples:
   * null
   *
   */
  pdbx_Rsym_value?: Maybe<Scalars['Float']['output']>;
  /** Overall  Chi-squared statistic. */
  pdbx_chi_squared?: Maybe<Scalars['Float']['output']>;
  /**
   * An identifier for the diffraction data set for this set of summary statistics.
   *
   *  Multiple diffraction data sets entered as a comma separated list.
   */
  pdbx_diffrn_id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The ratio of the average intensity to the average uncertainty,
   *  <I>/<sigma(I)>.
   */
  pdbx_netI_over_av_sigmaI?: Maybe<Scalars['Float']['output']>;
  /**
   * The mean of the ratio of the intensities to their
   *  standard uncertainties, <I/sigma(I)>.
   */
  pdbx_netI_over_sigmaI?: Maybe<Scalars['Float']['output']>;
  /** Total number of measured reflections. */
  pdbx_number_measured_all?: Maybe<Scalars['Int']['output']>;
  /** An ordinal identifier for this set of reflection statistics. */
  pdbx_ordinal: Scalars['Int']['output'];
  /** Overall redundancy for this data set. */
  pdbx_redundancy?: Maybe<Scalars['Float']['output']>;
  /** Number of reflections rejected in scaling operations. */
  pdbx_scaling_rejects?: Maybe<Scalars['Int']['output']>;
  /**
   * The percentage of geometrically possible reflections represented
   *  by reflections that satisfy the resolution limits established
   *  by _reflns.d_resolution_high and _reflns.d_resolution_low and
   *  the observation limit established by
   *  _reflns.observed_criterion.
   */
  percent_possible_obs?: Maybe<Scalars['Float']['output']>;
  /**
   * The value of _reflns.phase_calculation_details describes a
   *  special details about calculation of phases in _refln.phase_calc.
   *
   * Examples:
   * From model, NCS averaging, Solvent flipping, Solvent flattening, Multiple crystal averaging, Multiple phase modification, Other phase modification
   *
   */
  phase_calculation_details?: Maybe<Scalars['String']['output']>;
}

export interface ReflnsShell {
  __typename?: 'ReflnsShell';
  /**
   * Residual factor Rmerge for all reflections that satisfy the
   *  resolution limits established by _reflns_shell.d_res_high and
   *  _reflns_shell.d_res_low.
   *
   *              sum~i~(sum~j~|F~j~ - <F>|)
   *  Rmerge(F) = --------------------------
   *                   sum~i~(sum~j~<F>)
   *
   *  F~j~ = the amplitude of the jth observation of reflection i
   *  <F>  = the mean of the amplitudes of all observations of
   *         reflection i
   *
   *  sum~i~ is taken over all reflections
   *  sum~j~ is taken over all observations of each reflection
   */
  Rmerge_F_all?: Maybe<Scalars['Float']['output']>;
  /**
   * Residual factor Rmerge for reflections that satisfy the
   *  resolution limits established by _reflns_shell.d_res_high and
   *  _reflns_shell.d_res_low and the observation criterion
   *  established by _reflns.observed_criterion.
   *
   *              sum~i~(sum~j~|F~j~ - <F>|)
   *  Rmerge(F) = --------------------------
   *                   sum~i~(sum~j~<F>)
   *
   *  F~j~ = the amplitude of the jth observation of reflection i
   *  <F>  = the mean of the amplitudes of all observations of
   *         reflection i
   *
   *  sum~i~ is taken over all reflections
   *  sum~j~ is taken over all observations of each reflection
   */
  Rmerge_F_obs?: Maybe<Scalars['Float']['output']>;
  /**
   * The value of Rmerge(I) for all reflections in a given shell.
   *
   *              sum~i~(sum~j~|I~j~ - <I>|)
   *  Rmerge(I) = --------------------------
   *                  sum~i~(sum~j~<I>)
   *
   *  I~j~ = the intensity of the jth observation of reflection i
   *  <I>  = the mean of the intensities of all observations of
   *         reflection i
   *
   *  sum~i~ is taken over all reflections
   *  sum~j~ is taken over all observations of each reflection
   */
  Rmerge_I_all?: Maybe<Scalars['Float']['output']>;
  /**
   * The value of Rmerge(I) for reflections classified as 'observed'
   *  (see _reflns.observed_criterion) in a given shell.
   *
   *              sum~i~(sum~j~|I~j~ - <I>|)
   *  Rmerge(I) = --------------------------
   *                  sum~i~(sum~j~<I>)
   *
   *  I~j~ = the intensity of the jth observation of reflection i
   *  <I>  = the mean of the intensities of all observations of
   *         reflection i
   *
   *  sum~i~ is taken over all reflections
   *  sum~j~ is taken over all observations of each reflection
   */
  Rmerge_I_obs?: Maybe<Scalars['Float']['output']>;
  /**
   * The smallest value in angstroms for the interplanar spacings
   *  for the reflections in this shell. This is called the highest
   *  resolution.
   */
  d_res_high?: Maybe<Scalars['Float']['output']>;
  /**
   * The highest value in angstroms for the interplanar spacings
   *  for the reflections in this shell. This is called the lowest
   *  resolution.
   */
  d_res_low?: Maybe<Scalars['Float']['output']>;
  /**
   * The ratio of the mean of the intensities of all reflections
   *  in this shell to the mean of the standard uncertainties of the
   *  intensities of all reflections in this shell.
   */
  meanI_over_sigI_all?: Maybe<Scalars['Float']['output']>;
  /**
   * The ratio of the mean of the intensities of the reflections
   *  classified as 'observed' (see _reflns.observed_criterion) in
   *  this shell to the mean of the standard uncertainties of the
   *  intensities of the 'observed' reflections in this
   *  shell.
   */
  meanI_over_sigI_obs?: Maybe<Scalars['Float']['output']>;
  /**
   * The ratio of the mean of the intensities of all reflections
   *  in this shell to the mean of the standard uncertainties of the
   *  intensities of all reflections in this shell.
   */
  meanI_over_uI_all?: Maybe<Scalars['Float']['output']>;
  /**
   * The total number of reflections measured for this
   *  shell.
   */
  number_measured_all?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of reflections classified as 'observed'
   *  (see _reflns.observed_criterion) for this
   *  shell.
   */
  number_measured_obs?: Maybe<Scalars['Int']['output']>;
  /**
   * The number of unique reflections it is possible to measure in
   *  this shell.
   */
  number_possible?: Maybe<Scalars['Int']['output']>;
  /**
   * The total number of measured reflections which are symmetry-
   *  unique after merging for this shell.
   */
  number_unique_all?: Maybe<Scalars['Int']['output']>;
  /**
   * The total number of measured reflections classified as 'observed'
   *  (see _reflns.observed_criterion) which are symmetry-unique
   *  after merging for this shell.
   */
  number_unique_obs?: Maybe<Scalars['Int']['output']>;
  /**
   * The Pearson's correlation coefficient expressed as a decimal value
   *               between the average intensities from randomly selected
   *               half-datasets within the resolution shell.
   *
   * 	      Ref: Karplus & Diederichs (2012), Science 336, 1030-33
   */
  pdbx_CC_half?: Maybe<Scalars['Float']['output']>;
  /**
   * R split measures the agreement between the sets of intensities created by merging
   *               odd- and even-numbered images from the data within the resolution shell.
   *
   * 	      Ref: T. A. White, R. A. Kirian, A. V. Martin, A. Aquila, K. Nass,
   * 	      A. Barty and H. N. Chapman (2012), J. Appl. Cryst. 45, 335-341
   */
  pdbx_R_split?: Maybe<Scalars['Float']['output']>;
  /**
   * The precision-indicating merging R factor value Rpim,
   *  for merging all intensities in a given shell.
   *
   *         sum~i~ [1/(N~i~ - 1)]1/2^ sum~j~ | I~j~ - <I~i~> |
   *  Rpim = --------------------------------------------------
   *                       sum~i~ ( sum~j~ I~j~ )
   *
   *  I~j~   = the intensity of the jth observation of reflection i
   *  <I~i~> = the mean of the intensities of all observations of
   *           reflection i
   *  N~i~   = the redundancy (the number of times reflection i
   *           has been measured).
   *
   *  sum~i~ is taken over all reflections
   *  sum~j~ is taken over all observations of each reflection.
   *
   *  Ref: Diederichs, K. & Karplus, P. A. (1997). Nature Struct.
   *       Biol. 4, 269-275.
   *       Weiss, M. S. & Hilgenfeld, R. (1997). J. Appl. Cryst.
   *       30, 203-205.
   *       Weiss, M. S. (2001). J. Appl. Cryst. 34, 130-135.
   */
  pdbx_Rpim_I_all?: Maybe<Scalars['Float']['output']>;
  /**
   * The redundancy-independent merging R factor value Rrim,
   *               also denoted Rmeas, for merging all intensities in a
   *               given shell.
   *
   *                      sum~i~ [N~i~ /( N~i~ - 1)]1/2^ sum~j~ | I~j~ - <I~i~> |
   *               Rrim = --------------------------------------------------------
   *                                    sum~i~ ( sum~j~ I~j~ )
   *
   *               I~j~   = the intensity of the jth observation of reflection i
   *               <I~i~> = the mean of the intensities of all observations of
   *                        reflection i
   * 	      N~i~   = the redundancy (the number of times reflection i
   *                        has been measured).
   *
   *               sum~i~ is taken over all reflections
   *               sum~j~ is taken over all observations of each reflection.
   *
   *               Ref: Diederichs, K. & Karplus, P. A. (1997). Nature Struct.
   *                    Biol. 4, 269-275.
   *                    Weiss, M. S. & Hilgenfeld, R. (1997). J. Appl. Cryst.
   *                    30, 203-205.
   *                    Weiss, M. S. (2001). J. Appl. Cryst. 34, 130-135.
   */
  pdbx_Rrim_I_all?: Maybe<Scalars['Float']['output']>;
  /** R sym value in percent. */
  pdbx_Rsym_value?: Maybe<Scalars['Float']['output']>;
  /** Chi-squared statistic for this resolution shell. */
  pdbx_chi_squared?: Maybe<Scalars['Float']['output']>;
  /**
   * An identifier for the diffraction data set corresponding to this resolution shell.
   *
   *  Multiple diffraction data sets specified as a comma separated list.
   */
  pdbx_diffrn_id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The mean of the ratio of the intensities to their
   *  standard uncertainties of all reflections in the
   *  resolution shell.
   *
   *  _reflns_shell.pdbx_netI_over_sigmaI_all =  <I/sigma(I)>
   */
  pdbx_netI_over_sigmaI_all?: Maybe<Scalars['Float']['output']>;
  /**
   * The mean of the ratio of the intensities to their
   *  standard uncertainties of observed reflections
   *  (see _reflns.observed_criterion) in the resolution shell.
   *
   *  _reflns_shell.pdbx_netI_over_sigmaI_obs =  <I/sigma(I)>
   */
  pdbx_netI_over_sigmaI_obs?: Maybe<Scalars['Float']['output']>;
  /** An ordinal identifier for this resolution shell. */
  pdbx_ordinal: Scalars['Int']['output'];
  /** Redundancy for the current shell. */
  pdbx_redundancy?: Maybe<Scalars['Float']['output']>;
  /**
   * The number of rejected reflections in the resolution
   *  shell.  Reflections may be rejected from scaling
   *  by setting the observation criterion,
   *  _reflns.observed_criterion.
   */
  pdbx_rejects?: Maybe<Scalars['Int']['output']>;
  /**
   * The percentage of geometrically possible reflections represented
   *  by all reflections measured for this shell.
   */
  percent_possible_all?: Maybe<Scalars['Float']['output']>;
  /**
   * The percentage of geometrically possible reflections represented
   *  by reflections classified as 'observed' (see
   *  _reflns.observed_criterion) for this shell.
   */
  percent_possible_obs?: Maybe<Scalars['Float']['output']>;
}

export interface Software {
  __typename?: 'Software';
  /**
   * This data item is a pointer to _citation.id in the CITATION
   *  category.
   */
  citation_id?: Maybe<Scalars['String']['output']>;
  /**
   * The classification of the program according to its
   *  major function.
   *
   * Examples:
   * data collection, data reduction, phasing, model building, refinement, validation, other
   *
   */
  classification?: Maybe<Scalars['String']['output']>;
  /**
   * The recognized contact author of the software. This could be
   *  the original author, someone who has modified the code or
   *  someone who maintains the code.  It should be the person
   *  most commonly associated with the code.
   *
   * Examples:
   * T. Alwyn Jones, Axel Brunger
   *
   */
  contact_author?: Maybe<Scalars['String']['output']>;
  /**
   * The e-mail address of the person specified in
   *  _software.contact_author.
   *
   * Examples:
   * bourne@sdsc.edu
   *
   */
  contact_author_email?: Maybe<Scalars['String']['output']>;
  /**
   * The date the software was released.
   *
   * Examples:
   * 1991-10-01, 1990-04-30
   *
   */
  date?: Maybe<Scalars['String']['output']>;
  /**
   * Description of the software.
   *
   * Examples:
   * Uses method of restrained least squares
   *
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The major computing language in which the software is
   *  coded.
   *
   * Allowable values:
   * Ada, Awk, Basic, C, C++, C/C++, Fortran, Fortran 77, Fortran 90, Fortran_77, Java, Java & Fortran, Other, Pascal, Perl, Python, Python/C++, Tcl, assembler, csh, ksh, sh
   *
   */
  language?: Maybe<Scalars['String']['output']>;
  /**
   * The URL for an Internet address at which
   *  details of the software can be found.
   *
   * Examples:
   * http://rosebud.sdsc.edu/projects/pb/IUCr/software.html, ftp://ftp.sdsc.edu/pub/sdsc/biology/
   *
   */
  location?: Maybe<Scalars['String']['output']>;
  /**
   * The name of the software.
   *
   * Examples:
   * Merlot, O, Xengen, X-plor
   *
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The name of the operating system under which the software
   *  runs.
   *
   * Examples:
   * Ultrix, OpenVMS, DOS, Windows 95, Windows NT, Irix, HPUX, DEC Unix
   *
   */
  os?: Maybe<Scalars['String']['output']>;
  /** An ordinal index for this category */
  pdbx_ordinal: Scalars['Int']['output'];
  /**
   * The classification of the software according to the most
   *  common types.
   *
   * Allowable values:
   * filter, jiffy, library, other, package, program
   *
   */
  type?: Maybe<Scalars['String']['output']>;
  /**
   * The version of the software.
   *
   * Examples:
   * v1.0, beta, 3.1-2, unknown
   *
   */
  version?: Maybe<Scalars['String']['output']>;
}

export interface Struct {
  __typename?: 'Struct';
  /**
   * The item indicates whether the entry is a CASP target, a CASD-NMR target,
   *  or similar target participating in methods development experiments.
   *
   * Allowable values:
   * N, Y
   *
   */
  pdbx_CASP_flag?: Maybe<Scalars['String']['output']>;
  /**
   * An automatically generated descriptor for an NDB structure or
   *  the unstructured content of the PDB COMPND record.
   *
   * Examples:
   * Cytochrome b5, Regulatory protein RecX, Uridine kinase (E.C.2.7.1.48)
   *
   */
  pdbx_descriptor?: Maybe<Scalars['String']['output']>;
  /**
   * Text description of the methodology which produced this
   *  model structure.
   *
   * Examples:
   * This model was produced from a 10 nanosecond Amber/MD simulation
   * starting from PDB structure ID 1ABC.
   *
   */
  pdbx_model_details?: Maybe<Scalars['String']['output']>;
  /**
   * A description of the type of structure model.
   *
   * Examples:
   * MINIMIZED AVERAGE
   *
   */
  pdbx_model_type_details?: Maybe<Scalars['String']['output']>;
  /**
   * A title for the data block. The author should attempt to convey
   *  the essence of the structure archived in the CIF in the title,
   *  and to distinguish this structural result from others.
   *
   * Examples:
   * T4 lysozyme mutant - S32A, Rhinovirus 16 polymerase elongation complex (r1_form), Crystal structure of the OXA-10 W154A mutant at pH 9.0, Mutant structure of Thermus thermophilus HB8 uridine-cytidine kinase, Crystal structure of xylanase from Trichoderma longibrachiatum
   *
   */
  title?: Maybe<Scalars['String']['output']>;
}

export interface StructAsym {
  __typename?: 'StructAsym';
  /**
   * This data item is a pointer to _atom_site.pdbx_PDB_strand_id the
   *  ATOM_SITE category.
   *
   * Examples:
   * 1ABC
   *
   */
  pdbx_PDB_id?: Maybe<Scalars['String']['output']>;
  /**
   * This data item is a pointer to _atom_site.ndb_alias_strand_id the
   *  ATOM_SITE category.
   */
  pdbx_alt_id?: Maybe<Scalars['String']['output']>;
  /**
   * This data item gives the order of the structural elements in the
   *  ATOM_SITE category.
   */
  pdbx_order?: Maybe<Scalars['Int']['output']>;
  /**
   * This data item describes the general type of the structural elements
   *  in the ATOM_SITE category.
   *
   * Allowable values:
   * ATOMN, ATOMP, ATOMS, HETAC, HETAD, HETAI, HETAIN, HETAS, HETIC
   *
   */
  pdbx_type?: Maybe<Scalars['String']['output']>;
}

export interface StructKeywords {
  __typename?: 'StructKeywords';
  /**
   * Terms characterizing the macromolecular structure.
   *
   * Examples:
   * DNA, RNA, T-RNA, DNA/RNA, RIBOZYME, PROTEIN/DNA, PROTEIN/RNA, PEPTIDE NUCLEIC ACID, PEPTIDE NUCLEIC ACID/DNA, DNA-BINDING PROTEIN, RNA-BINDING PROTEIN
   *
   */
  pdbx_keywords?: Maybe<Scalars['String']['output']>;
  /**
   * Keywords describing this structure.
   *
   * Examples:
   * Inhibitor, Complex, Isomerase..., serine protease, inhibited complex, high-resolution refinement
   *
   */
  text?: Maybe<Scalars['String']['output']>;
}

export interface Symmetry {
  __typename?: 'Symmetry';
  /**
   * Space-group number from International Tables for Crystallography
   *  Vol. A (2002).
   */
  Int_Tables_number?: Maybe<Scalars['Int']['output']>;
  /**
   * The cell settings for this space-group symmetry.
   *
   * Allowable values:
   * cubic, hexagonal, monoclinic, orthorhombic, rhombohedral, tetragonal, triclinic, trigonal
   *
   */
  cell_setting?: Maybe<Scalars['String']['output']>;
  /**
   * Used for PDB space group:
   *
   *  Example: 'C 1 2 1'  (instead of C 2)
   *           'P 1 2 1'  (instead of P 2)
   *           'P 1 21 1' (instead of P 21)
   *           'P 1 1 21' (instead of P 21 -unique C axis)
   *           'H 3'      (instead of R 3   -hexagonal)
   *           'H 3 2'    (instead of R 3 2 -hexagonal)
   *
   * Examples:
   * Example: 'C 1 2 1'  (instead of C 2)
   *            'P 1 2 1'  (instead of P 2)
   *            'P 1 21 1' (instead of P 21)
   *            'P 1 1 21' (instead of P 21 -unique C axis)
   *            'H 3'      (instead of R 3   -hexagonal)
   *            'H 3 2'    (instead of R 3 2 -hexagonal)
   *
   */
  pdbx_full_space_group_name_H_M?: Maybe<Scalars['String']['output']>;
  /**
   * Hermann-Mauguin space-group symbol. Note that the
   *  Hermann-Mauguin symbol does not necessarily contain complete
   *  information about the symmetry and the space-group origin. If
   *  used, always supply the FULL symbol from International Tables
   *  for Crystallography Vol. A (2002) and indicate the origin and
   *  the setting if it is not implicit. If there is any doubt that
   *  the equivalent positions can be uniquely deduced from this
   *  symbol, specify the  _symmetry_equiv.pos_as_xyz or
   *  _symmetry.space_group_name_Hall  data items as well. Leave
   *  spaces between symbols referring to
   *  different axes.
   *
   * Examples:
   * A 1, A 1 2 1, A 2, B 1 1 2, B 2, B 2 21 2, C 2, C 1 2 1, C 21, C 1 21 1, C 2(A 112), C 2 2 2, C 2 2 21, C 4 21 2, F 2 2 2, F 2 3, F 4 2 2, F 4 3 2, F 41 3 2, I 1 2 1, I 1 21 1, I 2, I 2 2 2, I 2 3, I 21, I 21 3, I 21 21 21, I 4, I 4 2 2, I 4 3 2, I 41, I 41/a, I 41 2 2, I 41 3 2, P 1, P 1-, P 2, P 1 2 1, P 1 1 2, P 2 2 2, P 2 3, P 2 2 21, P 2 21 21, P 21, P 1 21 1, P 1 21/c 1, P 1 1 21, P 21(C), P 21 2 21, P 21 3, P 21 21 2, P 21 21 2 A, P 21 21 21, P 3, P 3 1 2, P 3 2 1, P 31, P 31 1 2, P 31 2 1, P 32, P 32 1 2, P 32 2 1, P 4, P 4 2 2, P 4 3 2, P 4 21 2, P 41, P 41 2 2, P 41 3 2, P 41 21 2, P 42, P 42 2 2, P 42 3 2, P 42 21 2, P 43, P 43 2 2, P 43 3 2, P 43 21 2, P 6, P 6 2 2, P 61, P 61 2 2, P 62, P 62 2 2, P 63, P 63 2 2, P 64, P 64 2 2, P 65, P 65 2 2, H 3, R 3, H 3 2, R 3 2
   *
   */
  space_group_name_H_M?: Maybe<Scalars['String']['output']>;
  /**
   * Space-group symbol as described by Hall (1981). This symbol
   *  gives the space-group setting explicitly. Leave spaces between
   *  the separate components of the symbol.
   *
   *  Ref: Hall, S. R. (1981). Acta Cryst. A37, 517-525; erratum
   *  (1981) A37, 921.
   *
   * Examples:
   * -P 2ac 2n, -R 3 2", P 61 2 2 (0 0 -1)
   *
   */
  space_group_name_Hall?: Maybe<Scalars['String']['output']>;
}
