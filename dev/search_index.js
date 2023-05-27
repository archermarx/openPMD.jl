var documenterSearchIndex = {"docs":
[{"location":"#openPMD.jl","page":"openPMD.jl","title":"openPMD.jl","text":"","category":"section"},{"location":"","page":"openPMD.jl","title":"openPMD.jl","text":"Modules = [openPMD]","category":"page"},{"location":"#openPMD.AbstractOpenPMDType","page":"openPMD.jl","title":"openPMD.AbstractOpenPMDType","text":"AbstractOpenPMDType = Union{...}\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.OpenPMDType","page":"openPMD.jl","title":"openPMD.OpenPMDType","text":"OpenPMDType = Union{...}\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.openPMD_datatypes","page":"openPMD.jl","title":"openPMD.openPMD_datatypes","text":"openPMD_datatypes::AbstractVector{Datatype}\n\n\n\n\n\n","category":"constant"},{"location":"#openPMD.Access","page":"openPMD.jl","title":"openPMD.Access","text":"@enum Access begin\n    ACCESS_READ_ONLY\n    ACCESS_READ_WRITE\n    ACCESS_CREATE\nend\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.Allocation","page":"openPMD.jl","title":"openPMD.Allocation","text":"@enum Allocation begin\n    ALLOCATION_USER\n    ALLOCATION_API\n    ALLOCATION_AUTO\nend\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.Attributable","page":"openPMD.jl","title":"openPMD.Attributable","text":"abstract type Attributable end\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.BaseRecordComponent","page":"openPMD.jl","title":"openPMD.BaseRecordComponent","text":"abstract type BaseRecordComponent <: Attributable end\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.ChunkInfo","page":"openPMD.jl","title":"openPMD.ChunkInfo","text":"struct ChunkInfo{D}\n    offset::NTuple{D,Int}\n    extent::NTuple{D,Int}\nend\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.DataOrder","page":"openPMD.jl","title":"openPMD.DataOrder","text":"@enum DataOrder begin\n    DATAORDER_C\n    DATAORDER_F\nend\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.Dataset","page":"openPMD.jl","title":"openPMD.Dataset","text":"mutable struct Dataset\n    ...\nend\nDataset(::Type{<:OpenPMDType}, extent::Extent, options::AbstractString=\"{}\")\nDataset(extent::Extent)\n\nDatasets only describe a dataset, they do not hold any data. Datasets are value objects that can be copied.\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.Datatype","page":"openPMD.jl","title":"openPMD.Datatype","text":"@enum Datatype begin\n    CHAR => CxxChar\n    UCHAR => CxxUChar\n    SHORT => CxxShort\n    INT => CxxInt\n    LONG => CxxLong,\n    LONGLONG => CxxLongLong\n    USHORT => CxxUShort\n    UINT => CxxUInt\n    ULONG => CxxULong,\n    ULONGLONG => CxxULongLong\n    FLOAT => CxxFloat\n    DOUBLE => CxxDouble,\n    CFLOAT => Complex{CxxFloat}\n    CDOUBLE => Complex{CxxDouble}\n    STRING => String,\n    VEC_CHAR => Vector{CxxChar}\n    VEC_UCHAR => Vector{CxxUChar}\n    VEC_SHORT => Vector{CxxShort},\n    VEC_INT => Vector{CxxInt}\n    VEC_LONG => Vector{CxxLong}\n    VEC_LONGLONG => Vector{CxxLongLong},\n    VEC_USHORT => Vector{CxxUShort}\n    VEC_UINT => Vector{CxxUInt}\n    VEC_ULONG => Vector{CxxULong},\n    VEC_ULONGLONG => Vector{CxxULongLong}\n    VEC_FLOAT => Vector{CxxFloat},\n    VEC_DOUBLE => Vector{CxxDouble}\n    VEC_CFLOAT => Vector{Complex{CxxFloat}},\n    VEC_CDOUBLE => Vector{Complex{CxxDouble}}\n    VEC_STRING => Vector{String}\n    BOOL => CxxBool,\n    ARR_DBL_7 => SVector{7,CxxDouble})\nend\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.Extent","page":"openPMD.jl","title":"openPMD.Extent","text":"const Extent = NTuple{D,Int}\n\nExtent describes the size (shape) of a dataset. See Offset.\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.Format","page":"openPMD.jl","title":"openPMD.Format","text":"@enum Format begin\n    FORMAT_HDF5\n    FORMAT_ADIOS2_BP\n    FORMAT_ADIOS2_BP4\n    FORMAT_ADIOS2_BP5\n    FORMAT_ADIOS2_SST\n    FORMAT_ADIOS2_SSC\n    FORMAT_JSON\n    FORMAT_DUMMY\nend\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.Geometry","page":"openPMD.jl","title":"openPMD.Geometry","text":"@enum Geometry begin\n    GEOMETRY_cartesian\n    GEOMETRY_theta_mode\n    GEOMETRY_cylindrical\n    GEOMETRY_spherical\n    GEOMETRY_other\nend\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.Iteration","page":"openPMD.jl","title":"openPMD.Iteration","text":"struct Iteration <: Attributable\n    ...\nend\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.Iterations","page":"openPMD.jl","title":"openPMD.Iterations","text":"struct Iterations   # <: AbstractDict{Int,Iteration}\n    ...\nend\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.Mesh","page":"openPMD.jl","title":"openPMD.Mesh","text":"struct Mesh <: Attributable\n    ...\nend\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.MeshRecordComponent","page":"openPMD.jl","title":"openPMD.MeshRecordComponent","text":"mutable struct MeshRecordComponent <: RecordComponent\n    ...\nend\n\nThis holds (a pointer to) a C++ MeshRecordComponent.\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.Meshes","page":"openPMD.jl","title":"openPMD.Meshes","text":"struct Meshes   # <: AbstractDict{AbstractString,Mesh}\n    ...\nend\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.Offset","page":"openPMD.jl","title":"openPMD.Offset","text":"const Offset = NTuple{D,Int}\n\nOffset describes the location of a dataset in the containing mesh's index space. See Extent.\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.RecordComponent","page":"openPMD.jl","title":"openPMD.RecordComponent","text":"abstract type RecordComponent <: BaseRecordComponent end\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.Series","page":"openPMD.jl","title":"openPMD.Series","text":"mutable struct Series <: Attributable\n    ...\nend\nSeries()\nSeries(filepath::AbstractString, access::Access, comm::MPI.Comm, options::AbstractString=\"{}\")\nSeries(filepath::AbstractString, access::Access, options::AbstractString=\"{}\")\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.UnitDimension","page":"openPMD.jl","title":"openPMD.UnitDimension","text":"@enum UnitDimension begin\n    UNITDIMENSION_L    # length\n    UNITDIMENSION_M    # mass\n    UNITDIMENSION_T    # time\n    UNITDIMENSION_I    # electric current\n    UNITDIMENSION_θ    # thermodynamic temperature\n    UNITDIMENSION_N    # amount of substance\n    UNITDIMENSION_J    # luminous intensity\nend\n\n\n\n\n\n","category":"type"},{"location":"#openPMD.WriteIterations","page":"openPMD.jl","title":"openPMD.WriteIterations","text":"mutable struct WriteIterations         ...    end\n\n\n\n\n\n","category":"type"},{"location":"#Base.Libc.time-Tuple{Iteration}","page":"openPMD.jl","title":"Base.Libc.time","text":"time(iter::Iteration)::CxxDouble\n\n\n\n\n\n","category":"method"},{"location":"#Base.close-Tuple{Iteration}","page":"openPMD.jl","title":"Base.close","text":"close(iter::Iteration; flush::Bool=true)\n\n\n\n\n\n","category":"method"},{"location":"#Base.count-Tuple{Iterations, Integer}","page":"openPMD.jl","title":"Base.count","text":"count(iters::Iterations, n::Integer)::Int\n\n\n\n\n\n","category":"method"},{"location":"#Base.count-Tuple{Mesh, AbstractString}","page":"openPMD.jl","title":"Base.count","text":"count(mesh::Mesh, name::AbstractString)::Int\n\n\n\n\n\n","category":"method"},{"location":"#Base.count-Tuple{Meshes, AbstractString}","page":"openPMD.jl","title":"Base.count","text":"count(meshes::Meshes, name::AbstractString)::Int\n\n\n\n\n\n","category":"method"},{"location":"#Base.delete!-Tuple{Iterations, Integer}","page":"openPMD.jl","title":"Base.delete!","text":"delete!(iters::Iterations, n::Integer)\n\n\n\n\n\n","category":"method"},{"location":"#Base.delete!-Tuple{Mesh, AbstractString}","page":"openPMD.jl","title":"Base.delete!","text":"delete!(mesh::Mesh, name::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#Base.delete!-Tuple{Meshes, AbstractString}","page":"openPMD.jl","title":"Base.delete!","text":"delete!(meshes::Meshes, name::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#Base.eltype-Tuple{BaseRecordComponent}","page":"openPMD.jl","title":"Base.eltype","text":"eltype(comp::BaseRecordComponent)::Type\n\n\n\n\n\n","category":"method"},{"location":"#Base.eltype-Tuple{Type{Iterations}}","page":"openPMD.jl","title":"Base.eltype","text":"eltype(::Type{Iterations})::Type\neltype(::Iterations)::Type\n\n\n\n\n\n","category":"method"},{"location":"#Base.eltype-Tuple{Type{Meshes}}","page":"openPMD.jl","title":"Base.eltype","text":"eltype(::Type{Meshes})::Type\neltype(::Meshes)::Type\n\n\n\n\n\n","category":"method"},{"location":"#Base.eltype-Tuple{Type{Mesh}}","page":"openPMD.jl","title":"Base.eltype","text":"eltype(::Type{Mesh})::Type\neltype(::Mesh)::Type\n\n\n\n\n\n","category":"method"},{"location":"#Base.eltype-Tuple{Union{Dataset, CxxWrap.CxxWrapCore.CxxBaseRef{<:Dataset}, CxxWrap.CxxWrapCore.SmartPointer{<:Dataset}}}","page":"openPMD.jl","title":"Base.eltype","text":"eltype(dset::Dataset)\n\n\n\n\n\n","category":"method"},{"location":"#Base.empty!-Tuple{Iterations}","page":"openPMD.jl","title":"Base.empty!","text":"empty!(iters::Iterations)\n\n\n\n\n\n","category":"method"},{"location":"#Base.empty!-Tuple{Meshes}","page":"openPMD.jl","title":"Base.empty!","text":"empty!(meshes::Meshes)\n\n\n\n\n\n","category":"method"},{"location":"#Base.empty!-Tuple{Mesh}","page":"openPMD.jl","title":"Base.empty!","text":"empty!(mesh::Mesh)\n\n\n\n\n\n","category":"method"},{"location":"#Base.flush","page":"openPMD.jl","title":"Base.flush","text":"flush(series::Series, backendConfig::AbstractString=\"{}\")::Nothing\n\n\n\n\n\n","category":"function"},{"location":"#Base.getindex","page":"openPMD.jl","title":"Base.getindex","text":"getindex(iters::WriteIterations, key)::Iteration\niters[key]::Iteration\n\nThis function inserts a new Iteration into the WriteIterations object if they key does not yet exist. This is the proper way to create a new Iteration.\n\nThere is no corresponding setindex! method since Iteration objects cannot exist independent of a Series.\n\n\n\n\n\n","category":"function"},{"location":"#Base.getindex-Tuple{Iterations, Integer}","page":"openPMD.jl","title":"Base.getindex","text":"getindex(iters::Iterations, n::Integer)::IterationsRecordComponent\niters[n]\n\n\n\n\n\n","category":"method"},{"location":"#Base.getindex-Tuple{Mesh, AbstractString}","page":"openPMD.jl","title":"Base.getindex","text":"getindex(mesh::Mesh, name::AbstractString)::MeshRecordComponent\nmesh[name]\n\n\n\n\n\n","category":"method"},{"location":"#Base.getindex-Tuple{Meshes, AbstractString}","page":"openPMD.jl","title":"Base.getindex","text":"getindex(meshes::Meshes, name::AbstractString)::MeshesRecordComponent\nmeshes[name]\n\n\n\n\n\n","category":"method"},{"location":"#Base.in-Tuple{AbstractString, Meshes}","page":"openPMD.jl","title":"Base.in","text":"in(name::AbstractString, meshes::Meshes)::Bool\nname in mesh\n\n\n\n\n\n","category":"method"},{"location":"#Base.in-Tuple{AbstractString, Mesh}","page":"openPMD.jl","title":"Base.in","text":"in(name::AbstractString, mesh::Mesh)::Bool\nname in mesh\n\n\n\n\n\n","category":"method"},{"location":"#Base.in-Tuple{Integer, Iterations}","page":"openPMD.jl","title":"Base.in","text":"in(n::Integer, iters::Iterations)::Bool\nn in iters\n\n\n\n\n\n","category":"method"},{"location":"#Base.isempty-Tuple{Iterations}","page":"openPMD.jl","title":"Base.isempty","text":"isempty(iters::Iterations)\n\n\n\n\n\n","category":"method"},{"location":"#Base.isempty-Tuple{Meshes}","page":"openPMD.jl","title":"Base.isempty","text":"isempty(meshes::Meshes)\n\n\n\n\n\n","category":"method"},{"location":"#Base.isempty-Tuple{Mesh}","page":"openPMD.jl","title":"Base.isempty","text":"isempty(mesh::Mesh)\n\n\n\n\n\n","category":"method"},{"location":"#Base.isempty-Tuple{RecordComponent}","page":"openPMD.jl","title":"Base.isempty","text":"isempty(comp::RecordComponent)::Bool\n\n\n\n\n\n","category":"method"},{"location":"#Base.isopen-Tuple{Iteration}","page":"openPMD.jl","title":"Base.isopen","text":"isopen(iter::Iteration)::Bool\n\n\n\n\n\n","category":"method"},{"location":"#Base.isvalid-Tuple{Series}","page":"openPMD.jl","title":"Base.isvalid","text":"isvalid(series::Series)::Bool\n\n\n\n\n\n","category":"method"},{"location":"#Base.keys-Tuple{Iterations}","page":"openPMD.jl","title":"Base.keys","text":"keys(iters::Iterations)::AbstractVector{Int}\n\n\n\n\n\n","category":"method"},{"location":"#Base.keys-Tuple{Meshes}","page":"openPMD.jl","title":"Base.keys","text":"keys(meshes::Meshes)::AbstractVector{<:AbstractString}\n\n\n\n\n\n","category":"method"},{"location":"#Base.keys-Tuple{Mesh}","page":"openPMD.jl","title":"Base.keys","text":"keys(mesh::Mesh)::AbstractVector{<:AbstractString}\n\n\n\n\n\n","category":"method"},{"location":"#Base.keytype-Tuple{Type{Iterations}}","page":"openPMD.jl","title":"Base.keytype","text":"keytype(::Type{Iterations})::Type\nkeytype(::Iterations)::Type\n\n\n\n\n\n","category":"method"},{"location":"#Base.keytype-Tuple{Type{Meshes}}","page":"openPMD.jl","title":"Base.keytype","text":"keytype(::Type{Meshes})::Type\nkeytype(::Meshes)::Type\n\n\n\n\n\n","category":"method"},{"location":"#Base.keytype-Tuple{Type{Mesh}}","page":"openPMD.jl","title":"Base.keytype","text":"keytype(::Type{Mesh})::Type\nkeytype(::Mesh)::Type\n\n\n\n\n\n","category":"method"},{"location":"#Base.length-Tuple{Iterations}","page":"openPMD.jl","title":"Base.length","text":"length(iters::Iterations)\n\n\n\n\n\n","category":"method"},{"location":"#Base.length-Tuple{Meshes}","page":"openPMD.jl","title":"Base.length","text":"length(meshes::Meshes)\n\n\n\n\n\n","category":"method"},{"location":"#Base.length-Tuple{Mesh}","page":"openPMD.jl","title":"Base.length","text":"length(mesh::Mesh)\n\n\n\n\n\n","category":"method"},{"location":"#Base.ndims-Tuple{RecordComponent}","page":"openPMD.jl","title":"Base.ndims","text":"ndims(comp::RecordComponent)\n\n\n\n\n\n","category":"method"},{"location":"#Base.ndims-Tuple{Union{Dataset, CxxWrap.CxxWrapCore.CxxBaseRef{<:Dataset}, CxxWrap.CxxWrapCore.SmartPointer{<:Dataset}}}","page":"openPMD.jl","title":"Base.ndims","text":"ndims(dset::Dataset)\n\n\n\n\n\n","category":"method"},{"location":"#Base.position-Tuple{MeshRecordComponent}","page":"openPMD.jl","title":"Base.position","text":"position(comp::MeshRecordComponent)::NTuple{D,CxxDouble}\n\n\n\n\n\n","category":"method"},{"location":"#Base.setindex!-Tuple{Iterations, Iteration, Integer}","page":"openPMD.jl","title":"Base.setindex!","text":"setindex!(iters::Iterations, iter::Iteration, n::Integer)\niters[n] = iter\n\n\n\n\n\n","category":"method"},{"location":"#Base.setindex!-Tuple{Mesh, MeshRecordComponent, AbstractString}","page":"openPMD.jl","title":"Base.setindex!","text":"setindex!(mesh::Mesh, comp::MeshRecordComponent, name::AbstractString)\nmesh[name] = comp\n\n\n\n\n\n","category":"method"},{"location":"#Base.setindex!-Tuple{Meshes, Mesh, AbstractString}","page":"openPMD.jl","title":"Base.setindex!","text":"setindex!(meshes::Meshes, comp::MeshesRecordComponent, name::AbstractString)\nmeshes[name] = mesh\n\n\n\n\n\n","category":"method"},{"location":"#Base.size-Tuple{RecordComponent}","page":"openPMD.jl","title":"Base.size","text":"size(comp::RecordComponent)\n\n\n\n\n\n","category":"method"},{"location":"#Base.size-Tuple{Union{Dataset, CxxWrap.CxxWrapCore.CxxBaseRef{<:Dataset}, CxxWrap.CxxWrapCore.SmartPointer{<:Dataset}}}","page":"openPMD.jl","title":"Base.size","text":"size(dset::Dataset)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.SCALAR-Tuple{}","page":"openPMD.jl","title":"openPMD.SCALAR","text":"SCALAR()::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.attributes-Tuple{Attributable}","page":"openPMD.jl","title":"openPMD.attributes","text":"attributes(attr::Attributable)::AbstractVector{<:AbstractString}\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.author-Tuple{Series}","page":"openPMD.jl","title":"openPMD.author","text":"author(series::Series)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.available_chunks-Tuple{BaseRecordComponent}","page":"openPMD.jl","title":"openPMD.available_chunks","text":"available_chunks(comp::BaseRecordComponent)::Vector{ChunkInfo{D}}\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.axis_labels-Tuple{Mesh}","page":"openPMD.jl","title":"openPMD.axis_labels","text":"axis_labels(mesh::Mesh)::AbstractVector{<:AbstractString}\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.backend-Tuple{Series}","page":"openPMD.jl","title":"openPMD.backend","text":"backend(series::Series)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.base_path-Tuple{Series}","page":"openPMD.jl","title":"openPMD.base_path","text":"base_path(series::Series)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.basic_datatype-Tuple{Type}","page":"openPMD.jl","title":"openPMD.basic_datatype","text":"basic_datatype(::Type)::Type\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.closed-Tuple{Iteration}","page":"openPMD.jl","title":"openPMD.closed","text":"closed(iter::Iteration)::Bool\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.comment-Tuple{Attributable}","page":"openPMD.jl","title":"openPMD.comment","text":"comment(attr::Attributable)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.contains_attribute-Tuple{Attributable, AbstractString}","page":"openPMD.jl","title":"openPMD.contains_attribute","text":"contains_attribute(attr::Attributable, key::AbstractString)::Bool\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.data_order-Tuple{Mesh}","page":"openPMD.jl","title":"openPMD.data_order","text":"data_order(mesh::Mesh)::DataOrder\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.datatype_to_string-Tuple{Type}","page":"openPMD.jl","title":"openPMD.datatype_to_string","text":"datatype_to_string(::Type)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.date-Tuple{Series}","page":"openPMD.jl","title":"openPMD.date","text":"date(series::Series)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.delete_attribute!-Tuple{Attributable, AbstractString}","page":"openPMD.jl","title":"openPMD.delete_attribute!","text":"delete_attribute!(attr::Attributable, key::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.determine_datatype-Tuple{Type}","page":"openPMD.jl","title":"openPMD.determine_datatype","text":"determine_datatype(::Type)::Datatype\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.determine_format","page":"openPMD.jl","title":"openPMD.determine_format","text":"determine_format(filename::AbstractString)::Format\n\n\n\n\n\n","category":"function"},{"location":"#openPMD.dt-Tuple{Iteration}","page":"openPMD.jl","title":"openPMD.dt","text":"dt(iter::Iteration)::CxxDouble\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.extend!-Tuple{Union{Dataset, CxxWrap.CxxWrapCore.CxxBaseRef{<:Dataset}, CxxWrap.CxxWrapCore.SmartPointer{<:Dataset}}, Tuple{Vararg{Int64, N}} where N}","page":"openPMD.jl","title":"openPMD.extend!","text":"extend!(dset::Dataset, newextent::Extent)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.geometry-Tuple{Mesh}","page":"openPMD.jl","title":"openPMD.geometry","text":"geometry(mesh::Mesh)::Geometry\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.geometry_parameters-Tuple{Mesh}","page":"openPMD.jl","title":"openPMD.geometry_parameters","text":"geometry_parameters(mesh::Mesh)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.get_attribute-Tuple{Attributable, AbstractString}","page":"openPMD.jl","title":"openPMD.get_attribute","text":"get_attribute(attr::Attributable, key::AbstractString)::OpenPMDType\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.get_file_extensions","page":"openPMD.jl","title":"openPMD.get_file_extensions","text":"get_file_extensions()::AbstractVector{<:AbstractString}\n\n\n\n\n\n","category":"function"},{"location":"#openPMD.get_standard","page":"openPMD.jl","title":"openPMD.get_standard","text":"get_standard()::AbstractString\n\n\n\n\n\n","category":"function"},{"location":"#openPMD.get_standard_minimum","page":"openPMD.jl","title":"openPMD.get_standard_minimum","text":"get_standard_minimum()::AbstractString\n\n\n\n\n\n","category":"function"},{"location":"#openPMD.get_variants-Tuple{}","page":"openPMD.jl","title":"openPMD.get_variants","text":"get_variants()::Dict{String,Bool}\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.get_version","page":"openPMD.jl","title":"openPMD.get_version","text":"get_version()::AbstractString\n\n\n\n\n\n","category":"function"},{"location":"#openPMD.grid_global_offset-Tuple{Mesh}","page":"openPMD.jl","title":"openPMD.grid_global_offset","text":"grid_global_offset(mesh::Mesh)::AbstractVector{CxxDouble}\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.grid_spacing-Tuple{Mesh}","page":"openPMD.jl","title":"openPMD.grid_spacing","text":"grid_spacing(mesh::Mesh)::AbstractVector{CxxDouble}\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.grid_unit_SI-Tuple{Mesh}","page":"openPMD.jl","title":"openPMD.grid_unit_SI","text":"grid_unit_SI(mesh::Mesh)::CxxDouble\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.is_complex_floating_point-Tuple{Type}","page":"openPMD.jl","title":"openPMD.is_complex_floating_point","text":"is_complex_floating_point(::Type)::Bool\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.is_floating_point-Tuple{Type}","page":"openPMD.jl","title":"openPMD.is_floating_point","text":"is_floating_point(::Type)::Bool\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.is_integer-Tuple{Type}","page":"openPMD.jl","title":"openPMD.is_integer","text":"is_integer(::Type)::Tuple{Bool,Bool}\n\nWhether the type is an integer (first tuple element), and if so, whether it is signed (second tuple element).\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.is_same-Tuple{Type, Type}","page":"openPMD.jl","title":"openPMD.is_same","text":"is_same(::Type, ::Type)::Bool\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.is_vector-Tuple{Type}","page":"openPMD.jl","title":"openPMD.is_vector","text":"is_vector(::Type)::Bool\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.isconstant-Tuple{BaseRecordComponent}","page":"openPMD.jl","title":"openPMD.isconstant","text":"isconstant(comp::BaseRecordComponent)::Bool\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.isscalar-Tuple{Mesh}","page":"openPMD.jl","title":"openPMD.isscalar","text":"isscalar(mesh::Mesh)::Bool\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.iteration_format-Tuple{Series}","page":"openPMD.jl","title":"openPMD.iteration_format","text":"iteration_format(series::Series)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.iterations-Tuple{Series}","page":"openPMD.jl","title":"openPMD.iterations","text":" iterations(series::Series)::Iterations\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.load_chunk","page":"openPMD.jl","title":"openPMD.load_chunk","text":"TODO: update\ndata = load_chunk(comp::RecordComponent, offset::Offset, extent::Extent)\n\n\n\n\n\n","category":"function"},{"location":"#openPMD.machine-Tuple{Series}","page":"openPMD.jl","title":"openPMD.machine","text":"machine(series::Series)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.make_constant","page":"openPMD.jl","title":"openPMD.make_constant","text":"make_constant(comp::RecordComponent, value::OpenMPType)\n\n\n\n\n\n","category":"function"},{"location":"#openPMD.make_empty-Tuple{Type, RecordComponent, Int64}","page":"openPMD.jl","title":"openPMD.make_empty","text":"make_empty(T::Type, comp::RecordComponent, ndims::Int)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.meshes-Tuple{Iteration}","page":"openPMD.jl","title":"openPMD.meshes","text":" meshes(iter::Iteration)::Meshes\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.meshes_path-Tuple{Series}","page":"openPMD.jl","title":"openPMD.meshes_path","text":"meshes_path(series::Series)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.name-Tuple{Series}","page":"openPMD.jl","title":"openPMD.name","text":"name(series::Series)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.num_attributes-Tuple{Attributable}","page":"openPMD.jl","title":"openPMD.num_attributes","text":"num_attributes(attr::Attributable)::Int\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.openPMD_extension-Tuple{Series}","page":"openPMD.jl","title":"openPMD.openPMD_extension","text":"openPMD_extension(series::Series)::UInt32\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.openPMD_version-Tuple{Series}","page":"openPMD.jl","title":"openPMD.openPMD_version","text":"openPMD_version(series::Series)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.options","page":"openPMD.jl","title":"openPMD.options","text":"options(dset::Dataset)::AbstractString\n\n\n\n\n\n","category":"function"},{"location":"#openPMD.particles_path-Tuple{Series}","page":"openPMD.jl","title":"openPMD.particles_path","text":"particles_path(series::Series)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.reset_dataset!-Tuple{RecordComponent, Dataset}","page":"openPMD.jl","title":"openPMD.reset_dataset!","text":"reset_dataset!(comp::RecordComponent, dset::Dataset)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.reset_datatype!-Tuple{BaseRecordComponent, Type}","page":"openPMD.jl","title":"openPMD.reset_datatype!","text":"reset_datatype!(comp::BaseRecordComponent, T::Type)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.series_flush-Tuple{Attributable}","page":"openPMD.jl","title":"openPMD.series_flush","text":"series_flush(attr::Attributable)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_attribute!-Tuple{Attributable, AbstractString, Union{Float32, Float64, Int16, Int32, Int64, UInt16, UInt32, UInt64, UInt8, CxxWrap.CxxWrapCore.CxxBool, CxxWrap.CxxWrapCore.CxxChar, CxxWrap.CxxWrapCore.CxxLongLong, CxxWrap.CxxWrapCore.CxxULongLong, Vector{ComplexF32}, Vector{ComplexF64}, Vector{Float32}, Vector{Float64}, Vector{Int16}, Vector{Int32}, Vector{Int64}, Vector{String}, Vector{UInt16}, Vector{UInt32}, Vector{UInt64}, Vector{UInt8}, Vector{CxxWrap.CxxWrapCore.CxxChar}, Vector{CxxWrap.CxxWrapCore.CxxLongLong}, Vector{CxxWrap.CxxWrapCore.CxxULongLong}, String, ComplexF32, ComplexF64, StaticArraysCore.SVector{7, Float64}}}","page":"openPMD.jl","title":"openPMD.set_attribute!","text":"set_attribute!(attr::Attributable, key::AbstractString, value::OpenPMDType)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_author!-Tuple{Series, AbstractString}","page":"openPMD.jl","title":"openPMD.set_author!","text":"set_author!(series::Series, author::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_axis_labels!-Tuple{Mesh, AbstractVector{<:AbstractString}}","page":"openPMD.jl","title":"openPMD.set_axis_labels!","text":"set_axis_labels!(mesh::Mesh, labels::AbstractVector{<:AbstractString})\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_base_path!-Tuple{Series, AbstractString}","page":"openPMD.jl","title":"openPMD.set_base_path!","text":"set_base_path!(series::Series, path::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_comment!-Tuple{Attributable, AbstractString}","page":"openPMD.jl","title":"openPMD.set_comment!","text":"set_comment!(attr::Attributable, comment::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_data_order!-Tuple{Mesh, DataOrder}","page":"openPMD.jl","title":"openPMD.set_data_order!","text":"set_data_order!(mesh::Mesh, order::DataOrder)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_date!-Tuple{Series, AbstractString}","page":"openPMD.jl","title":"openPMD.set_date!","text":"set_date!(series::Series, date::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_dt!-Tuple{Iteration, Float64}","page":"openPMD.jl","title":"openPMD.set_dt!","text":"set_dt!(iter::Iteration, dt::CxxDouble)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_geometry!-Tuple{Mesh, Geometry}","page":"openPMD.jl","title":"openPMD.set_geometry!","text":"set_geometry!(mesh::Mesh, geom::Geometry)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_geometry_parameters!-Tuple{Mesh, AbstractString}","page":"openPMD.jl","title":"openPMD.set_geometry_parameters!","text":"set_geometry_parameters!(mesh::Mesh, params::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_grid_global_offset!-Tuple{Mesh, AbstractVector{Float64}}","page":"openPMD.jl","title":"openPMD.set_grid_global_offset!","text":"set_grid_global_offset!(mesh::Mesh, offset::AbstractVector{CxxDouble})\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_grid_spacing!-Tuple{Mesh, AbstractVector{Float64}}","page":"openPMD.jl","title":"openPMD.set_grid_spacing!","text":"set_grid_spacing!(mesh::Mesh, spacing::AbstractVector{CxxDouble})\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_grid_unit_SI!-Tuple{Mesh, Float64}","page":"openPMD.jl","title":"openPMD.set_grid_unit_SI!","text":"set_grid_unit_SI!(mesh::Mesh, unit::CxxDouble)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_iteration_format!-Tuple{Series, AbstractString}","page":"openPMD.jl","title":"openPMD.set_iteration_format!","text":"set_iteration_format!(series::Series, format::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_machine!-Tuple{Series, AbstractString}","page":"openPMD.jl","title":"openPMD.set_machine!","text":"set_machine!(series::Series, machine::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_meshes_path!-Tuple{Series, AbstractString}","page":"openPMD.jl","title":"openPMD.set_meshes_path!","text":"set_meshes_path!(series::Series, path::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_name!-Tuple{Series, AbstractString}","page":"openPMD.jl","title":"openPMD.set_name!","text":"set_name!(series::Series, name::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_openPMD_extension!-Tuple{Series, UInt32}","page":"openPMD.jl","title":"openPMD.set_openPMD_extension!","text":"set_openPMD_extension!(series::Series, extension::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_openPMD_version!-Tuple{Series, AbstractString}","page":"openPMD.jl","title":"openPMD.set_openPMD_version!","text":"set_openPMD_version!(series::Series, version::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_particles_path!-Tuple{Series, AbstractString}","page":"openPMD.jl","title":"openPMD.set_particles_path!","text":"set_particles_path!(series::Series, path::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_position!-Tuple{MeshRecordComponent, AbstractVector{Float64}}","page":"openPMD.jl","title":"openPMD.set_position!","text":"set_position!(comp::MeshRecordComponent, newpos::Union{NTuple{D,CxxDouble}, AbstractVector{CxxDouble}})\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_software!","page":"openPMD.jl","title":"openPMD.set_software!","text":"set_software!(series::Series, software::AbstractString, version::AbstractString=\"unspecified\")\n\n\n\n\n\n","category":"function"},{"location":"#openPMD.set_software_dependencies!-Tuple{Series, AbstractString}","page":"openPMD.jl","title":"openPMD.set_software_dependencies!","text":"set_software_dependencies!(series::Series, dependencies::AbstractString)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_time!-Tuple{Iteration, Float64}","page":"openPMD.jl","title":"openPMD.set_time!","text":"set_time!(iter::Iteration, time::CxxDouble)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_time_offset!-Tuple{Mesh, Float64}","page":"openPMD.jl","title":"openPMD.set_time_offset!","text":"set_time_offset!(mesh::Mesh, unit::CxxDouble)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_time_unit_SI!-Tuple{Iteration, Float64}","page":"openPMD.jl","title":"openPMD.set_time_unit_SI!","text":"set_time_unit_SI!(iter::Iteration, time_unit_SI::CxxDouble)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_unit_SI!-Tuple{RecordComponent, Float64}","page":"openPMD.jl","title":"openPMD.set_unit_SI!","text":"set_unit_SI!(comp::RecordComponent, unit::CxxDouble)\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.set_unit_dimension!-Tuple{Mesh, Dict{UnitDimension, <:AbstractFloat}}","page":"openPMD.jl","title":"openPMD.set_unit_dimension!","text":"set_unit_dimension!(mesh::Mesh, unit_dim::Dict{UnitDimension,<:AbstractFloat})\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.software-Tuple{Series}","page":"openPMD.jl","title":"openPMD.software","text":"software(series::Series)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.software_dependencies-Tuple{Series}","page":"openPMD.jl","title":"openPMD.software_dependencies","text":"software_dependencies(series::Series)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.software_version-Tuple{Series}","page":"openPMD.jl","title":"openPMD.software_version","text":"software_version(series::Series)::AbstractString\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.store_chunk","page":"openPMD.jl","title":"openPMD.store_chunk","text":"TODO: update\nstore_chunk(comp::RecordComponent, data::AbstractArray, offset::Offset, extent::Extent)\n\n\n\n\n\n","category":"function"},{"location":"#openPMD.string_to_datatype-Tuple{AbstractString}","page":"openPMD.jl","title":"openPMD.string_to_datatype","text":"string_to_datatype(str::AbstractString)::OpenPMDType\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.suffix","page":"openPMD.jl","title":"openPMD.suffix","text":"suffix(format::Format)::AbstractString\n\n\n\n\n\n","category":"function"},{"location":"#openPMD.time_offset-Tuple{Mesh}","page":"openPMD.jl","title":"openPMD.time_offset","text":"time_offset(mesh::Mesh)::CxxDouble\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.time_unit_SI-Tuple{Iteration}","page":"openPMD.jl","title":"openPMD.time_unit_SI","text":"time_unit_SI(iter::Iteration)::CxxDouble\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.to_bits-Tuple{Type}","page":"openPMD.jl","title":"openPMD.to_bits","text":"to_bits(::Type)::Int\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.to_bytes-Tuple{Type}","page":"openPMD.jl","title":"openPMD.to_bytes","text":"to_bytes(::Type)::Int\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.to_vector_type-Tuple{Type}","page":"openPMD.jl","title":"openPMD.to_vector_type","text":"to_vector_type(::Type)::Type\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.unit_SI-Tuple{BaseRecordComponent}","page":"openPMD.jl","title":"openPMD.unit_SI","text":"unit_SI(comp::BaseRecordComponent)::CxxDouble\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.unit_dimension-Tuple{Mesh}","page":"openPMD.jl","title":"openPMD.unit_dimension","text":"unit_dimension(mesh::Mesh)::SVector{7,Double}\n\n\n\n\n\n","category":"method"},{"location":"#openPMD.warn_wrong_dtype-Union{Tuple{Request}, Tuple{Store}, Tuple{AbstractString, Type{Store}, Type{Request}}} where {Store, Request}","page":"openPMD.jl","title":"openPMD.warn_wrong_dtype","text":"warn_wrong_dtype(key::AbstractString, ::Type{Store}, ::Type{Request}) where {Store,Request}\n\n\n\n\n\n","category":"method"}]
}
